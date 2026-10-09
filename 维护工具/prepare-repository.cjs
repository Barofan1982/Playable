const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),build=path.join(root,'维护工具/build-catalog.cjs');
let source=fs.readFileSync(build,'utf8');
source=source.replace("const root='D:/Test/Juicy Journey/可玩广告',old='D:/Test/deliverables';","const root=path.resolve(__dirname,'..');");
source=source.replace('s.zipBytes=fs.statSync(path.join(root,s.zip)).size;','if(fs.existsSync(path.join(root,s.zip)))s.zipBytes=fs.statSync(path.join(root,s.zip)).size;');
source=source.replace('<a href="${s.zip}" download>下载 ZIP</a>','');
source=source.replace('点击开始试玩即可在浏览器中打开，下载 ZIP 可保存独立样本。${musicCount} 个试玩已加入循环配乐，单个 HTML 与 ZIP 均低于 5 MB。','点击开始试玩即可在浏览器中打开。${musicCount} 个试玩已加入循环配乐，单个 HTML 均低于 5 MB。');
source=source.replace(/<details class="archive">[\s\S]*?<\/details>/,'');
source=source.replace('每个样本保留独立 HTML、预览与说明；下载包位于「下载包」目录。','每个样本保留独立 HTML、预览与说明。');
const tail=source.indexOf('const table=samples.map(');assert(tail>0);
const ending=`const table=samples.map(s=>\`| [\${s.name}](\${s.entry}) | \${s.type} | \${s.operation} | [说明](\${s.readme}) |\`).join('\\n');
fs.writeFileSync(path.join(root,'README.md'),\`# Juicy Journey · 可玩广告合集

更新：\${displayDate}。

仓库：[Barofan1982/Playable](https://github.com/Barofan1982/Playable)。

根目录的 [index.html](index.html) 是合集首页。可筛选、搜索和打开试玩，页面不提供文件下载选项。

## \${samples.length} 个试玩

| 样本 | 类型 | 主要操作 | 说明 |
| --- | --- | --- | --- |
\${table}

## 静态网站

这些文件可直接作为静态网站托管，首页入口为根目录 index.html。现有成品无需编译，网站根目录即为部署内容根目录。

各样本的 index.html 内嵌运行所需的图片、音乐和代码，单文件离线可玩；合集首页的预览图和商标是额外的网站展示文件，需要与首页一起托管。

GitHub 中保存首页、\${samples.length} 个独立试玩、预览图、必要商标及说明。ZIP 为本地归档，继续保存在本地下载包目录。参考视频、测试浏览器缓存和原始素材由本地工作目录维护。

## 附加视频

[washface.mp4](washface.mp4) 放在仓库根目录，与合集一起保存。

## 配乐与体积

\${musicCount} 个试玩使用用户提供的 Ever So Blue - Onthou，前 30 秒、MP3 128 kbps 循环。配乐默认关闭；贴纸杂货店与同色双点连线的操作音效独立于音乐按钮，其余样本沿用原有声音开关逻辑。

各 HTML 均低于 5,000,000 字节。[体积记录](体积与音乐检查.md)。

## 当前样本说明

\${samples.map(s=>\`### \${s.name}\\n\\n\${s.desc}\\n\\n- 操作：\${s.operation}\\n- 结尾：\${s.ending}\\n- [详细说明](\${s.readme})\\n\`).join('\\n')}
\`);
console.log(JSON.stringify({root,samples:samples.length,catalogBytes:fs.statSync(path.join(root,'index.html')).size}));
`;
source=source.slice(0,tail)+ending;new Function(source);fs.writeFileSync(build,source);
require(build);
const comparisonPath=path.join(root,'七视频试玩对照.md');
if(fs.existsSync(comparisonPath)){
 const comparison=fs.readFileSync(comparisonPath,'utf8')
  .replace(/\[下载 ZIP\]\(下载包\/[^)]+\) · /g,'')
  .replace(/\[([^\]]+)\]\((?:维护工具\/七视频20261004\/[^)]+|arrow-escape\/(?:motion-checks|tangle-checks)\.json)\)/g,'$1（本地检查记录）');
 fs.writeFileSync(comparisonPath,comparison);
}
const manifest=JSON.parse(fs.readFileSync(path.join(root,'samples.json'),'utf8'));
const files=new Set(['.gitignore','.gitattributes','index.html','samples.json','README.md','体积与音乐检查.md','七视频试玩对照.md','维护工具/build-catalog.cjs','维护工具/prepare-repository.cjs','corn/juicy-journey-logo.png']);
files.add('washface.mp4');
for(const sample of manifest.samples){
 for(const name of [sample.entry,sample.id+'/'+sample.image,sample.readme,sample.id+'/ASSET-NOTES.md'])if(fs.existsSync(path.join(root,name)))files.add(name);
 const content=fs.readFileSync(path.join(root,sample.readme),'utf8');
 for(const match of content.matchAll(/\]\(([^)]+)\)/g)){
  const href=match[1];if(/^(https?:|#)/.test(href))continue;
  const target=path.resolve(path.dirname(path.join(root,sample.readme)),href);assert(target.startsWith(root+path.sep),'Unexpected documentation link');assert(fs.existsSync(target),'Missing documentation link '+href);files.add(path.relative(root,target).split(path.sep).join('/'));
 }
}
const dirs=new Set();for(const file of files)for(let dir=path.posix.dirname(file);dir!=='.';dir=path.posix.dirname(dir))dirs.add(dir);
const ignore=['# Publish the standalone collection and its display files.','/*'];for(const dir of [...dirs].sort((a,b)=>a.split('/').length-b.split('/').length||a.localeCompare(b)))ignore.push('!/'+dir+'/', '/'+dir+'/*');for(const file of [...files].sort())ignore.push('!/'+file);
fs.writeFileSync(path.join(root,'.gitignore'),ignore.join('\n')+'\n');fs.writeFileSync(path.join(root,'.gitattributes'),'* text=auto eol=lf\n*.html -text\n*.md text eol=lf\n*.json text eol=lf\n*.cjs text eol=lf\n*.png binary\n*.jpg binary\n*.webp binary\n*.mp4 binary\n');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');assert(!/\bdownload(?:\s|=|>)/.test(html),'Unexpected download control');assert(!html.includes('下载 ZIP')&&!html.includes('下载 HTML'));
for(const sample of manifest.samples)assert(fs.statSync(path.join(root,sample.entry)).size<5000000);
fs.writeFileSync(path.join(root,'维护工具/repository-files.json'),JSON.stringify({repository:'Barofan1982/Playable',updated:'2026-10-09',sampleCount:manifest.samples.length,files:[...files].sort(),bytes:[...files].filter(f=>fs.existsSync(path.join(root,f))).reduce((sum,f)=>sum+fs.statSync(path.join(root,f)).size,0)},null,2));
console.log(JSON.stringify({files:files.size,samples:manifest.samples.length,downloadControls:false}));
