// The other 8 preset animations on the rig from rig.mjs (max 5 per retarget task), then download to raw/. node whale/tripo/anims.mjs [--yes]
// Resumable via rig_state.json; a missing task is only created (and paid for) with --yes. No URLs or keys are printed.
import fs from 'node:fs';
import { balance, create, wait, download } from './client.mjs';
const STATE = new URL('./rig_state.json', import.meta.url);
const st = JSON.parse(fs.readFileSync(STATE, 'utf8'));
const save = () => fs.writeFileSync(STATE, JSON.stringify(st, null, 1));
const log = (...a) => console.log(new Date().toISOString(), ...a);
const YES = process.argv.includes('--yes'), NEED_YES = 'rig_state.json 里没有这个任务：新建 Tripo 任务会消耗积分，确认请加 --yes：';
const BATCHES = {
  anim2: ['laugh_01', 'angry_01', 'scared_01', 'fold_arms', 'scratch'],
  anim3: ['look_around', 'heart_pose', 'bow'],
};
async function step(key, names) {
  if (!st[key]) { if (!YES) throw new Error(NEED_YES + key); st[key] = await create('/animations/retarget', { input: st.rig, animations: names.map(n => 'preset:biped:' + n), out_format: 'glb', animate_in_place: true }, 'step3b retarget: ' + names.join(' + ')); save(); }
  log(key, 'task', st[key], names.join(','));
  const t = await wait(st[key], { interval: 6000, timeout: 25 * 60000 });
  log(key, t.status, 'progress', t.progress, 'credits', t.credits_consumed, t.error_code || '', (t.error_message || '').slice(0, 200));
  if (t.status !== 'success') throw new Error(key + ' ' + t.status);
  st[key + 'File'] = await download(t.output.model_url, 'anim_' + key + '.glb'); save(); log(key, 'saved', st[key + 'File']);
}
try {
  log('balance', JSON.stringify(await balance()));
  for (const [k, v] of Object.entries(BATCHES)) await step(k, v);
  log('balance', JSON.stringify(await balance()));
  log('DONE');
} catch (e) { log('ERROR', String(e.message).slice(0, 400)); process.exitCode = 1; }
