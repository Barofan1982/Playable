const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
require('./build-catalog.cjs');

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
files.add('维护工具/gallery-template.html');
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
