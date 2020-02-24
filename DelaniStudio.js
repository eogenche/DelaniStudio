$(document).ready(function() {

    $("#hidd,#design").click(function() {
        $("#design").delay(4000).toggle();
        $("#hidd").delay(4000).toggle();
    });

    $("#styleDiv1-hidden,#styleDiv1-show").click(function() {
      $("#styleDiv1-hidden").toggle();
      $("#styleDiv1-show").toggle();

    });

    $("#styleDiv2-hidden,#styleDiv2-show").click(function() {
      $("#styleDiv2-hidden").toggle();
      $("#styleDiv2-show").toggle();
       
    });

});

$(".text-describe").hide();

  $("#port1").hover(function(){
    $(".p1").fadeIn();
    $(".p1").show();
  }, function(){
    $(".p1").hide();
  });

  $("#port2").hover(function(){
    $(".p2").fadeIn();
    $(".p2").show();
  }, function(){
    $(".p2").hide();
  });

  $("#port3").hover(function(){
    $(".p3").fadeIn();
    $(".p3").show();
  }, function(){
    $(".p3").hide();
  });

  $("#port4").hover(function(){
    $(".p4").fadeIn();
    $(".p4").show();
  }, function(){
    $(".p4").hide();
  });

  $("#port5").hover(function(){
    $(".p5").fadeIn();
    $(".p5").show();
  }, function(){
    $(".p5").hide();
  });

  $("#port6").hover(function(){
    $(".p6").fadeIn();
    $(".p6").show();
  }, function(){
    $(".p6").hide();
  });

  $("#port7").hover(function(){
    $(".p7").fadeIn();
    $(".p7").show();
  }, function(){
    $(".p7").hide();
  });

  $("#port8").hover(function(){
    $(".p8").fadeIn();
    $(".p8").show();
  }, function(){
    $(".p8").hide();
  });


function clicke
d(){
var name=document.getElementById("name").value;
alert("Thank you "+ name +"; We have received your message");
event.preventDefault();
}





    
