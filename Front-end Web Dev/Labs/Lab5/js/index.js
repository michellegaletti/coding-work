function keyword_search() {
	var search_term = document.getElementById("query").value;

	var url =  'https://newsapi.org/v2/everything?' + 'q=' + search_term + '&apiKey=8dbf3b3e0df345b6968ec6efbdb26049';

	console.log(search_term);

	var req = new Request(url);

	var params = {
    	q: search_term,
    	//maxResults: 20,
    	apiKey: "8dbf3b3e0df345b6968ec6efbdb26049"
  	};

  	console.log(params);

  	req.search = new URLSearchParams(params);

  	console.log(req.search);

	fetch(req)
    	.then(response => {
      		return response.json();
      		//showResults(response);
    	})
    	.then(data => {
       		showResults(data);
    	})
    	.catch(err => {
      		console.log("There was an error");
    	})
    console.log("went through fetch");
}


function showResults(response) {
//   // Work with JSON data here
//   // create array of items
	console.log("in function");
	//console.log(response);
	
  var result_items = response.items;
  console.log(result_items);

  //clear results section
  document.getElementById("results").innerHTML = "";

  for (i = 0; i<response.articles.length; i++) {
    //gets the id of the video
    console.log("in for loop");
    console.log(response.articles[i]);
    var id = response.articles[i].url;
    console.log(id);
    //defines an iframe for the video
    var video = '<p><a href =' + id +  " target = '_blank'>" + response.articles[i].title + '</a> <div class = "description">' + response.articles[i].description +' </p>';
    //add the video iframe to results section
    document.getElementById("results").innerHTML += video;
  }
  document.getElementById("results").innerHTML += "<div id = 'backUp'><a href = '#top'> Back to top </a></div>";
}

document.getElementById("search-button").addEventListener("click", keyword_search);



