// Headless Edge (GPU WebGL via ANGLE D3D11) driven over the DevTools protocol.
// ensureEdge() starts one shared headless browser on PORT; shot() renders a page and saves a PNG; closeEdge() shuts it down.
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const HERE = path.dirname(fileURLToPath(import.meta.url));
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
export const PORT = 9333;
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function version() { try { const r = await fetch('http://127.0.0.1:' + PORT + '/json/version', { signal: AbortSignal.timeout(2000) }); return r.ok ? r.json() : null; } catch { return null; } }
export async function ensureEdge() {
  let v = await version(); if (v) return v;
  // os.tmpdir() is unusable when the environment is empty (it yields 'undefined\\temp'), so derive the temp dir from the home dir.
  const prof = path.join(process.env.TEMP || path.join(os.homedir(), 'AppData', 'Local', 'Temp'), 'whale-edge-cdp-profile');
  const args = ['--headless=new', '--remote-debugging-port=' + PORT, '--hide-scrollbars', '--force-device-scale-factor=1', '--no-first-run', '--disable-extensions', '--disable-background-networking', '--disable-component-update', '--disable-sync', '--no-default-browser-check', '--allow-file-access-from-files', '--user-data-dir=' + prof, '--window-size=800,600', '--use-angle=d3d11', '--ignore-gpu-blocklist', 'about:blank'];
  spawn(EDGE, args, { detached: true, stdio: 'ignore' }).unref();
  for (let i = 0; i < 60 && !v; i++) { await sleep(1000); v = await version(); }
  if (!v) throw new Error('headless Edge did not start');
  return v;
}
function connect(wsUrl) {
  return new Promise((res, rej) => {
    const ws = new WebSocket(wsUrl); let id = 0; const pend = new Map(); const logs = [];
    ws.onmessage = ev => { const m = JSON.parse(ev.data); if (m.id && pend.has(m.id)) { pend.get(m.id)(m); pend.delete(m.id); } else if (m.method === 'Runtime.consoleAPICalled') logs.push(m.params.type + ': ' + m.params.args.map(a => a.value ?? a.description).join(' ')); else if (m.method === 'Runtime.exceptionThrown') logs.push('EXC ' + (m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text)); };
    const send = (method, params = {}) => new Promise(r => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
    ws.onopen = () => res({ ws, send, logs }); ws.onerror = rej;
  });
}
export function pageUrl(page, query = {}) { return pathToFileURL(path.join(HERE, page)).href + '?' + new URLSearchParams(query).toString(); }
// Renders url at width x height, waits until document.title starts with READY or ERROR, writes the PNG.
export async function shot({ url, width, height, out, timeout = 60000 }) {
  await ensureEdge();
  const t = await (await fetch('http://127.0.0.1:' + PORT + '/json/new?about:blank', { method: 'PUT' })).json();
  const c = await connect(t.webSocketDebuggerUrl);
  try {
    await c.send('Runtime.enable'); await c.send('Page.enable');
    await c.send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
    await c.send('Page.navigate', { url });
    let title = ''; const t0 = Date.now();
    while (Date.now() - t0 < timeout) {
      const r = await c.send('Runtime.evaluate', { expression: 'document.title', returnByValue: true });
      title = r.result?.result?.value || '';
      if (/^(READY|ERROR)/.test(title)) break;
      await sleep(300);
    }
    const s = await c.send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width, height, scale: 1 } });
    const png = path.isAbsolute(out) ? out : path.join(HERE, 'out', out);
    fs.mkdirSync(path.dirname(png), { recursive: true });
    fs.writeFileSync(png, Buffer.from(s.result.data, 'base64'));
    return { png, title, ms: Date.now() - t0, logs: c.logs.slice(0, 20) };
  } finally {
    c.ws.close();
    await fetch('http://127.0.0.1:' + PORT + '/json/close/' + t.id).catch(() => {});
  }
}
export async function closeEdge() {
  const v = await version(); if (!v) return false;
  const c = await connect(v.webSocketDebuggerUrl);
  c.send('Browser.close'); await sleep(800); try { c.ws.close(); } catch {}
  return true;
}
// Turntable helper: views like 'front,34,side,back'; tile width; aspect = tile height / width.
export async function turntable(query, out) {
  const views = (query.views || 'front,34,side,back').split(',');
  const rows = +(query.rows || 1), tile = +(query.tile || 480), aspect = +(query.aspect || 1.6);
  return shot({ url: pageUrl('turntable.html', query), width: Math.ceil(views.length / rows) * tile, height: rows * Math.round(tile * aspect), out });
}

// CLI: node cdp.mjs <out.png> "<query>"   (out is relative to preview/out/)
// e.g. node whale/preview/cdp.mjs body.png "glb=../assets/whale_body.glb&tail=1&mode=toon&vib=0.8"
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [out = 'turntable.png', qs = ''] = process.argv.slice(2);
  try { const r = await turntable(Object.fromEntries(new URLSearchParams(qs)), out); console.log(r.title, r.png); } finally { await closeEdge(); }
}
