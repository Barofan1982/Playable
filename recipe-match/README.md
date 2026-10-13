# Kitchen Match

从60枚重叠食材中取当前订单所需的食材，每种三份，保留原逐像素遮挡、锅中烹饪、出菜和收钱动画。

## 操作

Tap exposed ingredients shown on the ticket. Collect three of each, tap the cooked dish, then collect the payment. AUTO PLAY follows the original guide targets and visible pixels.

原五道菜依次完成后成功；错选显示红叉及角色反馈，保留原可继续纠错的流程。

底部按钮实际48px，AUTO PLAY 后可 PAUSE / CONTINUE，RETRY重新开始。竖屏画布完整，横屏按9:16居中。

## 独立文件

直接打开 index.html；全部图片、引擎、字体与短音效已内嵌。无需服务器、CDN或网络。未嵌入BGM，也没有音乐开关、返回列表或商店跳转。隐藏页面或广告时冻结原引擎与音效。

## 源与构建

source/build.cjs 重打包原虚拟资源文件；原Cocos3引擎、原场景和Spine动画保留。浏览器优先使用原生解压API，内嵌pako作为离线后备。source/selected-assets 保存实际选择的本地资源，source/resource-map.json记录原纹理与替代图。

在本机以 Node 运行 source/build.cjs。构建使用已安装的sharp。

## QA

source/qa-report.json 记录320×568与844×390实际浏览器检查、合法Auto流程、暂停、隐藏、Retry与错误记录。source/initial-320.png、initial-844.png和result-*.png是实际运行画面。preview.webp为真实首帧。

QA入口：window.__qa.state / startAuto / pause / setAdVisible / tap / step / reset / solve。Auto通过原控制组件操作，不直接更改订单进度或棋盘数值。

## Juicy Journey 品牌落版（2026-10-13）

玩法顶部使用高清、紧裁切 Juicy Journey Logo，并按约27%画布宽度定位，避开订单和计数。真实完成条件不变；完成后停下原引擎，关闭原结束层，播放用户提供的5秒静音品牌视频一次，并一直保留最后一帧。底部 RETRY 重载完整独立页面。

独立HTML同时内嵌视频与最后一帧，无外部媒体请求，无BGM。品牌落版位于完整9:16画布内，横屏仍居中显示。source/build.cjs 调用合集维护工具中的品牌注入构建器；实际选图仍保存在source/selected-assets。



## 2026-10-13 统一品牌落版

本轮修复：原生订单、交付与金币结算先完整保留至少2.6秒，仍在播放的非循环可见动画可延长到7秒；再播放JJ落版。烹饪订单图标按统一边界裁去透明边，塔可、煎锅和三明治使用完整独立成品贴图，订单图与交付图一致。Coast Memory优先选择已存在的同类列，保留万能牌规则并修复翻过牌后缺失的回合回调；15张替换卡牌清除旧像素残留。

玩法 Logo 使用本地高清 Juicy Journey 源图，裁掉透明空白并校准可见尺寸。原女主及原结束根层在真实结果发生时关闭；成功后播放用户提供的 JJ 静音落版视频一次，停留最后一帧，手动 Retry 才重新开始。有原生失败条件的玩法显示英文 Try Again，不播放成功庆祝视频。

视频、尾帧和商标全部内嵌在单文件中，没有背景音乐、音乐开关或外部运行资源。竖屏完整画面在横向浏览器中居中显示。源码构建与本地 ZIP 同步更新。
