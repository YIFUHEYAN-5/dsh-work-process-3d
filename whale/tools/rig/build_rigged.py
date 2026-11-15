
# Assemble the rigged whale GLB: repaired weights, cut holes closed by minimal-area patches,
# all preset clips merged (channels that never leave the rest pose dropped), base-colour texture only.
import os, sys, json, struct, io, numpy as np
from collections import defaultdict
from PIL import Image
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from glbskin import GLB, vcolor
from skinfix import prep, categorize
src, wglb, out, texsize = sys.argv[1], sys.argv[2], sys.argv[3], int(sys.argv[4]); extra = sys.argv[5:]
g0 = GLB(src); d = prep(src); cat, side, info = categorize(d)
gid, Pg, P = d['gid'], d['Pg'], d['P']; m0 = d['m']; prim = m0['prim']; I0 = m0['I']
mw = GLB(wglb).skinmesh(); Iw = mw['I']; cut = (Iw[:, 0] == Iw[:, 1]) & (Iw[:, 1] == Iw[:, 2])
assert np.allclose(mw['P'], P), 'weight GLB has a different mesh'
Rm = I0[~cut]
# boundary half-edges created by the cut, split into limb / body sides
G = gid[Rm]; HE_g = np.concatenate([G[:, [0, 1]], G[:, [1, 2]], G[:, [2, 0]]]); HE_v = np.concatenate([Rm[:, [0, 1]], Rm[:, [1, 2]], Rm[:, [2, 0]]])
u, inv, cnt = np.unique(np.sort(HE_g, 1), axis=0, return_inverse=True, return_counts=True); bmask = cnt[inv.ravel()] == 1
cutv = np.zeros(d['nG'], bool); cutv[gid[I0[cut]].ravel()] = True
LIMB = np.isin(cat, ['arm', 'hand'])
sel = bmask & (cutv[HE_g[:, 0]] | cutv[HE_g[:, 1]]) & (LIMB[HE_g[:, 0]] == LIMB[HE_g[:, 1]])
heg, hev = HE_g[sel], HE_v[sel]
outs = defaultdict(list)
for k, (a, b) in enumerate(heg): outs[a].append(k)
used = np.zeros(len(heg), bool); cycles = []
for k0 in range(len(heg)):
    if used[k0]: continue
    cyc = []; k = k0
    while True:
        used[k] = True; cyc.append(k); b = heg[k, 1]
        if b == heg[k0, 0]: break
        nxt = [q for q in outs[b] if not used[q]]
        if not nxt: break
        k = nxt[0]
    cycles.append(cyc)
def tri_area(A, B, C): return 0.5 * np.linalg.norm(np.cross(B - A, C - A), axis=-1)
def min_area(pts):
    n = len(pts); A = np.zeros((n, n)); M = np.zeros((n, n), int)
    for L in range(2, n):
        for i in range(0, n - L):
            j = i + L; ms = np.arange(i + 1, j)
            c = A[i, ms] + A[ms, j] + tri_area(pts[i], pts[ms], pts[j]); b = int(np.argmin(c)); A[i, j] = c[b]; M[i, j] = ms[b]
    tris = []; st = [(0, n - 1)]
    while st:
        i, j = st.pop()
        if j - i < 2: continue
        m = M[i, j]; tris.append((j, m, i)); st += [(i, m), (m, j)]
    return tris
fill_src, fill_tris = [], []
for cyc in cycles:
    if len(cyc) < 3: continue
    base = len(P) + len(fill_src); vs = [hev[k, 0] for k in cyc]
    fill_src += vs
    for a, b, c in min_area(Pg[gid[np.array(vs)]]): fill_tris.append((base + a, base + b, base + c))
fill_src = np.array(fill_src, int); fill_tris = np.array(fill_tris, int).reshape(-1, 3)
nF = len(fill_src); nV = len(P) + nF
print('cycles', len([c for c in cycles if len(c) >= 3]), 'sizes', sorted([len(c) for c in cycles], reverse=True)[:12], '| fill verts', nF, 'fill tris', len(fill_tris), '| cut tris', int(cut.sum()))
# texture: whitest smooth texel for the patches, base colour resized
J = g0.J; mat = J['materials'][prim.get('material', 0)]; pbr = mat['pbrMetallicRoughness']
tex = g0.basecolor().astype(float)
small = np.asarray(Image.fromarray(tex.astype(np.uint8)).resize((256, 256), Image.BOX)).astype(float)
wi = np.unravel_index(np.argmax(small.min(2)), small.shape[:2]); white = small[wi]
uv_white = np.array([(wi[1] + 0.5) / 256, (wi[0] + 0.5) / 256])
print('white texel', white.round(1).tolist(), 'uv', uv_white.round(4).tolist())
# attributes
at = prim['attributes']; A = {k: g0.acc(v, raw=True) for k, v in at.items()}
print('source attributes', {k: (str(v.dtype), v.shape[1]) for k, v in A.items()})
A['JOINTS_0'] = mw['JN'].astype(A['JOINTS_0'].dtype)
w8 = np.round(mw['WT'] * 255).astype(int); w8[np.arange(len(w8)), w8.argmax(1)] += 255 - w8.sum(1); A['WEIGHTS_0'] = w8.astype(np.uint8)
for k in list(A):
    if k.startswith('TANGENT'): del A[k]
for k in A: A[k] = np.concatenate([A[k], A[k][fill_src]])
FP = A['POSITION'].astype(np.float64); fn = np.zeros((nV, 3))
tn = np.cross(FP[fill_tris[:, 1]] - FP[fill_tris[:, 0]], FP[fill_tris[:, 2]] - FP[fill_tris[:, 0]])
for k in range(3): np.add.at(fn, fill_tris[:, k], tn)
fn = fn[len(P):]; ln = np.linalg.norm(fn, axis=1, keepdims=True); bad = ln[:, 0] < 1e-12
fn = np.where(bad[:, None], A['NORMAL'][len(P):], fn / np.maximum(ln, 1e-12))
A['NORMAL'][len(P):] = fn.astype(A['NORMAL'].dtype)
UV0 = A['TEXCOORD_0'][:len(P)]
A['TEXCOORD_0'][len(P):] = uv_white.astype(A['TEXCOORD_0'].dtype)
srcUV = g0.acc(at['TEXCOORD_0'])[fill_src]
colr = np.clip(vcolor(tex.astype(int), srcUV) / np.maximum(white, 1), 0, 1)
colr = np.where(colr <= 0.04045, colr / 12.92, ((colr + 0.055) / 1.055) ** 2.4)
C = np.full((nV, 4), 255, np.uint8); C[len(P):, :3] = np.round(colr * 255).astype(np.uint8); A['COLOR_0'] = C
idx = np.concatenate([Rm, fill_tris]).astype(np.uint16 if nV < 65536 else np.uint32)
# --- new GLB
NJ = {'asset': {'version': '2.0', 'generator': 'whale/tools build_rigged.py'}, 'scene': J.get('scene', 0), 'scenes': J['scenes'], 'nodes': J['nodes'],
      'buffers': [], 'bufferViews': [], 'accessors': []}
BIN = bytearray()
def add(arr, typ, target=None, normalized=False, minmax=False):
    arr = np.ascontiguousarray(arr)
    while len(BIN) % 4: BIN.append(0)
    bv = {'buffer': 0, 'byteOffset': len(BIN), 'byteLength': arr.nbytes}
    if target: bv['target'] = target
    BIN.extend(arr.tobytes()); NJ['bufferViews'].append(bv)
    ct = {np.dtype(np.float32): 5126, np.dtype(np.uint8): 5121, np.dtype(np.uint16): 5123, np.dtype(np.uint32): 5125}[arr.dtype]
    nc = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4, 'MAT4': 16}[typ]
    a = {'bufferView': len(NJ['bufferViews']) - 1, 'componentType': ct, 'count': int(arr.size // nc), 'type': typ}
    if normalized: a['normalized'] = True
    if minmax:
        r = arr.reshape(-1, nc); a['min'] = r.min(0).astype(float).tolist(); a['max'] = r.max(0).astype(float).tolist()
    NJ['accessors'].append(a); return len(NJ['accessors']) - 1
TYP = {1: 'SCALAR', 2: 'VEC2', 3: 'VEC3', 4: 'VEC4'}
attrs = {}
for k, v in A.items():
    nrm = (k == 'COLOR_0') or (k == 'TEXCOORD_0' and v.dtype != np.float32) or (k == 'WEIGHTS_0' and v.dtype != np.float32)
    attrs[k] = add(v, TYP[v.shape[1]], 34962, nrm, minmax=(k == 'POSITION'))
ia = add(idx.ravel(), 'SCALAR', 34963)
NJ['meshes'] = [{'name': J['meshes'][0].get('name', 'whale'), 'primitives': [{'attributes': attrs, 'indices': ia, 'material': 0, 'mode': 4}]}]
sk = dict(J['skins'][0]); sk['inverseBindMatrices'] = add(g0.acc(J['skins'][0]['inverseBindMatrices']).astype(np.float32), 'MAT4'); NJ['skins'] = [sk]
img = Image.fromarray(tex.astype(np.uint8)).resize((texsize, texsize), Image.LANCZOS); bio = io.BytesIO(); img.save(bio, 'JPEG', quality=90, optimize=True)
while len(BIN) % 4: BIN.append(0)
NJ['bufferViews'].append({'buffer': 0, 'byteOffset': len(BIN), 'byteLength': len(bio.getvalue())}); BIN.extend(bio.getvalue())
NJ['images'] = [{'bufferView': len(NJ['bufferViews']) - 1, 'mimeType': 'image/jpeg'}]
NJ['samplers'] = [{'magFilter': 9729, 'minFilter': 9987, 'wrapS': 10497, 'wrapT': 10497}]; NJ['textures'] = [{'sampler': 0, 'source': 0}]
NJ['materials'] = [{'name': mat.get('name', 'whale'), 'pbrMetallicRoughness': {'baseColorTexture': {'index': 0}, 'baseColorFactor': pbr.get('baseColorFactor', [1, 1, 1, 1]), 'metallicFactor': 0, 'roughnessFactor': 1}}]
if mat.get('doubleSided'): NJ['materials'][0]['doubleSided'] = True
# animations
names0 = {n.get('name'): i for i, n in enumerate(J['nodes'])}
REST = {'translation': [0, 0, 0], 'rotation': [0, 0, 0, 1], 'scale': [1, 1, 1]}
NJ['animations'] = []; kept = dropped = 0; seen = set()
for path in [src] + extra:
    ga = GLB(path)
    if path != src:
        pa = ga.skinmesh()['P']; assert pa.shape == P.shape and np.allclose(pa, P, atol=1e-6), path + ': mesh differs from the rig'
    for an in ga.J.get('animations', []):
        if an['name'] in seen: continue
        seen.add(an['name']); chans, samps = [], []
        for ch in an['channels']:
            s = an['samplers'][ch['sampler']]; node = names0[ga.J['nodes'][ch['target']['node']]['name']]; pth = ch['target']['path']
            t = ga.acc(s['input']).astype(np.float32).ravel(); v = ga.acc(s['output']).astype(np.float32)
            rest = np.array(J['nodes'][node].get(pth, REST[pth]), np.float32)
            dev = np.abs(v - rest).max() if pth != 'rotation' else min(np.abs(v - rest).max(1).max(), np.abs(v + rest).max(1).max(), np.abs(np.abs((v * rest).sum(1)) - 1).max() * 10)
            if dev < 1e-5: dropped += 1; continue
            if np.abs(v - v[0]).max() < 1e-6: t, v = t[:1], v[:1]
            kept += 1; ti = add(t, 'SCALAR', minmax=True); vi = add(v, TYP[v.shape[1]])
            samps.append({'input': ti, 'output': vi, 'interpolation': s.get('interpolation', 'LINEAR')}); chans.append({'sampler': len(samps) - 1, 'target': {'node': node, 'path': pth}})
        NJ['animations'].append({'name': an['name'], 'channels': chans, 'samplers': samps})
NJ['buffers'] = [{'byteLength': len(BIN)}]
js = json.dumps(NJ, separators=(',', ':')).encode(); js += b' ' * ((4 - len(js) % 4) % 4)
while len(BIN) % 4: BIN.append(0)
open(out, 'wb').write(struct.pack('<III', 0x46546C67, 2, 12 + 8 + len(js) + 8 + len(BIN)) + struct.pack('<II', len(js), 0x4E4F534A) + js + struct.pack('<II', len(BIN), 0x004E4942) + bytes(BIN))
clips = [(a['name'], round(max(NJ['accessors'][s['input']]['max'][0] for s in a['samplers']), 2)) for a in NJ['animations']]
print('clips', clips, '| channels kept', kept, 'dropped', dropped)
print('verts', nV, 'tris', len(idx), 'index type', idx.dtype, '| texture', texsize, len(bio.getvalue()) // 1024, 'KB | file', len(open(out, 'rb').read()) // 1024, 'KB')
