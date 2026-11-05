# Status — Flappy Bird Clone With Bat

## Intents
| No. | Name | Status | Est. | Actual | Notes |
|----:|------|--------|-----:|-------:|-------|
| 1   | ProjectSkeleton | Done | 1h   |        |       |
| 2   | BatEntity | Todo | 2h   |        |       |
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

## Project State
- **Status**: Active
- **Iterate Mode**:
- **Reason**:
- **Revisit trigger**:
