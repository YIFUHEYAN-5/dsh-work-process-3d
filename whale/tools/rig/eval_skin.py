
# Skinning quality of the assembled GLB on every clip, against Tripo's original weights on the same poses.
import os, sys, json, numpy as np
from collections import Counter
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from glbskin import GLB
from skinfix import prep, categorize, dense, deform, tri_metrics, load_mats
src, final, matsf = sys.argv[1:4]
d = prep(src); cat, side, info = categorize(d); mats = load_mats(matsf)
g = GLB(final); m = g.skinmesh(); P, I = m['P'], m['I']; assert m['names'] == d['names']
W = dense(m['JN'], m['WT'], len(m['names'])); nV0 = d['nV']
ks = np.round(d['P'] / 2e-5).astype(np.int64); kf = np.round(P / 2e-5).astype(np.int64)
u, inv = np.unique(np.concatenate([ks, kf]), axis=0, return_inverse=True); inv = inv.ravel()
gu = np.full(len(u), -1); gu[inv[:len(ks)]] = d['gid']; gf = gu[inv[len(ks):]]; assert (gf >= 0).all()
cv = cat[gf]; fill = I.min(1) >= nV0
def topo(Pv, Iv):
    _, gg = np.unique(np.round(Pv / 2e-5).astype(np.int64), axis=0, return_inverse=True); G = gg.ravel()[Iv]
    e = np.sort(np.concatenate([G[:, [0, 1]], G[:, [1, 2]], G[:, [2, 0]]]), 1); e = e[e[:, 0] != e[:, 1]]
    _, c = np.unique(e, axis=0, return_counts=True); return int((c == 1).sum()), int((c > 2).sum())
print('boundary / non-manifold edges: tripo', topo(d['P'], d['I']), '| final', topo(P, I), '| patch tris', int(fill.sum()), 'of', len(I))
keyset = np.array(['-'.join(sorted(set(cv[t]))) for t in I]); dom = W.argmax(1); out = {}
for clip, samples in mats.items():
    r0s, r1s = [], []
    for t, S in samples:
        r0, b0, f0 = tri_metrics(d['P'], deform(d['P'], d['W0'], S), d['I'], S, d['W0']); r0s.append((int(b0.sum()), int(f0.sum()), float(r0.max())))
        r1, b1, f1 = tri_metrics(P, deform(P, W, S), I, S, W); r1s.append((int(b1.sum()), int(f1.sum()), float(r1.max()), t, r1.max(1), b1))
    nb, nf, mx, t, rmax, bad = max(r1s, key=lambda q: q[0])
    top = np.argsort(-rmax)[:4]
    hot = ' '.join(f"{keyset[k]}@y{P[I[k]].mean(0)[1]:.2f},z{P[I[k]].mean(0)[2]:+.2f}:{rmax[k]:.1f}[{'/'.join(sorted(set(m['names'][j] for j in dom[I[k]])))}]" for k in top)
    out[clip] = dict(samples=len(samples), tripo_mean=round(float(np.mean([q[0] for q in r0s]))), tripo_worst=max(q[0] for q in r0s), tripo_flips=max(q[1] for q in r0s), tripo_max=round(max(q[2] for q in r0s), 1),
                     mean=round(float(np.mean([q[0] for q in r1s]))), worst=nb, worst_t=t, flips=max(q[1] for q in r1s), max=round(max(q[2] for q in r1s), 1), p999=round(float(np.percentile(rmax, 99.9)), 2), patch_bad=int((bad & fill).sum()))
    o = out[clip]
    print(f"{clip:11s} n={o['samples']:3d} | tripo mean {o['tripo_mean']:6d} worst {o['tripo_worst']:6d} flips {o['tripo_flips']:5d} max {o['tripo_max']:5.1f} | ours mean {o['mean']:5d} worst t={t:<5} {nb:5d} flips {o['flips']:4d} max {o['max']:5.1f} p999 {o['p999']:4.2f} patch-bad {o['patch_bad']}")
    print('    worst parts:', ', '.join(f'{k}:{v}' for k, v in Counter(keyset[bad]).most_common(5)), '| hot:', hot)
json.dump(out, open(os.path.splitext(os.path.abspath(matsf))[0] + '_eval.json', 'w'), indent=1)
