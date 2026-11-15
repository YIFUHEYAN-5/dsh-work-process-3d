import * as THREE from 'three';
import { Polyline, clamp, lerp, easeInOut, angleDelta } from './util.js';
import { PORT_R, RETRACT_R, LIFT, WAFER_Y, LOCK_THETA, OUT_THETA } from './cell.js';
import { PRODUCTIVE_KINDS, STATION_INFO, MACHINE_INFO } from '../../model/stations.js';

/*
 * The director turns model snapshots into physical motion. Every tool call
 * becomes one wafer: dispenser → inbound air track → load lock → central
 * robot → station port (processed while the call runs) → robot → unload lock
 * → outbound track → FOUP of the turn it belongs to → gantry → stocker nest.
 */

const SPACING = 0.34; // minimum distance between wafers on a track
const EDGE = 0.17; // clearance a wafer needs to pass a door
const ACC = 4;
const VMAX = 2.4;
const CYCLE = 0.55; // load-lock pump / vent time
const MIN_DWELL = 0.9; // minimum time a wafer spends at its station
const LEVEL = 0.03; // stacking pitch at a station port
const LEVELS = 5;
const SLIDE = -0.006; // fork height that slides under a resting wafer
const MAX_INFLIGHT = 12;
const XFER = 0.4;
const FORCE_SHIP = 3;
const HOME_AFTER = 1.5;
const NEST_HISTORY = 9;

const AMBER = new THREE.Color(0xffb020);
const GREEN = new THREE.Color(0x34d17a);

export const lookOf = (call, kind = call.kind) => (call.status === 'error' ? 'bad' : PRODUCTIVE_KINDS.has(kind) ? 'gold' : 'normal');

/** Looks for the wafers of a turn, filling calls that dropped out of the state window. */
export function looksForTurn(turn, calls) {
  const known = [];
  let bad = 0;
  let gold = 0;
  let mine = 0;
  for (const c of calls) {
    if (c.turn !== turn.no) continue;
    mine += 1;
    if (c.status === 'running') continue;
    const l = lookOf(c);
    if (l === 'bad') bad += 1;
    if (l === 'gold') gold += 1;
    known.push(l);
  }
  let missing = Math.max(0, (turn.calls || 0) - mine);
  const addBad = Math.min(missing, Math.max(0, (turn.errors || 0) - bad));
  missing -= addBad;
  const addGold = Math.min(missing, Math.max(0, (turn.files ? turn.files.length : 0) - gold));
  missing -= addGold;
  return [...Array(addBad).fill('bad'), ...Array(addGold).fill('gold'), ...Array(missing).fill('normal'), ...known];
}

/** A track with a load-lock chamber: wafers queue, cycle through the chamber and stop at the end. */
export class Lane {
  constructor(points, { gateIn, gateOut, stop }) {
    this.path = new Polyline(points);
    this.end = this.path.length;
    this.gateIn = gateIn;
    this.gateOut = gateOut;
    this.stop = stop;
    this.items = []; // head (largest s) first
    this.doorIn = 0;
    this.doorOut = 0;
    this.cycling = false;
    this.moving = false;
  }
  tailFree() {
    const tail = this.items[this.items.length - 1];
    return !tail || tail.s >= SPACING - 1e-6;
  }
  add(job) {
    const it = { job, s: 0, v: 0, cycled: false, dwell: 0, arrivedAt: null };
    this.items.push(it);
    return it;
  }
  remove(it) {
    const i = this.items.indexOf(it);
    if (i >= 0) this.items.splice(i, 1);
  }
  head() {
    return this.items[0] || null;
  }
  atEnd(it) {
    return !!it && it.s >= this.end - 1e-4 && it.v === 0;
  }
  update(dt, speed, now) {
    const lo = this.gateIn - EDGE;
    const hi = this.gateOut + EDGE;
    const occupant = this.items.find((it) => it.s > lo + 1e-6 && it.s < hi - 1e-6) || null;
    let wantIn = false;
    let wantOut = false;
    let cycling = false;
    let moving = false;
    let prev = null;
    let approaching = true;
    for (const it of this.items) {
      let limit = prev ? prev.s - SPACING : this.end;
      const room = !prev || prev.s - SPACING >= hi;
      if (!it.cycled) {
        limit = Math.min(limit, this.stop);
        if (it.s <= lo + 1e-6) {
          const free = !occupant && this.doorOut <= 0.05;
          if (free && approaching && it.s >= lo - 0.9) wantIn = true;
          if (!free || this.doorIn < 0.95) limit = Math.min(limit, lo);
          approaching = false;
        } else if (it.s < this.gateIn + EDGE) {
          wantIn = true;
        }
        if (it.s >= this.stop - 1e-4 && this.doorIn <= 0.02 && this.doorOut <= 0.02) {
          it.dwell += dt * speed;
          cycling = true;
          if (it.dwell >= CYCLE) it.cycled = true;
        }
      } else if (it.s < hi) {
        if (it.s <= this.gateOut - EDGE + 1e-6) {
          if (room) wantOut = true;
          if (!room || this.doorOut < 0.95) limit = Math.min(limit, Math.max(it.s, this.stop));
        } else {
          wantOut = true;
        }
      }
      const gap = limit - it.s;
      if (gap <= 1e-5) {
        it.v = 0;
      } else {
        const vWant = Math.min(VMAX * speed, Math.sqrt(2 * ACC * gap));
        it.v = Math.min(vWant, it.v + ACC * speed * dt);
        it.s = Math.min(limit, it.s + it.v * dt);
        moving = true;
      }
      if (it.arrivedAt == null && it.s >= this.end - 1e-4) it.arrivedAt = now;
      prev = it;
    }
    const rate = 5 * dt * speed;
    this.doorIn = clamp(this.doorIn + (wantIn ? rate : -rate), 0, 1);
    this.doorOut = clamp(this.doorOut + (wantOut ? rate : -rate), 0, 1);
    this.cycling = cycling;
    this.moving = moving;
  }
}

export function createDirector({ cell, stations, stocker, engine, wafers, root }) {
  const P = cell.points;
  const tmp = new THREE.Vector3();

  // Inbound: dispenser → load lock (track door on its −X face) → hub door → lock port.
  const inL0 = P.dispenser.distanceTo(P.lockCenter);
  const inSeg = P.lockCenter.distanceTo(P.lockPort);
  const inHub = clamp(0.45 / Math.max(1e-6, P.lockCenter.z - P.lockPort.z), 0, 1);
  const laneIn = new Lane([P.dispenser, P.lockCenter, P.lockPort], {
    gateIn: P.lockCenter.x - 0.45 - P.dispenser.x,
    gateOut: inL0 + inHub * inSeg,
    stop: inL0,
  });
  // Outbound: out port → hub door → unload lock → track door (+X face) → track end.
  const outL0 = P.outPort.distanceTo(P.outCenter);
  const outHub = clamp((P.outCenter.z - 0.45 - P.outPort.z) / Math.max(1e-6, P.outCenter.z - P.outPort.z), 0, 1);
  const laneOut = new Lane([P.outPort, P.outCenter, P.trackEnd], {
    gateIn: outHub * outL0,
    gateOut: outL0 + 0.45,
    stop: outL0,
  });

  const kindOf = (c) => (stations.byKind[c.kind] ? c.kind : 'generic');
  const jobs = new Map(); // call id → job (removed once stored)
  const seen = new Set(); // stored call ids still inside the state window
  const recs = new Map(); // turn no → { no, status, info, shipped, pending }
  const levels = Object.fromEntries(stations.list.map((s) => [s.kind, new Array(LEVELS).fill(null)]));
  const robo = { task: null, steps: [], cur: null, carry: null, idle: 0, homed: true };
  const activityOut = { inbound: 0, outbound: 0, robot: false, stocker: false };
  let runningByKind = {};
  let runningCalls = [];
  let maxTurn = 0;
  let lastTurnCount = 0;
  let first = true;
  let now = 0;
  let rush = 1;
  let xfer = null;

  function rec(no) {
    let r = recs.get(no);
    if (!r) {
      r = { no, status: 'running', info: null, shipped: false, pending: [] };
      recs.set(no, r);
    }
    return r;
  }
  const ended = (r) => r.status !== 'running' || r.no < maxTurn;
  const hasPending = (no) => {
    for (const j of jobs.values()) if (j.turn === no) return true;
    return false;
  };

  function newJob(c) {
    const j = { id: c.id, call: c, kind: kindOf(c), turn: c.turn, stage: 'spawn', mesh: null, it: null, level: -1, processed: false, processedAt: 0, arriveT: 0, signaled: false, restY: WAFER_Y, waitT: 0 };
    jobs.set(c.id, j);
    rec(c.turn);
    return j;
  }
  function removeMesh(j) {
    if (j.mesh) {
      root.remove(j.mesh);
      j.mesh = null;
    }
  }
  function finishJob(j) {
    j.stage = 'stored';
    jobs.delete(j.id);
    seen.add(j.id);
  }
  function signalEnd(j) {
    if (j.signaled) return;
    j.signaled = true;
    stations.byKind[j.kind].onEnd(j.call, j.call.status !== 'error');
  }
  function deliverLook(no, look) {
    if (!stocker.addLate(no, look)) rec(no).pending.push(look);
  }
  /** Skip the remaining animation of a job and count it straight into its FOUP. */
  function storeDirect(j) {
    if (j.it) {
      laneIn.remove(j.it);
      laneOut.remove(j.it);
      j.it = null;
    }
    if (j.level >= 0) {
      levels[j.kind][j.level] = null;
      j.level = -1;
    }
    if (robo.carry === j) robo.carry = null;
    removeMesh(j);
    signalEnd(j);
    deliverLook(j.turn, lookOf(j.call, j.kind));
    finishJob(j);
  }
  const freeLevel = (kind) => levels[kind].indexOf(null);
  function placeAtStation(j, k) {
    const S = stations.byKind[j.kind];
    levels[j.kind][k] = j;
    j.level = k;
    j.stage = 'station';
    j.arriveT = now;
    if (!j.mesh) {
      j.mesh = wafers.create('raw');
      root.add(j.mesh);
    }
    j.mesh.position.set(S.port.x, WAFER_Y + k * LEVEL, S.port.z);
  }

  function clearAll() {
    for (const j of jobs.values()) removeMesh(j);
    jobs.clear();
    seen.clear();
    recs.clear();
    laneIn.items.length = 0;
    laneOut.items.length = 0;
    for (const k of Object.keys(levels)) levels[k].fill(null);
    robo.task = null;
    robo.steps = [];
    robo.cur = null;
    robo.carry = null;
    cell.robot.setBusy(false);
    if (cell.robot.setStatus) cell.robot.setStatus('idle');
    xfer = null;
  }

  function computeRunning(state) {
    runningByKind = {};
    runningCalls = [];
    for (const c of state.calls) {
      if (c.status !== 'running') continue;
      const k = kindOf(c);
      runningByKind[k] = (runningByKind[k] || 0) + 1;
      runningCalls.push(c);
    }
    maxTurn = state.turns.length ? state.turns[state.turns.length - 1].no : 0;
  }

  /** First snapshot: lay out the current situation without animating history. */
  function firstSync(state) {
    clearAll();
    for (const tn of state.turns) Object.assign(rec(tn.no), { info: tn, status: tn.status });
    const finished = state.turns.filter((tn) => tn.status !== 'running');
    for (const tn of finished) rec(tn.no).shipped = true;
    for (const tn of finished.slice(-NEST_HISTORY)) stocker.placeNest(tn.no, tn, looksForTurn(tn, state.calls));
    const live = state.turns.find((tn) => tn.status === 'running') || null;
    if (live) stocker.resetDock(live.no, live, looksForTurn(live, state.calls));
    else stocker.resetDock(null, null, []);
    for (const c of state.calls) {
      if (c.status !== 'running') {
        seen.add(c.id);
        continue;
      }
      const j = newJob(c);
      const k = freeLevel(j.kind);
      if (k >= 0) placeAtStation(j, k);
      stations.byKind[j.kind].onStart(c);
    }
    computeRunning(state);
  }

  function sync(state) {
    if (!state) return;
    if (first || state.turnCount < lastTurnCount) {
      first = false;
      lastTurnCount = state.turnCount;
      firstSync(state);
      return;
    }
    lastTurnCount = state.turnCount;
    for (const tn of state.turns) {
      const r = rec(tn.no);
      r.info = tn;
      r.status = tn.status;
      stocker.updateInfo(tn.no, tn);
    }
    const present = new Set();
    for (const c of state.calls) {
      present.add(c.id);
      const j = jobs.get(c.id);
      if (j) j.call = c;
      else if (!seen.has(c.id)) {
        newJob(c);
        stations.byKind[kindOf(c)].onStart(c);
      }
    }
    for (const id of seen) if (!present.has(id)) seen.delete(id);
    computeRunning(state);
  }

  // ── Robot ──────────────────────────────────────────────────
  const rotate = (yaw, lift) => ({ yaw, reach: RETRACT_R, lift, d: (from, to) => Math.max(0.18, Math.abs(angleDelta(from.yaw, to.yaw)) / 4) });

  function deliverTask(j, k) {
    const S = stations.byKind[j.kind];
    levels[j.kind][k] = j;
    j.level = k;
    const lvl = k * LEVEL;
    return {
      type: 'deliver',
      job: j,
      from: MACHINE_INFO.lock.code,
      to: STATION_INFO[j.kind].code,
      steps: [
        rotate(LOCK_THETA, SLIDE),
        { reach: PORT_R, d: 0.38 },
        {
          lift: LIFT,
          d: 0.15,
          onStart() {
            laneIn.remove(j.it);
            j.it = null;
            j.stage = 'carried';
            j.restY = WAFER_Y;
            robo.carry = j;
          },
          onEnd: () => (j.restY = 0),
        },
        { reach: RETRACT_R, d: 0.32 },
        rotate(S.theta, lvl + LIFT),
        { reach: PORT_R, d: 0.38 },
        {
          lift: lvl + SLIDE,
          d: 0.15,
          onStart: () => (j.restY = WAFER_Y + lvl),
          onEnd() {
            robo.carry = null;
            placeAtStation(j, k);
          },
        },
        { reach: RETRACT_R, d: 0.32 },
      ],
    };
  }

  function collectTask(j) {
    const S = stations.byKind[j.kind];
    const k = j.level;
    const lvl = k * LEVEL;
    j.reserved = true;
    return {
      type: 'collect',
      job: j,
      from: STATION_INFO[j.kind].code,
      to: MACHINE_INFO.unload.code,
      steps: [
        rotate(S.theta, lvl + SLIDE),
        { reach: PORT_R, d: 0.38 },
        {
          lift: lvl + LIFT,
          d: 0.15,
          onStart() {
            levels[j.kind][k] = null;
            j.level = -1;
            j.stage = 'carried';
            j.restY = WAFER_Y + lvl;
            robo.carry = j;
          },
          onEnd: () => (j.restY = 0),
        },
        { reach: RETRACT_R, d: 0.32 },
        rotate(OUT_THETA, LIFT),
        { reach: PORT_R, d: 0.38 },
        {
          lift: SLIDE,
          d: 0.15,
          onStart: () => (j.restY = WAFER_Y),
          onEnd() {
            robo.carry = null;
            j.it = laneOut.add(j);
            j.stage = 'out';
          },
        },
        { reach: RETRACT_R, d: 0.32 },
      ],
    };
  }

  function pickTask() {
    let best = null;
    const head = laneIn.head();
    if (laneIn.atEnd(head)) {
      const k = freeLevel(head.job.kind);
      if (k >= 0) best = { type: 'deliver', job: head.job, k, ready: head.arrivedAt ?? now };
    }
    if (laneOut.tailFree()) {
      for (const j of jobs.values()) {
        if (j.stage === 'station' && j.processed && !j.reserved && (!best || j.processedAt < best.ready)) best = { type: 'collect', job: j, ready: j.processedAt };
      }
    }
    if (!best) return null;
    return best.type === 'deliver' ? deliverTask(best.job, best.k) : collectTask(best.job);
  }

  function robotUpdate(dt) {
    const R = cell.robot;
    if (!robo.task) {
      const task = pickTask();
      if (task) {
        robo.task = task;
        robo.steps = task.steps.slice();
        robo.cur = null; // aborts a homing move
        robo.idle = 0;
        robo.homed = false;
        R.setBusy(true);
      } else {
        robo.idle += dt;
        if (robo.idle > HOME_AFTER && !robo.homed && !robo.cur) {
          robo.steps = [rotate(LOCK_THETA, 0)];
          robo.homed = true;
        }
      }
    }
    let budget = dt;
    let guard = 0;
    while (budget > 0 && guard++ < 32) {
      if (!robo.cur) {
        const st = robo.steps.shift();
        if (!st) break;
        const from = { yaw: R.pose.yaw, reach: R.pose.reach, lift: R.pose.lift };
        const to = { yaw: st.yaw ?? from.yaw, reach: st.reach ?? from.reach, lift: st.lift ?? from.lift };
        const base = typeof st.d === 'function' ? st.d(from, to) : st.d;
        robo.cur = { st, from, to, d: base / rush, t: 0 };
        if (st.onStart) st.onStart();
      }
      const c = robo.cur;
      const take = Math.min(budget, c.d - c.t);
      c.t += take;
      budget -= take;
      const e = c.d > 0 ? easeInOut(c.t / c.d) : 1;
      R.setPose(c.from.yaw + angleDelta(c.from.yaw, c.to.yaw) * e, lerp(c.from.reach, c.to.reach, e), lerp(c.from.lift, c.to.lift, e));
      if (c.t >= c.d - 1e-6) {
        robo.cur = null;
        if (c.st.onEnd) c.st.onEnd();
      }
    }
    if (robo.task && !robo.cur && robo.steps.length === 0) {
      robo.task = null;
      robo.idle = 0;
      R.setBusy(false);
    }
    if (R.setStatus) {
      // Cached by the robot: only a change of action, route or carried wafer redraws its panel.
      const t = robo.task;
      const moving = !!robo.cur || robo.steps.length > 0;
      const look = robo.carry && robo.carry.mesh ? robo.carry.mesh.userData.look : null;
      if (t) R.setStatus(t.type, t.from, t.to, look);
      else R.setStatus(moving ? 'home' : 'idle', null, moving ? MACHINE_INFO.lock.code : null, null);
    }
    if (robo.carry && robo.carry.mesh) {
      R.carryPoint(tmp);
      tmp.y = Math.max(tmp.y, robo.carry.restY);
      robo.carry.mesh.position.copy(tmp);
    }
  }

  // ── Stations ───────────────────────────────────────────────
  function process() {
    for (const j of jobs.values()) {
      if (j.stage !== 'station' || j.processed || j.call.status === 'running') continue;
      if (now < j.arriveT + MIN_DWELL / rush) continue;
      j.processed = true;
      j.processedAt = now;
      wafers.setLook(j.mesh, lookOf(j.call, j.kind));
      signalEnd(j);
    }
  }

  // ── Track end, FOUPs and shipping ──────────────────────────
  function startXfer(j, it) {
    laneOut.remove(it);
    j.it = null;
    j.stage = 'transfer';
    xfer = { j, t: 0, d: XFER / rush, from: j.mesh.position.clone(), to: stocker.slotPoint(stocker.dockCount(), new THREE.Vector3()) };
  }
  function xferUpdate(dt) {
    if (!xfer) return;
    xfer.t += dt;
    const e = easeInOut(xfer.t / xfer.d);
    const m = xfer.j.mesh;
    m.position.lerpVectors(xfer.from, xfer.to, e);
    m.position.y += Math.sin(Math.PI * e) * 0.025;
    if (xfer.t >= xfer.d) {
      const j = xfer.j;
      xfer = null;
      removeMesh(j);
      if (stocker.dockTurn() === j.turn) stocker.addWafer(lookOf(j.call, j.kind));
      else deliverLook(j.turn, lookOf(j.call, j.kind));
      finishJob(j);
    }
  }
  function dockUpdate(dt) {
    if (stocker.dockReady() && stocker.dockTurn() == null) {
      let target = null;
      for (const r of recs.values()) if (!r.shipped && (!target || r.no < target.no)) target = r;
      if (target) {
        stocker.bindDock(target.no, target.info);
        for (const l of target.pending.splice(0)) stocker.addWafer(l);
      }
    }
    const dno = stocker.dockTurn();
    if (dno != null && !xfer && stocker.dockReady()) {
      const r = rec(dno);
      if (!r.shipped && ended(r) && !hasPending(dno) && stocker.ship(dno)) r.shipped = true;
    }
    const head = laneOut.head();
    if (!xfer && laneOut.atEnd(head)) {
      const j = head.job;
      const r = rec(j.turn);
      if (r.shipped) storeDirect(j);
      else if (stocker.dockReady() && stocker.dockTurn() === j.turn) startXfer(j, head);
      else {
        j.waitT += dt;
        if (j.waitT > FORCE_SHIP && dno != null && dno !== j.turn && stocker.dockReady() && stocker.ship(dno)) rec(dno).shipped = true;
      }
    }
  }

  function trimBacklog() {
    let excess = jobs.size - MAX_INFLIGHT;
    if (excess <= 0) return;
    for (const j of jobs.values()) {
      if (excess <= 0) break;
      if (j.stage === 'spawn' && j.call.status !== 'running') {
        storeDirect(j);
        excess -= 1;
      }
    }
  }

  function spawn() {
    if (!laneIn.tailFree()) return;
    for (const j of jobs.values()) {
      if (j.stage !== 'spawn') continue;
      j.mesh = wafers.create('raw');
      root.add(j.mesh);
      j.it = laneIn.add(j);
      j.stage = 'in';
      laneIn.path.at(0, j.mesh.position);
      engine.pulseDispenser();
      return;
    }
  }

  function chamberLed(led, cycling, t) {
    led.emissive.copy(cycling ? AMBER : GREEN);
    led.emissiveIntensity = cycling ? 1.6 + Math.sin(t * 10) * 0.8 : 0.6;
  }

  stocker.resetDock(null, null, []);

  return {
    sync,
    update(dt, t) {
      now = t;
      rush = 1 + 0.35 * Math.min(4, Math.max(0, jobs.size - 2) / 2);
      stocker.speed = rush;
      trimBacklog();
      spawn();
      laneIn.update(dt, rush, now);
      laneOut.update(dt, rush, now);
      cell.lock.setDoors(laneIn.doorIn, laneIn.doorOut);
      cell.unload.setDoors(laneOut.doorOut, laneOut.doorIn);
      chamberLed(cell.lock.led, laneIn.cycling, t);
      chamberLed(cell.unload.led, laneOut.cycling, t);
      cell.trackLed.emissiveIntensity = laneIn.moving || laneOut.moving ? 1.8 + Math.sin(t * 8) * 0.4 : 1.0;
      process();
      robotUpdate(dt);
      dockUpdate(dt);
      xferUpdate(dt);
      for (const it of laneIn.items) laneIn.path.at(it.s, it.job.mesh.position);
      for (const it of laneOut.items) laneOut.path.at(it.s, it.job.mesh.position);
      for (const S of stations.list) {
        let wafer = false;
        let unprocessed = false;
        for (const j of levels[S.kind]) {
          if (j && j.stage === 'station') {
            wafer = true;
            if (!j.processed) unprocessed = true;
          }
        }
        const working = (runningByKind[S.kind] || 0) > 0 || unprocessed;
        S.active = working;
        S.update(dt, t, { working, wafer });
      }
      stocker.update(dt);
    },
    /** Counts for the floor channels; reuses one object to stay allocation-free per frame. */
    activity() {
      activityOut.inbound = laneIn.items.length;
      activityOut.outbound = laneOut.items.length;
      activityOut.robot = !!robo.task || !!robo.cur;
      activityOut.stocker = !!xfer || stocker.busy();
      return activityOut;
    },
    /** Point of current interest for the follow camera; returns its hover id or null. */
    focus(out) {
      let best = null;
      for (const c of runningCalls) if (!best || (c.startedAt || 0) >= (best.startedAt || 0)) best = c;
      if (best) {
        const S = stations.byKind[kindOf(best)];
        out.copy(S.anchor);
        return `station:${S.kind}`;
      }
      if (robo.task) {
        out.copy(cell.anchors.robot);
        return 'robot';
      }
      if (xfer || stocker.busy()) {
        out.copy(stocker.anchors.stocker);
        return 'stocker';
      }
      return null;
    },
    /** True while anything on the line moves; the renderer uses it to pick 60 or 30 fps. */
    busy() {
      return jobs.size > 0 || runningCalls.length > 0 || !!robo.task || !!robo.cur || robo.steps.length > 0
        || !!xfer || stocker.busy();
    },
    stats() {
      return {
        inflight: jobs.size,
        laneIn: laneIn.items.length,
        laneOut: laneOut.items.length,
        robot: robo.task ? robo.task.type : 'idle',
        transfer: !!xfer,
        dock: stocker.dockTurn(),
        rush,
        stages: [...jobs.values()].reduce((acc, j) => ((acc[j.stage] = (acc[j.stage] || 0) + 1), acc), {}),
      };
    },
    dispose() {
      for (const j of jobs.values()) removeMesh(j);
      jobs.clear();
    },
  };
}
