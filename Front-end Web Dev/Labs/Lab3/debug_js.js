alert("Ready for a quiz?");
quiz();

function quiz(){
	var score = 0;
	var num;
	var question;
	var answer;
	var quiz_questions = [
	  'How many moons does Earth have?',
	  'How many moons does Saturn have?',
	  'How many moons does Venus have?'
	];
	var quiz_answers=[1, 31, 1];
	
	//get total number of questions
	var totalQuestion=quiz_questions.length;
	
	//generate random number for question
	num=Math.floor(Math.random()*3);
		
	for(num=0; num<totalQuestion; num++){
		question=quiz_questions[num];
		answer=prompt(question);
		if (answer==quiz_answers[num]){
			score++;
			alert("Correct!");
		}
		else {
			alert("Wrong");
		}
		num++;
		if (num==totalQuestion){
			num=0;
		}
}

document.write('You got ' + score + ' out of ' + totalQuestion + ' questions correct.');
}
