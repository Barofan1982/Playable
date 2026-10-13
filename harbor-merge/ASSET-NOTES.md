# 素材记录

保留原场景背景、人物、棋盘结构与规则。实际图集中的 Logo 帧使用 corn/juicy-journey-logo.webp；食物、海洋生物与修复道具使用用户棋子及补充的透明 PNG。按原料、食物与工具的原语义替换，保持比例并缩到原帧尺寸。

共替换 56 个真实 SpriteFrame，类型统计：{"piece":24,"logo":5,"english-ui":27}。保持原帧矩形、旋转、锚点与资源引用，包含独立订单/复合图、瓶子与货币图；棋子仍来自实际图集替换。精确记录见 source/replacement-map.json 和 source/sprite-frames.json；素材在 source/assets-jj。

删除的音乐/环境音：bgm、小女孩哭、风声。原音频 payload 不在最终资源包，保留 16 个交互音效。实测效果播放 26 次；隐藏时 AudioContext 为 suspended，恢复显示为 running，musicPlaying 为 false。

## 2026-10-13 品牌显示更新

新玩法 Logo 来源为用户人物立绘/logo.png，经紧裁并缩为高分辨率 WebP。为消除旧图集帧的透明留白，隐藏原 Logo Sprite，由父页面按原节点可见性显示清晰 Logo；食物图标、棋盘与订单不变。

统一动态落版来源为用户的 JJ-en-新落版2k-60fps.mp4。内嵌压缩后无音轨的视频及最后帧，关闭原女主或原故事蒙太奇结束层，而非继承原人物骨骼动作。source/brand-end.js 负责真实结束路由和旧结束层防护；source/brand-parent.cjs 在构建时嵌入品牌组件，source/build.cjs 仍输出独立 HTML。


## 2026-10-13 统一品牌落版

玩法 Logo 使用本地高清 Juicy Journey 源图，裁掉透明空白并校准可见尺寸。原女主及原结束根层在真实结果发生时关闭；成功后播放用户提供的 JJ 静音落版视频一次，停留最后一帧，手动 Retry 才重新开始。有原生失败条件的玩法显示英文 Try Again，不播放成功庆祝视频。

视频、尾帧和商标全部内嵌在单文件中，没有背景音乐、音乐开关或外部运行资源。竖屏完整画面在横向浏览器中居中显示。源码构建与本地 ZIP 同步更新。
