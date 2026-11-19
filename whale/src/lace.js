import * as THREE from 'three';

function makeCanvas(w, h) {
  const canvas = document.createElement('canvas');
  canvas.width = w; canvas.height = h;
  return { canvas, ctx: canvas.getContext('2d') };
}

// The reference art has a gold lace band round the skirt. Tripo's atlas cannot carry it — the whole visible lace is a
// few hundred texels, so it renders as a beige watercolour, and two islands bled into a hard-edged light patch inside the
// band. So the band is redrawn as a procedural ring: a cylinder that hugs the measured skirt profile, sitting 1.5 mm
// outside the cloth, carrying a navy fill plus gold line art. The fill is opaque, so it also hides the baked patch.

export const LACE = {
  mode: 'tris',       // 'tris' copies the skirt surface; 'ring' fits a cylinder
  y0: 0.330,          // bottom of the decorated band, above the white petticoat
  y1: 0.400,          // top of the band, below the apron hem
  rMin: 0.10,
  rMax: 0.26,
  absny: 0.60,        // skip near-horizontal frill rings
  navyOnly: true,     // keep the band on navy fabric, not on the white petticoat / apron
  navyMin: 2,         // how many of a triangle's three corner texels must be navy
  offset: 0.0015,     // clearance over the cloth
  repeats: 7,
  segments: 128,
  rows: 10
};

function laceTexture(repeats) {
  const W = 1024, H = 256;
  const { canvas, ctx } = makeCanvas(W, H);
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, '#242a60');
  grad.addColorStop(0.55, '#20265a');
  grad.addColorStop(1, '#1b214c');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  const gold = '#c9a86a', dark = '#8a6a3a', line = '#5a4322';
  const paint = (path, width, colour) => {
    ctx.strokeStyle = colour; ctx.lineWidth = width; ctx.lineCap = 'round';
    ctx.beginPath(); path(); ctx.stroke();
  };

  // rails: fine line at the top, heavier at the hem
  for (const [y, w] of [[30, 5], [H - 40, 9]]) {
    paint(() => { ctx.moveTo(0, y); ctx.lineTo(W, y); }, w + 3, line);
    paint(() => { ctx.moveTo(0, y); ctx.lineTo(W, y); }, w, gold);
  }
  // scallops under the heavy rail
  for (let i = 0; i < 28; i++) {
    const x = (i + 0.5) * (W / 28), r = (W / 28) * 0.42;
    paint(() => { ctx.arc(x, H - 40, r, Math.PI * 0.08, Math.PI * 0.92); }, 7, line);
    paint(() => { ctx.arc(x, H - 40, r, Math.PI * 0.08, Math.PI * 0.92); }, 4, i % 2 ? gold : dark);
  }
  // leafy scrollwork between the rails, one motif per 1/14 of the tile
  for (let i = 0; i < 14; i++) {
    const x = (i + 0.5) * (W / 14), tip = 70, base = H - 54;
    paint(() => { ctx.moveTo(x, base); ctx.quadraticCurveTo(x - 34, (base + tip) / 2, x - 6, tip); }, 9, line);
    paint(() => { ctx.moveTo(x, base); ctx.quadraticCurveTo(x - 34, (base + tip) / 2, x - 6, tip); }, 4, gold);
    paint(() => { ctx.moveTo(x, base); ctx.quadraticCurveTo(x + 38, (base + tip) / 2, x + 10, tip + 22); }, 8, line);
    paint(() => { ctx.moveTo(x, base); ctx.quadraticCurveTo(x + 38, (base + tip) / 2, x + 10, tip + 22); }, 3, dark);
    paint(() => { ctx.arc(x, tip - 8, 11, 0, Math.PI * 2); }, 7, line);
    paint(() => { ctx.arc(x, tip - 8, 11, 0, Math.PI * 2); }, 3, gold);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.anisotropy = 4;
  return tex;
}

function atlasSampler(map) {
  const img = map && map.image;
  if (!img || !img.width) return null;
  const { canvas, ctx } = makeCanvas(img.width, img.height);
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, img.width, img.height).data;
  return (u, v) => {
    const x = Math.min(img.width - 1, Math.max(0, Math.floor(u * img.width)));
    const y = Math.min(img.height - 1, Math.max(0, Math.floor((1 - v) * img.height)));
    const i = (y * img.width + x) * 4;
    return [data[i] / 255, data[i + 1] / 255, data[i + 2] / 255];
  };
}

// Radius of the skirt at every (angle, height) cell, fitted from the navy fabric vertices. The skirt is not a cylinder —
// it is an ellipse that flares towards the hem — so a single profile per height cuts into the cloth at the front. Each
// cell takes the outermost sample, holes are filled from their neighbours and the grid is smoothed twice.
export function fitSkirtGrid(mesh, o = LACE, segs = 128, rows = 10) {
  const g = mesh.geometry, pos = g.attributes.position, uv = g.attributes.uv;
  const sample = o.navyOnly === false ? null : atlasSampler(mesh.material && mesh.material.map);
  const W = segs + 1, H = rows + 1;
  const grid = new Float32Array(W * H).fill(-1);
  const TAU = Math.PI * 2;
  let used = 0;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    if (y < o.y0 - 0.004 || y > o.y1 + 0.004) continue;
    if (sample && uv) {
      const c = sample(uv.getX(i), uv.getY(i));
      const lum = (c[0] + c[1] + c[2]) / 3;
      if (!(c[2] - c[0] > 0.03 && lum < 0.52)) continue;
    }
    const x = pos.getX(i), z = pos.getZ(i);
    let th = Math.atan2(x, z);
    if (th < 0) th += TAU;
    const s = Math.min(segs, Math.round(th / TAU * segs));
    const r = Math.min(rows, Math.max(0, Math.round((y - o.y0) / (o.y1 - o.y0) * rows)));
    const k = r * W + s, rad = Math.hypot(x, z);
    if (rad > grid[k]) { grid[k] = rad; used++; }
  }
  const around = (k) => [k - 1, k + 1, k - W, k + W];
  for (let pass = 0; pass < 24; pass++) {
    let missing = 0;
    for (let r = 0; r < H; r++) for (let s = 0; s <= segs; s++) {
      const k = r * W + s;
      if (grid[k] > 0) continue;
      let sum = 0, n = 0;
      for (const j of around(k)) { if (j >= 0 && j < grid.length && grid[j] > 0) { sum += grid[j]; n++; } }
      if (n) { grid[k] = sum / n; missing++; }
    }
    if (!missing) break;
  }
  const vals = [];
  for (let k = 0; k < grid.length; k++) if (grid[k] > 0) vals.push(grid[k]);
  vals.sort((a, b) => a - b);
  const med = vals.length ? vals[Math.floor(vals.length / 2)] : 0.19;
  for (let k = 0; k < grid.length; k++) if (!(grid[k] > 0)) grid[k] = med;
  // guard against stray samples from other navy panels: keep each row within a sane band around the global median
  for (let r = 0; r < H; r++) {
    for (let s = 0; s <= segs; s++) {
      const k = r * W + s;
      grid[k] = Math.min(0.32, Math.max(med * 0.55, grid[k]));
    }
  }
  for (let pass = 0; pass < 3; pass++) {
    const src = grid.slice();
    for (let r = 0; r < H; r++) for (let s = 0; s <= segs; s++) {
      const k = r * W + s;
      let sum = src[k], n = 1;
      for (const j of around(k)) { if (j >= 0 && j < src.length && src[j] > 0) { sum += src[j]; n++; } }
      grid[k] = sum / n;
    }
  }
  return { grid, W, H, samples: used };
}


// Triangle mode: copy the skirt's own triangles inside the band (so the decal skins exactly like the cloth), push them out
// along the surface normal and re-UV them into a cylinder. This is the mode that lands on the right band without guesswork
// about the skirt's radius profile; ring mode (a fitted cylinder) kept sinking under the cloth.
function buildFromTriangles(body, o, tex) {
  const g = body.geometry;
  const pos = g.attributes.position, nor = g.attributes.normal, uv = g.attributes.uv;
  const si = g.attributes.skinIndex, sw = g.attributes.skinWeight;
  if (!pos || !nor || !si || !sw) return null;
  const sample = o.navyOnly === false ? null : atlasSampler(body.material && body.material.map);
  const im = body.material && body.material.map && body.material.map.image;
  console.log('LACE-sampler ' + JSON.stringify({ ctor: im && im.constructor && im.constructor.name, w: im && im.width, h: im && im.height, sampler: !!sample }));
  const index = g.index ? g.index.array : null;
  const triCount = index ? index.length / 3 : pos.count / 3;
  const keep = [];
  const TAU = Math.PI * 2;
  for (let t = 0; t < triCount; t++) {
    const a = index ? index[t * 3] : t * 3, b = index ? index[t * 3 + 1] : t * 3 + 1, c = index ? index[t * 3 + 2] : t * 3 + 2;
    const y = (pos.getY(a) + pos.getY(b) + pos.getY(c)) / 3;
    if (y < o.y0 || y > o.y1) continue;
    const rad = (Math.hypot(pos.getX(a), pos.getZ(a)) + Math.hypot(pos.getX(b), pos.getZ(b)) + Math.hypot(pos.getX(c), pos.getZ(c))) / 3;
    if (rad < o.rMin || rad > o.rMax) continue;
    const ny = Math.abs(nor.getY(a) + nor.getY(b) + nor.getY(c)) / 3;
    if (ny > o.absny) continue;
    if (sample && uv) {
      // Navy fabric only, by majority vote of the three corner texels: this keeps the band solid over the skirt while
      // dropping the white petticoat ruffle, the apron and the bows that share the same height.
      let navy = 0;
      for (const v of [a, b, c]) {
        const c3 = sample(uv.getX(v), uv.getY(v));
        if (c3[2] - c3[0] > 0.03 && (c3[0] + c3[1] + c3[2]) / 3 < 0.55) navy++;
      }
      if (navy < (o.navyMin ?? 2)) continue;
    }
    keep.push(a, b, c);
  }
  if (!keep.length) return null;
  const map = new Map(), src = [];
  const idx = keep.map(i => { if (!map.has(i)) { map.set(i, src.length); src.push(i); } return map.get(i); });
  const n = src.length;
  const P = new Float32Array(n * 3), N = new Float32Array(n * 3), U = new Float32Array(n * 2);
  const SI = new Uint16Array(n * 4), SW = new Float32Array(n * 4);
  for (let k = 0; k < n; k++) {
    const i = src[k];
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const nx = nor.getX(i), ny = nor.getY(i), nz = nor.getZ(i);
    P[k * 3] = x + nx * o.offset; P[k * 3 + 1] = y + ny * o.offset; P[k * 3 + 2] = z + nz * o.offset;
    N[k * 3] = nx; N[k * 3 + 1] = ny; N[k * 3 + 2] = nz;
    let th = Math.atan2(x, z);
    if (th < 0) th += TAU;
    U[k * 2] = (th / TAU) * o.repeats;
    U[k * 2 + 1] = (y - o.y0) / (o.y1 - o.y0);
    for (let q = 0; q < 4; q++) { SI[k * 4 + q] = si.getComponent(i, q); SW[k * 4 + q] = sw.getComponent(i, q); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(P, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(N, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(U, 2));
  geo.setAttribute('skinIndex', new THREE.BufferAttribute(SI, 4));
  geo.setAttribute('skinWeight', new THREE.BufferAttribute(SW, 4));
  geo.setIndex(idx);
  return { geo, verts: n, tris: keep.length / 3 };
}
export function createLace({ body, material = null, options = {} } = {}) {
  const o = { ...LACE, ...options };
  const tex = laceTexture(o.repeats);
  const mat = material || new THREE.MeshToonMaterial({ map: tex, side: THREE.FrontSide });
  const built = o.mode === 'ring' ? null : buildFromTriangles(body, o, tex);
  if (built) {
    const mesh = new THREE.SkinnedMesh(built.geo, mat);
    mesh.name = 'whale-lace';
    mesh.frustumCulled = false;
    mesh.position.copy(body.position); mesh.quaternion.copy(body.quaternion); mesh.scale.copy(body.scale);
    mesh.bind(body.skeleton, body.bindMatrix.clone());
    body.parent.add(mesh);
    return { root: mesh, mesh, texture: tex, tris: built.tris, verts: built.verts, skinnedOk: true, dispose() { built.geo.dispose(); tex.dispose(); } };
  }
  const segs = o.segments, rows = o.rows, TAU = Math.PI * 2;
  const fit = fitSkirtGrid(body, o, segs, rows);
  const verts = (segs + 1) * (rows + 1);
  const P = new Float32Array(verts * 3), N = new Float32Array(verts * 3), U = new Float32Array(verts * 2);
  let rMin = Infinity, rMax = -Infinity;
  for (let r = 0; r <= rows; r++) {
    const v = r / rows, y = o.y0 + (o.y1 - o.y0) * v;
    for (let s = 0; s <= segs; s++) {
      const u = s / segs, th = u * TAU;
      const k = r * (segs + 1) + s;
      const base = fit.grid[r * fit.W + s];
      const rad = Math.max(0.05, base) + o.offset;
      if (rad < rMin) rMin = rad;
      if (rad > rMax) rMax = rad;
      P[k * 3] = Math.sin(th) * rad; P[k * 3 + 1] = y; P[k * 3 + 2] = Math.cos(th) * rad;
      N[k * 3] = Math.sin(th); N[k * 3 + 1] = 0; N[k * 3 + 2] = Math.cos(th);
      U[k * 2] = u * o.repeats; U[k * 2 + 1] = v;
    }
  }
  const idx = [];
  for (let r = 0; r < rows; r++) for (let s = 0; s < segs; s++) {
    const a = r * (segs + 1) + s, b = a + 1, c = a + segs + 1, d = c + 1;
    idx.push(a, c, b, b, c, d);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(P, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(N, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(U, 2));
  geo.setIndex(idx);
  // Skin the ring to the skirt: every ring vertex borrows the weights of the nearest navy vertex in the band, so the
  // band follows the cloth through the animations instead of floating free.
  const bg = body.geometry, bp = bg.attributes.position, bsi = bg.attributes.skinIndex, bsw = bg.attributes.skinWeight;
  const bandIdx = [];
  for (let i = 0; i < bp.count; i++) {
    const y = bp.getY(i);
    if (y >= o.y0 && y <= o.y1) bandIdx.push(i);
  }
  const SI = new Uint16Array(verts * 4), SW = new Float32Array(verts * 4);
  let skinnedOk = !!(bsi && bsw && body.skeleton);
  if (skinnedOk) {
    for (let k = 0; k < verts; k++) {
      const x = P[k * 3], y = P[k * 3 + 1], z = P[k * 3 + 2];
      let best = -1, bd = Infinity;
      for (let j = 0; j < bandIdx.length; j++) {
        const i = bandIdx[j];
        const dx = bp.getX(i) - x, dy = bp.getY(i) - y, dz = bp.getZ(i) - z;
        const d = dx * dx + dy * dy + dz * dz;
        if (d < bd) { bd = d; best = i; }
      }
      if (best < 0) { skinnedOk = false; break; }
      for (let q = 0; q < 4; q++) {
        SI[k * 4 + q] = bsi.getComponent(best, q);
        SW[k * 4 + q] = bsw.getComponent(best, q);
      }
    }
  }
  geo.setAttribute('skinIndex', new THREE.BufferAttribute(SI, 4));
  geo.setAttribute('skinWeight', new THREE.BufferAttribute(SW, 4));
  const mesh = skinnedOk ? new THREE.SkinnedMesh(geo, mat) : new THREE.Mesh(geo, mat);
  mesh.name = 'whale-lace';
  mesh.frustumCulled = false;
  mesh.position.copy(body.position); mesh.quaternion.copy(body.quaternion); mesh.scale.copy(body.scale);
  if (skinnedOk) mesh.bind(body.skeleton, body.bindMatrix.clone());
  body.parent.add(mesh);
  return { root: mesh, mesh, texture: tex, samples: fit.samples, radius: [+rMin.toFixed(4), +rMax.toFixed(4)], skinnedOk, dispose() { geo.dispose(); tex.dispose(); } };
}