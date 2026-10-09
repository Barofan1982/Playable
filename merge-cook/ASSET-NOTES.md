# 素材记录

当前背景直接使用用户提供的图片。奖励图集使用内置 image_gen 工具生成；视频帧提取与格式转换使用本地工具，没有修改用户原始文件。

## 海岛聚餐底图（2026-10-08）

来源：用户提供的 `C:/Users/barof/Downloads/JJ-en-新落版2k-60fps.mp4_20261008_105632.744.png`，尺寸 776 × 1378。

工作素材：`assets/background.png`，与用户原文件完全一致。HTML 内嵌 JPEG 质量 90，保留原始分辨率、完整构图和颜色，没有生成、重画或裁切。压缩图为 412,096 字节，缓存登记于维护工具的图片压缩结果中，重新构建不会还原为旧底图。

开局棋盘覆盖背景；全部消除后显示完整图片并保持最后画面。背景内的 PLAY NOW 和商店标识为图片内容。

## 奖励图集

参考：视频中段连续帧和初始棋盘帧。生成透明三列图集，分别对应橙红色烤箱、蔬菜食材篮和蓝色烤架。压缩为 1536 × 512 PNG，保留透明通道。

最终使用文件：`D:/Test/Juicy Journey/可玩广告/merge-cook/assets/power-ups.png`。

保存的完整生成结果：`D:/Test/_codex_scratch/juicy-journey-flambe-reference/power-ups-original.png`。

### 最终提示词

```text
Use case: stylized-concept. Asset type: transparent power-up sprite sheet for a mobile cooking merge game. Use the attached reference images to match the food game's polished rounded toy-like 3D rendering. Create exactly THREE separate isolated objects in a single WIDE horizontal sprite sheet with three equal-width columns, a large clear gap between objects, no object crossing between columns. LEFT: the chunky orange-red countertop oven from the reference, shown at a three-quarter angle, open dark cooking cavity, pale metal tray protruding, yellow warm interior glow. CENTER: the orange and cream food basket/cart from the reference, blue-gray base and small wheels, filled with a green broccoli, purple aubergine, yellow corn and vegetables. RIGHT: the blue countertop tabletop grill from the reference, open light metal lid behind it, silver grill bars with three brown-red sausages, yellow-orange heat glow. High quality 3D rendered icons with glossy surfaces and soft bevels, same cohesive light from upper left. Each icon centered in its own column, similar scale, leave 12 percent transparent padding around its silhouette. Background genuinely transparent. No squares, no cards, no tile backgrounds, no border, no text, no logos, no hands or people, no extra icons. Sprite sheet has exactly these three objects.
```

## 普通棋盘图标

从用户提供视频的初始 7 × 13 棋盘帧裁取，避开手指与底部原商标遮挡的位置。初始帧作为内嵌图集，页面读取各物品的干净位置后绘制到独立方块上。

## 实现源文件

`D:/Test/_codex_scratch/juicy-journey-flambe-reference/` 中保存页面模板、玩法代码、构建脚本、浏览器检查脚本、参考帧和完整生成图片。
