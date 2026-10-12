# 彩块搭形 · Shape Drop

参考第二条 Color Block Builder 竖屏视频（66358dcf4e39bca21a237eb8b1919f3e，59.58 秒）。点击悬空的半透明积木，释放后恢复饱和木色；它们受重力下落，与地面和已释放积木碰撞，搭成白框中的十字图案。

## 玩法

- 点击积木逐件释放，不需要拖动。
- 顺序需要符合支撑关系。落歪、翻转或掉出凹槽会显示参考中的大红叉。
- 十个积木全部真实接触、落稳，并符合每块的目标位置和角度，才会显示成功。
- 底部 `AUTO PLAY` 从初始状态逐件示范正确解法；`PAUSE` 冻结示范和物理，`CONTINUE` 继续；`RETRY` 重玩。
- 无角色、无背景音乐、无音乐开关。释放、碰撞和结果有短操作音效；页面隐藏时暂停物理和音效。

## 完整关卡与解法

九色积木（蓝 J、浅绿 Z、粉 J、橙 Z、黄色 T、深绿 L、红方块、紫 L、青横条）和一个白色 L 形间隔块。蓝色 J 在中央三格凹槽内搭底，浅绿 Z 和白色 L 填好底部，再搭左右横臂与顶端。

稳定解法：**蓝 J → 浅绿 Z → 白 L → 粉 J → 橙 Z → 黄 T → 深绿 L → 红方块 → 紫 L → 青横条**。自动示范调用同一个释放函数，等待上一个刚体真实落稳才释放下一个；没有目标吸附、瞬移、动画轨迹或替换碰撞体。

## 文件与构建

- `index.html`：离线独立试玩，所有脚本与绘制内嵌，限制小于 5 MB。
- `preview.webp`：真实首帧截图。
- `sample.json`：集合元数据。
- `source/rules.js`：块形、初始坐标、目标坐标与支撑顺序。
- `source/physics.js`：Matter.js 复合刚体、凹槽地面、碰撞和严格结果判定。
- `source/game.js`：画布绘制、点击释放、自动示范、暂停和短音效。
- `source/effects-only.js`：无音乐的独立音效 helper，页面或广告隐藏时暂停已注册的音效上下文。
- `source/index.template.html`、`source/build.cjs`：内嵌构建模板与构建器。
- `source/verify.cjs`：真实物理解法与错误释放验证。

构建：在本目录运行 `node source/build.cjs`。本地 `source/vendor/matter.min.js` 已附带，无需联网；也支持 `MATTER_VENDOR` 环境变量指定其他本地库路径。

验证：`node source/verify.cjs`。正确顺序必须经过碰撞并成功，先释放红方块必须失败。浏览器检查脚本 `source/browser-verify.cjs` 使用可用的本地 Playwright、Sharp 与 Chrome，验证实际控制点击、正确示范、错误红叉、暂停和完整横屏适配，并重新生成 `preview.webp`。结果截图在 `source/qa/`。

已验证：正确示范十块全部真实匹配并成功；先点击红方块失败；暂停不推进物理或示范；1280 × 720 横屏下场景完整居中；浏览器无运行错误。独立 HTML **105,771 字节**，已对本样本单独调用集合 `optimizeHtml`，附带无音乐的音效隐藏暂停 helper。

结束状态：成功或失败会清除自动示范与暂停状态，禁用的控制按钮恢复显示 `AUTO PLAY`；成功场景静止保留。已针对性验证成功后位置与时间不再变化、广告隐藏时音效上下文暂停，`RETRY` 可恢复就绪场景与可用的 `AUTO PLAY` 按钮。当前包应使用这一版 `index.html` 与 `source/effects-only.js`；重建器保留同一 helper。

## 检查接口

浏览器 `window.__PLAYABLE_QA__`（也提供 `window.shapeDropQA` / `window.__qa`）支持 `state()`、`startAuto()`、`reset()`、`fail(reason)`、`release(id 或 bodyId)`、`releaseBody(bodyId)`、`step(帧数, 毫秒)`、`solver()`、`pause()`、`continue()`。`state()` 包括每个刚体的位置、角度、速度、碰撞接触、目标误差以及成功匹配列表。

页面以完整 720 × 1280 场景居中适配屏幕，底部控制栏固定 48 CSS 像素；横屏保留完整竖屏场景。
