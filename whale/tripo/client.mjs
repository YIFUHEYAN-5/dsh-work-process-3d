// Tripo v3 API client. The key is read from KEY_FILE at call time and never logged; it is never stored in the repo.
// KEY_FILE = $TRIPO_KEY_FILE or ~/.tripo/api_key.txt. tasks.json (task log) and raw/ (downloads) are git-ignored.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const BASE = 'https://openapi.tripo3d.com/v3';
const KEY_FILE = process.env.TRIPO_KEY_FILE || path.join(os.homedir(), '.tripo', 'api_key.txt');
const HERE = path.dirname(fileURLToPath(import.meta.url));
export const LOG_FILE = path.join(HERE, 'tasks.json');
export const RAW_DIR = path.join(HERE, 'raw');

const key = () => fs.readFileSync(KEY_FILE, 'utf8').trim();

async function call(method, p, body, form) {
  const headers = { Authorization: 'Bearer ' + key() };
  let payload;
  if (form) payload = body;
  else if (body !== undefined) { headers['Content-Type'] = 'application/json'; payload = JSON.stringify(body); }
  const r = await fetch(BASE + p, { method, headers, body: payload, signal: AbortSignal.timeout(120000) });
  const text = await r.text();
  let j;
  try { j = JSON.parse(text); } catch { throw new Error(method + ' ' + p + ' -> HTTP ' + r.status + ' ' + text.slice(0, 200)); }
  if (!r.ok || j.code !== 0) throw new Error(method + ' ' + p + ' -> HTTP ' + r.status + ' code ' + j.code + ' ' + (j.message || '') + ' ' + JSON.stringify(j.suggestion || '').slice(0, 200));
  return j.data;
}

export const balance = () => call('GET', '/account/balance');
export const getTask = id => call('GET', '/tasks/' + id);

export async function upload(file) {
  const buf = fs.readFileSync(file);
  const type = /\.png$/i.test(file) ? 'image/png' : /\.jpe?g$/i.test(file) ? 'image/jpeg' : 'application/octet-stream';
  const fd = new FormData();
  fd.append('file', new Blob([buf], { type }), path.basename(file));
  return (await call('POST', '/files', fd, true)).file_token;
}

export function readLog() { try { return JSON.parse(fs.readFileSync(LOG_FILE, 'utf8')); } catch { return []; } }
function writeLog(a) { fs.writeFileSync(LOG_FILE, JSON.stringify(a, null, 1)); }
export function patchLog(task_id, patch) { const a = readLog(); const e = a.find(x => x.task_id === task_id); if (e) Object.assign(e, patch); writeLog(a); }

// Creates a task and records it (endpoint, body, note, balance before) in tasks.json.
export async function create(endpoint, body, note) {
  const before = await balance();
  const d = await call('POST', endpoint, body);
  const a = readLog();
  a.push({ task_id: d.task_id, endpoint, body, note, createdAt: new Date().toISOString(), balanceBefore: before.balance, status: 'created' });
  writeLog(a);
  return d.task_id;
}

const TERMINAL = new Set(['success', 'failed', 'cancelled', 'banned', 'expired']);
export async function wait(id, { interval = 5000, timeout = 9 * 60000 } = {}) {
  const t0 = Date.now(); let t;
  while (Date.now() - t0 < timeout) {
    t = await getTask(id);
    if (TERMINAL.has(t.status)) break;
    await new Promise(r => setTimeout(r, interval));
  }
  patchLog(id, { status: t.status, progress: t.progress, checkedAt: new Date().toISOString(), error: t.error_code ? t.error_code + ' ' + (t.error_message || '') : undefined });
  return t;
}

export async function download(url, name) {
  const r = await fetch(url, { signal: AbortSignal.timeout(300000) });
  if (!r.ok) throw new Error('download ' + r.status + ' ' + url.slice(0, 80));
  const dest = path.join(RAW_DIR, name);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, Buffer.from(await r.arrayBuffer()));
  return dest;
}
