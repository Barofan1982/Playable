# Juicy Journey · 洗衣房寻物素材记录

素材此前采用内置 imagegen 生成，无 API CLI 或外部 key。场景使用不透明背景，目标图集使用 transparent_background=true。当前摆放修订复用已有图集第一排，没有重新生成图片。视频开场截图仅作构图与画风参考。

## 采用素材

- `assets/scene.png`：原创洗衣房与红发 Sera 插画。原生成文件：`C:/Users/barof/.codex/generated_images/01a0f0d3-992c-7580-89c0-f627726f7a55/exec-73d77ba2-c2cb-4aee-852f-f20c56d9a6a3.png`。
- `assets/objects-scene-fit.png`：修订后的透明图集原文件，1983 × 793 RGBA，五列两排。当前只提取第一排的五类物品，每类放置两件；第二排不参与页面绘制。原生成文件：`C:/Users/barof/.codex/generated_images/01a0f0d3-992c-7580-89c0-f627726f7a55/exec-bbf5993b-897e-4827-9d3a-57bc4940f460.png`。
- `assets/objects.png`：初版五格图集，仅在工作目录保留修改记录；当前 HTML 与 ZIP 不采用。原生成文件：`C:/Users/barof/.codex/generated_images/01a0f0d3-992c-7580-89c0-f627726f7a55/exec-2c2f1a8f-cc26-4293-8a3a-dfaeee7e6907.png`。
- `assets/drinks.png`：旧版衔接的饮品图集记录，当前独立寻物 HTML 与 ZIP 不使用。
- 商标沿用用户已有 Juicy Journey 商标；当前页面只含寻物场景、收集动画与 Good Job! 完成画面。
- 所有正式图片均已放入本样本并内嵌到 HTML，ZIP 与当前文件同步。

## 当前选用方式（2026-10-02）

按照用户反馈统一使用第一排的五种道具。每类两个独立实例，共十件寻物目标；只调整摆放位置、等比例大小和前景遮挡。原图集的第二排保留在生成原文件中，当前构建不提取、不绘制第二排。两只袜子均搭挂在篮沿，水壶与镜子的底座对齐台面和架板。

## 新图片完整提示词

### 洗衣房场景

Use case: stylized-concept. Asset type: full portrait illustrated background for a hidden-object HTML playable. Input image is composition/style reference ONLY, not an edit target. Create a fresh original crowded tropical seaside laundry room, polished 2D comic mobile game art with clean dark outlines, bright cream, turquoise and warm wood, friendly expressive red-haired adult female Sera standing center-right wearing an oversized cream T-shirt and light teal shorts, barefoot, one hand by her hair and other resting on waist. Floor-to-ceiling room scene with two front-loading washing machines across middle rear, wooden shelves densely packed with folded towels, jars, cloth storage baskets and bottles, hanging green pink purple shirts left, large sunny sea-view window rear, potted plants, multiple overflowing wicker and plastic laundry baskets foreground left and right, scattered towels and slippers on patterned pale wood floor, sink/counter right, overhead clothes rail. Draw many small readable ordinary household details and visual search clutter distributed evenly, crisp illustrated outlines, vivid colors, approachable casual game. Portrait 9:13 composition, show full room from ceiling through foreground floor, no header or footer, no UI, no text, no branding, no watermark, no hands/cursors over scene. Background must be FULLY OPAQUE. Leave several little physical spaces for later hidden object layers: near left hanging shirts, left basket rim, middle washer top, low washer-side shelf, right sink counter, far-right shelf, bottom-left plant, front center laundry basket, left floor and lower right floor. IMPORTANT: do not draw any yellow plaid socks, blue glass water pitchers, white-and-pink tissue boxes, orange laundry detergent jugs, or round tabletop vanity mirrors; those five object types will be separate sprites added by code. Other socks must be plain gray if needed, other toiletries rectangular bottles only. Make the girl and artwork clearly original; preserve the visual idea of a busy laundry, not the exact person or drawing in the reference.

### 初版透明目标图集（已替换）

Use case: stylized-concept. Asset type: transparent 2D comic hidden-object sprite atlas. Exactly 5 equally sized cells laid out as a single horizontal row, each with one completely isolated item centered, generous transparent gutters, no item crosses a cell. Match clean dark ink outlines, soft cel shading and bright hand-drawn casual mobile game style of the laundry reference, NOT 3D. Left to right: 1. single yellow-and-white plaid ankle sock with a small cuff, curved side view; 2. transparent turquoise blue water pitcher with handle and short spout, half full of blue water, side three-quarter view; 3. small white tissue box decorated with pink flower spots, one white tissue sticking out, perspective three-quarter view; 4. orange laundry detergent jug with large handle, white oval blank label and turquoise cap; 5. small circular pale blue tabletop vanity mirror with thin gold round frame, short stem and oval base, frontal three-quarter angle. Each full object including all edges, no detached parts or shadows outside its cell. True transparent alpha background around all objects, no painted background, no floor, no text, no watermark, no numbers. These items must be immediately recognizable when scaled to 40-65 pixels tall, with simple silhouettes and fairly thick outlines.

## 物品修订图集完整提示词（2026-10-02）

模式：内置 imagegen；transparent_background=true。输入当前洗衣房场景，仅作画风与视角参考；生成目标图层，不修改场景。实际透明通道已检查，周围有透明像素。采用文件：assets/objects-scene-fit.png，完整嵌入 index.html。独立格提取后保留宽高比，场景遮挡由页面绘制。

Use case: stylized-concept. Asset type: transparent hidden-object sprite atlas, ten original illustrated household objects to be composited into the PROVIDED LAUNDRY SCENE. Input image 1 is the exact scene style reference, NOT an edit target. Create ONLY the objects, with art that looks hand-drawn INTO that scene: same warm natural colored pencil/ink shading, thin dark brown irregular outlines, matte materials, modest highlights and gentle watercolor-like texture. Absolutely NO glossy icon look, no thick black sticker border, no white rim, no plastic 3D button rendering. Layout EXACTLY five columns by two rows, ten equal cells, transparent margins, every object complete and inside its cell. Column meanings left to right: yellow/cream plaid sock, blue water pitcher, white pink-flower tissue box, orange laundry-detergent jug with teal cap, small brass vanity mirror. ROW ONE means mid-distance raised furniture view: (1) soft narrow single plaid sock draped with its cuff folded over a basket rim, drooping vertically with fabric folds, only sock and no basket; (2) upright modest blue glass pitcher with naturally oval rim and handle, eye level slightly above rim, hand-drawn translucent glass with blue water and subtle reflections; (3) low wide rectangular white tissue box with little faded pink flowers and one small tissue, visible narrow top face, width about twice the height, no label; (4) upright slightly side-facing orange detergent jug, matte and softly shaded, grounded flat bottom, no leaning, small blank label; (5) brass tabletop mirror with short stem and small ellipse base, circular face in a slight three-quarter view, softly reflecting pale turquoise. ROW TWO means closer foreground seen from higher room camera: (6) a single loose soft plaid sock lying FLAT on a floor, elongated low silhouette in top-down oblique perspective, fabric thickness almost zero, length more than twice apparent height; (7) a second upright blue pitcher seen from a slightly higher angle, more visible water surface and oval mouth, no chunky oversized handle; (8) second low wide pink-flower tissue box seen from above, wide rectangular top and small tissue, width about twice total height; (9) upright foreground orange detergent jug, visible oval teal cap/top shoulder, modest blank label, matte painted appearance; (10) second brass vanity mirror upright on its stand seen from higher angle, mirror face slightly vertically foreshortened and ellipse base more visible. Maintain the SAME viewpoint and line quality as the laundry illustration rather than independent product rendering. Every cell has actual transparent alpha around the object; no scene, no shelf, no floor, no cast shadow beyond object, no additional objects, no text, no watermarks. Equal cells are only for extraction; objects retain realistic natural proportions. At small display size they should blend into the laundry room rather than pop out as stickers.

## 旧版饮品素材记录（当前版本不使用）

早期版本接入了饮品合并第二关，2026-10-02 用户反馈后已取消。以下为旧素材来源记录；当前 HTML 与 ZIP 仅使用洗衣房场景、十格目标图集和商标。

# 素材记录

饮品图集使用内置 image_gen 工具生成，未使用 API CLI。输入为视频首帧，仅作为风格与饮品层级参考；没有编辑或修改原始视频。

## 文件

- `assets/drinks-original.png`：完整透明生成结果。
- `assets/drinks.png`：缩放到 1500 像素宽的透明图集，嵌入试玩 HTML。
- 海滩、桌面、椰树、遮阳棚、单据和动画由 Canvas 绘制。
- Juicy Journey 商标沿用用户现有商标文件；未使用参考广告的品牌或结尾人物图。

## 最终生成提示词

```text
Use case: stylized-concept. Asset type: ONE transparent sprite sheet for a 2.5D mobile juice shooting-and-merging playable game. Input image 1 is a visual style reference only (video frame), not an edit target. Generate clean new isolated drink sprites with the same polished rounded toy-like 3D glass, elevated three-quarter top-down camera (all objects share precisely the same viewpoint), pale blue rim and base, colorful liquids, glossy highlights and readable silhouettes. Composition: a wide 5:2 canvas, EXACTLY ten objects in a rigid grid of 5 equal-width columns and 2 equal-height rows; each object centered within its own square cell with 12 percent transparent padding; no object crosses cell boundaries. ROW 1, left to right: (1) tiny cylindrical shot glass with dark red juice and pale blue ice; (2) small round tumbler of bright yellow lemonade with ice and a lemon wheel; (3) squat faceted tumbler of bright green juice, mint leaves and short pink-striped straw; (4) low stemmed pink cocktail coupe with ice and an orange wheel; (5) bulbous orange smoothie goblet with a short stout blue stem/base, green grapes, mint and a small white and red straw. ROW 2 left to right: (6) elegant green martini-shaped stemmed glass, mint, strawberry and blue straw; (7) tall pink smoothie in a flared blue-rimmed glass with a ring of strawberries, mint and an orange wheel; (8) deep blue/purple rounded hurricane glass with blueberries, a raspberry, green leaves, ice and an orange slice; (9) large round pink lemonade pitcher with a clear blue handle on the right, ice, a lime wheel and a pink and white straw; (10) generous golden yellow-to-orange tropical fruit pitcher with a clear pale blue handle on the right, whipped white icy top, a strawberry, mint and short golden straw. All ten centered and complete, distinctive shapes, no dark outlines, consistent light from upper left, enough blue edge contrast to remain visible on warm sand. Genuine transparent alpha background. No background, no board, no logo, no characters, no text, no labels, no frames, no boxes, no checkerboard, no cast ground shadows outside objects, no additional objects.
```
