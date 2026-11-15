# DSH work process 3D live view

[中文](README.md)

A DeepSeek Harness (DSH) plugin. It adds a "3D process" tab to every conversation and renders the agent's work as a realistic 3D precision factory: tokens are the fuel, tool calls are processed at stations, and the result of each conversation turn is stored as a batch.

> Version 0.1.0 is a **prototype in development**. The scene runs on a built-in demo session and is not connected to real session data yet; the art and camera are still changing.

## What the scene shows

The factory stands in a white atrium on the top floor of a skyscraper: floor-to-ceiling glass all around, a balcony on the sunset side, and a future city outside at dusk or in daylight. A curved media wall at the back shows the live token flow, a work summary and the cost. The machines sit on floating platforms linked by glowing data channels.

| Machine | Data |
| --- | --- |
| Fuel tank | DeepSeek account balance and the tokens it buys at the current model price; a beacon shows peak (full price) or off-peak (half price) hours |
| Main engine | Rotor speed follows the generation rate; the core color shows the phase (blue generating, violet reasoning, orange tools) |
| Console | Context gauge (the relief valve vents steam near the limit), tachometer, mechanical counters for cache-miss input, cache hits, output, reasoning and cost |
| Wafer dispenser → load lock | Each tool call releases one wafer, which enters the station ring through the load lock |
| Central robot | Moves wafers between the load lock, the stations and the unload lock; it speeds up when work queues |
| 10 stations | Archive scanner (read/grep/glob), laser engraver (write/edit), terminal console (pwsh/bash), satellite uplink (web search/fetch), cobot cell (subagents/workflows), hydraulic press (context compression), kanban board (todos/goals), call beacon (questions to the user), labeler (delivered files), generic module (other and MCP tools) |
| Unload lock → load port → gantry → stocker | Finished wafers go into the current batch's FOUP; when the turn ends the gantry carries it to the stocker, labeled Pass or Rework |

Gold wafers wrote or delivered files; red wafers failed.

## Controls

- Orbit camera mode: drag to orbit, scroll to zoom toward the cursor, right-drag to pan.
- Roam camera mode: drag to look around (you can look up at the skylight), scroll to move forward and back, right-drag to pan, double-click the floor to walk there. Click the view once, then use WASD or the arrow keys to move, Q/E to go down and up, and hold Shift to move faster. You can walk out to the balcony through the open glass doors.
- Top right: views Overview, Fuel, Engine, Stations, Products and Balcony; Follow (the camera tracks the working station), Labels (machine names), Panels (the data panels at the bottom), Display and Fullscreen.
- Display holds the scene (dusk or daylight), brightness, quality (auto/low/medium/high/ultra), the frame rate cap (auto/30/60/120/unlimited) and the performance statistics.
- Hovering a machine or batch highlights it and shows details; click a machine to fly to its view.
- Bottom cards: balance, context, input (cache hit rate and uncached tokens), output (with reasoning), cost (peak/off-peak), tool calls, output files (files and changed lines), efficiency (changed lines per 1K output tokens, cost per file). Hover a card for the full explanation.
- Quality is picked from your GPU by default. If the frame rate stays low, the render resolution drops first and then the quality drops one tier for the session. A quality you choose by hand is remembered and never changed automatically.

## Requirements

- DeepSeek Harness 0.2.0 or later (developed on 0.2.2-rc.3).
- A browser or the DSH desktop app with WebGL 2 and hardware acceleration turned on.

## Development

```sh
pnpm install
pnpm build   # writes dist/client.js (three.js is bundled; React comes from the host)
pnpm test    # model tests plus a headless scene smoke test (no WebGL)
```

`dist/client.js` is committed with the sources so the plugin can be installed straight from the repository. To try a local copy in DSH, ask the DSH agent to install the repository folder with plugin_manager install_bundle.

### Change workflow

The `main` branch is protected; every change is merged through a pull request:

1. Create a branch from `main`, for example `feat/…`, `fix/…` or `docs/…`.
2. Commit, push the branch and open a pull request. CI runs the tests and the build and checks that the committed `dist/client.js` matches the sources.
3. After the review approves it, squash-merge into `main` and delete the branch.

Layout:

- `index.js`: Host entry (empty in M0; M1 registers a session projection).
- `src/model/`: renderer-independent model: pricing and peak hours, tool-to-station mapping, the session event reducer, the demo session.
- `src/client/scene/`: the three.js scene, modeled procedurally (no external model or texture files).
- `src/client/view/`: React view and HUD.
- `scripts/build.mjs`: esbuild bundle in the DSH Client module format.

## Roadmap

1. **M0 style prototype** (in progress): modeling, materials, lighting, camera and animation on demo data.
2. **M1 real data**: a Host session projection with real tokens, context, tool calls, turns and file changes; balance from the DeepSeek account.
3. **M2 polish**: post effects, material detail, camera work, batch replay, timeline and input/output report.
4. **M3 optional extras**: DeepSeek tool APIs (for example voice announcements), off by default with costs shown.
5. **M4 release**: npm package and a listing in the DSH plugin market.

## License

[MIT](LICENSE). The bundled three.js is also MIT licensed.
