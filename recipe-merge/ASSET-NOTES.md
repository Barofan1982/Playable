# 资源说明

- 源参考：Playable.zip中Merge Cooking原试玩，inspection编号5。环境、NPC、手势、特效以及玩法引擎来自该授权迁移参考。
- Juicy Journey Logo来自人物立绘/logo.png的高清紧裁切版，替换原独立Logo及对应动画图集区域。没有在旧Logo上加页面覆盖层。
- 可匹配的食材和料理选自本地棋子目录；缺少的精确原料与成品由本轮imagegen按JJ材质补绘。原料、成品与配方对应，不使用整盘菜充当原料。
- 保留原纹理尺寸、SpriteFrame UV、Spine骨架和动画时间；新图按比例contain放入原区域，透明留白，不拉伸。
- 订单小票对应缩略图与英文提示随同替换；本地选图及每个替换区域可查source/resource-map.json。
- 原BGM原生文件UUID排除于内嵌资源。短玩家触发音效保留；原序列化依赖通过短静音数据占位兼容，原音乐播放被禁用。
- 原广告SDK入口、追踪和商店跳转移除或改为无操作，资源包不使用外链。成功终点接到本地结果与Retry。

- 2026-10-13：完成落版统一使用用户提供的 JJ-en-新落版2k-60fps.mp4（静音压缩版）。原女主结束层及其迟到回调关闭；真实游戏完成、订单人物与玩法动作保留。



## 2026-10-13 统一品牌落版

本轮修复：原生订单、交付与金币结算先完整保留至少2.6秒，仍在播放的非循环可见动画可延长到7秒；再播放JJ落版。烹饪订单图标按统一边界裁去透明边，塔可、煎锅和三明治使用完整独立成品贴图，订单图与交付图一致。Coast Memory优先选择已存在的同类列，保留万能牌规则并修复翻过牌后缺失的回合回调；15张替换卡牌清除旧像素残留。

玩法 Logo 使用本地高清 Juicy Journey 源图，裁掉透明空白并校准可见尺寸。原女主及原结束根层在真实结果发生时关闭；成功后播放用户提供的 JJ 静音落版视频一次，停留最后一帧，手动 Retry 才重新开始。有原生失败条件的玩法显示英文 Try Again，不播放成功庆祝视频。

视频、尾帧和商标全部内嵌在单文件中，没有背景音乐、音乐开关或外部运行资源。竖屏完整画面在横向浏览器中居中显示。源码构建与本地 ZIP 同步更新。


Complete food artwork: original transparent sprites generated with the built-in image_gen tool, then copied into the local project and compressed as WebP. Recipe-specific finished sandwich, folded taco, or complete cooked skillet variants replace incompatible split Spine food meshes. The same variant is used for its receipt and delivery. Skeleton timing and callbacks remain active; only the old food rendering is hidden. Source assets and prompt/provenance records are preserved in the local maintenance folder.
