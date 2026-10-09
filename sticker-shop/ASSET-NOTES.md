# Sticker Shop 素材说明

## 素材来源

人物使用内置 imagegen 技能及工具生成，transparent_background=true。采用生成原图：

`C:/Users/barof/.codex/generated_images/01a0f0d3-992c-7580-89c0-f627726f7a55/exec-64f99b38-d9e7-404e-8b8c-2031dba12686.png`

保存为当前样本的 `assets/characters.png`（1223 × 1286，RGBA）。PNG 使用无损压缩，保留透明通道与原尺寸。图集中的人物未严格停在等分格线内，因此页面按四个独立连通轮廓提取完整人物，并保留轮廓柔边，避免切断脚部或混入邻近人物碎片。

Sera 身份采用橙红侧辫、绿色眼睛、雀斑、黄色褶边上衣、青绿花裙和凉鞋。其余人物为成年男店员、成年金发顾客与青绿围巾小狗。人物是静态装饰贴纸。

房间及其他家具由 `source/art.js` 原生 Canvas 绘制；五个柜子与其商品使用 `source/cabinets.js`。两者共用等距坐标：`x = 450 + 65(u − v)`，`y = 300 + 32(u + v) − 55z`。放置的商品按货架归组，独立家具和人物按底部所在深度排序。图标与场景使用相同的绘制来源，托盘缩略图不是另一套比例。

商标沿用用户现有 Juicy Journey 商标。参考视频仅用于理解玩法和构图，没有将其角色、商品或视频帧嵌入交付 HTML。

## 完整人物生成提示词

Use case: stylized-concept. Asset type: four independent transparent character stickers for an isometric hand-drawn cozy grocery store decorating HTML game Juicy Journey. Create ONE sprite atlas, exactly 2 columns by 2 rows, four equal cells and generous transparent gutters. Flat pastel storybook drawing, warm dark brown outlines, lightly colored pencil texture, adorable original casual game characters, consistent small isometric room viewpoint (camera elevated at 30 degrees, front three-quarter), full standing bodies and feet, transparent background, no floor, no backgrounds, no frame, no label, no text. All figures fully contained in their cell with at least 12% transparent margins. Top left: Sera, adult woman with orange-red side braid, teal bow, green eyes, subtle freckles, yellow ruffled blouse, teal tropical floral midi skirt, brown sandals, friendly, holding a small brown grocery bag. Top right: adult brunette man with glasses, white short-sleeve shop uniform and blue apron, carrying a small crate of colorful juice bottles, friendly. Bottom left: adult blonde woman with pink top and light blue jeans, holding a paper bag of oranges, smiling. Bottom right: playful small tan-and-white beagle puppy wearing a teal scarf, standing on four paws, cheerful big eyes. Delicate cozy 2D sticker illustration, crisp silhouette and white 4-pixel sticker outline, consistent scale and high quality facial anatomy, NOT photorealistic, NOT shiny 3D, no extra figures. Genuine transparency outside the exact four stickers, leave all cell dividers blank.

## 配乐

用户提供的 Ever So Blue - Onthou，使用合集已有的 30 秒 MP3 128 kbps 循环片段。声音默认关闭，首次用户操作后才能播放；页面隐藏时暂停。没有新增外部音乐来源。

## 轮廓、透视与新增音效（2026-10-08）

运行时使用原生 Canvas 透明蒙版生成统一白色外沿和绿色提示轮廓，不修改人物原图。空调与窗户从房间底图拆为独立可放置物件。接触阴影沿水平支撑面投影，独立于贴纸外沿。

五个柜子于 2026-10-08 经用户逐张确认后接入。几何来源为 `柜子贴图待确认/20261008-v1/cabinets.js`，原始透明贴图保留存档。上线版本由相同立体几何绘制，五张空柜输出与已确认 PNG 逐字节一致。瓶罐采用圆柱、纸盒采用立体盒、水果采用球面；商品底座与层板共用支撑高度。柜体与已放商品一起按 `u + v + (64/55)z` 比较像素深度，墨线也遵守遮挡；侧板、柜顶、隔板能真正挡住后方商品。当前摆放组合缓存后复用，无需每帧重算几何。

镊子使用原生 Canvas 绘制，采用用户截图的下方长柄、横向弯折夹口。参考新增 360 × 640 视频的贴纸操作时刻及音轨短促瞬态，撕拉声使用 0.18 秒带通噪声与轻微碎纸纹理，贴合声使用高频短按压声与约 0.23 秒的双泛音上行脉冲。音效默认有效，独立于配乐开关，由首个手动操作解锁音频；页面隐藏时暂停。
