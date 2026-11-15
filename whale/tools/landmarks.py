
import sys, json, numpy as np
import os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from glbtool import *
j, bin_ = load(sys.argv[1])
P, UV, I = mesh_arrays(j, bin_)
M = np.array(j['nodes'][0].get('matrix', [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])).reshape(4, 4).T
P = (np.c_[P, np.ones(len(P))] @ M.T)[:, :3]
tex = np.asarray(image(j, bin_, 0).convert('RGB')).astype(int); H, W = tex.shape[:2]
y0, y1 = P[:, 1].min(), P[:, 1].max(); k = 1.35 / (y1 - y0)
Q = np.c_[-P[:, 2] * k, (P[:, 1] - y0) * k, P[:, 0] * k]
C = (Q[I[:, 0]] + Q[I[:, 1]] + Q[I[:, 2]]) / 3
uvc = (UV[I[:, 0]] + UV[I[:, 1]] + UV[I[:, 2]]) / 3
col = tex[np.clip((uvc[:, 1] * H).astype(int), 0, H - 1), np.clip((uvc[:, 0] * W).astype(int), 0, W - 1)]
blue = (col[:, 2] - col[:, 0] > 35) & (col.mean(1) < 210)
top = C[:, 1] > C[:, 1].max() - 0.1
m = blue & top & (np.abs(C[:, 0]) < 0.012)
i = np.argmax(np.where(m, C[:, 1], -9))
near = blue & (np.linalg.norm(C - C[i], axis=1) < 0.03)
white = (col.min(1) > 200) & top
out = {'crown': np.round(C[i], 4).tolist(), 'hairRGB': np.round(col[near].mean(0)).astype(int).tolist(), 'bandTop': np.round(C[white][np.argmax(C[white][:, 1])], 4).tolist(), 'yTop': round(float(C[:, 1].max()), 4)}
json.dump(out, open(sys.argv[2], 'w')); print(json.dumps(out))
