// Skinning matrices of the rigged whale for eval_skin.py: every clip sampled every STEP seconds in headless Edge.
// node whale/tools/rig/collect_mats.mjs [out.json] [step=0.25] [clip,clip,...]
// Output { clip: [{ t, S }] }: S = one column-major 4x4 mesh-space skinning matrix per joint (skinMatrices() in turntable.html).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { turntable, closeEdge } from '../../preview/cdp.mjs';
const HERE = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(process.argv[2] || path.join(HERE, '../../preview/out/mats.json'));
const step = +(process.argv[3] || 0.25), only = process.argv[4] ? process.argv[4].split(',') : null;
const base = { glb: '../assets/whale_rigged.glb', tail: 1, mode: 'flat', tile: 16, nolabel: 1 };
try {
  const r0 = await turntable({ ...base, anim: 0 }, 'mats.png');
  if (!/^READY/.test(r0.title)) throw new Error(r0.title);
  const clips = r0.title.split(' ')[2].split(',').map(s => s.split(':')).map(([n, d]) => [n, +d]);
  const res = {};
  for (const [name, dur] of clips) {
    if (only && !only.includes(name)) continue;
    const ts = []; for (let t = 0; t <= dur + 1e-9; t += step) ts.push(+t.toFixed(4));
    const r = await turntable({ ...base, anim: name, stats: ts.join(','), mats: 1 }, 'mats.png');
    res[name] = r.logs.filter(l => l.includes('MATS{')).map(l => JSON.parse(l.slice(l.indexOf('MATS{') + 4)));
    console.log(name, res[name].length, 'samples');
  }
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify(res));
  console.log('saved', out);
} finally { await closeEdge(); }
