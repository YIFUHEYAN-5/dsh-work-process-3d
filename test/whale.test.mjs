// whale/ mascot: the rigged GLB holds the planned clips on a sound skin, and the procedural tail behaves on a moving pelvis.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import * as THREE from 'three';
import { createTail } from '../whale/src/tail.js';

const CLIPS = ['angry_01', 'bow', 'fold_arms', 'greet_01', 'heart_pose', 'idle', 'laugh_01', 'look_around', 'scared_01', 'scratch'];

function readGlb(url) {
  const b = fs.readFileSync(url);
  assert.equal(b.readUInt32LE(0), 0x46546c67, 'glTF magic');
  const jl = b.readUInt32LE(12), json = JSON.parse(b.subarray(20, 20 + jl).toString('utf8'));
  const bin = b.subarray(28 + jl, 28 + jl + b.readUInt32LE(20 + jl));
  const SIZE = { 5121: 1, 5123: 2, 5125: 4, 5126: 4 }, N = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 };
  const GET = { 5121: o => bin.readUInt8(o), 5123: o => bin.readUInt16LE(o), 5125: o => bin.readUInt32LE(o), 5126: o => bin.readFloatLE(o) };
  const read = i => {
    const a = json.accessors[i], v = json.bufferViews[a.bufferView], cs = SIZE[a.componentType], n = N[a.type], get = GET[a.componentType];
    const stride = v.byteStride || cs * n, off = (v.byteOffset || 0) + (a.byteOffset || 0), out = new Float64Array(a.count * n);
    for (let k = 0; k < a.count; k++) for (let c = 0; c < n; c++) out[k * n + c] = get(off + k * stride + c * cs);
    return { a, out, n };
  };
  return { json, read };
}

test('whale_rigged.glb: 10 clips on one 41-joint skin with normalised weights', () => {
  const { json, read } = readGlb(new URL('../whale/assets/whale_rigged.glb', import.meta.url));
  assert.deepEqual(json.animations.map(a => a.name).sort(), CLIPS);
  assert.equal(json.skins.length, 1);
  const joints = json.skins[0].joints.map(j => json.nodes[j].name);
  assert.equal(joints.length, 41);
  for (const n of ['Pelvis', 'Head']) assert.ok(joints.includes(n), n + ' carries the tail / the ahoge');
  assert.equal((json.images || []).length, 1, 'base colour texture only');
  const prim = json.meshes[0].primitives[0], W = read(prim.attributes.WEIGHTS_0), J = read(prim.attributes.JOINTS_0);
  const one = { 5121: 255, 5123: 65535, 5126: 1 }[W.a.componentType];
  let badSum = 0, badJoint = 0;
  for (let k = 0; k < W.a.count; k++) {
    let s = 0;
    for (let c = 0; c < 4; c++) { const w = W.out[k * 4 + c]; s += w; if (w > 0 && !(J.out[k * 4 + c] < joints.length)) badJoint++; }
    if (Math.abs(s / one - 1) > 1e-6) badSum++;
  }
  assert.equal(badSum, 0, 'vertices whose weights do not sum to 1');
  assert.equal(badJoint, 0, 'weights on joint indices outside the skin');
});

// The hands of the first weight repair were torn: parts of the fingers and cuffs followed the skirt. Now every hand moves as
// one piece with its hand bone (whale/tools/rig/check_hands.py checks the same against the Tripo colours).
test('whale_rigged.glb: each hand is one piece on its own arm, with no triangle tying it to the skirt', () => {
  const { json, read } = readGlb(new URL('../whale/assets/whale_rigged.glb', import.meta.url));
  const joints = json.skins[0].joints.map(j => json.nodes[j].name), prim = json.meshes[0].primitives[0];
  const P = read(prim.attributes.POSITION).out, W = read(prim.attributes.WEIGHTS_0).out, J = read(prim.attributes.JOINTS_0).out, I = read(prim.indices).out;
  const nv = P.length / 3, dom = new Int32Array(nv), weld = new Int32Array(nv), keys = new Map();
  for (let v = 0; v < nv; v++) {
    let best = -1;
    for (let c = 0; c < 4; c++) if (W[v * 4 + c] > best) { best = W[v * 4 + c]; dom[v] = J[v * 4 + c]; }
    // UV seams split vertices: weld them by position
    const k = [0, 1, 2].map(c => Math.round(P[v * 3 + c] / 2e-5)).join(',');
    if (!keys.has(k)) keys.set(k, keys.size);
    weld[v] = keys.get(k);
  }
  for (const S of ['L', 'R']) {
    const hand = joints.indexOf(S + '_Hand'), arm = new Set(joints.flatMap((n, i) => (n.startsWith(S + '_') && /Clavicle|Upperarm|Forearm|Hand/.test(n) ? [i] : [])));
    const parent = Int32Array.from({ length: keys.size }, (_, i) => i);
    const find = a => { while (parent[a] !== a) { parent[a] = parent[parent[a]]; a = parent[a]; } return a; };
    let mixed = 0;
    for (let t = 0; t < I.length; t += 3) {
      const d = [dom[I[t]], dom[I[t + 1]], dom[I[t + 2]]];
      if (d.includes(hand) && d.some(x => !arm.has(x))) mixed++;
      if (d.every(x => x === hand)) { const r = find(weld[I[t]]); parent[find(weld[I[t + 1]])] = r; parent[find(weld[I[t + 2]])] = r; }
    }
    const pieces = new Map();
    for (let v = 0; v < nv; v++) if (dom[v] === hand) { const r = find(weld[v]); if (!pieces.has(r)) pieces.set(r, new Set()); pieces.get(r).add(weld[v]); }
    const sizes = [...pieces.values()].map(s => s.size).sort((a, b) => b - a), total = sizes.reduce((a, b) => a + b, 0);
    assert.equal(mixed, 0, S + ' hand: triangles joining the hand to bones outside its arm');
    assert.ok(total >= 450, S + ' hand: ' + total + ' vertices follow the hand bone (the torn version had 247-308)');
    assert.equal(sizes.length, 1, S + ' hand: the hand-bone vertices form ' + sizes.length + ' pieces (' + sizes.slice(0, 5) + ')');
  }
});

test('whale_rigged.glb: the baked toon zones put the face on the front of the head, and mark the hair', () => {
  const { json, read } = readGlb(new URL('../whale/assets/whale_rigged.glb', import.meta.url));
  const prim = json.meshes[0].primitives[0];
  assert.ok(prim.attributes._TOON !== undefined, 'run whale/tools/rig/toon_zones.py on the build_rigged.py output');
  const Z = read(prim.attributes._TOON), P = read(prim.attributes.POSITION), J = read(prim.attributes.JOINTS_0), Wt = read(prim.attributes.WEIGHTS_0);
  assert.equal(Z.a.componentType, 5121); assert.equal(Z.a.normalized, true); assert.equal(Z.a.type, 'VEC4');
  const head = json.skins[0].joints.findIndex(j => json.nodes[j].name === 'Head');
  let face = 0, outside = 0, offHead = 0, hair = 0;
  for (let v = 0; v < Z.a.count; v++) {
    if (Z.out[4 * v + 2] > 127) hair++;
    if (Z.out[4 * v] <= 127) continue;
    face++;
    const x = P.out[3 * v], y = P.out[3 * v + 1];
    if (!(x > 0.03 && y > 0.74 && y < 0.92)) outside++; // front of the head in mesh units (the Tripo body faces +x, 0.98 tall)
    let best = -1, bj = -1;
    for (let k = 0; k < 4; k++) if (Wt.out[4 * v + k] > best) { best = Wt.out[4 * v + k]; bj = J.out[4 * v + k]; }
    if (bj !== head) offHead++;
  }
  assert.ok(face > 500 && face < 3000, 'face vertices: ' + face);
  assert.equal(outside, 0, 'face vertices outside the front of the head');
  assert.equal(offHead, 0, 'face vertices that do not follow the Head bone');
  assert.ok(hair > 8000, 'hair vertices: ' + hair);
});

test('toon.js: the zone rules still patch the three.js toon and basic shaders', async () => {
  const { toonMaterial, outlineMaterial } = await import('../whale/src/toon.js');
  const shader = name => ({ uniforms: {}, vertexShader: THREE.ShaderLib[name].vertexShader, fragmentShader: THREE.ShaderLib[name].fragmentShader });
  const s = shader('toon');
  toonMaterial({ zones: true }).onBeforeCompile(s);
  assert.match(s.vertexShader, /vToon = toon;/);
  assert.match(s.fragmentShader, /lit = mix\( lit, 1\.0, vToon\.x \);/);
  const o = shader('basic');
  outlineMaterial({ zones: true }).onBeforeCompile(o);
  assert.match(o.vertexShader, /owK = mix\( owK,/, 'face outline only at the contour');
  assert.match(o.vertexShader, /vLine = toon\.zw;/);
  assert.match(o.fragmentShader, /uLineSkin, vLine\.y/, 'hair and skin line colours');
});

function tailOnPelvis() {
  const scene = new THREE.Scene(), pelvis = new THREE.Bone();
  pelvis.position.set(0, 0.7, -0.02);
  scene.add(pelvis);
  const tail = createTail();
  scene.add(tail.root);
  scene.updateMatrixWorld(true);
  tail.follow(pelvis, { floor: 0 });
  const pose = (pitch, y) => { pelvis.rotation.set(pitch, 0, 0); pelvis.position.y = y; scene.updateMatrixWorld(true); };
  return { pelvis, tail, pose };
}

test('tail stays above the floor while the pelvis bows, leans back and crouches (60 fps, with lag)', () => {
  const { tail, pose } = tailOnPelvis(), p = new THREE.Vector3();
  let minY = Infinity;
  for (let f = 0; f <= 240; f++) {
    const t = f / 60;
    pose(1.3 * Math.sin(Math.PI * t / 2) * (t < 2 ? 1 : 0.45), 0.7 - 0.22 * Math.sin(Math.PI * t / 4) ** 2);
    tail.update(t, { dt: 1 / 60 });
    for (const b of tail.bones.slice(1)) {
      b.getWorldPosition(p);
      assert.ok(Number.isFinite(p.x) && Number.isFinite(p.y) && Number.isFinite(p.z), 'finite tail joint at ' + t.toFixed(2) + ' s');
      minY = Math.min(minY, p.y);
    }
  }
  assert.ok(minY >= 0.02 - 1e-6, 'lowest tail joint ' + minY.toFixed(4) + ' m above the floor');
});

test('tail hangs behind the legs instead of swinging up when the pelvis bows', () => {
  const { pelvis, tail, pose } = tailOnPelvis(), a = new THREE.Vector3(), b = new THREE.Vector3();
  pose(1.3, 0.62);
  const tip = hang => { tail.update(1, { hang }); pelvis.getWorldPosition(a); tail.bones.at(-1).getWorldPosition(b); return { reach: Math.hypot(b.x - a.x, b.z - a.z), dz: b.z - a.z }; };
  const rigid = tip(0), hanging = tip(0.8);
  assert.ok(hanging.reach < rigid.reach - 0.1, 'reach behind the pelvis ' + hanging.reach.toFixed(3) + ' m hanging vs ' + rigid.reach.toFixed(3) + ' m rigid');
  assert.ok(hanging.dz < 0, 'flukes behind the pelvis');
});

test('offline viewer: build.mjs inlines the rigged model and the bundle into one HTML file', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'whale-viewer-'));
  try {
    const out = path.join(dir, 'viewer.html');
    // a --tripo file that does not exist: the build must still work, only without the Tripo weight switch
    execFileSync(process.execPath, [fileURLToPath(new URL('../whale/viewer/build.mjs', import.meta.url)), '--tripo', path.join(dir, 'missing.glb'), '--out', out], { stdio: 'pipe' });
    const html = fs.readFileSync(out, 'utf8');
    const glb = html.match(/<script type="application\/octet-stream" id="whale-glb">([^<]*)<\/script>/);
    assert.ok(glb, 'model block');
    assert.ok(Buffer.from(glb[1], 'base64').equals(fs.readFileSync(new URL('../whale/assets/whale_rigged.glb', import.meta.url))), 'model block decodes to whale_rigged.glb');
    assert.ok(!html.includes('id="tripo-weights"'), 'no Tripo weights without the --tripo file');
    for (const marker of ['__BUILT__', '<!--DATA-->', '<!--SCRIPT-->']) assert.ok(!html.includes(marker), marker + ' replaced');
    const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
    assert.equal(scripts.length, 1, 'one inline bundle');
    assert.ok(scripts[0][1].length > 100000, 'bundle includes three.js');
    assert.ok(!/import\s*\(|\bimport\s+[\w{*]/.test(scripts[0][1].slice(0, 2000)), 'no module imports left in the bundle');
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
