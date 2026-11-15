
# Toon zones for the rigged whale GLB. Writes a per-vertex attribute _TOON (uint8 x4, normalised) that whale/src/toon.js reads:
#   x  face: 1 on the face skin (lit everywhere, no terminator), fading out over a few rings at the hairline, cheeks and chin
#   y  outline width factor: 0.6 on hair, 1 elsewhere (on the face toon.js draws the line only at the contour)
#   z  hair (dark blue outline)    w  skin (dark brown outline, warm shadow)
# and replaces the normals on the face by smooth head-shaped normals, so neither the light nor the outline follows the bumps
# of the Tripo face.
#   python whale/tools/rig/toon_zones.py <build_rigged.py output> <out.glb>
import os, sys, numpy as np
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from skinfix import prep, categorize, ZC, smoothstep
HAIR_W = 0.6
src, dst = sys.argv[1], sys.argv[2]
d = prep(src); g = d['g']; pr = d['m']['prim']
if '_TOON' in pr['attributes']: sys.exit(src + ' already has _TOON; run this on the build_rigged.py output')
cat, side, info = categorize(d); cls = info['cls']
Pg, E, gid, nG = d['Pg'], d['E'], d['gid'], d['nG']; x, y, z = Pg.T
N = g.acc(pr['attributes']['NORMAL']).astype(float)
unit = lambda v: v / np.maximum(np.linalg.norm(v, axis=1, keepdims=True), 1e-12)
Ng = unit(d['gmean'](N))
deg = np.bincount(E.ravel(), minlength=nG).astype(float)
def nmean(v):
    s = np.zeros_like(v); np.add.at(s, E[:, 0], v[E[:, 1]]); np.add.at(s, E[:, 1], v[E[:, 0]])
    return s / np.maximum(deg, 1).reshape((-1,) + (1,) * (v.ndim - 1))
def soft(mask, its):
    f = mask.astype(float)
    for _ in range(its): f = 0.5 * f + 0.5 * nmean(f)
    return f
def components(mask):
    lab = np.where(mask, np.arange(nG), nG); e = E[mask[E[:, 0]] & mask[E[:, 1]]]
    while True:
        m = np.minimum(lab[e[:, 0]], lab[e[:, 1]]); new = lab.copy(); np.minimum.at(new, e[:, 0], m); np.minimum.at(new, e[:, 1], m)
        if (new == lab).all(): return lab
        lab = new
# hair: the large hair-coloured pieces (small ones are the irises, the fin ears and the brooch gem) plus the long hair
hm = cls == 'hair'; lab = components(hm); u, cnt = np.unique(lab[hm], return_counts=True)
hair = np.isin(lab, u[cnt >= 300]) | (cat == 'hair')
# face: the piece of the head in front of the fins, between chin and bangs, that holds the cheek seed; the neck (behind the
# chin, x < 0.058 below y 0.80) stays out
cand = (cat == 'head') & ~hair & (x > 0.035) & (y > 0.766) & (y < 0.905) & (np.abs(z - ZC) < 0.085) & ~((x < 0.058) & (y < 0.80))
seed = np.argmin(np.linalg.norm(Pg - np.array([0.095, 0.815, ZC]), axis=1) + 9 * ~cand)
lab2 = components(cand); face = cand & (lab2 == lab2[seed])
f = soft(face, 3); fw = smoothstep(0.15, 0.85, f)
# smooth normals: the face normals diffused with the surrounding normals held fixed, blended with a fitted sphere
zone = f > 0.01; ns = Ng.copy()
for _ in range(40): ns[zone] = nmean(ns)[zone]; ns = unit(ns)
Pf = Pg[face]; A = np.c_[2 * Pf, np.ones(len(Pf))]; sol = np.linalg.lstsq(A, (Pf ** 2).sum(1), rcond=None)[0]
c = sol[:3]; r = float(np.sqrt(sol[3] + c @ c)); ne = unit(Pg - c)
nf = unit(ns + ne)
ow = np.where(hair, HAIR_W, 1.0)
skin = np.isin(cls, ['skin', 'warm']) | face
T = np.stack([fw, ow, soft(hair, 2), soft(skin, 2)], 1)[gid]
w = fw[gid][:, None]; N2 = unit(N * (1 - w) + nf[gid] * w)
ang = np.degrees(np.arccos(np.clip((N * N2).sum(1), -1, 1)))
sph = lambda v: np.degrees(np.arccos(np.clip((unit(v[face]) * ne[face]).sum(1), -1, 1))).mean()
print('face normals vs the fitted sphere: Tripo %.1f deg, smoothed %.1f deg' % (sph(Ng), sph(nf)))
print('face groups', int(face.sum()), 'fw>0.5', int((fw > 0.5).sum()), '| sphere centre', c.round(3).tolist(), 'r %.3f' % r,
      '| normal change on face mean %.1f max %.1f deg' % (ang[w[:, 0] > 0.5].mean(), ang.max()), '| hair groups', int(hair.sum()), 'skin', int(skin.sum()))
g.put(pr['attributes']['NORMAL'], N2)
arr = np.round(np.clip(T, 0, 1) * 255).astype(np.uint8)
while len(g.BIN) % 4: g.BIN.append(0)
off = len(g.BIN); g.BIN.extend(arr.tobytes())
g.J['bufferViews'].append({'buffer': 0, 'byteOffset': off, 'byteLength': int(arr.nbytes), 'target': 34962})
g.J['accessors'].append({'bufferView': len(g.J['bufferViews']) - 1, 'componentType': 5121, 'normalized': True, 'count': int(len(arr)), 'type': 'VEC4'})
pr['attributes']['_TOON'] = len(g.J['accessors']) - 1
g.J['buffers'][0]['byteLength'] = len(g.BIN)
g.save(dst); print(dst, os.path.getsize(dst) // 1024, 'KB')
