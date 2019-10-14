var express = require("express");
var app = express();
app.get("/folder/page", function(request,response){
    var x = request.query.foo;
    response.send({foo:x});
});

app.listen(591);