# Sandwich Orders

按小票选择火腿、酸黄瓜、番茄、洋葱、生菜与酱料，用上层面包封口。首单之后进入原4×4洋葱合成小游戏，再完成第二张订单。

## 操作

Tap each ingredient shown on the ticket, then the top bread. Merge matching pieces in the onion mini-game. AUTO PLAY follows the original recipe and legal merge hints.

原 openMaxNum 范围为两张订单；错误输入显示原红叉或客户负反馈，沿用原可继续接单的流程。

底部按钮实际48px，AUTO PLAY 后可 PAUSE / CONTINUE，RETRY重新开始。竖屏画布完整，横屏按9:16居中。

## 独立文件

直接打开 index.html；全部图片、引擎、字体与短音效已内嵌。无需服务器、CDN或网络。未嵌入BGM，也没有音乐开关、返回列表或商店跳转。隐藏页面或广告时冻结原引擎与音效。

## 源与构建

source/build.cjs 重打包原虚拟资源文件；原Cocos3引擎、原场景和Spine动画保留。浏览器优先使用原生解压API，内嵌pako作为离线后备。source/selected-assets 保存实际选择的本地资源，source/resource-map.json记录原纹理与替代图。

在本机以 Node 运行 source/build.cjs。构建使用已安装的sharp。

## QA

source/qa-report.json 记录320×568与844×390实际浏览器检查、合法Auto流程、暂停、隐藏、Retry与错误记录。source/initial-320.png、initial-844.png和result-*.png是实际运行画面。preview.webp为真实首帧。

QA入口：window.__qa.state / startAuto / pause / setAdVisible / tap / step / reset / solve。Auto通过原控制组件操作，不直接更改订单进度或棋盘数值。
