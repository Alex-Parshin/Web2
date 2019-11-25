var Vue =require("vue");
var Header = require("./header.vue");
var vm=new Vue ({
  el: "body",
  components:{
    cTag:Header
  }
});
