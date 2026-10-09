# Juicy Journey · 寿司传送带素材记录

模式：内置 imagegen 工具（生成两张透明图集，再分别编辑人物透明背景和鲷鱼料理），四次调用均使用 transparent_background=true。

## 当前采用素材

- `assets/foods.png`：16 格食材与成品，饭团已替换为完整鲷鱼 → 鲷鱼片寿司。
- `assets/cast.png`：厨师与四位顾客，透明背景。
- 木质餐厅、传送带及装饰由页面绘制；Juicy Journey 商标沿用合集现有素材。
- 图集在构建时内嵌到 index.html，离线不依赖外部图片。

## 生成结果来源

目录：`C:/Users/barof/.codex/generated_images/01a0f0d3-992c-7580-89c0-f627726f7a55/`。

- 食材初稿：`exec-6b85240e-7644-40a0-bd88-00829de19110.png`。
- 人物初稿：`exec-f651d560-e9ff-4116-a1b0-c173514ddfd5.png`。
- 最终人物：`exec-ef8160ba-3199-4220-973e-7923899485db.png` → `assets/cast.png`。
- 最终鲷鱼食材：`exec-bba3c755-5125-4469-9228-7595c143051a.png` → `assets/foods.png`。

## 完整提示词

### 食材图集初次生成

Use case: stylized-concept. Asset type: transparent 3D mobile casual game sprite atlas. Create exactly sixteen isolated food icons in an evenly spaced 4 columns by 4 rows grid on genuinely transparent background, no tile borders, labels, text, watermark or plates. Every cell centered with generous transparent padding, consistent scale and 2.5D three-quarter overhead camera. Bright appealing polished soft 3D casual sushi restaurant game rendering, clear silhouette, soft highlights, subtle ambient shadow only directly under each item. Reading left to right: Row 1 raw ingredients: yellow folded tamagoyaki egg slice; plain triangular white rice onigiri with small dark nori strip; glossy deep red tuna fish slice; glossy orange salmon slice with ivory stripes. Row 2 raw ingredients: curled orange cooked shrimp tail; creamy white octopus tentacle with bright pink red suckers; two green cucumber cross sections with pale centers; tiny mound of shiny red-orange salmon roe on a green leaf. Row 3 prepared sushi corresponding to row 1: egg nigiri with white rice base and black nori strap; triangular rice onigiri; deep red tuna nigiri over white rice; orange salmon nigiri over white rice. Row 4 prepared sushi corresponding to row 2: orange shrimp nigiri over white rice; octopus nigiri over white rice; dark nori cucumber maki roll with bright green center; dark nori gunkan salmon roe sushi with shiny red-orange spheres. Isolated assets not a completed scene. All sixteen icons must occupy their own single cell without overlap. Keep real transparency between all cells.

### 人物图集初次生成

Use case: stylized-concept. Asset type: transparent 3D mobile casual sushi restaurant game character sprite atlas. Make a wide 3 columns by 2 rows evenly spaced grid with five original adult cartoon characters, sixth bottom right cell empty transparent. Exactly one waist-up character in each occupied cell, both shoulders visible, fully inside cell with transparent margins, front-facing, friendly big eyes, polished soft rounded 3D mobile game art. No backgrounds, words, props outside cells, borders or logos. Top left: cheerful male sushi chef with warm brown skin, short dark hair, neat small mustache, blue patterned headband, dark round sunglasses, white chef wrap jacket with pale blue cuffs, both hands at waist holding two small safe kitchen knives angled inward in a working pose. Top middle: smiling young adult red-haired woman with side braid, teal head bow, yellow off-shoulder top, flower earring. Top right: smiling adult dark-skinned woman with curly high bun, coral and teal head wrap, coral sleeveless blouse. Bottom left: friendly adult bearded brunette man with thick dark hair, blue shirt. Bottom middle: smiling adult blonde woman with wavy bob, mint green shirt. Identical camera, lighting and aesthetic for all five. Genuinely transparent background. No cast shadows behind the characters. Art is for new Juicy Journey playable game assets, not copying an existing game's exact character identities.

### 人物透明背景编辑

Edit target: the attached five-character 3-by-2 sprite atlas. Change ONLY the background and sprite margins. Preserve the exact five original characters, expressions, faces, clothes, chef knives, 3D render quality, and their current grid cell order. Remove ALL colored gradient backdrops, glows, edge haze, and environment. The whole area outside the five characters must be fully transparent alpha=0, not dark, white, gray, or checkerboard. Produce clean sharp isolated cutouts with transparent spaces between cells. Scale each character down within its own cell so its complete shoulders and waist-up pose fit with 10% transparent margins on ALL sides. Keep grid 3 columns by 2 rows, chef top left, red-haired woman top center, dark-skinned woman top right, bearded man bottom left, blonde woman bottom center; bottom right completely transparent. Do not add backgrounds or shadows behind the characters. This must be a usable transparent sprite sheet.

### 饭团替换为鲷鱼编辑

Edit target: this transparent sixteen-food 4-by-4 sprite sheet. Change exactly TWO cells: row 1 column 2 and row 3 column 2. Preserve the other fourteen food icons exactly, their colors, positions, scale, clean 3D rendering, the 4-by-4 grid, and genuine transparent background. Row 1 column 2 is currently a raw white rice onigiri: REPLACE it with a small whole raw sea bream fish, clearly recognizable with head, tail, fin, silvery pink scales, blue-silver dorsal shading, facing diagonally left in the same 2.5D overhead camera. Row 3 column 2 is currently prepared rice onigiri: REPLACE it with appetizing sea bream nigiri sushi, translucent pale pearly pink fish fillet with delicate silver edge laid over a distinct oval white rice base, a tiny green garnish, no whole fish head or tail. Make the raw whole fish and prepared nigiri have OBVIOUSLY DIFFERENT silhouettes. Center every replacement inside its existing cell with transparent margin. Keep all empty spaces fully transparent alpha=0. No labels, backgrounds, plates, grid lines or added icons.


## 2026-10-02 · 扩充到八位顾客

使用内置 imagegen，transparent_background=true。现有 cast.png 仅作为风格参考，保留原厨师和四位顾客；本次生成四位新的成年顾客。

- 生成结果：`C:/Users/barof/.codex/generated_images/01a0f0d3-992c-7580-89c0-f627726f7a55/exec-4d6d97b1-a91f-4d9a-bf00-36b6af9b23f1.png`。
- 采用素材：`assets/customers-extra.png`。
- 页面将原图集与新增图集共同载入，合计 1 位厨师、8 位顾客。

### 新增顾客完整提示词

Use case: stylized-concept. Asset type: transparent character sprite atlas for Juicy Journey sushi restaurant playable. Input image: style reference ONLY, keep the same polished friendly 3D cartoon rendering and waist-up frontal portrait conventions, but create FOUR NEW UNIQUE ADULT CUSTOMERS, none of the four existing characters, no chef. Composition: exactly 2 columns x 2 rows, four equal independent cells, one centered waist-up customer per cell with ample transparent gutter around each. Upper left: East Asian adult man with short straight black hair, round glasses, mustard yellow casual sweater, cheerful gentle expression. Upper right: older adult silver-haired woman wearing purple cardigan and white shirt, short neat haircut and delicate glasses, warm smile. Lower left: adult tan-skinned man with shaved bald head, neat small goatee, coral orange tropical patterned shirt, broad friendly smile. Lower right: adult woman with medium brown skin, long dark straight hair tied in high ponytail, turquoise sleeveless blouse, distinctive hoop earrings, lively smile. All four must look clearly different in age, hairstyle, clothes, complexion and face silhouette. Render from head through waist, centered front-facing, same scale, both arms visible naturally resting, no utensils and no food. Smooth rounded 3D game character materials, soft warm studio lighting, crisp silhouettes. True transparent alpha background on EVERY cell, no colored backdrop, no dark ground, no checkerboard painted into image, no text, no labels, no watermark. Characters must fit entirely in their own grid cells; no crossing cell boundaries.

## Sera 造型更新（2026-10-03）

主厨使用用户提供的 `D:/Test/Juicy Journey/人物立绘/Sera女主.png`；裁去透明边距、缩小并压缩为 192 色透明 PNG，源立绘不修改。工作用压缩图为 `assets/sera.png`（384 × 1348，74,966 字节）。HTML 中裁出上半身并绘制待机/加工摆动，切刀动作继续播放。


### 主厨入口修正（2026-10-03）

中间主厨使用独立 Sera 上半身素材，同时替换原人物图集的厨师位置；开局、加工、重试均保持 Sera。顾客、菜品和玩法保持当前版本。实测记录见 chef-checks.json。


## 蓝衣顾客头部裁切修复（2026-10-08）

原人物图集第二排顶部含有上一排厨师衣服的两个残片。载入蓝衣男生时，保留最大连通人物轮廓和透明柔边，再计算独立裁切范围。原始素材不变；头发、脸和衣服的 79,530 个实心像素全部保留。横竖屏检查无异常，详见 portrait-checks.json。
