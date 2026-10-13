# Asset notes

Original Cocos engine and native scene assets are retained from supplied Playable.zip entry 14. The original logo pixels are cleared and replaced inside the original SpriteFrame rectangle with `corn/juicy-journey-logo.webp`. Household objects, rails, pins, lava, rocks and original skeleton animation preserve their physical and visual meaning.

Local food / fruit / drink images originate from `D:/Test/Juicy Journey/棋子`. Additional missing assets were supplied under `维护工具/迁移包20261012/new-pieces/ingredients`. Aspect ratios are preserved. Exact source-to-frame mapping is in `source/asset-replacements.json` (34 frame replacements plus baked guide / order replacements).

All 2 original BGM payloads are deleted from the final resource pack. Exact removed identifiers and original payload sizes are listed in `source/removed-music.json`. Short gameplay effects remain. The original ad SDK, reporting implementation, store URLs, screen recorder and install CTAs have been removed from the runtime; a readable local resource adapter loads the original engine offline.



## 2026-10-13 统一品牌落版

本轮修复：原生订单、交付与金币结算先完整保留至少2.6秒，仍在播放的非循环可见动画可延长到7秒；再播放JJ落版。烹饪订单图标按统一边界裁去透明边，塔可、煎锅和三明治使用完整独立成品贴图，订单图与交付图一致。Coast Memory优先选择已存在的同类列，保留万能牌规则并修复翻过牌后缺失的回合回调；15张替换卡牌清除旧像素残留。

玩法 Logo 使用本地高清 Juicy Journey 源图，裁掉透明空白并校准可见尺寸。原女主及原结束根层在真实结果发生时关闭；成功后播放用户提供的 JJ 静音落版视频一次，停留最后一帧，手动 Retry 才重新开始。有原生失败条件的玩法显示英文 Try Again，不播放成功庆祝视频。

视频、尾帧和商标全部内嵌在单文件中，没有背景音乐、音乐开关或外部运行资源。竖屏完整画面在横向浏览器中居中显示。源码构建与本地 ZIP 同步更新。
