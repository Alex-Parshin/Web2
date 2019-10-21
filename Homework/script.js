let qB=document.getElementById("quote");
let request=$.get("http://localhost:590/quote");
request.done(function(data){
  let quote=JSON.parse(data);
  document.title="Цитата#"+quote.number;
  qB.innerHTML=quote.text;
  qB.style.display="block";
});
