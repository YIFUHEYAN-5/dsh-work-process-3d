// Background music for the 3D view: a calm, slowly changing ambient score synthesised live with
// the Web Audio API. Nothing is downloaded or recorded, and the score never repeats exactly.
//
// Voices
//   pad    four-note chords, two detuned saw oscillators per note, through one low-pass filter
//          that breathes with a very slow LFO; chords cross-fade every two bars
//   bass   a soft triangle on the chord root
//   glass  FM bell plucks on an eighth-note grid: how often they play follows the session's
//          activity, and the melody walks through the notes of the current chord
//   air    faint band-passed noise
// Effects: a generated stereo hall reverb, a tempo-synced feedback delay and a gentle
// compressor in front of the output. Each scene look has its own mood (key, tempo, colour).
//
// Browsers start audio only after a user gesture. The engine reports 'locked' until unlock()
// runs inside one (the view calls it on pointer and key presses), fades out and suspends the
// audio clock while no view is visible, and is shared by every view on the page.

// Notes are scheduled this far ahead of the audio clock, so a throttled timer (about once a
// second in a covered window) still keeps the score going.
const LOOKAHEAD = 1.1;
const TICK_MS = 150;
const FADE_IN = 0.9; // setTargetAtTime time constants (about 3× is the full fade)
const FADE_OUT = 0.35;
const SUSPEND_AFTER_MS = 1600;
const CUE_GAP = 5; // seconds between two turn chimes at most

export const DEFAULT_VOLUME = 0.5;

// Mix levels. The output gain is volume² × OUTPUT_GAIN (a perceptual volume curve); the
// compressor behind it keeps peaks in check.
const PAD_LEVEL = 0.022;
const BASS_LEVEL = 0.085;
const PLUCK_LEVEL = 0.075;
const AIR_LEVEL = 0.0035;
const OUTPUT_GAIN = 1.6;

const midiHz = (n) => 440 * Math.pow(2, (n - 69) / 12);
const clamp01 = (v) => Math.min(1, Math.max(0, Number(v) || 0));

/**
 * Moods per scene look. Each chord: bass note and pad voicing (MIDI note numbers); the glass
 * melody uses the chord's pitch classes inside `arp`. idle/busy = chance of a pluck per eighth
 * note when the session is quiet or fully busy.
 */
export const MOODS = {
  // Blue hour: D major with a lydian colour, unhurried.
  dusk: {
    bpm: 66,
    cutoff: 1250,
    arp: [69, 90],
    idle: 0.09,
    busy: 0.38,
    chords: [
      { name: 'Dmaj9', bass: 38, pad: [57, 61, 64, 66] },
      { name: 'Bm9', bass: 35, pad: [54, 57, 61, 62] },
      { name: 'Gmaj9#11', bass: 43, pad: [59, 62, 66, 73] },
      { name: 'Em9', bass: 40, pad: [55, 59, 62, 66] },
    ],
  },
  // Daylight: C lydian, a little quicker and brighter.
  day: {
    bpm: 74,
    cutoff: 1850,
    arp: [72, 91],
    idle: 0.11,
    busy: 0.42,
    chords: [
      { name: 'Cmaj9', bass: 36, pad: [55, 59, 62, 64] },
      { name: 'Am9', bass: 33, pad: [55, 59, 60, 64] },
      { name: 'Fmaj9', bass: 41, pad: [57, 60, 64, 67] },
      { name: 'G6/9', bass: 43, pad: [59, 62, 64, 69] },
    ],
  },
  // Night: A dorian, slow and dark.
  night: {
    bpm: 56,
    cutoff: 860,
    arp: [64, 86],
    idle: 0.07,
    busy: 0.3,
    chords: [
      { name: 'Am(add9)', bass: 33, pad: [52, 57, 59, 60] },
      { name: 'Fmaj7#11', bass: 41, pad: [53, 57, 60, 64] },
      { name: 'G6', bass: 43, pad: [55, 59, 62, 64] },
      { name: 'Em9', bass: 40, pad: [55, 59, 62, 66] },
    ],
  },
};
export const DEFAULT_MOOD = 'dusk';

/** Notes in `range` whose pitch class belongs to the chord (bass and pad). */
export function chordPool(chord, range) {
  const classes = new Set([chord.bass, ...chord.pad].map((n) => ((n % 12) + 12) % 12));
  const out = [];
  for (let n = range[0]; n <= range[1]; n++) if (classes.has(n % 12)) out.push(n);
  return out;
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function defaultActivation() {
  try {
    const ua = typeof navigator !== 'undefined' ? navigator.userActivation : null;
    return !!(ua && ua.hasBeenActive);
  } catch {
    return false;
  }
}

/**
 * opts (all optional, for tests): AudioContext (constructor; null = unsupported), seed,
 * setInterval/clearInterval/setTimeout/clearTimeout, userActivation() → boolean.
 *
 * Returns { state(), subscribe(fn), setEnabled(on), enabled(), setVolume(v), volume(),
 * setMood(id), mood(), setActivity(a), setActive(on, key), unlock(), cue(kind), tick(),
 * stats(), dispose() }.
 */
export function createMusic(opts = {}) {
  const Ctor =
    opts.AudioContext !== undefined
      ? opts.AudioContext
      : typeof globalThis !== 'undefined'
        ? globalThis.AudioContext || globalThis.webkitAudioContext || null
        : null;
  const every = opts.setInterval || ((fn, ms) => setInterval(fn, ms));
  const stopEvery = opts.clearInterval || ((id) => clearInterval(id));
  const later = opts.setTimeout || ((fn, ms) => setTimeout(fn, ms));
  const cancelLater = opts.clearTimeout || ((id) => clearTimeout(id));
  const activation = opts.userActivation || defaultActivation;
  const rnd = mulberry32(opts.seed != null ? opts.seed : (Date.now() ^ 0x5eed) >>> 0);

  let enabled = false;
  let volume = DEFAULT_VOLUME;
  let unlocked = false;
  let disposed = false;
  const activeKeys = new Set();
  let state = Ctor ? 'off' : 'unsupported';
  const listeners = new Set();

  let ctx = null;
  let g = null;
  let timer = null;
  let suspendTimer = null;
  let selfSuspended = false;
  let activity = 0;

  let mood = MOODS[DEFAULT_MOOD];
  let pending = null;
  let chordIndex = -1;
  let chordEnd = -1; // start time of the next chord to schedule
  let nextStep = -1; // time of the next eighth note
  let spans = []; // scheduled chords: { start, end, chord, pool }
  let melody = -1; // index into the current pool
  let lastPool = null;
  let lastCue = -Infinity;
  const counts = { chords: 0, pads: 0, basses: 0, plucks: 0, cues: 0, voices: 0 };

  const beat = () => 60 / mood.bpm;

  function setState(next) {
    if (state === next) return;
    state = next;
    for (const fn of [...listeners]) {
      try {
        fn(state);
      } catch {
        // A listener error must not stop the music.
      }
    }
  }

  // --- audio graph ---------------------------------------------------------------------------

  function gainNode(v) {
    const n = ctx.createGain();
    n.gain.value = v;
    return n;
  }
  function send(from, to, level) {
    const n = gainNode(level);
    from.connect(n);
    n.connect(to);
    return n;
  }
  function lowpass(freq, q = 0.7) {
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = freq;
    f.Q.value = q;
    return f;
  }

  /** Stereo hall impulse: decaying noise that darkens over its tail. */
  function impulse(seconds, decay) {
    const rate = ctx.sampleRate || 48000;
    const len = Math.max(1, Math.floor(rate * seconds));
    const buf = ctx.createBuffer(2, len, rate);
    const pre = Math.floor(rate * 0.018);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      let lp = 0;
      for (let i = pre; i < len; i++) {
        const x = i / len;
        const k = 0.35 + 0.6 * x; // stronger smoothing later: the tail loses its highs
        lp = lp * k + (rnd() * 2 - 1) * (1 - k);
        d[i] = lp * Math.pow(1 - x, decay);
      }
    }
    return buf;
  }

  function noiseBuffer(seconds) {
    const rate = ctx.sampleRate || 48000;
    const len = Math.max(1, Math.floor(rate * seconds));
    const buf = ctx.createBuffer(1, len, rate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = rnd() * 2 - 1;
    return buf;
  }

  function buildGraph() {
    const G = {};
    G.master = gainNode(0);
    G.comp = ctx.createDynamicsCompressor();
    G.comp.threshold.value = -18;
    G.comp.knee.value = 10;
    G.comp.ratio.value = 3;
    G.comp.attack.value = 0.02;
    G.comp.release.value = 0.35;
    G.master.connect(G.comp);
    G.comp.connect(ctx.destination);

    G.dry = gainNode(0.8);
    G.dry.connect(G.master);
    G.verbIn = gainNode(1);
    G.verb = ctx.createConvolver();
    G.verb.normalize = true;
    G.verb.buffer = impulse(4.2, 2.6);
    G.verbOut = gainNode(0.55);
    G.verbIn.connect(G.verb);
    G.verb.connect(G.verbOut);
    G.verbOut.connect(G.master);

    G.delayIn = gainNode(1);
    G.delay = ctx.createDelay(2.0);
    G.delay.delayTime.value = beat() * 0.75;
    G.fbFilter = lowpass(2400, 0.5);
    G.fb = gainNode(0.32);
    G.delayIn.connect(G.delay);
    G.delay.connect(G.fbFilter);
    G.fbFilter.connect(G.fb);
    G.fb.connect(G.delay);
    G.delayOut = gainNode(0.5);
    G.fbFilter.connect(G.delayOut);
    G.delayOut.connect(G.master);
    send(G.delayOut, G.verbIn, 0.35);

    G.padFilter = lowpass(mood.cutoff, 0.5);
    G.padBus = gainNode(1);
    G.padFilter.connect(G.padBus);
    send(G.padBus, G.dry, 1);
    send(G.padBus, G.verbIn, 0.7);
    send(G.padBus, G.delayIn, 0.08);
    G.lfo = ctx.createOscillator();
    G.lfo.type = 'sine';
    G.lfo.frequency.value = 0.05;
    G.lfoDepth = gainNode(mood.cutoff * 0.28);
    G.lfo.connect(G.lfoDepth);
    G.lfoDepth.connect(G.padFilter.frequency);
    G.lfo.start();

    G.bassFilter = lowpass(380, 0.6);
    G.bassBus = gainNode(1);
    G.bassFilter.connect(G.bassBus);
    send(G.bassBus, G.dry, 1);
    send(G.bassBus, G.verbIn, 0.15);

    G.pluckBus = gainNode(1);
    send(G.pluckBus, G.dry, 0.6);
    send(G.pluckBus, G.delayIn, 0.45);
    send(G.pluckBus, G.verbIn, 0.8);

    G.air = ctx.createBufferSource();
    G.air.buffer = noiseBuffer(2);
    G.air.loop = true;
    G.airFilter = ctx.createBiquadFilter();
    G.airFilter.type = 'bandpass';
    G.airFilter.frequency.value = 5200;
    G.airFilter.Q.value = 0.8;
    G.airGain = gainNode(AIR_LEVEL);
    G.air.connect(G.airFilter);
    G.airFilter.connect(G.airGain);
    send(G.airGain, G.verbIn, 1);
    send(G.airGain, G.dry, 0.4);
    G.air.start();
    return G;
  }

  // --- voices --------------------------------------------------------------------------------

  /** Disconnects the listed nodes once every source in `sources` has ended. */
  function cleanup(sources, nodes) {
    let left = sources.length;
    counts.voices += 1;
    for (const s of sources) {
      s.onended = () => {
        left -= 1;
        if (left > 0) return;
        counts.voices -= 1;
        for (const n of [...sources, ...nodes]) {
          try {
            n.disconnect();
          } catch {
            // already disconnected
          }
        }
      };
    }
  }

  function panner(v) {
    if (typeof ctx.createStereoPanner !== 'function') return null;
    const p = ctx.createStereoPanner();
    p.pan.value = v;
    return p;
  }

  function padNote(n, t, end, attack, release) {
    const env = ctx.createGain();
    env.gain.setValueAtTime(0, t);
    env.gain.linearRampToValueAtTime(PAD_LEVEL, t + attack);
    env.gain.setValueAtTime(PAD_LEVEL, end);
    env.gain.setTargetAtTime(0, end, release / 3);
    env.connect(g.padFilter);
    const sources = [];
    const nodes = [env];
    for (const side of [-1, 1]) {
      const o = ctx.createOscillator();
      o.type = 'sawtooth';
      o.frequency.value = midiHz(n);
      o.detune.value = side * (6 + rnd() * 4);
      const p = panner(side * (0.28 + rnd() * 0.25));
      if (p) {
        o.connect(p);
        p.connect(env);
        nodes.push(p);
      } else {
        o.connect(env);
      }
      o.start(t);
      o.stop(end + release * 1.6);
      sources.push(o);
    }
    cleanup(sources, nodes);
    counts.pads += 1;
  }

  function bassNote(n, t, end) {
    const env = ctx.createGain();
    env.gain.setValueAtTime(0, t);
    env.gain.linearRampToValueAtTime(BASS_LEVEL, t + 1.4);
    env.gain.setValueAtTime(BASS_LEVEL, end);
    env.gain.setTargetAtTime(0, end, 0.8);
    env.connect(g.bassFilter);
    const o = ctx.createOscillator();
    o.type = 'triangle';
    o.frequency.value = midiHz(n);
    o.connect(env);
    o.start(t);
    o.stop(end + 4);
    cleanup([o], [env]);
    counts.basses += 1;
  }

  /** FM bell: sine carrier, sine modulator at 3× with a decaying index. */
  function pluck(n, t, vel, pan) {
    const f = midiHz(n);
    const car = ctx.createOscillator();
    car.type = 'sine';
    car.frequency.value = f;
    const mod = ctx.createOscillator();
    mod.type = 'sine';
    mod.frequency.value = f * 3;
    const index = ctx.createGain();
    index.gain.setValueAtTime(f * 2.2 * vel, t);
    index.gain.setTargetAtTime(f * 0.06, t, 0.18);
    mod.connect(index);
    index.connect(car.frequency);
    const amp = ctx.createGain();
    amp.gain.setValueAtTime(0, t);
    amp.gain.linearRampToValueAtTime(PLUCK_LEVEL * vel, t + 0.006);
    amp.gain.setTargetAtTime(0, t + 0.006, 0.55);
    car.connect(amp);
    const nodes = [index, amp];
    const p = panner(pan);
    if (p) {
      amp.connect(p);
      p.connect(g.pluckBus);
      nodes.push(p);
    } else {
      amp.connect(g.pluckBus);
    }
    car.start(t);
    mod.start(t);
    car.stop(t + 3.4);
    mod.stop(t + 3.4);
    cleanup([car, mod], nodes);
    counts.plucks += 1;
  }

  // --- score ---------------------------------------------------------------------------------

  function applyMood(next, t) {
    mood = next;
    lastPool = null;
    if (!g) return;
    g.padFilter.frequency.setTargetAtTime(mood.cutoff * (1 + 0.25 * activity), t, 1.6);
    g.lfoDepth.gain.setTargetAtTime(mood.cutoff * 0.28, t, 1.6);
    g.delay.delayTime.setTargetAtTime(beat() * 0.75, t, 0.6);
  }

  function playChord(chord, t, len) {
    const attack = Math.min(2.6, len * 0.4);
    const end = t + len;
    for (const n of chord.pad) padNote(n, t, end, attack, 3.4);
    bassNote(chord.bass, t, end);
    spans.push({ start: t, end, chord, pool: chordPool(chord, mood.arp) });
    counts.chords += 1;
  }

  function spanAt(t) {
    for (let i = spans.length - 1; i >= 0; i--) if (spans[i].start <= t + 1e-9 && t < spans[i].end) return spans[i];
    return null;
  }

  function walk(pool) {
    if (pool !== lastPool) {
      // Carry the melody over to the nearest note of the new chord.
      const prev = lastPool && melody >= 0 ? lastPool[melody] : pool[Math.floor(pool.length / 2)];
      let best = 0;
      for (let i = 1; i < pool.length; i++) if (Math.abs(pool[i] - prev) < Math.abs(pool[best] - prev)) best = i;
      melody = best;
      lastPool = pool;
    }
    const r = rnd();
    const move = r < 0.12 ? -2 : r < 0.4 ? -1 : r < 0.52 ? 0 : r < 0.84 ? 1 : 2;
    melody = Math.min(pool.length - 1, Math.max(0, melody + move));
    // Drift back toward the middle of the range so the line never parks at an edge.
    if (melody === 0 || melody === pool.length - 1) melody += melody === 0 ? 1 : -1;
    melody = Math.min(pool.length - 1, Math.max(0, melody));
    return pool[melody];
  }

  function stepNote(t) {
    const span = spanAt(t);
    if (!span || !span.pool.length) return;
    const pos = Math.round((t - span.start) / (beat() / 2)) % 8; // eighths within a bar
    const accent = pos === 0 ? 1.45 : pos === 4 ? 1.15 : pos % 2 ? 0.8 : 1;
    const chance = (mood.idle + (mood.busy - mood.idle) * activity) * accent;
    if (rnd() >= chance) return;
    const n = walk(span.pool);
    const vel = Math.min(1, 0.5 + 0.35 * rnd() + (pos === 0 ? 0.1 : 0));
    const at = t + (rnd() - 0.5) * 0.016;
    pluck(n, at, vel, (rnd() * 2 - 1) * 0.6);
    // Now and then a quiet answer a third or a fifth above, never across a chord change.
    if (rnd() < 0.12 && at + beat() * 0.5 < span.end - 0.05) {
      const up = span.pool.find((m) => m >= n + 3 && m <= n + 7);
      if (up) pluck(up, at + beat() * 0.5, vel * 0.5, (rnd() * 2 - 1) * 0.6);
    }
  }

  function schedule() {
    if (!ctx || !g || ctx.state !== 'running') return;
    const now = ctx.currentTime;
    const horizon = now + LOOKAHEAD;
    // After a pause the grid restarts just ahead of the clock instead of catching up.
    if (chordEnd < 0 || chordEnd < now - 0.05) {
      chordEnd = now + 0.1;
      spans = spans.filter((s) => s.end > now);
    }
    if (nextStep < now - 0.05) {
      nextStep = Math.max(now + 0.05, chordEnd > now ? Math.min(chordEnd, now + 0.3) : now + 0.3);
    }
    while (chordEnd < horizon) {
      if (pending) {
        // A new mood starts on its own first chord.
        applyMood(pending, chordEnd);
        pending = null;
        chordIndex = -1;
      }
      chordIndex = (chordIndex + 1) % mood.chords.length;
      const len = beat() * 8;
      playChord(mood.chords[chordIndex], chordEnd, len);
      chordEnd += len;
    }
    while (nextStep < horizon) {
      stepNote(nextStep);
      nextStep += beat() / 2;
    }
    spans = spans.filter((s) => s.end > now - 1);
  }

  // --- lifecycle -----------------------------------------------------------------------------

  function clearSuspend() {
    if (suspendTimer != null) {
      cancelLater(suspendTimer);
      suspendTimer = null;
    }
  }

  function stopTimer() {
    if (timer != null) {
      stopEvery(timer);
      timer = null;
    }
  }

  function fadeTo(level, tc) {
    if (!g) return;
    const now = ctx.currentTime;
    const p = g.master.gain;
    p.cancelScheduledValues(now);
    p.setValueAtTime(p.value, now);
    p.setTargetAtTime(level, now, tc);
  }

  function start() {
    if (disposed || !ctx || ctx.state !== 'running') return;
    clearSuspend();
    if (timer == null) {
      timer = every(schedule, TICK_MS);
      schedule();
    }
    fadeTo(OUTPUT_GAIN * volume * volume, FADE_IN);
    setState('playing');
  }

  function pause(next) {
    stopTimer();
    if (ctx && g && ctx.state === 'running') {
      fadeTo(0, FADE_OUT);
      clearSuspend();
      suspendTimer = later(() => {
        suspendTimer = null;
        if (ctx && !(enabled && activeKeys.size) && ctx.state === 'running') {
          selfSuspended = true;
          try {
            ctx.suspend();
          } catch {
            selfSuspended = false;
          }
        }
      }, SUSPEND_AFTER_MS);
    }
    setState(next);
  }

  function update() {
    if (disposed) return;
    if (!Ctor) {
      setState('unsupported');
      return;
    }
    if (!enabled) return pause('off');
    if (!activeKeys.size) return pause('paused');
    if (!ctx) {
      // No context before a gesture: the browser would only keep it suspended.
      if (!unlocked && !activation()) {
        setState('locked');
        return;
      }
      try {
        ctx = new Ctor({ latencyHint: 'playback' });
        g = buildGraph();
      } catch {
        ctx = null;
        g = null;
        setState('unsupported');
        return;
      }
      ctx.onstatechange = () => {
        if (disposed || !ctx) return;
        if (ctx.state === 'running') {
          selfSuspended = false;
          if (enabled && activeKeys.size) start();
        } else if (state === 'playing' && enabled && activeKeys.size) {
          // The browser or the system stopped the audio (device change, autoplay rules).
          setState('locked');
        }
      };
    }
    if (ctx.state === 'running') {
      start();
      return;
    }
    if (ctx.state === 'closed') {
      setState('unsupported');
      return;
    }
    // A context this engine suspended itself resumes without a gesture; anything else waits
    // for one, which the view reports as 'locked'.
    if (!selfSuspended) setState('locked');
    let resumed;
    try {
      resumed = ctx.resume();
    } catch {
      resumed = null;
    }
    const after = () => {
      if (disposed || !ctx || !(enabled && activeKeys.size)) return;
      if (ctx.state === 'running') start();
      else setState('locked');
    };
    if (resumed && typeof resumed.then === 'function') resumed.then(after, after);
    else after();
  }

  return {
    state: () => state,
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    enabled: () => enabled,
    setEnabled(on) {
      enabled = !!on;
      update();
    },
    volume: () => volume,
    setVolume(v) {
      volume = clamp01(v);
      if (g && state === 'playing') fadeTo(OUTPUT_GAIN * volume * volume, 0.08);
    },
    mood: () => Object.keys(MOODS).find((k) => MOODS[k] === (pending || mood)) || DEFAULT_MOOD,
    /** Switches at the next chord, so the change is a smooth modulation, not a cut. */
    setMood(id) {
      const next = MOODS[id];
      if (!next) return;
      if (next === mood) pending = null;
      else if (!ctx || !g) {
        mood = next;
        lastPool = null;
      } else pending = next;
    },
    /** 0..1, how busy the session is: more glass notes and a brighter pad. */
    setActivity(a) {
      const next = clamp01(a);
      if (Math.abs(next - activity) < 0.02) return;
      activity = next;
      if (g && ctx) {
        const now = ctx.currentTime;
        g.padFilter.frequency.setTargetAtTime(mood.cutoff * (1 + 0.25 * activity), now, 1.5);
        g.airGain.gain.setTargetAtTime(AIR_LEVEL * (1 + activity), now, 1.5);
      }
    },
    /** A view reports whether it is visible; the music plays while any view is. */
    setActive(on, key = 'view') {
      if (on) activeKeys.add(key);
      else activeKeys.delete(key);
      update();
    },
    /** Call from a pointer or key handler: lets the browser start audio. */
    unlock() {
      if (unlocked && (!ctx || ctx.state === 'running')) return;
      unlocked = true;
      if (enabled && activeKeys.size) update();
    },
    /** A short chime ('turn' = a turn finished), at most one every few seconds. */
    cue(kind = 'turn') {
      if (state !== 'playing' || !ctx || !g || kind !== 'turn') return false;
      const now = ctx.currentTime;
      if (now - lastCue < CUE_GAP) return false;
      lastCue = now;
      const span = spanAt(now) || spans[spans.length - 1];
      const chord = span ? span.chord : mood.chords[0];
      let root = chord.bass;
      while (root < 74) root += 12;
      pluck(root, now + 0.04, 0.62, -0.15);
      pluck(root + 7, now + 0.04 + beat() * 0.5, 0.5, 0.15);
      counts.cues += 1;
      return true;
    },
    /** Runs the scheduler once (the interval does this while playing). */
    tick: () => schedule(),
    stats: () => ({ ...counts, chord: chordIndex >= 0 ? mood.chords[chordIndex].name : null }),
    dispose() {
      if (disposed) return;
      disposed = true;
      stopTimer();
      clearSuspend();
      listeners.clear();
      if (ctx) {
        try {
          ctx.close();
        } catch {
          // ignore
        }
      }
      ctx = null;
      g = null;
      state = 'off';
    },
  };
}

// One engine per page, shared by every mounted view.
let shared = null;
let users = 0;

export function acquireMusic(opts) {
  if (!shared) {
    shared = createMusic(opts);
    users = 0;
  }
  users += 1;
  return shared;
}

/** Releases a view's hold; `key` is the key it passed to setActive. */
export function releaseMusic(music, key = 'view') {
  if (!music || music !== shared) return;
  music.setActive(false, key);
  users = Math.max(0, users - 1);
  if (!users) {
    shared.dispose();
    shared = null;
  }
}
