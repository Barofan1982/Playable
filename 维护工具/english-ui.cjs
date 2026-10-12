const fs=require('node:fs'),path=require('node:path');
const file=path.join(__dirname,'english-ui.json');
function englishHtml(html){
 const dictionary=fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):{};
 const entries=Object.entries(dictionary).filter(([from,to])=>typeof to==='string'&&/[\u3400-\u9fff]/u.test(from)&&from!==to).sort((a,b)=>b[0].length-a[0].length);
 if(entries.length){const lookup=new Map(entries),pattern=new RegExp(entries.map(([from])=>from.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');html=html.replace(pattern,match=>lookup.get(match));}
 return html.replace(/(<html\b[^>]*\blang=)["']zh(?:-CN|-Hans)?["']/gi,'$1"en"');
}
module.exports={englishHtml};
