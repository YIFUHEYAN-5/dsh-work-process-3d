
# v2: rule weights per part, triangles that fuse hands/forearms to the skirt are cut (made degenerate),
# and a band of K rings around every remaining part boundary is solved as a harmonic blend (Jacobi, anchors fixed).
import os, sys, numpy as np
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from skinfix import *
src, dst = sys.argv[1], sys.argv[2]; K = int(sys.argv[3]) if len(sys.argv) > 3 else 6
KLEG = int(sys.argv[4]) if len(sys.argv) > 4 else 12; SIG = float(sys.argv[5]) if len(sys.argv) > 5 else 0.05
EXTRA = [float(v) for v in sys.argv[6:11]]; SH0, SH1, LAT0, LAT1, HAIR0 = EXTRA + [0.05, 0.09, 0.03, 0.06, 0.50][len(EXTRA):]
d = prep(src); cat, side, info = categorize(d)
Pg, Wg0, ix, J, nG, nJ, gid, I = d['Pg'], d['Wg0'], d['ix'], d['J'], d['nG'], d['nJ'], d['gid'], d['I']
x, y, z = Pg.T; armset, legset = info['armset'], info['legset']; allarm = armset['L'] + armset['R']; allleg = legset['L'] + legset['R']
def spine_by_height(yv):
    A = np.zeros((len(yv), nJ)); s2 = smoothstep(0.56, 0.66, yv); s1 = smoothstep(0.47, 0.56, yv)
    A[:, ix['Spine02']] = s2; A[:, ix['Spine01']] = (1 - s2) * s1; A[:, ix['Waist']] = (1 - s2) * (1 - s1); return A
def restrict(sel, allowed, fallback):
    A = np.zeros((int(sel.sum()), nJ)); A[:, allowed] = Wg0[sel][:, allowed]; s = A.sum(1); ok = s > 0.2
    A[ok] /= s[ok, None]; A[~ok] = 0; A[~ok, fallback] = 1; return A
W = np.zeros((nG, nJ))
s = cat == 'head'; W[s, ix['Head']] = 1
s = cat == 'hair'; hh = smoothstep(HAIR0, 0.80, y[s]); W[s] = spine_by_height(y[s]) * (1 - hh)[:, None]; W[s, ix['Head']] += hh
s = cat == 'skirt'; k = 0.38 * smoothstep(0.0, 1.0, (0.55 - y[s]) / 0.22); sd = 1 / (1 + np.exp(-(z[s] - ZC) / SIG)); top = smoothstep(0.535, 0.575, y[s])
W[s, ix['Pelvis']] = (1 - k) * (1 - top); W[s, ix['R_Thigh']] = k * sd * (1 - top); W[s, ix['L_Thigh']] = k * (1 - sd) * (1 - top); W[s, ix['Spine01']] += top
for S in 'LR':
    for c, allowed, fb in [('hand', armset[S], ix[S + '_Hand']), ('arm', armset[S] + [ix['Spine01'], ix['Spine02']], ix[S + '_Upperarm']), ('leg', legset[S] + [ix['Pelvis']], ix[S + '_Calf'])]:
        sel = (cat == c) & (side == S)
        if sel.any(): W[sel] = restrict(sel, allowed, fb)
s = cat == 'torso'; A = Wg0[s].copy(); A[:, allleg] = 0
dsh = np.minimum(np.linalg.norm(Pg[s] - J['L_Upperarm'], axis=1), np.linalg.norm(Pg[s] - J['R_Upperarm'], axis=1))
for S_, O_ in (('L', 'R'), ('R', 'L')):
    o_ = side[s] == S_; B_ = A[o_]; B_[:, armset[O_]] = 0; A[o_] = B_
A[:, allarm] *= ((1 - smoothstep(SH0, SH1, dsh)) * smoothstep(LAT0, LAT1, np.abs(z[s] - ZC)))[:, None]
sw = A.sum(1); ok = sw > 0.3; A[ok] /= sw[ok, None]; A[~ok] = spine_by_height(y[s][~ok]); W[s] = A
# cut fused triangles
tri_cat = cat[gid[I]]
INC = [('hand', 'skirt'), ('arm', 'skirt'), ('hand', 'hair'), ('arm', 'hair'), ('hand', 'torso')]
def has(tc, a, b): return ((tc == a).any(1) & (tc == b).any(1))
cut = np.zeros(len(I), bool)
for a, b in INC: cut |= has(tri_cat, a, b)
RSH = 0.07
dsh_g = np.minimum(np.linalg.norm(Pg - J['L_Upperarm'], axis=1), np.linalg.norm(Pg - J['R_Upperarm'], axis=1))
far_tri = dsh_g[gid[I]].min(1) > RSH
cut |= has(tri_cat, 'arm', 'torso') & far_tri
E = d['E']; ca, cb = cat[E[:, 0]], cat[E[:, 1]]
inc_e = np.zeros(len(E), bool)
for a, b in INC: inc_e |= ((ca == a) & (cb == b)) | ((ca == b) & (cb == a))
inc_e |= (((ca == 'arm') & (cb == 'torso')) | ((ca == 'torso') & (cb == 'arm'))) & (np.minimum(dsh_g[E[:, 0]], dsh_g[E[:, 1]]) > RSH)
E = E[~inc_e]; ca, cb = cat[E[:, 0]], cat[E[:, 1]]
# free band: K rings around compatible boundaries (arm-hand excluded: both keep Tripo's chain weights), plus thighs above the knee
bnd = np.zeros(nG, bool); diff = (ca != cb) & ~(((ca == 'arm') & (cb == 'hand')) | ((ca == 'hand') & (cb == 'arm')))
bnd[E[diff, 0]] = True; bnd[E[diff, 1]] = True
def dilate(seed, n):
    out = seed.copy()
    for _ in range(n):
        nxt = out.copy(); nxt[E[out[E[:, 0]], 1]] = True; nxt[E[out[E[:, 1]], 0]] = True; out = nxt
    return out
legb = np.zeros(nG, bool); le = diff & (((ca == 'leg') & (cb == 'skirt')) | ((ca == 'skirt') & (cb == 'leg'))); legb[E[le, 0]] = True; legb[E[le, 1]] = True
free = dilate(bnd & ~legb, K) | dilate(legb, KLEG)
free &= ~(cat == 'hand') & ~(cat == 'leg') & ~((cat == 'head') & (y > 0.785))
# Jacobi on the graph Laplacian over allowed edges
src_e = np.concatenate([E[:, 0], E[:, 1]]); dst_e = np.concatenate([E[:, 1], E[:, 0]])
o = np.argsort(dst_e, kind='stable'); src_s, dst_s = src_e[o], dst_e[o]
nodes, starts = np.unique(dst_s, return_index=True); deg = np.diff(np.r_[starts, len(dst_s)])
upd = free[nodes]; nodes_u = nodes[upd]
for it in range(500):
    acc = np.add.reduceat(W[src_s], starts, axis=0)
    W[nodes_u] = acc[upd] / deg[upd, None]
Wv = W[gid]; top4 = np.argsort(-Wv, 1)[:, :4]; tw = np.take_along_axis(Wv, top4, 1); tw = np.maximum(tw, 0); tw /= tw.sum(1, keepdims=True)
o4 = np.argsort(top4, 1); top4 = np.take_along_axis(top4, o4, 1); tw = np.take_along_axis(tw, o4, 1)
at = d['m']['prim']['attributes']; d['g'].put(at['JOINTS_0'], top4); d['g'].put(at['WEIGHTS_0'], tw)
I2 = I.copy(); I2[cut] = I2[cut][:, :1]; d['g'].put(d['m']['prim']['indices'], I2.ravel()); d['g'].save(dst)
from collections import Counter
print('K', K, '| categories', dict(Counter(cat)), '| cut tris', int(cut.sum()), '| free groups', int(free.sum()), '| boundary groups', int(bnd.sum()))
print('dropped weight beyond top-4 (mean/max)', round(float((1 - np.take_along_axis(W[gid], np.argsort(-W[gid], 1)[:, :4], 1).sum(1)).mean()), 4), round(float((1 - np.take_along_axis(W[gid], np.argsort(-W[gid], 1)[:, :4], 1).sum(1)).max()), 3))
