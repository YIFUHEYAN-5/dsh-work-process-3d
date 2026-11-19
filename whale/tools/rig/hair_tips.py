# -*- coding: utf-8 -*-
"""Narrow the hanging hair strands toward their ends.

The Tripo base mesh models every lock as a fat closed tube that keeps its full width right down to the
bottom, so from behind the hair reads as a row of tentacles instead of hair. Two measurements shaped the
method: the locks are closed surfaces (only 27 boundary edges in the whole hair, all of them at the very
bottom of the skirt area), and the geodesic "end" of a lock - its distance maximum measured from the
hairline - is not where the lock visibly stops, because the locks fold over at the bottom. Tapering at
those maxima therefore left the silhouette untouched.

What does work is a smooth axis field. For every hair point this tool averages the hair points in a small
box around it (20 mm tall, 15 mm across, which is wider than one lock and narrower than the gap between
two), so the average sits on the local centre of that lock. Every point below TOP is then pulled toward
its own axis by a factor that runs from 1 at TOP to KEEP at BOTTOM. The field varies slowly in space, so
the surface cannot tear; only the width changes.

Vertices only move; the vertex count, bones, skin weights and every other attribute stay unchanged.

    python whale/tools/rig/hair_tips.py <src.glb> <dst.glb> [TOP] [BOTTOM] [KEEP] [EXT] [DRIFT] [--stats]

TOP: height where the taper starts (m, default 0.72; the head, ears and bangs stay untouched)
BOTTOM: height where the taper is complete (default 0.60)
KEEP: width a lock keeps at BOTTOM and below (0.45 = 45 %)
EXT: how far the last stretch of a lock is pulled down (m, default 0.008), which turns the rounded fold at
its end into a teardrop point; DRIFT: sideways wander of the ends (m, default 0.005), a smooth function of
the lock's own axis so neighbouring locks drift together instead of tearing apart.
--stats prints the numbers, writes nothing.
"""
import os
import sys

import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from glbskin import GLB

WELD = 2e-5
BOX_Y = 0.020  # half height of the averaging box
BOX_XZ = 0.015  # half width of the averaging box
CELL = 0.020   # hash cell


def smoothstep(a, b, x):
    t = np.clip((x - a) / (b - a), 0.0, 1.0)
    return t * t * (3.0 - 2.0 * t)


args = [a for a in sys.argv[3:] if not a.startswith('--')]
STATS = '--stats' in sys.argv
TOP = float(args[0]) if len(args) > 0 else 0.72
BOTTOM = float(args[1]) if len(args) > 1 else 0.60
KEEP = float(args[2]) if len(args) > 2 else 0.45
EXT = float(args[3]) if len(args) > 3 else 0.008
DRIFT = float(args[4]) if len(args) > 4 else 0.005
LENV = float(args[5]) if len(args) > 5 else 0.0
WAVE = 0.06  # wavelength of the sideways wander
src, dst = sys.argv[1], sys.argv[2]

g = GLB(src)
m = g.skinmesh()
at = m['prim']['attributes']
P = m['P'].astype(np.float64)
I = m['I'].reshape(-1, 3)
N = g.acc(at['NORMAL']).astype(np.float64)
hair = g.acc(at['_TOON'])[:, 2] > 0.5

key = np.round(P / WELD).astype(np.int64)
uniq, gid = np.unique(key, axis=0, return_inverse=True)
G = len(uniq)
counts = np.bincount(gid, minlength=G)
Gm = np.zeros((G, 3))
np.add.at(Gm, gid, P)
Gc = Gm / counts[:, None]
Gh = np.zeros(G)
np.add.at(Gh, gid, hair.astype(np.float64))
Gh = Gh / counts > 0.5
print('vertices %d -> %d welded points, hair points %d' % (len(P), G, int(Gh.sum())))

hp = np.where(Gh)[0]
H = Gc[hp]
cell = np.floor(H / CELL).astype(np.int64)
buckets = {}
for n, c in enumerate(map(tuple, cell)):
    buckets.setdefault(c, []).append(n)
axis = np.zeros((len(hp), 3))
axis_y = np.zeros(len(hp))
for n in range(len(hp)):
    cx, cy, cz = cell[n]
    acc_x = acc_z = 0.0
    wsum = 0.0
    for dx in (-1, 0, 1):
        for dy in (-1, 0, 1):
            for dz in (-1, 0, 1):
                for q in buckets.get((cx + dx, cy + dy, cz + dz), ()):
                    d = H[q] - H[n]
                    if abs(d[1]) <= BOX_Y and abs(d[0]) <= BOX_XZ and abs(d[2]) <= BOX_XZ:
                        acc_x += H[q, 0]
                        acc_z += H[q, 2]
                        wsum += 1.0
    axis[n] = (acc_x / wsum, H[n, 1], acc_z / wsum)
    axis_y[n] = wsum
rad = np.linalg.norm(H[:, [0, 2]] - axis[:, [0, 2]], axis=1)
print('axis field: mean %.0f points in the box, lock radius %.1f mm at y %.2f, %.1f mm at y %.2f' % (
    axis_y.mean(), 1000 * rad[H[:, 1] > 0.68].mean(), H[H[:, 1] > 0.68, 1].mean(),
    1000 * rad[H[:, 1] < 0.62].mean(), H[H[:, 1] < 0.62, 1].mean()))

k = 1.0 - (1.0 - KEEP) * smoothstep(TOP, BOTTOM, H[:, 1])
Qh = H.copy()
Qh[:, 0] = axis[:, 0] + (H[:, 0] - axis[:, 0]) * k
Qh[:, 2] = axis[:, 2] + (H[:, 2] - axis[:, 2]) * k
low_w = smoothstep(TOP - 0.06, BOTTOM - 0.05, H[:, 1])
if EXT > 0.0:
    Qh[:, 1] = H[:, 1] - EXT * low_w
if DRIFT > 0.0:
    ph = 2.0 * np.pi / WAVE
    Qh[:, 0] = Qh[:, 0] + DRIFT * np.sin(axis[:, 0] * ph * 1.7 + axis[:, 2] * ph) * low_w
    Qh[:, 2] = Qh[:, 2] + DRIFT * np.cos(axis[:, 2] * ph * 1.3 - axis[:, 0] * ph) * low_w
if LENV > 0.0:  # whole locks end at different heights instead of one straight row
    ph = 2.0 * np.pi / (WAVE * 0.8)
    len_w = smoothstep(TOP - 0.02, BOTTOM - 0.06, H[:, 1])
    wave = 0.5 * (1.0 + np.sin(axis[:, 0] * ph * 2.1 + 1.1) * np.sin(axis[:, 2] * ph * 1.9 + 0.4))
    Qh[:, 1] = Qh[:, 1] + LENV * wave * len_w  # only ever downward: a lock never gets shorter than it was

newrad = np.linalg.norm(Qh[:, [0, 2]] - axis[:, [0, 2]], axis=1)
low = H[:, 1] < 0.62
print('lock radius below y 0.62: %.1f mm -> %.1f mm (%.0f%%)' % (
    1000 * rad[low].mean(), 1000 * newrad[low].mean(), 100 * newrad[low].mean() / rad[low].mean()))
band = (H[:, 1] > TOP) & (H[:, 1] < 0.66) & (H[:, 1] > 0.0)
print('upper band unchanged points: %d of %d' % (int((k[band] > 0.999).sum()), int(band.sum())))
chg = (k < 0.999).sum()
print('points tapered %d (%.0f%% of hair), max move %.1f mm, mean %.1f mm' % (
    int(chg), 100.0 * chg / len(hp),
    1000 * np.linalg.norm(Qh - H, axis=1).max(), 1000 * np.linalg.norm(Qh - H, axis=1)[k < 0.999].mean()))
if STATS:
    sys.exit(0)

Qc = Gc.copy()
Qc[hp] = Qh
Q = Qc[gid]
move = np.linalg.norm(Q - P, axis=1)
print('moved %d vertices' % int((move > 1e-5).sum()))
fn = np.cross(Q[I[:, 1]] - Q[I[:, 0]], Q[I[:, 2]] - Q[I[:, 0]])
accn = np.zeros_like(Q)
for c in range(3):
    np.add.at(accn, I[:, c], fn)
ln = np.linalg.norm(accn, axis=1, keepdims=True)
ln[ln == 0] = 1.0
blend = np.clip(move / 0.015, 0.0, 1.0)[:, None]
nn = N * (1 - blend) + (accn / ln) * blend
l2 = np.linalg.norm(nn, axis=1, keepdims=True)
l2[l2 == 0] = 1.0
g.put(at['POSITION'], Q)
g.put(at['NORMAL'], nn / l2)
g.save(dst)
print(dst, os.path.getsize(dst) // 1024, 'KB')
