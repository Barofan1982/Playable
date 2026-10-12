# 色块机关拼形 · Color Block Builder

独立离线 HTML，依据用户提供的 1080×1920、30.292 秒参考广告，重建灰白格纹、淡木地形、顶部白框目标和五个物理机关。无角色。没有背景音乐或音乐开关。

## 操作

点击半透明色块释放；按住拖动可以调整水平落点，松手后交由物理引擎模拟。顶部卡片是当前关卡的真实目标。

1. 释放绿色大球，撞击悬在木台边缘的绿板，把右侧蓝球弹向左槽，与槽底蓝球叠起。
2. 先放亮橙 Z，再放暗橙 Γ。拖动到斜带上的暗橙 L 凹口，三块通过开放凹口碰撞拼成目标。
3. 先放小青球，再放大橙球。左右推力把球送入 V 谷，橙球必须位于青球上方。
4. 按蓝、黄、红、绿的顺序释放。右风扇向左推动，形成上红绿、下蓝黄的 2×2 目标。
5. 先放绿色推块。灰球沿斜坡滚向石台并破坏石台，青球下落进入已有橙球的紫 U 框；再释放紫色倒 U 盖板。

`AUTO PLAY` 示范当前关的正确拖动和释放，`PAUSE` 暂停、`CONTINUE` 继续；`RETRY` 从第一关重玩。成功显示短暂绿勾，自动进入下一关。第五关完成后保持最终场景。失败显示大红叉。

## 物理实现

内嵌 Matter.js 0.20.0。球、板、方块、开放凹口拼形及紫 U 框使用圆、矩形、复合刚体；木地形为静态刚体。输送带和风扇施加连续力，石台只在灰球实际接触时碎裂。手动和自动都调用同一组拖动与释放动作。成功依据实际刚体位置、相对方向与持续稳定时间判定。动态物体不吸附、不瞬移到答案，也不在自动模式中绕过碰撞。

页面隐藏时暂停物理及声音。音效仅在用户开始操作后播放短合成效果。

## 文件与构建

- `index.html`：已内嵌全部逻辑和物理库的交付文件，可直接离线打开。
- `source/index.html`、`source/game.js`、`source/ui.js`：页面、规则和绘图源码。
- `source/matter.min.js`：Matter.js 0.20.0 MIT 发行文件。
- `LICENSE-MATTER.txt`：原始 MIT 许可，构建时同样内嵌于 HTML。
- `source/build.cjs`：内嵌构建，可传入物理库路径。
- `source/validate.cjs`、`physics-validation.json`：真实引擎步进验证。
- `preview.webp`：实际浏览器初始场景截图。

构建：`node source/build.cjs source/matter.min.js`。验证：`node source/validate.cjs`。

画面始终为完整 9:16 竖屏，横屏浏览器居中显示两侧留白。

## 验证入口

浏览器全局 `window.__qa` 提供 `state()`、`reset(level)`、`startAuto()`、`release(name,x)`、`control(name,x)`、`step(seconds)`、`fail()`、`currentlevel()`、`correctActions()`、`pause()`、`continue()`。`window.__game` 为同一规则实例；`state().bodies` 可查看实际位置与角度。
