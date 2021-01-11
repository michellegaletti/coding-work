var slides;
var count = 1;

$(document).ready(function () {
   slides = ["images/climbing1.jpg", "images/climbing2.jpg", "images/climbing3.jpg", "images/climbing4.jpg", "images/climbing5.jpg"];
  setInterval(switchImage2, 3000);
});

function switchImage2() {
  $("#climbingpics").animate({opacity: 0.0 }, 500, function(){
    if(count<4){
      count++;
    } else{
      count=0;
    }
  });
  $("#climbingpics").attr("src", slides[count]).animate({opacity: 1.0 }, 500);
}

function animateImage(image) {
  $("#flatironpic").attr("src", image).css("left", "-750px");
  $("#flatironpic").animate({left: "50px"}, 2000);
}

