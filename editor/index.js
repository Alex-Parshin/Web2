let wss=require("ws").Server;
let server = new wss({port:591});
let clients = new Set();
let document="";
server.on("connection",function(socket) {
  clients.add(socket);
  socket.send(document);
  socket.on("message",function(data){
    document=data;
    for(let editor of clients){
      if(editor!==this){
        editor.send(document);
      }
    }
  });
  socket.on("close",function(){
    clients.delete(socket);
  });
});
