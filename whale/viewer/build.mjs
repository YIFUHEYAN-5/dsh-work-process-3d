// Builds one self-contained HTML viewer (three.js, the viewer code and the rigged model inlined as base64) that opens by
// double-click, without a server or network access:
//   node whale/viewer/build.mjs [--tripo <Tripo rig GLB>] [--out <file.html>]
// --tripo: the Tripo download with the original skin weights (default whale/tripo/raw/anim_test_idle_greet.glb, written by
//   whale/tripo/rig.mjs). It enables the "Tripo 原始" weight switch; without it the switch is disabled.
// --out: default whale/viewer/out/whale_viewer.html (git-ignored).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as esbuild from 'esbuild';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const WHALE = path.dirname(HERE);
const arg = (name, def) => { const i = process.argv.indexOf(name); return i > 1 && process.argv[i + 1] ? path.resolve(process.argv[i + 1]) : def; };
const OUT = arg('--out', path.join(HERE, 'out', 'whale_viewer.html'));
const TRIPO = arg('--tripo', path.join(WHALE, 'tripo', 'raw', 'anim_test_idle_greet.glb'));
const GLB = path.join(WHALE, 'assets', 'whale_rigged.glb');

function readGlb(file) {
  const b = fs.readFileSync(file);
  if (b.readUInt32LE(0) !== 0x46546C67) throw new Error(file + ': not a GLB');
  let o = 12, json = null, bin = null;
  while (o < b.length) {
    const len = b.readUInt32LE(o), type = b.readUInt32LE(o + 4), d = b.subarray(o + 8, o + 8 + len);
    if (type === 0x4E4F534A) json = JSON.parse(d.toString('utf8')); else if (type === 0x004E4942) bin = d;
    o += 8 + len;
  }
  return { json, bin, bytes: b };
}
const TYPES = { 5121: Uint8Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array };
const SIZES = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 };
function accessor(g, i) {
  const a = g.json.accessors[i], v = g.json.bufferViews[a.bufferView], T = TYPES[a.componentType], n = SIZES[a.type];
  if (!T || !n) throw new Error('unsupported accessor ' + i);
  if (v.byteStride && v.byteStride !== n * T.BYTES_PER_ELEMENT) throw new Error('interleaved accessor ' + i + ' is not supported');
  const start = g.bin.byteOffset + (v.byteOffset || 0) + (a.byteOffset || 0);
  return { array: new T(g.bin.buffer.slice(start, start + a.count * n * T.BYTES_PER_ELEMENT)), normalized: !!a.normalized };
}
const prim = g => { if (g.json.meshes.length !== 1 || g.json.meshes[0].primitives.length !== 1) throw new Error('expected one mesh primitive'); return g.json.meshes[0].primitives[0]; };
const jointNames = g => g.json.skins[0].joints.map(j => g.json.nodes[j].name).join(',');

// Original Tripo weights for the A/B switch. The Tripo vertices are the first vertices of whale_rigged.glb (build_rigged.py
// only appends the hole patches), so the viewer can swap in their joints/weights and the Tripo index buffer.
// Layout: joints uint8 x4 per vertex, weights float32 x4 exactly as Tripo delivered them (three.js uses them as they are),
// then the Tripo index as uint16.
function tripoWeights(file, fin) {
  const g = readGlb(file), pt = prim(g), pf = prim(fin);
  const pos = accessor(g, pt.attributes.POSITION).array, posF = accessor(fin, pf.attributes.POSITION).array, nv = pos.length / 3;
  for (let i = 0; i < pos.length; i++) if (pos[i] !== posF[i]) throw new Error(file + ': vertex ' + Math.floor(i / 3) + ' differs from whale_rigged.glb');
  if (jointNames(g) !== jointNames(fin)) throw new Error(file + ': the joints differ from whale_rigged.glb');
  const J = accessor(g, pt.attributes.JOINTS_0).array, W = accessor(g, pt.attributes.WEIGHTS_0).array, I = accessor(g, pt.indices).array;
  if (!(W instanceof Float32Array)) throw new Error(file + ': expected float skin weights');
  const out = Buffer.alloc(nv * 20 + I.length * 2);
  for (let i = 0; i < nv * 4; i++) { if (J[i] > 255) throw new Error('joint index > 255'); out[i] = J[i]; }
  Buffer.from(W.buffer, W.byteOffset, nv * 16).copy(out, nv * 4);
  for (let i = 0; i < I.length; i++) { if (I[i] >= nv) throw new Error('index out of range'); out.writeUInt16LE(I[i], nv * 20 + i * 2); }
  return { data: out, verts: nv, tris: I.length / 3 };
}

const fin = readGlb(GLB);
const tw = fs.existsSync(TRIPO) ? tripoWeights(TRIPO, fin) : null;
const res = await esbuild.build({ entryPoints: [path.join(HERE, 'main.js')], bundle: true, format: 'iife', minify: true, write: false, target: 'es2022', charset: 'utf8', logLevel: 'warning' });
let js = res.outputFiles[0].text;
if (js.includes('<!--')) throw new Error('the bundle contains "<!--", which breaks an inline script');
js = js.replace(/<\/(script)/gi, '<\\/$1');
const pad = n => String(n).padStart(2, '0'), d = new Date();
const built = d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
const data = '<script type="application/octet-stream" id="whale-glb">' + fin.bytes.toString('base64') + '</script>\n' +
  (tw ? '<script type="application/octet-stream" id="tripo-weights" data-verts="' + tw.verts + '" data-tris="' + tw.tris + '">' + tw.data.toString('base64') + '</script>\n' : '');
const tpl = fs.readFileSync(path.join(HERE, 'viewer.html'), 'utf8');
const html = tpl.replaceAll('__BUILT__', built).replace('<!--DATA-->', () => data).replace('<!--SCRIPT-->', () => '<script>' + js + '</script>');
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, html);
const kb = n => Math.round(n / 1024).toLocaleString() + ' KB';
console.log(OUT + '  ' + kb(html.length) + ' (model ' + kb(fin.bytes.length) + ', code ' + kb(js.length) + (tw ? ', Tripo weights ' + kb(tw.data.length) : ', no Tripo weights: ' + TRIPO + ' not found') + ')');
