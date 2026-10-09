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
