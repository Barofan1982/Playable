# Harbor Merge

Merge repair tools and follow the original cleanup targets.

保留来源 03 的完整 Cocos 原引擎、场景和玩法规则。独立 index.html 包含全部引擎与资源，离线可打开；完整竖屏在横屏窗口中居中。

底部 Auto Play/Pause 使用原触摸事件与可交互按钮，按原目标提示推进；Retry 重新加载原初始场景。界面为英文。原音乐和环境循环 payload 已删除，交互音效保留，并随页面隐藏暂停。原商店跳转与外部追踪已禁用。

## 重建

在本目录执行 `node source/build.cjs`。构建只使用本目录保存的资源快照、原脚本、图集记录和适配文件；输出与当前 index.html 的 SHA-256 一致。浏览器使用标准 gzip 解压接口加载内嵌原引擎。

## 验收

最终文件 4613688 字节，严格小于 5,000,000 字节。checks.json 保存 file 离线启动、真实触摸、合法自动操作、Pause、Retry、320×568 手机、1280×720 横屏、隐藏/恢复音频与零外部请求记录。真实初始预览为 preview.webp，截图与状态记录在 source/qa。

2026-10-13 启动时序修复：尺寸适配等待 Cocos 创建实际画布容器后执行。最终单文件已通过 320×568、844×390 和本地 file:// 启动复核；独立检查实际场景就绪、无 JavaScript 异常、无外部请求，按钮高度 50px。另在 4 倍 CPU 减速下复核三种模式，并确认从 source/build.cjs 重新构建字节完全一致。原玩法、资源与 Auto Play 事件桥不变；先前手动/自动/暂停/重试/音效记录保留在 checks.json，当前启动证据在 source/qa。
