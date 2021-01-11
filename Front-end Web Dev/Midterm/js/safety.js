function fadeAnswer() {
  $(this).next('.climbsafety').slideToggle("slow"); //toggles showing and hiding the answer
  $(this).toggleClass('close'); //toggles adding and removing a class named close to the h2 tag
}

$(document).ready(function () {
  $('.climbsafety').hide(); //selects all divs with class="answer" and hides them
  $('.climbtype').click(fadeAnswer); //toggles fading in and out the answer
}); // end ready