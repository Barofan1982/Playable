const fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
const root=path.resolve(__dirname,'..');
const manifest=JSON.parse(fs.readFileSync(root+"/samples.json","utf8")),samples=manifest.samples;
const updated=manifest.updated||'2026-10-02';
const musicCount=samples.filter(s=>!['interactive-math-demo','interactive-audio-demo','interactive-physics-demo','static-astronomy-poster'].includes(s.kind)).length;
const displayDate=updated.split('-').map(Number).join(' ').replace(/^(\d+) (\d+) (\d+)$/, '$1 年 $2 月 $3 日');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
for(const s of samples){s.entry=s.id+'/index.html';s.zip='下载包/'+s.id+'.zip';s.readme=s.id+'/README.md';s.htmlBytes=fs.statSync(path.join(root,s.entry)).size;if(fs.existsSync(path.join(root,s.zip)))if(fs.existsSync(path.join(root,s.zip)))if(fs.existsSync(path.join(root,s.zip)))if(fs.existsSync(path.join(root,s.zip)))s.zipBytes=fs.statSync(path.join(root,s.zip)).size;}
fs.writeFileSync(path.join(root,'samples.json'),JSON.stringify({...manifest,brand:'Juicy Journey',updated,samples,archive:{earlyZip:'历史版本/旧下载包/corn-早期包.zip'}},null,2));
const cards=samples.map((s,i)=>`<article class="card" data-type="${esc(s.type)}" data-search="${esc([s.name,s.subtitle,s.type,s.desc,...s.features].join(' ').toLowerCase())}">
 <a class="poster" href="${s.entry}${s.revision?'?v='+esc(s.revision):''}" target="_blank" rel="noopener" aria-label="打开${esc(s.name)}"><img src="${s.id}/${s.image}" alt="${esc(s.name)}预览"><span class="number">${String(i+1).padStart(2,"0")}</span><span class="poster-play">▶ ${s.kind==='static-astronomy-poster'?'打开轨道图':'打开试玩'}</span></a>
 <div class="card-body"><div class="category">${esc(s.type)} <span>HTML · ${(s.htmlBytes/1e6).toFixed(2)} MB</span></div><h2>${esc(s.name)}</h2><p class="subtitle">${esc(s.subtitle)}</p><p class="description">${esc(s.desc)}</p><div class="tags">${s.features.map(f=>`<span>${esc(f)}</span>`).join('')}</div><div class="actions"><a class="primary" href="${s.entry}${s.revision?'?v='+esc(s.revision):''}" target="_blank" rel="noopener">${s.kind==='static-astronomy-poster'?'打开轨道图':'开始试玩'} ↗</a><a class="notes" href="${s.readme}" target="_blank" rel="noopener">操作说明</a></div></div></article>`).join('\n');
fs.writeFileSync(path.join(root,'index.html'),`<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>Juicy Journey · 可玩广告合集</title>
<style>
*{box-sizing:border-box}body{margin:0;color:#193e3b;background:#f5f4ec;font-family:"Microsoft YaHei",Arial,sans-serif}a{color:inherit;text-decoration:none}button,input{font:inherit}button,a,input{outline-offset:4px}button:focus-visible,a:focus-visible,input:focus-visible{outline:3px solid #dd713f}.hero{background:#164c48;color:#fff8e5;overflow:hidden;position:relative}.hero:after{content:"";position:absolute;width:440px;height:440px;border:70px solid #ffffff06;border-radius:50%;right:-40px;top:-260px;pointer-events:none}.hero-inner{max-width:1320px;margin:auto;padding:38px 36px 40px;position:relative;z-index:1}.brand-row{display:flex;align-items:center;gap:20px;justify-content:space-between}.brand{width:148px;height:92px;object-fit:contain}.updated{font-size:12px;color:#bad3ca;letter-spacing:.04em}.eyebrow{font-size:12px;letter-spacing:3px;font-weight:700;color:#efd2a0;margin:25px 0 12px}h1{font-size:clamp(32px,5vw,52px);letter-spacing:-1px;margin:0 0 14px}.intro{color:#d1e3da;font-size:15px;line-height:1.9;margin:0;max-width:760px}.stats{display:flex;gap:38px;margin-top:29px}.stats strong{font-size:25px;display:block;color:#ffe4a1}.stats span{font-size:12px;color:#c4d9cc;display:block;margin-top:6px}main{max-width:1320px;margin:auto;padding:30px 36px 36px}.toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:16px;justify-content:space-between;margin-bottom:25px}.filters{display:flex;gap:8px;flex-wrap:wrap}.filter{border:1px solid #d9ded0;border-radius:30px;padding:9px 18px;background:#fffefa;color:#536964;cursor:pointer;font-size:13px}.filter[aria-pressed=true]{background:#174e47;color:#fff7df;border-color:#174e47}.search{display:flex;align-items:center;gap:9px;background:#fffefa;border:1px solid #d9ded0;border-radius:28px;padding:0 17px;max-width:100%;color:#6f837b}.search input{border:0;background:transparent;color:#234d47;width:230px;max-width:100%;padding:12px 0;font-size:13px}.results{font-size:12px;color:#70827a;margin-bottom:16px}.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.card{background:#fffefa;border:1px solid #e1e3d7;border-radius:20px;overflow:hidden;box-shadow:0 5px 20px #213f3610;transition:transform .18s,box-shadow .18s;min-width:0}.card:hover{transform:translateY(-3px);box-shadow:0 10px 26px #213f3618}.card[hidden]{display:none}.poster{height:245px;display:block;background:#e5e5d7;position:relative;padding:15px;overflow:hidden;border-bottom:1px solid #e7e5d9}.poster img{display:block;width:100%;height:100%;object-fit:contain;border-radius:8px}.number{position:absolute;left:18px;top:17px;color:#698277;font-size:12px;font-weight:800;letter-spacing:1px}.poster-play{position:absolute;bottom:15px;right:15px;padding:7px 12px;background:#184a43ed;color:#fff6da;font-size:11px;border-radius:18px}.card-body{padding:23px 22px 22px}.category{font-size:11px;color:#b46f36;font-weight:700;display:flex;justify-content:space-between;gap:8px}.category span{font-weight:400;color:#94a197}h2{font-size:21px;margin:12px 0 5px;letter-spacing:-.5px}.subtitle{color:#819187;font-size:11px;margin:0 0 15px;letter-spacing:.5px}.description{font-size:13px;line-height:1.8;color:#597167;margin:0;min-height:70px}.tags{display:flex;flex-wrap:wrap;gap:6px;margin:16px 0 21px}.tags span{background:#f0f3e8;color:#64796c;font-size:10px;padding:5px 7px;border-radius:5px}.actions{display:flex;flex-wrap:wrap;align-items:center;gap:10px;font-size:12px}.actions a{padding:9px 11px;border:1px solid #d7ddd0;border-radius:8px;white-space:nowrap}.actions .primary{background:#f2c865;border-color:#f2c865;color:#574820;font-weight:700}.actions .notes{border:none;color:#7a8e81;padding:9px 0}.empty{padding:55px;text-align:center;color:#809386;background:#fffdf7;border-radius:18px}.archive{margin-top:31px;border-top:1px solid #dce0d3;padding-top:22px;color:#748779;font-size:12px}.archive summary{cursor:pointer;font-weight:700;width:fit-content}.archive p{line-height:1.9;margin:12px 0}.archive a{text-decoration:underline;text-underline-offset:3px;color:#3f6c5f}.archive ul{padding-left:20px;line-height:2.3}footer{font-size:11px;color:#95a193;text-align:center;padding:26px 12px 4px;line-height:1.9}.catalog-notes{margin-top:20px;font-size:12px;line-height:1.9;color:#7a8c7f}.catalog-notes a{text-decoration:underline;text-underline-offset:3px}@media(max-width:1100px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:640px){.hero-inner{padding:22px 20px 29px}.brand{width:115px;height:72px}.updated{font-size:10px}.eyebrow{margin-top:19px;font-size:10px}.intro{font-size:13px}.stats{gap:30px;margin-top:22px}.stats strong{font-size:23px}.stats span{font-size:10px}main{padding:24px 16px}.toolbar{gap:15px}.filter{padding:8px 14px;font-size:12px}.search{width:100%}.search input{width:100%}.grid{grid-template-columns:1fr;gap:18px}.poster{height:275px}.description{min-height:0}.card-body{padding:21px}.card:hover{transform:none}.archive{margin-top:24px}}@media(prefers-reduced-motion:reduce){.card{transition:none}}
</style></head><body>
<header class="hero"><div class="hero-inner"><div class="brand-row"><img class="brand" src="corn/juicy-journey-logo.png" alt="Juicy Journey"><span class="updated">更新于 ${displayDate}</span></div><p class="eyebrow">JUICY JOURNEY · PLAYABLE COLLECTION</p><h1>可玩广告合集</h1><p class="intro">从参考视频到可操作的 HTML 试玩。旋转消除、寻物、经营、方块与拼图等投放试玩，都在这里。<br>点击开始试玩即可在浏览器中打开。${musicCount} 个试玩已加入循环配乐，单个 HTML 均低于 5 MB。</p><div class="stats"><div><strong>${String(samples.length).padStart(2,"0")}</strong><span>正式样本</span></div><div><strong>${String(samples.filter(s=>s.type==="拼图").length).padStart(2,"0")}</strong><span>拼图版本</span></div><div><strong>&lt; 5 MB</strong><span>单个 HTML / ZIP</span></div></div></div></header>
<main><div class="toolbar"><nav class="filters" aria-label="按玩法筛选">${['全部',...new Set(['寻物','消除','经营','方块','拼图',...samples.map(s=>s.type)])].map((t,i)=>`<button class="filter" data-filter="${t}" aria-pressed="${i===0}">${t}</button>`).join('')}</nav><label class="search"><span aria-hidden="true">⌕</span><input id="search" type="search" placeholder="搜索样本或玩法" aria-label="搜索样本或玩法"></label></div><div class="results" id="results" aria-live="polite">显示全部 ${samples.length} 个样本</div><section class="grid" aria-label="试玩样本">${cards}</section><p class="empty" id="empty" hidden>没有找到对应样本，试试其他关键词。</p><div class="catalog-notes">操作细节与结尾行为见各样本说明。新增七个益智试玩均含成功、失败与 AUTO PLAY，结尾动画最长 0.7 秒。<a href="README.md" target="_blank" rel="noopener">查看完整汇总</a> · <a href="七视频试玩对照.md" target="_blank" rel="noopener">七个新创意</a> · <a href="体积与音乐检查.md" target="_blank" rel="noopener">体积与音乐检查</a></div><footer>Juicy Journey · 可玩广告<br>每个样本保留独立 HTML、预览与说明。</footer></main>
<script>
const filters=Array.from(document.querySelectorAll('[data-filter]')),cards=Array.from(document.querySelectorAll('.card')),search=document.getElementById('search');let selected='全部';
function update(){const query=search.value.trim().toLowerCase();let total=0;for(const card of cards){const show=(selected==='全部'||card.dataset.type===selected)&&(!query||card.dataset.search.includes(query));card.hidden=!show;if(show)total++;}document.getElementById('results').textContent=total===${samples.length}&&!query&&selected==='全部'?'显示全部 ${samples.length} 个样本':'显示 '+total+' / ${samples.length} 个样本';document.getElementById('empty').hidden=total!==0;}
for(const filter of filters)filter.addEventListener('click',()=>{selected=filter.dataset.filter;for(const button of filters)button.setAttribute('aria-pressed',String(button===filter));update();});search.addEventListener('input',update);
</script></body></html>`);
const table=samples.map(s=>`| [${s.name}](${s.entry}) | ${s.type} | ${s.operation} | [说明](${s.readme}) |`).join('\n');
fs.writeFileSync(path.join(root,'README.md'),`# Juicy Journey · 可玩广告合集

更新：${displayDate}。

仓库：[Barofan1982/Playable](https://github.com/Barofan1982/Playable)。

根目录的 [index.html](index.html) 是合集首页。可筛选、搜索和打开试玩，页面不提供文件下载选项。

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

${musicCount} 个试玩使用用户提供的 Ever So Blue - Onthou，前 30 秒、MP3 128 kbps 循环。配乐默认关闭；贴纸杂货店与同色双点连线的操作音效独立于音乐按钮，其余样本沿用原有声音开关逻辑。

各 HTML 均低于 5,000,000 字节。[体积记录](体积与音乐检查.md)。

## 当前样本说明

${samples.map(s=>`### ${s.name}\n\n${s.desc}\n\n- 操作：${s.operation}\n- 结尾：${s.ending}\n- [详细说明](${s.readme})\n`).join('\n')}
`);
console.log(JSON.stringify({root,samples:samples.length,catalogBytes:fs.statSync(path.join(root,'index.html')).size}));
