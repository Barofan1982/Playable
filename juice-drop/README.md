# Juice Drop

Standalone Juicy Journey playable migrated from original Tasty Travels package entry 14. The original Cocos Creator game, physics, objects and levels are retained.

## Play

Drag a drink to aim, then release it. Matching drinks merge into the next level.

AUTO PLAY uses the original input handlers. Pause / Continue freezes and resumes the original game. Retry reloads the same standalone sample. The page pauses gameplay and effects when hidden. All player interface text is English. No background music, install buttons or external links are included.

## Build

Run `node source/build.cjs`. All runtime resources, replacement atlases, engine code and gameplay effects are held in `source/resources.json`; rebuilding uses only this sample's source directory. The final entry has no network dependency and stays below 5 MB.

## QA

`window.__qa` exposes state, startAuto, reset, tap, solve, step, fail and hooks. The fail hook checks the short result UI; normal play uses original game win / lose conditions. Browser checks and screenshots are recorded in `source/qa-report.json`.

2026-10-13: Auto Play and Retry have 48px tap targets. The complete portrait game remains visible in a landscape browser. This update changes only the container layout.
