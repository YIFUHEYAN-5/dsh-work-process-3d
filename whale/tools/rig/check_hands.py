
# Checks that each hand is one piece that follows its own arm (run after build_rigged.py):
#  1. no triangle inside the hand region (skinfix.hand_region) was cut,
#  2. the hand is one connected piece in the final mesh,
#  3. every hand vertex is dominated by a bone of its own arm, and from HT1 past the wrist it follows the hand bone alone,
#  4. lists the cut triangles that touch a hand (the real hand-skirt bridges).
# Usage: python check_hands.py <tripo rig glb> <final glb> [HT1=0.045, as in fix_weights.py]. Exit code 1 if a check fails.
import os, sys, numpy as np
from collections import Counter
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from glbskin import GLB
from skinfix import prep, categorize, dense
src, final = sys.argv[1:3]; HT1 = float(sys.argv[3]) if len(sys.argv) > 3 else 0.045
d = prep(src); cat, side, info = categorize(d); nV0 = d['nV']
m = GLB(final).skinmesh(); P, I, names = m['P'], m['I'], m['names']; assert names == d['names']
ks = np.round(d['P'] / 2e-5).astype(np.int64); kf = np.round(P / 2e-5).astype(np.int64)
u, inv = np.unique(np.concatenate([ks, kf]), axis=0, return_inverse=True); inv = inv.ravel()
gu = np.full(len(u), -1); gu[inv[:len(ks)]] = d['gid']; gf = gu[inv[len(ks):]]; assert (gf >= 0).all()
W = dense(m['JN'], m['WT'], len(names)); dom = W.argmax(1); ix = {n: i for i, n in enumerate(names)}
T0 = d['gid'][d['I']]; Tf = gf[I]; patch = I.min(1) >= nV0
key = lambda T: set(map(tuple, np.sort(T, 1)))
fin_src = key(I[~patch])
ok_all = True
for S in 'LR':
    reg = (cat == 'hand') & (side == S); arm = set(info['armset'][S]); t = info['hand_t'][S]
    inside0 = np.where(reg[T0].all(1))[0]; cut_in = [k for k in inside0 if tuple(sorted(d['I'][k])) not in fin_src]
    touch0 = np.where(reg[T0].any(1))[0]; cut_touch = [k for k in touch0 if tuple(sorted(d['I'][k])) not in fin_src]
    kinds = Counter('/'.join(sorted(set(cat[g] for g in T0[k] if not reg[g]))) for k in cut_touch if k not in set(cut_in))
    # connectivity over welded groups, final triangles entirely in the hand
    par = {}
    def find(a):
        while par.setdefault(a, a) != a: par[a] = par[par[a]]; a = par[a]
        return a
    for a, b, c in Tf[reg[Tf].all(1)]: par[find(b)] = find(a); par[find(c)] = find(a)
    comp = Counter(find(g) for g in np.where(reg)[0]); sizes = sorted(comp.values(), reverse=True)
    vh = np.where(reg[gf])[0]; wrong = [v for v in vh if dom[v] not in arm]
    past = vh[t[gf[vh]] >= HT1]; soft = past[W[past, ix[S + '_Hand']] < 0.99]
    ok = not cut_in and sizes[0] >= 0.99 * reg.sum() and not wrong and len(soft) == 0
    ok_all &= ok
    print(f"{S} hand: {int(reg.sum())} welded vertices, {len(inside0)} triangles | cut inside {len(cut_in)} | pieces {sizes[:4]} | "
          f"not following the {S} arm {len(wrong)} | past the wrist not on the hand bone {len(soft)} of {len(past)} | "
          f"cut triangles at the hand border {len(cut_touch) - len(cut_in)} {dict(kinds)} | {'OK' if ok else 'FAIL'}")
sys.exit(0 if ok_all else 1)
