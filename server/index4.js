var express = require("express");
var cors= require("cors");
var app = express();
app.use(cors());
app.get("/", function(request,response){
    response.send("Hello,Node.js!");
});
/*app.get("/folder/page", function(request,response){
    var x = request.query.foo;
    response.send({foo:x});
});*/

app.listen(591);