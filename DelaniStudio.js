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
    $('#port1').hover(function(effect){
      $("#image1").toggle();
    })
    $('#port2').hover(function(effect){
      $("#image2").toggle();
    })
    $('#port3').hover(function(effect){
      $("#image3").toggle();
    })
    $('#port4').hover(function(effect){
      $("#image4").toggle();
    })
    $('#port5').hover(function(effect){
      $("#image5").toggle();
    })
    $('#port6').hover(function(effect){
      $("#image6").toggle();
    })
    $('#port7').hover(function(effect){
      $("#image7").toggle();
    })
    $('#port8').hover(function(effect){
      $("#image8").toggle();
    })


});


// function clicke
// d(){
// var name=document.getElementById("name").value;
// alert("Thank you "+ name +"; We have received your message");
// event.preventDefault();
// }





    
