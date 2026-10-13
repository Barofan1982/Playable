# Lava Pins

Standalone Juicy Journey playable migrated from original Tasty Travels package entry 13. The original Cocos Creator game, physics, objects and levels are retained.

## Play

Pull the lower pins first, then swap adjacent drinks to clear the stones and rescue the girl.

AUTO PLAY uses the original input handlers. Pause / Continue freezes and resumes the original game. Retry reloads the same standalone sample. The page pauses gameplay and effects when hidden. All player interface text is English. No background music, install buttons or external links are included.

## Automatic demonstration

The original lower, middle, then upper pin actions are followed by legal adjacent swaps. The planner includes line matches, 2 × 2 matches and column gravity. It weights the actual rock pile, clears lower support contacts, and clears the right edge while adjacent pieces remain available. A two-move search is planned before pressure starts; each cached move is checked against the actual board. Native animation locks are respected.

The original rescue callback decides success. The 150-stone condition and every role pressure phase remain unchanged. Complete natural rescue runs are recorded in `source/natural-qa.json`. The final removal of the native end-view Play advertisement button and download callbacks is verified separately in `source/cta-qa.json`; that display-only test does not impose a game win.

## Timing compatibility

Cocos fixed-step accumulation is enabled. The game delta uses the engine's existing maximum accumulated physics time (0.2 seconds), so physics and animation timers stay synchronized on slow renderers. At the original 59 fps the delta is unchanged. Gravity, collision shapes, scoring and win/lose conditions retain their original values.

## Build

Run `node source/build.cjs`. All runtime resources, replacement atlases, engine code and gameplay effects are held in `source/resources.json`; rebuilding uses only this sample's source directory. The final entry has no network dependency and stays below 5 MB.

## QA

`window.__qa` exposes state, startAuto, reset, tap, solve, step, fail and hooks. The fail hook checks the short result UI; normal play uses original game win / lose conditions. Browser checks and screenshots are recorded in `source/qa-report.json`.

2026-10-13: Auto Play and Retry have 48px tap targets. The complete portrait game remains visible in a landscape browser. This update changes only the container layout.


## 2026-10-13 统一品牌落版

玩法 Logo 使用本地高清 Juicy Journey 源图，裁掉透明空白并校准可见尺寸。原女主及原结束根层在真实结果发生时关闭；成功后播放用户提供的 JJ 静音落版视频一次，停留最后一帧，手动 Retry 才重新开始。有原生失败条件的玩法显示英文 Try Again，不播放成功庆祝视频。

视频、尾帧和商标全部内嵌在单文件中，没有背景音乐、音乐开关或外部运行资源。竖屏完整画面在横向浏览器中居中显示。源码构建与本地 ZIP 同步更新。
