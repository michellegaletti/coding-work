var captions = ["Jurassic Park is an exceptionally pretty area located just south of Estes Park above Lilly Lake. The climbs are short, steep, slabby and fun on west facing sunny rock. The views of Longs Peak and the Diamond are spectacular as are the wildflowers and the lake below. The approach is relatively short. Jurassic park makes for a great full day outing.",
"Quality gneiss colored with splotches of green, yellow, black, and gray, a seemingly unlimited amount of development potential, breathtaking vistas of some of Rocky’s most scenic peaks, hundreds of four-star boulder problems (of all grades), and a rich history all make this place one of the most visited summer climbing areas in North America.",
"Within a one mile span of the Uncompahgre Gorge the Ouray Ice Park contains over 200 manmade ice and mixed climbs, 14 distinct climbing areas, and three miles of vertical terrain. Since its inception more than two decades ago, the Ouray Ice Park has become a premier destination for climbers, travelers and outdoor enthusiasts from around the world."];

$(document).ready(function () {
  $("#rock").click(function () {
    $("#flatironpic").animate({opacity: 0 }, 1000, function () {animateImage2("images/jurassicpark.jpg", captions[0]) })
  });
  $("#boulder").click(function () {
    $("#flatironpic").animate({opacity: 0 }, 1000, function() {animateImage2("images/rmnp.jpg", captions[1]) })
  });
  $("#ice").click(function () {
    $("#flatironpic").animate({opacity: 0 }, 1000, function() {animateImage2("images/ouray.jpg", captions[2]) })
  });

});

function animateImage2(image, caption) {
  $("#flatironpic").attr("src", image).css("left", "-900px").css("opacity", 0.5);
  //different duration
  $("#flatironpic").animate({left: "50px" }, 2000).animate({ opacity: 1.0 }, 1000);
  $("#climbcap").text(caption).animate({opacity: 1.0}, 500);
}