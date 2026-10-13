# Taco Orders

先放玉米饼，再按小票加入肉末、蔬菜、芝士、酱汁与青柠，折饼出菜。保留原配料检查与制作动画。

## 操作

Place the tortilla first. Add the ingredients shown on the ticket, then fold and serve. AUTO PLAY uses the same ingredient controls.

按原 showMaskNum 范围完成两张订单后成功；错误或重复配料沿用原红叉反馈。

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

玩法 Logo 使用本地高清 Juicy Journey 源图，裁掉透明空白并校准可见尺寸。原女主及原结束根层在真实结果发生时关闭；成功后播放用户提供的 JJ 静音落版视频一次，停留最后一帧，手动 Retry 才重新开始。有原生失败条件的玩法显示英文 Try Again，不播放成功庆祝视频。

视频、尾帧和商标全部内嵌在单文件中，没有背景音乐、音乐开关或外部运行资源。竖屏完整画面在横向浏览器中居中显示。源码构建与本地 ZIP 同步更新。
