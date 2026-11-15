
# Shared pieces for the skin-weight repair: welded mesh, part categories, CPU skinning and distortion metrics.
import numpy as np
from glbskin import GLB, vcolor, seg_dist
ARM = ('Clavicle', 'Upperarm', 'Forearm', 'Hand'); LEG = ('Thigh', 'Calf', 'Foot', 'Toe')
ZC, XC = -0.009, 0.045
def smoothstep(a, b, v):
    t = np.clip((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)
def prep(path):
    g = GLB(path); m = g.skinmesh()
    P, JN, WT, I, names, jp = m['P'], m['JN'], m['WT'], m['I'], m['names'], m['jpos']
    nV, nJ = len(P), len(names); ix = {n: i for i, n in enumerate(names)}; J = {n: jp[i] for n, i in ix.items()}
    W0 = np.zeros((nV, nJ)); np.add.at(W0, (np.repeat(np.arange(nV), 4), JN.ravel()), WT.ravel())
    col = vcolor(g.basecolor(), m['UV']).astype(float)
    _, gid = np.unique(np.round(P / 2e-5).astype(np.int64), axis=0, return_inverse=True); gid = gid.ravel(); nG = int(gid.max()) + 1
    cnt = np.bincount(gid, minlength=nG).astype(float)
    def gmean(A):
        out = np.zeros((nG,) + A.shape[1:]); np.add.at(out, gid, A); return out / cnt.reshape((-1,) + (1,) * (A.ndim - 1))
    E = np.concatenate([gid[I[:, [0, 1]]], gid[I[:, [1, 2]]], gid[I[:, [2, 0]]]]); E = np.unique(np.sort(E, 1), axis=0); E = E[E[:, 0] != E[:, 1]]
    return dict(g=g, m=m, P=P, I=I, names=names, ix=ix, J=J, W0=W0, nV=nV, nJ=nJ, gid=gid, nG=nG, gmean=gmean, Pg=gmean(P), Cg=gmean(col), Wg0=gmean(W0), E=E)
def chain(Pg, pts, radii):
    best = np.full(len(Pg), 9.0); seg = np.zeros(len(Pg), int)
    for k in range(len(pts) - 1):
        dd, t = seg_dist(Pg, pts[k], pts[k + 1]); q = dd / (radii[k] + (radii[k + 1] - radii[k]) * t)
        s = q < best; best[s] = q[s]; seg[s] = k
    return best, seg
def colour_class(Cg):
    # texture colour per welded vertex: skin (lit), warm (skin in shadow: palm, between the fingers), white (cuff frills), navy, hair
    R, G, B = Cg.T; lum = Cg.mean(1); bd = B - np.maximum(R, G)
    cls = np.full(len(Cg), 'other', dtype=object)
    cls[(bd > 15) & (lum < 140)] = 'navy'; cls[(bd > 47) & (lum > 98)] = 'hair'
    cls[(Cg.min(1) > 175) & (Cg.max(1) - Cg.min(1) < 45)] = 'white'
    cls[(R - B > 15) & (R > 100) & (R >= G - 5)] = 'warm'; cls[(R > 190) & (R - B > 20) & (G > 150)] = 'skin'
    return cls
def hand_region(Pg, E, mask, wr, el, cls, rmax=0.11):
    # The whole hand as one piece: flood from the wrist over skin-coloured vertices (and the white cuff frills right at the
    # wrist), within rmax of the wrist; it stops at the navy skirt and sleeve. Then vertices whose neighbours are almost all in
    # the region are added (dark creases). t = distance past the wrist along the forearm direction.
    u = (wr - el) / np.linalg.norm(wr - el); v = Pg - wr; t = v @ u
    r = np.linalg.norm(v - t[:, None] * u, axis=1); dist = np.linalg.norm(v, axis=1); near = mask & (dist < rmax)
    ok = near & (t > -0.025) & (np.isin(cls, ['skin', 'warm']) | ((cls == 'white') & (t < 0.025) & (r < 0.05)))
    reg = ok & (dist < 0.03)
    while True:
        grow = np.zeros(len(Pg), bool); grow[E[reg[E[:, 0]], 1]] = True; grow[E[reg[E[:, 1]], 0]] = True
        new = reg | (grow & ok)
        if new.sum() == reg.sum(): break
        reg = new
    deg = np.bincount(E.ravel(), minlength=len(Pg))
    for _ in range(3):
        cnt = np.bincount(E[:, 0], weights=reg[E[:, 1]], minlength=len(Pg)) + np.bincount(E[:, 1], weights=reg[E[:, 0]], minlength=len(Pg))
        add = ~reg & near & ~np.isin(cls, ['navy', 'hair']) & (deg > 0) & (cnt >= 0.75 * deg)
        if not add.any(): break
        reg = reg | add
    return reg, t
def categorize(d):
    Pg, Cg, Wg0, ix, J = d['Pg'], d['Cg'], d['Wg0'], d['ix'], d['J']
    x, y, z = Pg.T; lum = Cg.mean(1); bd = Cg[:, 2] - np.maximum(Cg[:, 0], Cg[:, 1])
    hairc = (bd > 47) & (lum > 98); skin = (Cg[:, 0] > 190) & (Cg[:, 0] - Cg[:, 2] > 20) & (Cg[:, 1] > 150)
    side = np.where(z > ZC, 'R', 'L')
    armset = {S: [i for n, i in ix.items() if n.startswith(S + '_') and any(k in n for k in ARM)] for S in 'LR'}
    legset = {S: [i for n, i in ix.items() if n.startswith(S + '_') and any(k in n for k in LEG)] for S in 'LR'}
    headz = (y >= 0.77) | ((y >= 0.745) & (np.linalg.norm(Pg - np.array([XC, 0.86, ZC]), axis=1) < 0.12))
    armW0 = Wg0[:, armset['L'] + armset['R']].sum(1)
    headz &= ~((armW0 >= 0.3) & ~hairc & (y < 0.80))
    hair = hairc & ~((np.abs(z - ZC) < 0.035) & (x > 0.06)) & ~headz
    cls = colour_class(Cg); hand_t = {}
    hand = np.zeros(len(Pg), bool); armz = hand.copy(); leg = hand.copy()
    for S in 'LR':
        sh, el, wr = J[S + '_Upperarm'], J[S + '_Forearm'], J[S + '_Hand']; tip = wr + (wr - el) / np.linalg.norm(wr - el) * 0.075
        q, seg = chain(Pg, [sh, el, wr, tip], [0.045, 0.032, 0.03, 0.032]); armW = Wg0[:, armset[S]].sum(1)
        reg, hand_t[S] = hand_region(Pg, d['E'], side == S, wr, el, cls); hand |= reg
        armz |= (q < 1) & (seg < 2) & (armW >= 0.3) & (side == S)
        th, ca, ft, toe = J[S + '_Thigh'], J[S + '_Calf'], J[S + '_Foot'], J[S + '_ToeBase']
        ql, _ = chain(Pg, [th, ca, ft, toe, toe + np.array([0.045, 0, 0])], [0.05, 0.045, 0.04, 0.035, 0.03])
        leg |= (ql < 1) & (y < 0.36) & (side == S)
    cat = np.full(len(Pg), 'torso', dtype=object)
    cat[y < 0.56] = 'skirt'; cat[leg] = 'leg'; cat[armz & ~hair] = 'arm'; cat[hand & ~hair] = 'hand'; cat[hair] = 'hair'; cat[headz] = 'head'
    return cat, side, dict(armset=armset, legset=legset, hairc=hairc, skin=skin, cls=cls, hand_t=hand_t)
def dense(JN, WT, nJ):
    W = np.zeros((len(JN), nJ)); np.add.at(W, (np.repeat(np.arange(len(JN)), JN.shape[1]), JN.ravel()), WT.ravel()); return W
def deform(P, W, S):
    Ph = np.c_[P, np.ones(len(P))]; out = np.zeros((len(P), 3))
    for j in np.where(W.any(0))[0]:
        nz = W[:, j] > 0; out[nz] += W[nz, j, None] * (Ph[nz] @ S[j].T)[:, :3]
    return out
def tri_metrics(P, D, I, S, W):
    a, b, c = I.T; r = np.ones((len(I), 3))
    for k, (u, v) in enumerate([(a, b), (b, c), (c, a)]):
        l0 = np.linalg.norm(P[u] - P[v], axis=1); l1 = np.linalg.norm(D[u] - D[v], axis=1); ok = l0 > 1e-7; r[ok, k] = l1[ok] / l0[ok]
    bad = ((r > 1.35) | (r < 0.7)).any(1)
    n0 = np.cross(P[b] - P[a], P[c] - P[a]); n1 = np.cross(D[b] - D[a], D[c] - D[a])
    rn = np.einsum('nij,nj->ni', S[W.argmax(1)[a], :3, :3], n0); m0 = np.linalg.norm(rn, axis=1); m1 = np.linalg.norm(n1, axis=1)
    flip = (m0 > 1e-12) & (m1 > 1e-12) & ((rn * n1).sum(1) < 0)
    return r, bad, flip
def load_mats(path):
    import json
    return {k: [(s['t'], np.array(s['S']).reshape(-1, 4, 4).transpose(0, 2, 1)) for s in v] for k, v in json.load(open(path)).items()}
INCOMPAT = [frozenset(p) for p in [('hand', 'skirt'), ('arm', 'skirt'), ('hand', 'hair'), ('arm', 'hair'), ('hand', 'torso')]]
def bridges(cat_v, I):
    sets = [frozenset(cat_v[t]) for t in I]
    return np.array([any(p <= s for p in INCOMPAT) for s in sets]), sets
