# Hidden Room

Standalone Juicy Journey playable migrated from original Tasty Travels package entry 15. The original Cocos Creator game, physics, objects and levels are retained.

## Play

Find and tap the objects shown in the top row.

AUTO PLAY uses the original input handlers. Pause / Continue freezes and resumes the original game. Retry reloads the same standalone sample. The page pauses gameplay and effects when hidden. All player interface text is English. No background music, install buttons or external links are included.

## Build

Run `node source/build.cjs`. All runtime resources, replacement atlases, engine code and gameplay effects are held in `source/resources.json`; rebuilding uses only this sample's source directory. The final entry has no network dependency and stays below 5 MB.

## QA

`window.__qa` exposes state, startAuto, reset, tap, solve, step, fail and hooks. The fail hook checks the short result UI; normal play uses original game win / lose conditions. Browser checks and screenshots are recorded in `source/qa-report.json`.

2026-10-13: Auto Play and Retry have 48px tap targets. The complete portrait game remains visible in a landscape browser. This update changes only the container layout.



## 2026-10-13 统一品牌落版

本轮修复：原生订单、交付与金币结算先完整保留至少2.6秒，仍在播放的非循环可见动画可延长到7秒；再播放JJ落版。烹饪订单图标按统一边界裁去透明边，塔可、煎锅和三明治使用完整独立成品贴图，订单图与交付图一致。Coast Memory优先选择已存在的同类列，保留万能牌规则并修复翻过牌后缺失的回合回调；15张替换卡牌清除旧像素残留。

玩法 Logo 使用本地高清 Juicy Journey 源图，裁掉透明空白并校准可见尺寸。原女主及原结束根层在真实结果发生时关闭；成功后播放用户提供的 JJ 静音落版视频一次，停留最后一帧，手动 Retry 才重新开始。有原生失败条件的玩法显示英文 Try Again，不播放成功庆祝视频。

视频、尾帧和商标全部内嵌在单文件中，没有背景音乐、音乐开关或外部运行资源。竖屏完整画面在横向浏览器中居中显示。源码构建与本地 ZIP 同步更新。


## 2026-10-13 Sera 漫画角色替换

主角改为与房间一致的2D扁平漫画版Sera：红发辫、青绿色蝴蝶结头巾、星形耳环、黄色荷叶上衣和热带花纹裙。待机、开心和失落三张独立贴图保留原有反馈时序，统一脚下位置。原底图中的人物也已清除，房间与寻物位置保留。

素材使用内置image_gen，参考用户本地Sera立绘及原房间漫画风生成透明表情图；房间背景只整合原人物范围的重建内容，其余寻物画面保留原像素。原图、提示词、优化贴图与检查记录留在本地source及维护工具目录，运行素材全部内嵌。十件物品正常Auto Play完成，错误0；结算、重试和横向浏览器竖屏容纳检查通过。


## 2026-10-13 饮水瓶位置修正

饮水瓶整体移至Sera左侧行李箱旁的地面，阴影、提示高亮和点击节点一同移动，避免覆盖裙子。主角保持与房间一致的2D扁平漫画版Sera：红发辫、青绿色蝴蝶结头巾、星形耳环、黄色荷叶上衣和热带花纹裙。待机、开心和失落三张独立贴图保留原有反馈时序，统一脚下位置。原底图中的人物也已清除，房间与寻物位置保留。

素材使用内置image_gen，参考用户本地Sera立绘及原房间漫画风生成透明表情图；房间背景只整合原人物范围的重建内容，其余寻物画面保留原像素。原图、提示词、优化贴图与检查记录留在本地source及维护工具目录，运行素材全部内嵌。十件物品正常Auto Play完成，错误0；结算、重试和横向浏览器竖屏容纳检查通过。
