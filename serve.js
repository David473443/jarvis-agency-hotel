const http=require("http"),fs=require("fs"),path=require("path");
const PORT=process.env.PORT||4173;
const DIST=path.join(__dirname,"dist");
const MIME={".html":"text/html",".js":"text/javascript",".css":"text/css",".json":"application/json",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".mp3":"audio/mpeg",".webp":"image/webp",".ico":"image/x-icon"};
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split("?")[0]); if(p==="/")p="/index.html";
  let fp=path.join(DIST,p);
  if(!fs.existsSync(fp)||fs.statSync(fp).isDirectory()) fp=path.join(DIST,"index.html");
  fs.readFile(fp,(e,d)=>{ if(e){res.writeHead(404);res.end("nf");return;}
    res.writeHead(200,{"Content-Type":MIME[path.extname(fp)]||"application/octet-stream","Cache-Control":"no-cache"});res.end(d);});
}).listen(PORT,()=>console.log("Hotel on :"+PORT));
