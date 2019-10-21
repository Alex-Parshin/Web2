let express=require("express"),
cors=require("cors"),
fs=require("fs");
let app=express();
app.use(cors());
app.get("/quote",function(req,res){
  fs.readFile("database.txt","utf-8",function(err,content){
    let quotes=content.split("\n");
    let index =Math.floor(Math.randoom()*(quotes.length-1));
    let result={
      number:index+1,
      text:quotes[index]
    };
    res.send(JSON.stringify(result));

  });
});
app.listen(590);
