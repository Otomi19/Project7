$("button").click(function(){
var conference=$(".conference").val();
var champs=$(".champs").val();
 $(".answer").hide();
    if(conference=== "Western"&& champs >1){
       $("#lebron").show();
    }
     else if(conference=== "Western"&& champs <1){
       $("#James").show();
    }
     else if(conference=== "Eastern"&& champs >1){
      $("#Kawhii").show();
    }
    else if(conference=== "Eastern"&& champs <1){
      $("#Giannis").show();
    }
    else{
        $("p").text("Oops..Try Again");
    }
});
