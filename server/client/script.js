var button = document.getElementById("request");
    button.addEventListener("click",function(){
        var xhr = new XMLHttpRequest();
        xhr.open("GET","Http://localhost:591/",true);
        xhr.onreadystatechange=function(){
            if(this.readyState==this.DONE){
                if(this.status!=200){
                    console.log("Ошибка: " +this.status);
                }
                else{
                    console.log(this.responseText);
                }
            }
        };
        xhr.send();
    });