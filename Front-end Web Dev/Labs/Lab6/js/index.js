var database = firebase.firestore();

var docRef = database.collection("ticketOrder");

function show(){
	document.getElementById("startOrder").style.display= "block";
	document.getElementById("paymethod").style.display="block";
	document.getElementById("orderTitles").style.display="block";
	document.getElementById("prevOrder").style.display="block";
	document.getElementById("enter").style.display="block";
}

function leave(){
	document.getElementById("startOrder").style.display = "none";
	alert("Thanks for visiting! Here are some fun suggestions to do in Boulder!");
	window.location.href = "https://www.tripadvisor.com/Attraction_Products-g33324-Boulder_Colorado.html";
}

function ticketGet()
{
	var new_name;
	var new_email;
	var new_event;
	var new_payment; 
	
	//event
	new_event = document.getElementById("event").value;
	
	//name
	new_name = document.getElementById("name").value;
	
	//email
	new_email = document.getElementById("email").value;
	
	//payment
	if (document.getElementById("venmo").checked == true){
		new_payment = document.getElementById("venmo").value;
	} else {
		if (document.getElementById("visa").checked == true){
			new_payment = document.getElementById("visa").value;
		} else {
			if (document.getElementById("mastercard").checked == true){
				new_payment = document.getElementById("mastercard").value;
			} else {
				new_payment = "none";
			}
		}
}
	
	// Write a new document to firebase with a generated id.
	database.collection("ticketOrder").add({
		name: new_name,
		email: new_email,
		event: new_event,
		payment: new_payment
	})
	.then(function(docRef) {
		console.log("Document written with ID: ", docRef.id);
	})
	.catch(function(error) {
		console.error("Error adding document: ", error);
	});
}

var order_list = document.getElementById("prevOrder");

	docRef.onSnapshot(function(querySnapshot) {
		order_list.innerHTML = "";
	    querySnapshot.forEach(function(doc) {
	    	var name=doc.data().name;
	        var email=doc.data().email;
	        var event=doc.data().event;
	        var payment=doc.data().payment;
	        order_list.innerHTML += "<span class='name'>" + name + "</span><span class='email'>" + email + "</span><span class='event'>" + event +"</span><span class='pay'>"+ payment+"</span><br>";
	    });
	});


document.getElementById("startOrder").style.display="none";
document.getElementById("paymethod").style.display="none";
document.getElementById("prevOrder").style.display="none";
document.getElementById("orderTitles").style.display="none";
document.getElementById("enter").style.display="none";
document.getElementById("ticyes").addEventListener("click", show);
document.getElementById("ticno").addEventListener("click", leave);
document.getElementById("enter").addEventListener("click", ticketGet);
