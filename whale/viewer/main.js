// Offline viewer for the rigged whale girl. build.mjs bundles this file, three.js and the model into one HTML file that
// opens by double-click (file://) without a server or network access.
// Optional URL parameters: clip=<clip|bind> t=<s> play=0|1 speed=<x> view=<name> shade=toon|flat|heat|zones w=fixed|tripo
// outline=0|1 tail=0|1 ahoge=0|1 bones=0|1 rot=0|1 issue=<id> ui=0. The title turns into "READY {...}" once the first
// frames are drawn; window.whaleViewer exposes the controls plus evalClip() for scripted checks.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { applyToon, toonMaterial, outlineMaterial } from '../src/toon.js';
import { createTail } from '../src/tail.js';
import { createAhoge } from '../src/ahoge.js';
import landmarks from '../assets/landmarks.json';
import { ISSUES } from './issues.js';

const CLIPS = [['idle', '待机'], ['greet_01', '打招呼'], ['laugh_01', '笑'], ['angry_01', '生气'], ['scared_01', '受惊'],
  ['fold_arms', '抱臂'], ['scratch', '挠头'], ['look_around', '四处张望'], ['heart_pose', '比心'], ['bow', '鞠躬'], ['bind', '绑定姿势']];
const LABEL = Object.fromEntries(CLIPS);
// [id, label, camera position, target] in metres; she is 1.35 m tall, faces +z, feet on y = 0.
// With a bone name (5th entry) the target is that bone's current position plus the 4th entry, and the camera sits at
// target + the 3rd entry, so the close-ups follow her when a clip moves the head, chest or hands. Her left is +x.
const VIEWS = [['front', '正面', [0, 0.8, 3.1], [0, 0.68, 0]], ['34', '斜侧', [2.1, 1.0, 2.3], [0, 0.68, 0]],
  ['side', '侧面', [3.1, 0.8, 0], [0, 0.68, 0]], ['back', '背面', [0, 0.9, -3.1], [0, 0.7, 0]],
  ['face', '脸', [0, 0.02, 0.75], [0, 0.13, 0.03], 'Head'], ['face34', '脸斜侧', [0.42, 0.03, 0.62], [0, 0.13, 0.03], 'Head'], ['chest', '胸口', [0.3, 0.1, 1.15], [0, 0.05, 0], 'Spine02'],
  ['handL', '左手', [0.24, 0.04, 0.4], [0, -0.05, 0], 'L_Hand'], ['handR', '右手', [-0.24, 0.04, 0.4], [0, -0.05, 0], 'R_Hand'],
  ['skirt', '裙摆', [0.95, 0.5, 1.6], [0, 0.42, 0]], ['backlow', '背后低', [0.9, 0.55, -1.7], [0, 0.5, 0]]];
const TAIL = { sway: 0.1, swing: 0.035, curl: 0, hang: 0.8 };
// same test as whale/tools/rig/eval_skin.py: a triangle is bad when an edge is stretched past 1.35x or squeezed below 0.7x
const HI = 1.35, LO = 0.7;
// heat colours (sRGB, as in the legend) converted to linear, because three.js treats vertex colours as linear
const lin = x => (x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4));
const HEAT = [[1.1, [205, 213, 230]], [1.22, [255, 214, 74]], [1.35, [255, 150, 40]], [1.7, [228, 36, 52]], [3, [130, 20, 130]]]
  .map(([s, c]) => [s, c.map(v => 255 * lin(v / 255))]);

const $ = id => document.getElementById(id);
const Q = new URLSearchParams(location.search);
const S = { clip: 'idle', t: 0, playing: true, speed: 1, shade: 'toon', w: 'fixed', outline: true, tail: true, ahoge: true, bones: false, rot: false, view: '34', issue: null };

function bytesOf(id) {
  const el = $(id), s = el ? el.textContent.trim() : '';
  if (!s) return null;
  const bin = atob(s), u = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
  return u;
}
function heatRGB(s, out, o) {
  let c = HEAT[0][1];
  if (s >= HEAT[HEAT.length - 1][0]) c = HEAT[HEAT.length - 1][1];
  else for (let i = 1; i < HEAT.length; i++) if (s < HEAT[i][0]) {
    const [a, ca] = HEAT[i - 1], [b, cb] = HEAT[i], k = s <= a ? 0 : (s - a) / (b - a);
    out[o] = ca[0] + (cb[0] - ca[0]) * k; out[o + 1] = ca[1] + (cb[1] - ca[1]) * k; out[o + 2] = ca[2] + (cb[2] - ca[2]) * k; return;
  }
  out[o] = c[0]; out[o + 1] = c[1]; out[o + 2] = c[2];
}
function blobShadow() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 128;
  const g = cv.getContext('2d'), gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(30,38,80,0.30)'); gr.addColorStop(0.55, 'rgba(30,38,80,0.14)'); gr.addColorStop(1, 'rgba(30,38,80,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(0.85, 0.85), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }));
  m.rotation.x = -Math.PI / 2; m.position.y = 0.002; m.renderOrder = -1;
  return m;
}

async function init() {
  const canvas = $('c'), host = $('view');
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true }); }
  catch (e) { throw new Error('浏览器无法创建 WebGL（' + e.message + '）'); }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.01, 50);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true; controls.dampingFactor = 0.12; controls.minDistance = 0.25; controls.maxDistance = 9; controls.autoRotateSpeed = 1.6;
  scene.add(new THREE.HemisphereLight(0xffffff, 0x7d86a0, 1.7)); // lights only matter for the heat map; toon shading ignores them
  const sun = new THREE.DirectionalLight(0xffffff, 1.5); sun.position.set(1.5, 3, 2.5); scene.add(sun);
  const grid = new THREE.GridHelper(4, 40, 0x98a4c4, 0xc6cee0); grid.material.transparent = true; grid.material.opacity = 0.75; scene.add(grid);
  const blob = blobShadow(); scene.add(blob);

  const glb = bytesOf('whale-glb'); if (!glb) throw new Error('文件里没有模型数据');
  const gltf = await new GLTFLoader().parseAsync(glb.buffer, '');

  // same normalisation as whale/preview/turntable.html: faces +z, 1.35 m tall, feet on y = 0
  const body = gltf.scene;
  body.rotation.y = -Math.PI / 2;
  body.traverse(o => { if (o.isMesh) o.frustumCulled = false; });
  let bb = new THREE.Box3().setFromObject(body);
  body.scale.setScalar(1.35 / (bb.max.y - bb.min.y));
  bb = new THREE.Box3().setFromObject(body);
  body.position.y -= bb.min.y;

  const skinned = []; body.traverse(o => { if (o.isSkinnedMesh) skinned.push(o); });
  const mesh = skinned[0], geo = mesh.geometry;
  const flat = new Map(skinned.map(m => [m, new THREE.MeshBasicMaterial({ map: m.material.map || null, color: m.material.map ? 0xffffff : (m.material.color || 0xffffff), vertexColors: !!m.material.vertexColors, side: THREE.DoubleSide })]));
  applyToon(body, { outline: 0.0022, vib: 0.8 });
  const toon = new Map(skinned.map(m => [m, m.material]));
  const heatMat = new THREE.MeshLambertMaterial({ vertexColors: true });
  const outlines = []; body.traverse(o => { if (o.userData.isOutline) outlines.push(o); });

  const tailToon = toonMaterial({ vertexColors: true }), tailFlat = new THREE.MeshBasicMaterial({ vertexColors: true });
  const tail = createTail({ material: tailToon, outline: outlineMaterial({ width: 0.0022 }) });
  const ahToon = toonMaterial({ vertexColors: true, vib: 0.8 }), ahFlat = new THREE.MeshBasicMaterial({ vertexColors: true });
  const cr = landmarks.crown;
  const ahoge = createAhoge({ base: [cr[0], cr[1] - 0.004, cr[2]], color0: '#545f96', color1: '#6a91cc', material: ahToon, outline: outlineMaterial({ width: 0.0011 }) });
  outlines.push(tail.meshes[1], tail.meshes[3]); ahoge.root.traverse(o => { if (o.userData.isOutline) outlines.push(o); });
  const model = new THREE.Group(); model.add(body, tail.root); scene.add(model);
  model.updateMatrixWorld(true);
  const hip = body.getObjectByName('Pelvis') || body.getObjectByName('Hip'), head = body.getObjectByName('Head');
  if (!hip || !head) throw new Error('模型里缺少 Pelvis 或 Head 骨骼');
  tail.follow(hip, { floor: 0 });
  head.attach(ahoge.root);

  const rest = []; body.traverse(o => { if (o.isBone) rest.push([o, o.position.clone(), o.quaternion.clone(), o.scale.clone()]); });
  const bindQ = new Map(); body.traverse(o => { if (o.isBone) bindQ.set(o.name, o.getWorldQuaternion(new THREE.Quaternion())); });
  const restPose = () => { for (const [b, p, q, s] of rest) { b.position.copy(p); b.quaternion.copy(q); b.scale.copy(s); } };
  const mixer = new THREE.AnimationMixer(body);
  const actions = new Map(gltf.animations.map(a => [a.name, mixer.clipAction(a)]));
  const skel = new THREE.SkeletonHelper(body); skel.material.depthTest = false; skel.material.transparent = true; skel.renderOrder = 10; skel.visible = false; scene.add(skel);

  // skin weights: repaired (in the GLB) and, when build.mjs found the Tripo download, the original Tripo weights and index
  const fixed = { index: geo.index, si: geo.attributes.skinIndex, sw: geo.attributes.skinWeight };
  let tripo = null;
  const tw = bytesOf('tripo-weights');
  if (tw && !fixed.si.isInterleavedBufferAttribute && !fixed.sw.isInterleavedBufferAttribute) {
    const el = $('tripo-weights'), nv = +el.dataset.verts, nt = +el.dataset.tris, N = geo.attributes.position.count;
    // layout from build.mjs: joints uint8 x4, weights float32 x4 as Tripo delivered them, index uint16
    const j = new Uint8Array(N * 4), w = new Float32Array(N * 4), fw = fixed.sw.array;
    const fd = fixed.sw.normalized ? (fw instanceof Uint8Array ? 255 : 65535) : 1;
    j.set(fixed.si.array); for (let i = 0; i < N * 4; i++) w[i] = fw[i] / fd; // the hole patches keep the repaired weights; the Tripo index never uses them
    j.set(tw.subarray(0, nv * 4)); w.set(new Float32Array(tw.buffer.slice(tw.byteOffset + nv * 4, tw.byteOffset + nv * 20)));
    const idx = new Uint16Array(tw.buffer.slice(tw.byteOffset + nv * 20, tw.byteOffset + nv * 20 + nt * 6));
    tripo = { index: new THREE.BufferAttribute(idx, 1), si: new THREE.BufferAttribute(j, 4), sw: new THREE.BufferAttribute(w, 4) };
  }

  // heat map: CPU skinning of the body, edge length deformed / bind per edge, colour = worst edge at each vertex
  const P = geo.attributes.position.array, NV = geo.attributes.position.count;
  const baseCol = geo.attributes.color || null;
  const heatCol = new THREE.BufferAttribute(new Uint8Array(NV * 4).fill(255), 4, true);
  // toon zones baked by whale/tools/rig/toon_zones.py: face orange, hair blue, other skin pink, the rest grey
  const tz = geo.attributes.toon, zoneCol = tz ? new THREE.BufferAttribute(new Uint8Array(NV * 4).fill(255), 4, true) : null;
  if (tz) {
    const a = tz.array, c = zoneCol.array, Z = [[200, 204, 214], [244, 168, 176], [86, 124, 232], [255, 176, 40]].map(x => x.map(v => 255 * lin(v / 255)));
    for (let v = 0; v < NV; v++) {
      const f = a[4 * v] / 255, h = a[4 * v + 2] / 255, s = a[4 * v + 3] / 255;
      for (let k = 0; k < 3; k++) { let x = Z[0][k] + (Z[1][k] - Z[0][k]) * s; x += (Z[2][k] - x) * h; x += (Z[3][k] - x) * f; c[4 * v + k] = x; }
    }
  }
  const zoneMat = new THREE.MeshBasicMaterial({ vertexColors: true });
  const D = new Float32Array(NV * 3), sev = new Float32Array(NV), M = new Float32Array(16 * mesh.skeleton.bones.length), m4 = new THREE.Matrix4();
  const edgeCache = {}, hv2 = new THREE.Vector3();
  function edges(which) {
    if (edgeCache[which]) return edgeCache[which];
    const I = (which === 'tripo' ? tripo.index : fixed.index).array, map = new Map(), ea = [], eb = [], triE = new Int32Array(I.length);
    for (let f = 0; f < I.length; f += 3) for (let k = 0; k < 3; k++) {
      let a = I[f + k], b = I[f + (k + 1) % 3]; if (a > b) { const x = a; a = b; b = x; }
      const key = a * 65536 + b; let e = map.get(key);
      if (e === undefined) { e = ea.length; map.set(key, e); ea.push(a); eb.push(b); }
      triE[f + k] = e;
    }
    const A = Int32Array.from(ea), B = Int32Array.from(eb), L0 = new Float32Array(A.length);
    for (let e = 0; e < A.length; e++) { const a = 3 * A[e], b = 3 * B[e]; L0[e] = Math.hypot(P[a] - P[b], P[a + 1] - P[b + 1], P[a + 2] - P[b + 2]); }
    return (edgeCache[which] = { A, B, L0, triE, r: new Float32Array(A.length) });
  }
  function measure(colour) {
    model.updateMatrixWorld(true);
    const sk = mesh.skeleton; sk.update();
    const bm = sk.boneMatrices;
    for (let b = 0; b < sk.bones.length; b++) { m4.fromArray(bm, b * 16).premultiply(mesh.bindMatrixInverse).multiply(mesh.bindMatrix); m4.toArray(M, b * 16); }
    const cur = S.w === 'tripo' && tripo ? tripo : fixed, SI = cur.si.array, SW = cur.sw.array;
    const div = cur.sw.normalized ? (SW instanceof Uint8Array ? 255 : 65535) : 1;
    for (let v = 0; v < NV; v++) {
      const x = P[3 * v], y = P[3 * v + 1], z = P[3 * v + 2]; let ox = 0, oy = 0, oz = 0;
      for (let k = 0; k < 4; k++) {
        const wt = SW[4 * v + k]; if (!wt) continue;
        const o = SI[4 * v + k] * 16, f = wt / div;
        ox += f * (M[o] * x + M[o + 4] * y + M[o + 8] * z + M[o + 12]);
        oy += f * (M[o + 1] * x + M[o + 5] * y + M[o + 9] * z + M[o + 13]);
        oz += f * (M[o + 2] * x + M[o + 6] * y + M[o + 10] * z + M[o + 14]);
      }
      D[3 * v] = ox; D[3 * v + 1] = oy; D[3 * v + 2] = oz;
    }
    const E = edges(S.w === 'tripo' && tripo ? 'tripo' : 'fixed'), { A, B, L0, triE, r } = E;
    if (colour) sev.fill(1);
    let worst = 1, stretch = 1, hotE = -1;
    for (let e = 0; e < A.length; e++) {
      const l0 = L0[e]; if (!(l0 > 1e-9)) { r[e] = 1; continue; }
      const a = 3 * A[e], b = 3 * B[e], q = Math.hypot(D[a] - D[b], D[a + 1] - D[b + 1], D[a + 2] - D[b + 2]) / l0;
      r[e] = q; if (q > stretch) { stretch = q; hotE = e; }
      const s = q >= 1 ? q : 1 / q;
      if (s > worst) worst = s;
      if (colour) { if (s > sev[A[e]]) sev[A[e]] = s; if (s > sev[B[e]]) sev[B[e]] = s; }
    }
    let bad = 0;
    for (let f = 0; f < triE.length; f += 3) {
      const a = r[triE[f]], b = r[triE[f + 1]], c = r[triE[f + 2]];
      if (a > HI || a < LO || b > HI || b < LO || c > HI || c < LO) bad++;
    }
    if (colour) { const c = heatCol.array; for (let v = 0; v < NV; v++) heatRGB(sev[v], c, 4 * v); heatCol.needsUpdate = true; }
    let hot = null; // world position of the most stretched edge
    if (hotE >= 0) { const a = 3 * A[hotE], b = 3 * B[hotE]; hv2.set((D[a] + D[b]) / 2, (D[a + 1] + D[b + 1]) / 2, (D[a + 2] + D[b + 2]) / 2).applyMatrix4(mesh.matrixWorld); hot = hv2.toArray().map(x => +x.toFixed(3)); }
    return { bad, tris: triE.length / 3, worst, stretch, hot };
  }

  // ---- state changes
  let tailT = 0, dirty = true, stat = null, tween = null, frames = 0, last = 0, dragging = false;
  const dur = () => (S.clip === 'bind' ? 0 : actions.get(S.clip).getClip().duration);
  function poseAt(t, exact = true) { // exact: replay from 0 s at 60 fps so the tail's lag looks like in playback
    t = Math.max(0, Math.min(t, dur()));
    if (S.clip === 'bind') { restPose(); tail.update(0, { ...TAIL }); }
    else if (!exact) { mixer.setTime(t); tail.update(t, { ...TAIL }); }
    else {
      const steps = Math.max(1, Math.ceil(t * 60)), h = t / steps;
      for (let i = 0; i <= steps; i++) { const s = i * h; mixer.setTime(s); tail.update(s, { ...TAIL, dt: i ? h : undefined }); }
    }
    S.t = t; tailT = t; dirty = true; syncBar();
  }
  function setClip(name, t = 0) {
    if (name !== 'bind' && !actions.has(name)) return;
    S.clip = name; mixer.stopAllAction(); restPose();
    if (name !== 'bind') actions.get(name).reset().play();
    poseAt(t); syncUI();
  }
  function setShade(mode) {
    if (!['toon', 'flat', 'heat', 'zones'].includes(mode) || (mode === 'zones' && !zoneCol)) return;
    S.shade = mode;
    for (const m of skinned) m.material = mode === 'flat' ? flat.get(m) : mode === 'heat' ? heatMat : mode === 'zones' ? zoneMat : toon.get(m);
    if (mode === 'heat') geo.setAttribute('color', heatCol); else if (mode === 'zones') geo.setAttribute('color', zoneCol); else if (baseCol) geo.setAttribute('color', baseCol);
    tail.meshes[0].material = tail.meshes[2].material = mode === 'flat' ? tailFlat : tailToon;
    ahoge.mesh.material = mode === 'flat' ? ahFlat : ahToon;
    dirty = true; syncUI();
  }
  function setWeights(w) {
    if (w === 'tripo' && !tripo) return;
    S.w = w === 'tripo' ? 'tripo' : 'fixed';
    const c = S.w === 'tripo' ? tripo : fixed;
    geo.setIndex(c.index); geo.setAttribute('skinIndex', c.si); geo.setAttribute('skinWeight', c.sw);
    dirty = true; syncUI();
  }
  function setToggle(k, v) {
    S[k] = !!v;
    if (k === 'outline') for (const o of outlines) o.visible = S.outline;
    if (k === 'tail') tail.root.visible = S.tail;
    if (k === 'ahoge') ahoge.root.visible = S.ahoge;
    if (k === 'bones') skel.visible = S.bones;
    if (k === 'rot') controls.autoRotate = S.rot;
    syncUI();
  }
  function setView(name, instant = false) {
    const v = VIEWS.find(x => x[0] === name); if (!v) return;
    const to = { p: new THREE.Vector3(...v[2]), t: new THREE.Vector3(...v[3]) }, bone = v[4] && body.getObjectByName(v[4]);
    if (bone) { model.updateMatrixWorld(true); to.t.add(bone.getWorldPosition(hv2)); to.p.add(to.t); }
    if (instant) { camera.position.copy(to.p); controls.target.copy(to.t); controls.update(); tween = null; }
    else tween = { from: { p: camera.position.clone(), t: controls.target.clone() }, to, k: 0 };
    S.view = name; syncUI();
  }
  function setPlaying(p) { S.playing = !!p; syncUI(); }
  function showIssue(id, instant = false) {
    const it = ISSUES.find(x => x.id === id); if (!it) return;
    S.issue = id; setPlaying(false);
    setWeights(it.w || 'fixed'); setShade(it.shade || 'toon');
    setClip(it.clip, it.t || 0); setView(it.view || '34', instant);
    $('note').hidden = false; $('note-title').textContent = it.title; $('note-text').innerHTML = it.html;
    syncUI();
  }
  // bad triangles (mean, worst frame) and the most stretched edge over samples every step seconds, as eval_skin.py does
  function evalClip(name, step = 0.25, w = S.w) {
    const keep = { clip: S.clip, t: S.t, w: S.w };
    setWeights(w); setClip(name);
    let sum = 0, n = 0, worst = -1, worstT = 0, st = 1, stT = 0, hot = null;
    for (let t = 0; t <= dur() + 1e-6; t += step) {
      mixer.setTime(t); const m = measure(false); sum += m.bad; n++;
      if (m.bad > worst) { worst = m.bad; worstT = t; }
      if (m.stretch > st) { st = m.stretch; stT = t; hot = m.hot; }
    }
    const out = { clip: name, w: S.w, samples: n, mean: Math.round(sum / n), worst, worst_t: worstT, stretch: +st.toFixed(2), stretch_t: stT, hot };
    setWeights(keep.w); setClip(keep.clip, keep.t);
    return out;
  }

  // ---- UI
  const btn = (label, cls, on) => { const b = document.createElement('button'); b.className = 'btn ' + (cls || ''); b.innerHTML = label; b.onclick = on; return b; };
  for (const [id, label] of CLIPS) { const b = btn(label + '<small>' + (id === 'bind' ? 'A-pose' : id) + '</small>', '', () => { S.issue = null; setClip(id); if (id !== 'bind') setPlaying(true); }); b.dataset.clip = id; $('clips').append(b); }
  for (const [id, label] of [['toon', '卡通'], ['flat', '原贴图'], ['heat', '变形热图'], ['zones', '分区']]) { if (id === 'zones' && !zoneCol) continue; const b = btn(label, '', () => setShade(id)); b.dataset.shade = id; $('shade').append(b); }
  for (const [id, label] of [['fixed', '修复后'], ['tripo', 'Tripo 原始']]) { const b = btn(label, '', () => setWeights(id)); b.dataset.w = id; if (id === 'tripo' && !tripo) { b.disabled = true; b.title = '生成这个文件时没有找到 Tripo 原始下载'; } $('weights').append(b); }
  for (const [id, label] of VIEWS.map(v => [v[0], v[1]])) { const b = btn(label, '', () => setView(id)); b.dataset.view = id; $('views').append(b); }
  for (const it of ISSUES) { const b = btn('<b>' + it.title + '</b><span>' + it.sub + '</span>', 'issue', () => showIssue(it.id)); b.dataset.issue = it.id; $('issues').append(b); }
  for (const k of ['outline', 'tail', 'ahoge', 'bones', 'rot']) $('chk-' + k).onchange = e => setToggle(k, e.target.checked);
  $('note-close').onclick = () => { $('note').hidden = true; S.issue = null; syncUI(); };
  $('play').onclick = () => setPlaying(!S.playing);
  $('speed').onchange = e => { S.speed = +e.target.value; };
  $('seek').addEventListener('input', e => { dragging = true; S.playing = false; poseAt(+e.target.value / 1000 * dur(), false); syncUI(); });
  $('seek').addEventListener('change', e => { dragging = false; poseAt(+e.target.value / 1000 * dur(), true); });
  controls.addEventListener('start', () => { tween = null; });
  window.addEventListener('keydown', e => {
    if (e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT' && e.target.type !== 'range' && e.target.type !== 'checkbox') return;
    if (e.code === 'Space') { e.preventDefault(); setPlaying(!S.playing); }
    else if (e.code === 'ArrowLeft' || e.code === 'ArrowRight') { e.preventDefault(); S.playing = false; poseAt(S.t + (e.code === 'ArrowLeft' ? -1 : 1) / 30); syncUI(); }
  });
  function syncBar() {
    const d = dur();
    if (!dragging) $('seek').value = d ? Math.round(S.t / d * 1000) : 0;
    $('seek').disabled = !d;
    $('time').textContent = S.t.toFixed(2) + ' / ' + d.toFixed(2) + ' s';
  }
  function syncUI() {
    for (const b of document.querySelectorAll('[data-clip]')) b.classList.toggle('on', b.dataset.clip === S.clip);
    for (const b of document.querySelectorAll('[data-shade]')) b.classList.toggle('on', b.dataset.shade === S.shade);
    for (const b of document.querySelectorAll('[data-w]')) b.classList.toggle('on', b.dataset.w === S.w);
    for (const b of document.querySelectorAll('[data-view]')) b.classList.toggle('on', b.dataset.view === S.view);
    for (const b of document.querySelectorAll('[data-issue]')) b.classList.toggle('on', b.dataset.issue === S.issue);
    for (const k of ['outline', 'tail', 'ahoge', 'bones', 'rot']) $('chk-' + k).checked = S[k];
    $('legend').hidden = S.shade !== 'heat'; $('legend-zones').hidden = S.shade !== 'zones';
    $('play').textContent = S.playing ? '❚❚' : '▶'; $('play').title = S.playing ? '暂停（空格）' : '播放（空格）';
    $('speed').value = String(S.speed);
    syncBar();
  }
  function hud() {
    const d = dur();
    let s = (LABEL[S.clip] || S.clip) + (S.clip === 'bind' ? '' : '  ' + S.clip) + '\n' + (d ? S.t.toFixed(2) + ' / ' + d.toFixed(2) + ' s' : '静止') + ' · 权重：' + (S.w === 'tripo' ? 'Tripo 原始' : '修复后');
    if (S.shade === 'heat' && stat) s += '\n变形过大的三角形：' + stat.bad.toLocaleString() + ' / ' + stat.tris.toLocaleString() + '（' + (stat.bad / stat.tris * 100).toFixed(1) + '%）';
    $('stat').textContent = s;
  }
  function resize() {
    const w = host.clientWidth, h = host.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(host); resize();

  // ---- URL parameters, then the loop
  const flag = (k, def) => (Q.has(k) ? Q.get(k) !== '0' : def);
  for (const k of ['outline', 'tail', 'ahoge', 'bones', 'rot']) setToggle(k, flag(k, S[k]));
  if (Q.get('ui') === '0') document.body.classList.add('noui');
  if (Q.has('speed')) S.speed = Math.max(0.05, Math.min(2, +Q.get('speed') || 1));
  if (Q.has('issue')) showIssue(Q.get('issue'), true);
  else {
    setWeights(Q.get('w') || 'fixed'); setShade(Q.get('shade') || 'toon');
    setClip(Q.get('clip') || 'idle', +(Q.get('t') || 0)); setView(Q.get('view') || '34', true);
    setPlaying(flag('play', true));
  }
  if (Q.has('view')) setView(Q.get('view'), true);
  $('loading').remove();
  const hv = new THREE.Vector3();
  renderer.setAnimationLoop(now => {
    const dtReal = last ? Math.min((now - last) / 1000, 0.1) : 0; last = now;
    if (S.playing && dtReal > 0) {
      const d = dtReal * S.speed, D0 = dur();
      if (D0) { S.t += d; if (S.t >= D0) S.t %= D0; mixer.setTime(S.t); }
      tailT += d; tail.update(tailT, { ...TAIL, dt: d }); dirty = true; syncBar();
    }
    if (tween) {
      tween.k = Math.min(1, tween.k + dtReal / 0.45); const k = tween.k, e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      camera.position.lerpVectors(tween.from.p, tween.to.p, e); controls.target.lerpVectors(tween.from.t, tween.to.t, e);
      if (k >= 1) tween = null;
    }
    controls.update(dtReal);
    if (S.shade === 'heat' && dirty) stat = measure(true);
    dirty = false;
    hip.getWorldPosition(hv); blob.position.set(hv.x, 0.002, hv.z);
    renderer.render(scene, camera);
    hud();
    if (++frames === 3) document.title = 'READY ' + JSON.stringify({ clip: S.clip, t: +S.t.toFixed(3), shade: S.shade, w: S.w, bad: stat ? stat.bad : null, tris: stat ? stat.tris : null, stretch: stat ? +stat.stretch.toFixed(2) : null, hot: stat ? stat.hot : null, tripo: !!tripo });
  });
  window.whaleViewer = { S, setClip, setShade, setWeights, setView, setToggle, setPlaying, showIssue, poseAt, evalClip, measure: () => measure(false),
    camera: () => ({ p: camera.position.toArray().map(x => +x.toFixed(3)), t: controls.target.toArray().map(x => +x.toFixed(3)) }),
    // world position of a bone and where its bind-pose front (+z) points now
    bone: name => { const b = body.getObjectByName(name); if (!b) return null; model.updateMatrixWorld(true);
      const q = b.getWorldQuaternion(new THREE.Quaternion()).multiply(bindQ.get(name).clone().invert());
      return { p: b.getWorldPosition(new THREE.Vector3()).toArray().map(x => +x.toFixed(3)), fwd: new THREE.Vector3(0, 0, 1).applyQuaternion(q).toArray().map(x => +x.toFixed(3)) }; } };
}

init().catch(e => {
  console.error(e);
  document.title = 'ERROR ' + (e && e.message);
  const el = $('loading'); if (el) el.textContent = '加载失败：' + (e && e.message);
});
