# Status — Flappy Bird Clone With Bat

## Intents
| No. | Name | Status | Est. | Actual | Notes |
|----:|------|--------|-----:|-------:|-------|
| 1   | ProjectSkeleton | Done | 1h   |        |       |
| 2   | BatEntity | Done | 2h   |        |       |
| 3   | CaveBackground | Todo | 1h   |        |       |
| 4   | ObstacleSystem | Todo | 2h   |        |       |
| 5   | CollisionDetection | Todo | 1.5h |        |       |
| 6   | ScoringSystem | Todo | 1h   |        |       |
| 7   | GameStateFlow | Todo | 1.5h |        |       |
| 8   | ArtPolish | Todo | 1.5h |        |       |

> Claude may update **Status** column. Human owns **Actual** column.

## Log
<!-- Append-only. One line per completed intent, or per notable deviation. This is
     what a scoped subagent reads instead of conversation history — write for a
     stranger who has no memory of this session. -->
- 2026-11-05 — Intent 1 (ProjectSkeleton): `src/index.html` (400x600 `<canvas id="game">`, classic script tag) + `src/main.js` (globals `canvas`, `ctx`, `WIDTH`, `HEIGHT`; `update(dt)` stub with dt in seconds, `render()` clears to black, `loop(timestamp)` via requestAnimationFrame, dt clamped to 0.1s). Add new game logic into update/render. Browser check still manual.
- 2026-11-05 — Intent 2 (BatEntity): new `src/bat.js` (classic script tag loaded before `main.js`) defines `BAT_GRAVITY`=1500, `BAT_FLAP_VELOCITY`=-450, `BAT_WIDTH`=34, `BAT_HEIGHT`=24 and `createBat(x, y)`. `main.js` global `bat` = `{x, y, vy, width, height, flap(), update(dt, worldHeight), render(ctx)}`; x/y are the CENTER of a 34x24 axis-aligned hitbox, x fixed at 133. Space keydown -> `bat.flap()` (preventDefault, ignores repeat). `update()` calls `bat.update(dt, HEIGHT)`; `render()` clears then draws `bat.render(ctx)` last (draw background/obstacles before it). Bat is clamped to canvas top/bottom with vy=0 — placeholder for intent 5 collision/death. Browser check still manual.

## Project State
- **Status**: Active
- **Iterate Mode**: Sequential (work on branch `pr-testing`)
- **Reason**:
- **Revisit trigger**:
