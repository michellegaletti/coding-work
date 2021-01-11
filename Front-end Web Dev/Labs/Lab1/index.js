var favSeason;
favSeason = prompt("What is your favorite season?");
var fav = document.getElementById("favorite");
fav.innerHTML = "<h3>" + favSeason + "</h3>"
if(favSeason == "spring" || favSeason == "Spring"){
	fav.style.backgroundColor = "lightgreen";
	fav.innerHTML = "<img src = images/spring.png>"
} else if(favSeason == "fall" || favSeason == "Fall"){
	fav.style.backgroundColor = "orange";
	fav.innerHTML = "<img src = images/fall.png>"
} else if(favSeason == "winter" || favSeason == "Winter"){
	fav.style.backgroundColor = "lightBlue";
	fav.innerHTML = "<img src = images/winter.png>"
} else if(favSeason == "summer" || favSeason == "Summer"){
	fav.style.backgroundColor = "yellow";
	fav.innerHTML = "<img src = images/summer.png>"
} else{
	fav.style.backgroundColor = "Pink";
}
var showing = document.getElementById("show");
function showStats(){
 	document.getElementById("stats").innerHTML = "<ol><li>45.6% like Fall</li><li>25% like Spring</li><li>23.5% like Summer</li><li>5.9% like Winter</li>";
 	document.getElementById("stats").style.display = "inline";
 }

function hideStats(){
	document.getElementById("stats").style.display = "none";
}

showing.addEventListener("mouseover", showStats, false);
showing.addEventListener("mouseout", hideStats, false);

