// Background music (src/client/music.js) against a recording fake of the Web Audio API.
import test from 'node:test';
import assert from 'node:assert/strict';
import { createMusic, acquireMusic, releaseMusic, chordPool, MOODS, DEFAULT_VOLUME } from '../src/client/music.js';

class Param {
  constructor(v = 0) {
    this.value = v;
    this.events = [];
  }
  setValueAtTime(v, t) {
    this.events.push({ type: 'set', v, t });
    this.value = v;
    return this;
  }
  linearRampToValueAtTime(v, t) {
    this.events.push({ type: 'ramp', v, t });
    return this;
  }
  setTargetAtTime(v, t, tc) {
    this.events.push({ type: 'target', v, t, tc });
    return this;
  }
  cancelScheduledValues(t) {
    this.events.push({ type: 'cancel', t });
    return this;
  }
  /** Value of the latest setTargetAtTime, i.e. where the param is heading. */
  get heading() {
    for (let i = this.events.length - 1; i >= 0; i--) if (this.events[i].type === 'target') return this.events[i].v;
    return this.value;
  }
}

class Node {
  constructor(ctx, kind, params = {}) {
    this.ctx = ctx;
    this.kind = kind;
    this.outputs = [];
    this.wired = []; // every connection ever made, kept after disconnect for inspection
    this.toParam = false;
    for (const [k, v] of Object.entries(params)) this[k] = new Param(v);
    ctx.live.add(this);
    ctx.created.push(this);
  }
  connect(dest) {
    if (dest instanceof Param) this.toParam = true;
    this.outputs.push(dest);
    this.wired.push(dest);
    return dest;
  }
  disconnect() {
    this.outputs = [];
    this.ctx.live.delete(this);
  }
}

class Source extends Node {
  start(t = 0) {
    this.startAt = t;
    this.ctx.sources.add(this);
  }
  stop(t = 0) {
    this.stopAt = t;
  }
}

// state 'running' when autoplay is allowed or a gesture is in progress, as in a browser.
class FakeAudioContext {
  static instances = [];
  static autoplay = true;
  static gesture = false;
  constructor(opts) {
    this.opts = opts;
    this.sampleRate = 4000; // small buffers keep the generated reverb cheap
    this.currentTime = 0;
    this.state = FakeAudioContext.autoplay || FakeAudioContext.gesture ? 'running' : 'suspended';
    this.destination = { kind: 'destination' };
    this.live = new Set();
    this.created = [];
    this.sources = new Set();
    this.onstatechange = null;
    this.closed = false;
    FakeAudioContext.instances.push(this);
  }
  setState(s) {
    if (this.state === s) return;
    this.state = s;
    if (this.onstatechange) this.onstatechange();
  }
  resume() {
    if (FakeAudioContext.autoplay || FakeAudioContext.gesture) this.setState('running');
    return Promise.resolve();
  }
  suspend() {
    this.setState('suspended');
    return Promise.resolve();
  }
  close() {
    this.closed = true;
    this.setState('closed');
    return Promise.resolve();
  }
  advance(dt) {
    if (this.state !== 'running') return;
    this.currentTime += dt;
    for (const s of [...this.sources]) {
      if (s.stopAt != null && s.stopAt <= this.currentTime) {
        this.sources.delete(s);
        if (s.onended) s.onended();
      }
    }
  }
  createGain() {
    return new Node(this, 'gain', { gain: 1 });
  }
  createOscillator() {
    const o = new Source(this, 'osc', { frequency: 440, detune: 0 });
    o.type = 'sine';
    return o;
  }
  createBiquadFilter() {
    const f = new Node(this, 'biquad', { frequency: 350, Q: 1, gain: 0 });
    f.type = 'lowpass';
    return f;
  }
  createStereoPanner() {
    return new Node(this, 'panner', { pan: 0 });
  }
  createConvolver() {
    const c = new Node(this, 'convolver');
    c.buffer = null;
    c.normalize = true;
    return c;
  }
  createDelay(max) {
    const d = new Node(this, 'delay', { delayTime: 0 });
    d.maxDelay = max;
    return d;
  }
  createDynamicsCompressor() {
    return new Node(this, 'compressor', { threshold: -24, knee: 30, ratio: 12, attack: 0.003, release: 0.25 });
  }
  createBuffer(channels, length, sampleRate) {
    const data = Array.from({ length: channels }, () => new Float32Array(length));
    return { numberOfChannels: channels, length, sampleRate, getChannelData: (c) => data[c] };
  }
  createBufferSource() {
    const s = new Source(this, 'buffer');
    s.buffer = null;
    s.loop = false;
    return s;
  }
}

function harness({ autoplay = true, activation = true, seed = 7 } = {}) {
  FakeAudioContext.instances = [];
  FakeAudioContext.autoplay = autoplay;
  FakeAudioContext.gesture = false;
  const timeouts = [];
  const music = createMusic({
    AudioContext: FakeAudioContext,
    seed,
    setInterval: () => 1,
    clearInterval: () => {},
    setTimeout: (fn) => {
      timeouts.push(fn);
      return timeouts.length;
    },
    clearTimeout: (id) => {
      timeouts[id - 1] = null;
    },
    userActivation: () => activation,
  });
  const ctx = () => FakeAudioContext.instances[FakeAudioContext.instances.length - 1] || null;
  const flushTimeouts = () => {
    const list = timeouts.splice(0);
    for (const fn of list) if (fn) fn();
  };
  const run = (seconds, dt = 0.15) => {
    for (let t = 0; t < seconds; t += dt) {
      ctx().advance(dt);
      music.tick();
    }
  };
  return { music, ctx, flushTimeouts, run };
}

const flush = () => new Promise((resolve) => setImmediate(resolve));
const midiOf = (f) => 69 + 12 * Math.log2(f / 440);
const masterOf = (ctx) => ctx.created.find((n) => n.kind === 'gain' && n.wired.some((o) => o.kind === 'compressor'));
const oscs = (ctx, type) => ctx.created.filter((n) => n.kind === 'osc' && n.type === type && n.startAt != null);
// Carriers of the glass plucks: sines above LFO rate that do not modulate another oscillator.
const carriers = (ctx) =>
  oscs(ctx, 'sine').filter((o) => o.frequency.value > 20 && !o.wired.some((g) => g.toParam));

test('chord pools hold the chord tones inside the range', () => {
  const pool = chordPool(MOODS.dusk.chords[0], [69, 81]);
  assert.deepEqual(pool, [69, 73, 74, 76, 78, 81]); // A C# D E F# A
  for (const mood of Object.values(MOODS)) {
    for (const chord of mood.chords) assert.ok(chordPool(chord, mood.arp).length >= 6, `${chord.name} has room for a melody`);
  }
});

test('without Web Audio the music reports unsupported and does nothing', () => {
  const music = createMusic({ AudioContext: null });
  assert.equal(music.state(), 'unsupported');
  music.setEnabled(true);
  music.setActive(true);
  music.unlock();
  music.tick();
  assert.equal(music.cue('turn'), false);
  assert.equal(music.state(), 'unsupported');
});

test('the music waits for a gesture, then fades in with the chords of the mood', () => {
  const h = harness({ autoplay: false, activation: false });
  const states = [];
  h.music.subscribe((s) => states.push(s));
  h.music.setActive(true);
  assert.equal(h.music.state(), 'off');
  h.music.setEnabled(true);
  assert.equal(h.music.state(), 'locked');
  assert.equal(FakeAudioContext.instances.length, 0, 'no audio context before a gesture');

  FakeAudioContext.gesture = true;
  h.music.unlock();
  FakeAudioContext.gesture = false;
  assert.equal(h.music.state(), 'playing');
  assert.deepEqual(states, ['locked', 'playing']);
  const ctx = h.ctx();
  assert.equal(ctx.opts.latencyHint, 'playback');
  assert.ok(Math.abs(masterOf(ctx).gain.heading - 1.6 * DEFAULT_VOLUME ** 2) < 1e-9, 'fades in to the volume');

  // The first chord: two detuned saws per pad note, a triangle on the root.
  const saws = oscs(ctx, 'sawtooth');
  const first = MOODS.dusk.chords[0];
  assert.equal(saws.length, first.pad.length * 2);
  assert.deepEqual([...new Set(saws.map((o) => Math.round(midiOf(o.frequency.value))))].sort((a, b) => a - b), first.pad);
  assert.ok(saws.every((o) => Math.abs(o.detune.value) >= 6 && Math.abs(o.detune.value) <= 10), 'gently detuned');
  const bass = oscs(ctx, 'triangle');
  assert.equal(bass.length, 1);
  assert.equal(Math.round(midiOf(bass[0].frequency.value)), first.bass);
  // Volume follows a perceptual curve.
  h.music.setVolume(1);
  assert.ok(Math.abs(masterOf(ctx).gain.heading - 1.6) < 1e-9);
  h.music.setVolume(0);
  assert.equal(masterOf(ctx).gain.heading, 0);
  h.music.dispose();
});

test('a page that was already used starts the music without waiting', async () => {
  const h = harness({ autoplay: false, activation: true });
  h.music.setEnabled(true);
  h.music.setActive(true);
  await flush();
  // The browser still holds the context; the next gesture releases it.
  assert.equal(h.music.state(), 'locked');
  FakeAudioContext.gesture = true;
  h.music.unlock();
  FakeAudioContext.gesture = false;
  await flush();
  assert.equal(h.music.state(), 'playing');
  assert.equal(FakeAudioContext.instances.length, 1, 'one context for the page');
  h.music.dispose();
});

test('glass notes follow the activity and stay inside the chord', () => {
  const count = (activity) => {
    const h = harness({ seed: 11 });
    h.music.setEnabled(true);
    h.music.setActive(true);
    h.music.setActivity(activity);
    h.run(180);
    const ctx = h.ctx();
    // Every carrier note belongs to the chord that was sounding when it started.
    const chordStarts = [...new Set(oscs(ctx, 'sawtooth').map((o) => o.startAt))].sort((a, b) => a - b);
    for (const c of carriers(ctx)) {
      const m = midiOf(c.frequency.value);
      assert.ok(Math.abs(m - Math.round(m)) < 1e-9, 'tuned to a note');
      const start = chordStarts.filter((t) => t <= c.startAt + 0.02).pop();
      const tones = [...oscs(ctx, 'sawtooth'), ...oscs(ctx, 'triangle')]
        .filter((o) => o.startAt === start)
        .map((o) => Math.round(midiOf(o.frequency.value)));
      const classes = new Set(tones.map((n) => n % 12));
      assert.ok(classes.has(Math.round(m) % 12), `note ${Math.round(m)} fits the chord ${tones.join(' ')}`);
    }
    const n = h.music.stats().plucks;
    h.music.dispose();
    return n;
  };
  const idle = count(0);
  const busy = count(1);
  assert.ok(idle > 5, `a few notes when idle (${idle})`);
  assert.ok(busy > idle * 2.5, `many more when busy (${busy} vs ${idle})`);
});

test('a new look changes the mood at the next chord', () => {
  const h = harness();
  h.music.setEnabled(true);
  h.music.setActive(true);
  h.run(3);
  const before = oscs(h.ctx(), 'sawtooth').length;
  h.music.setMood('night');
  assert.equal(h.music.mood(), 'night');
  h.run(12);
  const saws = oscs(h.ctx(), 'sawtooth').slice(before);
  const starts = [...new Set(saws.map((o) => o.startAt))].sort((a, b) => a - b);
  assert.ok(starts.length >= 2, 'two new chords');
  const night = MOODS.night;
  const firstNotes = saws.filter((o) => o.startAt === starts[0]).map((o) => Math.round(midiOf(o.frequency.value)));
  assert.deepEqual([...new Set(firstNotes)].sort((a, b) => a - b), night.chords[0].pad, 'starts on the first night chord');
  // Night is slower: a chord lasts eight beats at its own tempo.
  assert.ok(Math.abs(starts[1] - starts[0] - (8 * 60) / night.bpm) < 1e-6);
  h.music.dispose();
});

test('hidden views fade the music out and suspend the clock; any visible view brings it back', async () => {
  const h = harness();
  h.music.setEnabled(true);
  h.music.setActive(true, 'a');
  h.music.setActive(true, 'b');
  h.run(2);
  const ctx = h.ctx();
  h.music.setActive(false, 'a');
  assert.equal(h.music.state(), 'playing', 'another view is still visible');
  h.music.setActive(false, 'b');
  assert.equal(h.music.state(), 'paused');
  assert.equal(masterOf(ctx).gain.heading, 0, 'fades out');
  h.flushTimeouts();
  assert.equal(ctx.state, 'suspended', 'the audio clock stops');
  const plucks = h.music.stats().plucks;
  h.run(5);
  assert.equal(h.music.stats().plucks, plucks, 'nothing is scheduled while paused');
  h.music.setActive(true, 'b');
  await flush();
  assert.equal(h.music.state(), 'playing');
  assert.ok(masterOf(ctx).gain.heading > 0, 'fades back in');
  // Turning the music off works the same way and is reported as off.
  h.music.setEnabled(false);
  assert.equal(h.music.state(), 'off');
  h.flushTimeouts();
  assert.equal(ctx.state, 'suspended');
  h.music.dispose();
});

test('a finished turn rings a chime at most every few seconds', () => {
  const h = harness();
  assert.equal(h.music.cue('turn'), false, 'silent while off');
  h.music.setEnabled(true);
  h.music.setActive(true);
  h.run(1);
  assert.equal(h.music.cue('turn'), true);
  assert.equal(h.music.cue('turn'), false, 'rate limited');
  h.run(6);
  assert.equal(h.music.cue('turn'), true);
  assert.equal(h.music.stats().cues, 2);
  h.music.dispose();
});

test('long sessions release every finished voice', () => {
  const h = harness({ seed: 3 });
  h.music.setEnabled(true);
  h.music.setActive(true);
  const looks = ['dusk', 'day', 'night'];
  for (let minute = 0; minute < 10; minute++) {
    h.music.setActivity(minute % 2 ? 1 : 0.2);
    h.music.setMood(looks[minute % 3]);
    h.run(60);
  }
  const ctx = h.ctx();
  const s = h.music.stats();
  assert.ok(s.chords > 60 && s.plucks > 200, `played for ten minutes (${s.chords} chords, ${s.plucks} notes)`);
  assert.ok(s.voices < 40, `voices still sounding: ${s.voices}`);
  assert.ok(ctx.live.size < 260, `audio nodes alive: ${ctx.live.size}`);
  h.music.dispose();
  assert.equal(ctx.closed, true, 'dispose closes the context');
});

test('every view on the page shares one engine, closed with the last view', () => {
  FakeAudioContext.instances = [];
  FakeAudioContext.autoplay = true;
  const opts = { AudioContext: FakeAudioContext, setInterval: () => 1, clearInterval: () => {}, setTimeout: () => 1, clearTimeout: () => {}, userActivation: () => true };
  const a = acquireMusic(opts);
  const b = acquireMusic(opts);
  assert.equal(a, b);
  a.setEnabled(true);
  a.setActive(true, 'view-a');
  b.setActive(true, 'view-b');
  assert.equal(a.state(), 'playing');
  releaseMusic(a, 'view-a');
  assert.equal(b.state(), 'playing', 'the other view keeps it playing');
  const ctx = FakeAudioContext.instances[0];
  releaseMusic(b, 'view-b');
  assert.equal(ctx.closed, true);
  const c = acquireMusic(opts);
  assert.notEqual(c, a, 'a later view gets a fresh engine');
  releaseMusic(c);
});
