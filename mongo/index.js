let  mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost",function(err,client){
  let.sandbox=client.db("sandbox");
  let humans=sandbox.collection("humans");'
  humans.insert({
    name:"alex",
    age:"20"
  },function(err,result){
    console.log(result);
    client.close();
  });
});
