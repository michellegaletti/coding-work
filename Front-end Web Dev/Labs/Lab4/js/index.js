var slides;
var captions;
var count = 1;
var capC = 1;

$(document).ready(function () {
   slides = ["img/boatKaila.jpg", "img/simbaKaila.jpg", "img/sunKaila.jpg"];
   captions = ["Kaila on a Boat", "Kaila being simba", "Kaila bathing in the sun"];
  setInterval(switchImage2, 3000);
  setInterval(toggleText, 3000);
});

function switchImage2() {
  $("#kailapics").animate({opacity: 0.0 }, 500, function(){
    if(count<2){
      count++;
    } else{
      count=0;
    }
  });
  $("#kailacaps").animate({opacity: 0.0 }, 500, function(){
    if(capC<2){
      capC++;
    } else{
      capC=0;
    }
  });
  $("#kailapics").attr("src", slides[count]).animate({opacity: 1.0 }, 500);
  $("#kailacaps").text(captions[capC]).animate({opacity: 1.0}, 500);
}

function toggleText(){
  $("header h1").animate({fontSize: "5em"}, "slow");
}