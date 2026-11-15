
import json, struct, io, sys
import numpy as np
from PIL import Image

CT = {5120: np.int8, 5121: np.uint8, 5122: np.int16, 5123: np.uint16, 5125: np.uint32, 5126: np.float32}
NC = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4, 'MAT4': 16}

def load(path):
    b = open(path, 'rb').read()
    jl = struct.unpack_from('<I', b, 12)[0]
    j = json.loads(b[20:20 + jl])
    bo = 20 + jl
    bl = struct.unpack_from('<I', b, bo)[0]
    bin_ = b[bo + 8: bo + 8 + bl]
    return j, bin_

def bv_bytes(j, bin_, i):
    v = j['bufferViews'][i]
    o = v.get('byteOffset', 0)
    return bin_[o:o + v['byteLength']]

def accessor(j, bin_, i):
    a = j['accessors'][i]
    v = j['bufferViews'][a['bufferView']]
    o = v.get('byteOffset', 0) + a.get('byteOffset', 0)
    n = NC[a['type']]
    dt = CT[a['componentType']]
    arr = np.frombuffer(bin_, dtype=dt, count=a['count'] * n, offset=o)
    return arr.reshape(a['count'], n) if n > 1 else arr

def image(j, bin_, i):
    return Image.open(io.BytesIO(bv_bytes(j, bin_, j['images'][i]['bufferView'])))

def mesh_arrays(j, bin_):
    p = j['meshes'][0]['primitives'][0]
    P = accessor(j, bin_, p['attributes']['POSITION']).astype(np.float64)
    UV = accessor(j, bin_, p['attributes']['TEXCOORD_0']).astype(np.float64)
    I = accessor(j, bin_, p['indices']).astype(np.int64).reshape(-1, 3)
    return P, UV, I

def weld_ids(P, eps=1e-5):
    q = np.round(P / eps).astype(np.int64)
    _, inv = np.unique(q, axis=0, return_inverse=True)
    return inv.reshape(-1)

def components(I, wid):
    T = wid[I]
    n = wid.max() + 1
    parent = np.arange(n)
    def find(x):
        r = x
        while parent[r] != r: r = parent[r]
        while parent[x] != r: parent[x], x = r, parent[x]
        return r
    for a, b, c in T:
        ra, rb, rc = find(a), find(b), find(c)
        if ra != rb: parent[rb] = ra
        rc = find(c); ra = find(a)
        if rc != ra: parent[rc] = ra
    roots = np.array([find(x) for x in range(n)])
    return roots[T[:, 0]]

if __name__ == '__main__':
    path = sys.argv[1]
    j, bin_ = load(path)
    P, UV, I = mesh_arrays(j, bin_)
    tex = image(j, bin_, 0).convert('RGB')
    print('tex', tex.size, 'verts', len(P), 'tris', len(I))
    wid = weld_ids(P)
    comp = components(I, wid)
    ids, cnt = np.unique(comp, return_counts=True)
    order = np.argsort(-cnt)
    W, H = tex.size
    A = np.asarray(tex)
    C = (P[I[:, 0]] + P[I[:, 1]] + P[I[:, 2]]) / 3
    uvc = (UV[I[:, 0]] + UV[I[:, 1]] + UV[I[:, 2]]) / 3
    px = np.clip((uvc[:, 0] * W).astype(int), 0, W - 1); py_ = np.clip((uvc[:, 1] * H).astype(int), 0, H - 1)
    col = A[py_, px]
    print('components', len(ids))
    for k in order[:25]:
        m = comp == ids[k]
        c = C[m]
        print('n=%6d  min %s max %s  color %s' % (cnt[k], np.round(c.min(0), 3).tolist(), np.round(c.max(0), 3).tolist(), np.round(col[m].mean(0)).astype(int).tolist()))
