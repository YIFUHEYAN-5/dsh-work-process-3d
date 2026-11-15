
import os
import json, struct, io, numpy as np
from PIL import Image
CT = {5120: np.int8, 5121: np.uint8, 5122: np.int16, 5123: np.uint16, 5125: np.uint32, 5126: np.float32}
NC = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4, 'MAT4': 16}
class GLB:
    def __init__(self, path):
        b = open(path, 'rb').read()
        jl = struct.unpack_from('<I', b, 12)[0]; self.J = json.loads(b[20:20 + jl]); off = 20 + jl
        bl = struct.unpack_from('<I', b, off)[0]; self.BIN = bytearray(b[off + 8: off + 8 + bl])
    def span(self, i):
        a = self.J['accessors'][i]; bv = self.J['bufferViews'][a['bufferView']]; dt = np.dtype(CT[a['componentType']]); nc = NC[a['type']]
        st = bv.get('byteStride', dt.itemsize * nc); o = bv.get('byteOffset', 0) + a.get('byteOffset', 0)
        return a, dt, nc, st, o
    def acc(self, i, raw=False):
        a, dt, nc, st, o = self.span(i)
        x = np.array(np.ndarray((a['count'], nc), dt, bytes(self.BIN), o, (st, dt.itemsize)))
        if a.get('normalized') and not raw: x = x / float(np.iinfo(dt).max)
        return x
    def put(self, i, arr):
        a, dt, nc, st, o = self.span(i)
        arr = np.asarray(arr)
        if a.get('normalized') and dt.kind in 'iu': arr = np.round(arr * np.iinfo(dt).max)
        arr = arr.astype(dt).reshape(a['count'], nc)
        view = np.ndarray((a['count'], nc), dt, self.BIN, o, (st, dt.itemsize)); view[...] = arr
    def save(self, path):
        os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
        js = json.dumps(self.J, separators=(',', ':')).encode(); js += b' ' * ((4 - len(js) % 4) % 4)
        bn = bytes(self.BIN) + b'\0' * ((4 - len(self.BIN) % 4) % 4)
        out = struct.pack('<III', 0x46546C67, 2, 12 + 8 + len(js) + 8 + len(bn)) + struct.pack('<II', len(js), 0x4E4F534A) + js + struct.pack('<II', len(bn), 0x004E4942) + bn
        open(path, 'wb').write(out)
    def skinmesh(self):
        pr = self.J['meshes'][0]['primitives'][0]; at = pr['attributes']
        P = self.acc(at['POSITION']).astype(np.float64); UV = self.acc(at['TEXCOORD_0'])
        JN = self.acc(at['JOINTS_0']).astype(int); WT = self.acc(at['WEIGHTS_0']).astype(np.float64)
        I = self.acc(pr['indices']).reshape(-1, 3).astype(int)
        sk = self.J['skins'][0]; names = [self.J['nodes'][k]['name'] for k in sk['joints']]
        ibm = self.acc(sk['inverseBindMatrices']).reshape(-1, 4, 4).transpose(0, 2, 1)
        jpos = np.array([np.linalg.inv(m)[:3, 3] for m in ibm])
        return dict(P=P, UV=UV, JN=JN, WT=WT, I=I, names=names, jpos=jpos, prim=pr)
    def basecolor(self):
        pr = self.J['meshes'][0]['primitives'][0]; mat = self.J['materials'][pr.get('material', 0)]
        img = self.J['images'][self.J['textures'][mat['pbrMetallicRoughness']['baseColorTexture']['index']]['source']]
        bv = self.J['bufferViews'][img['bufferView']]; o = bv.get('byteOffset', 0)
        return np.asarray(Image.open(io.BytesIO(bytes(self.BIN[o:o + bv['byteLength']]))).convert('RGB')).astype(int)
def vcolor(tex, UV):
    H, W = tex.shape[:2]
    return tex[np.clip((UV[:, 1] * H).astype(int), 0, H - 1), np.clip((UV[:, 0] * W).astype(int), 0, W - 1)]
def seg_dist(P, a, b):
    ab = b - a; t = np.clip(((P - a) @ ab) / max(ab @ ab, 1e-12), 0, 1)
    return np.linalg.norm(P - (a + t[:, None] * ab), axis=1), t
