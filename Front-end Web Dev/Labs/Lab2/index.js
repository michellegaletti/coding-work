document.getElementById("favmus").value = "";
function favoriteMusic(){
	var fav;
	//resetting the text field
	document.getElementById("favmus").value = "";
	fav = document.getElementById("genre").value;
	var intro = document.getElementById("title");
	var video = document.getElementById("musicVid");
	video.value = "";

	if(fav == "country"){
		intro.style.color = "brown";
		video.innerHTML = "<iframe type=\'text/html\' width='560' height='315' src= 'https://www.youtube.com/embed/wOwblaKmyVw' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'></iframe>";
	} else if(fav == "rap"){
		intro.style.color = "brown";
		document.querySelector("body").style.backgroundColor = "grey";
		document.querySelector("body").style.color = "black";
		video.innerHTML = "<iframe type=\'text/html\' width='560' height='315' src='https://www.youtube.com/embed/X53ZSxkQ3Ho' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
	} else if(fav == "jazz"){
		intro.style.color = "#D4AF37";
		document.querySelector("body").style.backgroundColor = "lightblue";
		video.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/D5Y11hwjMNs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	} else if(fav == "hard rock"){
		intro.style.color = "red";
		video.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/1w7OgIMMRc4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	} else if(fav == "pop"){
		intro.style.color = "purple"
		document.querySelector("body").style.backgroundColor = "lightgreen";
		video.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/JGwWNGJdvx8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	} else{
		video.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	}

	//Responding to their favorite artist
	var favArtist = document.getElementById("artist").value;
	document.getElementById("favmus").value = "Your favorite artist is " + favArtist +". They are awesome!";
	
	var favVenue = document.getElementById("concert").value;
	document.getElementById("favmus").value += "Maybe you can see if " + favVenue + " has any concerts with " + favArtist + "performing?";

	//Responding to the results from the radio buttons
	if(document.getElementById("ticyes").value == "yes"){
		document.getElementById("favmus").value += "You should definitely look at what concerts for " + fav + " music is coming soon!";
	} else if(document.getElementById("ticno").value == "no"){
		document.getElementById("favmus").value += "Youtube has plenty of awesome music videos of " + fav + " music for you!";
	} else{
		if(document.getElementById("ticmaybe").value == "maybe"){
			document.getElementById("favmus").value += "You might want to in the future!";
		}
	}
}

var musicGenre=document.getElementById("enter");
musicGenre.addEventListener("click", favoriteMusic);