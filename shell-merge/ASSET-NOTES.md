# 素材记录

保留原场景背景、人物、棋盘结构与规则。实际图集中的 Logo 帧使用 corn/juicy-journey-logo.webp；食物、海洋生物与修复道具使用用户棋子及补充的透明 PNG。按原料、食物与工具的原语义替换，保持比例并缩到原帧尺寸。

共替换 22 个真实 SpriteFrame，类型统计：{"piece":16,"logo":5,"message-bottle":1}。保持原帧矩形、旋转、锚点与资源引用，包含独立订单/复合图、瓶子与货币图；不是页面叠加皮肤。精确记录见 source/replacement-map.json 和 source/sprite-frames.json；素材在 source/assets-jj。

删除的音乐/环境音：海浪翻滚-海边实录_爱给网_aigei_com、bgm、清新海风海浪声_爱给网_aigei_com。原音频 payload 不在最终资源包，保留 7 个交互音效。实测效果播放 64 次；隐藏时 AudioContext 为 suspended，恢复显示为 running，musicPlaying 为 false。
