const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const manifest=JSON.parse(fs.readFileSync(root+"/samples.json","utf8")),samples=manifest.samples;
// Classify by the result of the interaction, not the sample name.
const categoryOverrides={'drink-merge':'合成','merge-cook':'消除','arrow-escape':'解谜'};
for(const sample of samples)if(categoryOverrides[sample.id])sample.type=categoryOverrides[sample.id];
const updated=manifest.updated||'2026-10-02';
const musicCount=samples.filter(s=>!['interactive-math-demo','interactive-audio-demo','interactive-physics-demo','static-astronomy-poster'].includes(s.kind)).length;
const displayDate=updated.split('-').map(Number).join(' ').replace(/^(\d+) (\d+) (\d+)$/, '$1 年 $2 月 $3 日');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
for(const s of samples){s.entry=s.id+'/index.html';s.zip='下载包/'+s.id+'.zip';s.readme=s.id+'/README.md';s.htmlBytes=fs.statSync(path.join(root,s.entry)).size;if(fs.existsSync(path.join(root,s.zip)))s.zipBytes=fs.statSync(path.join(root,s.zip)).size;}
fs.writeFileSync(path.join(root,'samples.json'),JSON.stringify({...manifest,brand:'Juicy Journey',updated,samples,archive:{earlyZip:'历史版本/旧下载包/corn-早期包.zip'}},null,2));
const cards=samples.map((s,i)=>`<article class="card" data-type="${esc(s.type)}">
 <a class="playable" href="${s.entry}${s.revision?'?v='+esc(s.revision):''}" target="_blank" rel="noopener" aria-label="试玩：${esc(s.name)}">
  <div class="poster"><img ${i===0?'src':'data-src'}="${s.id}/${s.image}" alt="${esc(s.name)}预览" ${i===0?'fetchpriority="high"':''} decoding="async"><span class="play-mark" aria-hidden="true">▶</span></div>
  <div class="card-body"><h2>${esc(s.name)}</h2><span class="category">${esc(s.type)}</span></div>
 </a></article>`).join('\n');
const types=[...new Set(samples.map(s=>s.type))];
const categories=['全部',...['合成','消除'].filter(t=>types.includes(t)),...types.filter(t=>!['合成','消除'].includes(t))];
const filters=categories.map((t,i)=>`<button class="filter" type="button" data-filter="${esc(t)}" aria-pressed="${i===0}">${esc(t)}</button>`).join('');
const template=fs.readFileSync(path.join(__dirname,'gallery-template.html'),'utf8');
fs.writeFileSync(path.join(root,'index.html'),template.replaceAll('__COUNT__',String(samples.length)).replace('__FILTERS__',filters).replace('__CARDS__',cards));
const table=samples.map(s=>`| [${s.name}](${s.entry}) | ${s.type} | ${s.operation} | [说明](${s.readme}) |`).join('\n');
fs.writeFileSync(path.join(root,'README.md'),`# Juicy Journey · 可玩广告合集

更新：${displayDate}。

仓库：[Barofan1982/Playable](https://github.com/Barofan1982/Playable)。

根目录的 [index.html](index.html) 是合集首页。卡片只显示预览图、标题和分类，点击整张卡片在新窗口打开独立试玩。预览统一使用 9:16 竖图，截图上下左右居中裁切，铺满卡片。手机端固定一屏，预览按屏幕可用空间尽量放大，标题叠在图片底部，通过左右滑动切换卡片。分类按钮高度为 48 像素，可同时选中多个类型，再次点击取消；多个类型合并显示，全部取消或点击“全部”恢复全部试玩。桌面端使用多列画廊。页面不提供文件下载选项。

## 分类口径

- 合成：两个同级道具合并成一个更高等级的新道具，具有进化关系。
- 消除：匹配后道具从盘面消失，包括三消和配对消除；不生成升级道具。
- 解谜：解开线路、脱困或寻找重力路线。箭头脱困归入此类。

## ${samples.length} 个试玩

| 样本 | 类型 | 主要操作 | 说明 |
| --- | --- | --- | --- |
${table}

## 静态网站

这些文件可直接作为静态网站托管，首页入口为根目录 index.html。现有成品无需编译，网站根目录即为部署内容根目录。

各样本的 index.html 内嵌运行所需的图片、音乐和代码，单文件离线可玩；合集首页的预览图和商标是额外的网站展示文件，需要与首页一起托管。

GitHub 中保存首页、${samples.length} 个独立试玩、预览图、必要商标及说明。ZIP 为本地归档，继续保存在本地下载包目录。参考视频、测试浏览器缓存和原始素材由本地工作目录维护。

## 附加视频

[washface.mp4](washface.mp4) 放在仓库根目录，与合集一起保存。

## 配乐与体积

${musicCount} 个试玩使用用户提供的 Ever So Blue - Onthou，前 30 秒、MP3 128 kbps 循环。配乐默认关闭，按音乐按钮后才解码并循环播放。全部样本的操作音效独立于音乐开关；后台隐藏时暂停声音。大图采用 WebP，列表按可见位置加载预览图。独立试玩中不设置返回列表按钮。

各 HTML 均低于 5,000,000 字节。[体积记录](体积与音乐检查.md)。

## 当前样本说明

${samples.map(s=>`### ${s.name}\n\n${s.desc}\n\n- 操作：${s.operation}\n- 结尾：${s.ending}\n- [详细说明](${s.readme})\n`).join('\n')}
`);
console.log(JSON.stringify({root,samples:samples.length,catalogBytes:fs.statSync(path.join(root,'index.html')).size}));
