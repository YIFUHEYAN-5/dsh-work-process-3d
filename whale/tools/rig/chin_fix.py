# -*- coding: utf-8 -*-
"""Round the pointed chin: widen the lower face in z and lift the chin tip slightly.

The Tripo head mesh tapers to a ~1 cm wide point at the chin (y 0.762 m in mesh units), which reads as
a sharp V in the front view. This tool pushes the front skin below the mouth sideways (V -> U), lifts the
lowest vertices by a few millimetres and keeps the bones and skin weights untouched, so the rig and the
clips are unaffected.

    python whale/tools/rig/chin_fix.py <src.glb> <dst.glb> [k] [p] [y0] [y1] [raise]

k: sideways widening at the chin tip (0.45 = +45 %); p: falloff power, larger = the change stays lower;
y0/y1: height band of the face that is touched (m); raise: how far the chin tip moves up (m).
Only vertices that are skin coloured, mostly weighted to Head, in the band, in front of the head and
outside the mouth are moved; their normals are rebuilt and blended by the same falloff so the border
does not crease.
"""
import os
import sys

import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from glbskin import GLB, vcolor

src, dst = sys.argv[1], sys.argv[2]
K = float(sys.argv[3]) if len(sys.argv) > 3 else 0.45     # sideways widening at the chin tip
POW = float(sys.argv[4]) if len(sys.argv) > 4 else 2.0    # falloff power
Y0 = float(sys.argv[5]) if len(sys.argv) > 5 else 0.754   # band bottom (chin)
Y1 = float(sys.argv[6]) if len(sys.argv) > 6 else 0.810   # band top (below the mouth)
RAISE = float(sys.argv[7]) if len(sys.argv) > 7 else 0.005

g = GLB(src)
m = g.skinmesh()
P, JN, WT, names, I = m['P'], m['JN'], m['WT'], m['names'], m['I']
at = m['prim']['attributes']
N = g.acc(at['NORMAL']).astype(np.float64)
C = vcolor(g.basecolor(), m['UV']).astype(float)
hi = names.index('Head')
hw = np.zeros(len(P))
for k in range(4):
    hw += np.where(JN[:, k] == hi, WT[:, k], 0.0)
r, gg, b = C[:, 0], C[:, 1], C[:, 2]
skin = (r > 195) & (gg > 170) & (b > 155) & (b < 235) & (r >= gg) & (gg >= b - 8)
zone = skin & (hw > 0.5) & (P[:, 1] >= Y0) & (P[:, 1] <= Y1) & (np.abs(P[:, 2]) < 0.075) & (P[:, 0] > 0.0)
t = np.clip((Y1 - P[:, 1]) / (Y1 - Y0), 0.0, 1.0)         # 1 at the chin, 0 at the top of the band
w = np.where(zone, t ** POW, 0.0)
Q = P.copy()
Q[:, 2] = P[:, 2] * (1.0 + K * w)                        # sideways: V -> U
Q[:, 1] = P[:, 1] + RAISE * w                            # a slightly shorter chin
Q[:, 0] = P[:, 0] - 0.35 * K * w * np.maximum(P[:, 0] - 0.02, 0.0)   # pull the tip in a little

# Rebuild the normals of the moved vertices only, blended by the same falloff so the border stays smooth.
tri = I.reshape(-1, 3)
fn = np.cross(Q[tri[:, 1]] - Q[tri[:, 0]], Q[tri[:, 2]] - Q[tri[:, 0]])
acc = np.zeros_like(Q)
for c in range(3):
    np.add.at(acc, tri[:, c], fn)
ln = np.linalg.norm(acc, axis=1, keepdims=True)
ln[ln == 0] = 1.0
blend = np.minimum(w * 2.2, 1.0)[:, None]
nn = N * (1 - blend) + (acc / ln) * blend
l2 = np.linalg.norm(nn, axis=1, keepdims=True)
l2[l2 == 0] = 1.0

g.put(at['POSITION'], Q)
g.put(at['NORMAL'], nn / l2)
g.save(dst)
moved = np.linalg.norm(Q - P, axis=1)
print('chin_fix: %d vertices in the zone, %d moved, max %.4f m' % (int(zone.sum()), int((moved > 1e-5).sum()), moved.max()))
print('chin_fix: chin bottom y %.4f -> %.4f' % (P[zone, 1].min(), Q[zone, 1].min()))
