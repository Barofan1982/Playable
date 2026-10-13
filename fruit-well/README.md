# Fruit Well

Standalone Juicy Journey playable migrated from original Tasty Travels package entry 16. The original Cocos Creator game, physics, objects and levels are retained.

## Play

Drag to aim and release fruit into the well. Matching fruit merges and breaks the stones.

AUTO PLAY uses the original input handlers. Pause / Continue freezes and resumes the original game. Retry reloads the same standalone sample. The page pauses gameplay and effects when hidden. All player interface text is English. No background music, install buttons or external links are included.

## Automatic demonstration

The original drag and release handlers are used. The planner reads only the current well's real fixtures and released fruit, checks same-level fruit and intervening collision shapes, and waits for native velocity and merge animations to settle. Direct same-level contacts are preferred; blocked targets use their real location, and unmatched fruit uses a lower landing. The original fruit sequence is retained.

The first well advances only after the original level-8 merge. The second well completes only when the original level-10 merge callback ends the game. The final synchronized version completed both wells naturally. The original level-8 transition and level-10 completion events are recorded in `source/natural-qa.json` and `source/strategy-qa.json`. A separate complete run before the final clock cap is retained in `source/natural-before-clock-cap.json`.

## Compatibility fixes

An unreleased fruit with `alive=false` no longer starts another fruit's native touch-ground/down timer. This correction also applies to manual play. Released fruit, stone shells and walls retain their original collisions and win/lose behavior. Before-fix contact evidence is retained in `source/strategy-before-held-fix.json`.

Cocos fixed-step accumulation and the engine's existing maximum accumulated physics time (0.2 seconds) keep game timers and physics synchronized on slow renderers. At the original 59 fps the delta is unchanged. Original gravity, collision shapes, drop sequences and completion levels are preserved.

## Build

Run `node source/build.cjs`. All runtime resources, replacement atlases, engine code and gameplay effects are held in `source/resources.json`; rebuilding uses only this sample's source directory. The final entry has no network dependency and stays below 5 MB.

## QA

`window.__qa` exposes state, startAuto, reset, tap, solve, step, fail and hooks. The fail hook checks the short result UI; normal play uses original game win / lose conditions. Browser checks and screenshots are recorded in `source/qa-report.json`.

2026-10-13: Auto Play and Retry have 48px tap targets. The complete portrait game remains visible in a landscape browser. This update changes only the container layout.


## 2026-10-13 统一品牌落版

玩法 Logo 使用本地高清 Juicy Journey 源图，裁掉透明空白并校准可见尺寸。原女主及原结束根层在真实结果发生时关闭；成功后播放用户提供的 JJ 静音落版视频一次，停留最后一帧，手动 Retry 才重新开始。有原生失败条件的玩法显示英文 Try Again，不播放成功庆祝视频。

视频、尾帧和商标全部内嵌在单文件中，没有背景音乐、音乐开关或外部运行资源。竖屏完整画面在横向浏览器中居中显示。源码构建与本地 ZIP 同步更新。
