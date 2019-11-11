$("form").on("submit",function(event){
  event.preventDefault();
  $post("/countries",$(this).serialize(),function(data){
    var tbody=$("tbody"), list=JSON.parse(data);
    tbody.empty();
    list.forEach(function(item){
      var row=$("<tr><td>"+ item.name+"</td>"+"<td>"+item.area+"</td><input type=\"checkbox\" disable "+(item.englishSpeaking?"checked":"")+"></td>");
      tbody.append(row);
    })
  });
})
