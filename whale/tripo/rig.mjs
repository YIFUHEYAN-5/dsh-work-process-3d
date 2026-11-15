// Tripo auto-rig v1.0 + 2 test animations (idle, greet_01), then download to raw/. node whale/tripo/rig.mjs [--yes]
// Resumable: task ids are kept in rig_state.json (git-ignored); a missing task is only created (and paid for) with --yes.
// No URLs or keys are printed.
import fs from 'node:fs';
import { balance, create, wait, download } from './client.mjs';
const BODY = '4c4a9e9d-4afb-4042-a36e-eebcae7f9214'; // image_to_model task of cand 1115233n
const STATE = new URL('./rig_state.json', import.meta.url);
const st = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, 'utf8')) : {};
const save = () => fs.writeFileSync(STATE, JSON.stringify(st, null, 1));
const log = (...a) => console.log(new Date().toISOString(), ...a);
const YES = process.argv.includes('--yes'), NEED_YES = 'rig_state.json 里没有这个任务：新建 Tripo 任务会消耗积分，确认请加 --yes：';
async function step(key, endpoint, body, note, file) {
  if (!st[key]) { if (!YES) throw new Error(NEED_YES + key); st[key] = await create(endpoint, body, note); save(); }
  log(key, 'task', st[key]);
  const t = await wait(st[key], { interval: 6000, timeout: 20 * 60000 });
  log(key, t.status, 'progress', t.progress, 'credits', t.credits_consumed, t.error_code || '', (t.error_message || '').slice(0, 200));
  if (t.status !== 'success') throw new Error(key + ' ' + t.status);
  st[key + 'File'] = await download(t.output.model_url, file); save(); log(key, 'saved', st[key + 'File']);
}
try {
  log('balance', JSON.stringify(await balance()));
  await step('rig', '/animations/rig', { input: BODY, model: 'v1.0-20240301', rig_type: 'biped', spec: 'tripo', out_format: 'glb' }, 'step3 rig v1.0 (cand 1115233n)', 'rig_v1.glb');
  await step('anim1', '/animations/retarget', { input: st.rig, animations: ['preset:biped:idle', 'preset:biped:greet_01'], out_format: 'glb', animate_in_place: true }, 'step3 retarget test: idle + greet_01', 'anim_test_idle_greet.glb');
  log('balance', JSON.stringify(await balance()));
  log('DONE');
} catch (e) { log('ERROR', String(e.message).slice(0, 400)); process.exitCode = 1; }
