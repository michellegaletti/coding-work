var database = firebase.firestore();

var docRef = database.collection("userobserve");

var provider = new firebase.auth.GoogleAuthProvider();

//user status div
var user_info = document.getElementById("user_status");

//current user
var current_user = null;

function authenticate(){
	firebase.auth().getRedirectResult().then(function(result) {
	  if (result.credential) {
	    // This gives you a Google Access Token. You can use it to access the Google API.
	    var token = result.credential.accessToken;
	  }
	  else {
		  //google sign-in redirect
		  firebase.auth().signInWithRedirect(provider);
	  }
	  // The signed-in user info
	  //var user = result.user;
	  current_user = result.user;
	  user_info.innerHTML = "Hi, " + current_user.displayName;
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	});
}

function signOut(){
	firebase.auth().signOut().then(function() {
		// Sign-out successful
		current_user = null;
		user_info.innerHTML = "";
	}).catch(function(error) {
		// An error happened
	});
}

//setting an event listener for change of authentication state
firebase.auth().onAuthStateChanged(function(user) {
	current_user=user;
	if (user) {
    	// User is signed in
		user_info.innerHTML = "Hi, " + user.displayName;
  	} else {
    	// No user is signed in
		user_info.innerHTML = "";
  	}
});

function passingClass(){
	if (current_user) {
		var new_name;
		var new_location;
		var new_observe;
		var new_trigger;
		var new_caught;
		var new_description;

		//name
		new_name=document.getElementById("name").value;

		//current location
		new_location=document.getElementById("location").value;

		//description of avalanche
		new_description=document.getElementById("description").value;

		//Observed the avalanche?
		if(document.getElementById("avalanche_yes").checked){
			new_observe = document.getElementById("avalanche_yes").value;
		} else{
			new_observe = document.getElementById("avalanche_no").value;
		}

		//triggered the avalanche?
		if(document.getElementById("trigger_yes").checked){
			new_trigger = document.getElementById("trigger_yes").value;
		} else{
			new_trigger = document.getElementById("trigger_no").value;
		}

		//caught in the avalanche?
		if(document.getElementById("caught_yes").checked){
			new_caught = document.getElementById("caught_yes").value;
		} else{
			new_caught = document.getElementById("caught_no").value;
		}


		//Write a new document to firebase with a generated id
		database.collection("userobserve").add({
			name: new_name,
			location: new_location,
			observe: new_observe,
			trigger: new_trigger,
			caught: new_caught,
			description: new_description
		})
		.then(function(docRef){
			console.log("Document written with ID: ", docRef.id);
		})
		.catch(function(error){
			console.log("Error adding document: ", error);
		});
	}  else{
		//no user is signed in
		alert("Please sign in to place an order");
	}
}


	var avalanche_list = document.getElementById("results");

	docRef.onSnapshot(function(querySnapshot){
		avalanche_list.innerHTML = "";
		querySnapshot.forEach(function(doc){
			var name = doc.data().name;
			var location = doc.data().location;
			var observe = doc.data().observe;
			var trigger = doc.data().trigger;
			var caught = doc.data().caught;
			var description = doc.data().description;
			avalanche_list.innerHTML += "<span class='name'>" + name+ " </span><span class='location'>"+location+"</span><span class='observe'>"+observe+"</span><span class='trigger'>"+trigger+"</span><span class='caught'>"+caught+"</span><br>";
		});
	});

document.getElementById("enter").addEventListener("click", passingClass);
document.getElementById("signin").addEventListener("click", authenticate);
document.getElementById("signout").addEventListener("click", signOut);