//declare variables and arrays


var questions = 

	 ["Where is the first home in Los Angeles located?",

	 "What is the state bird of California?",

	 "Which California city is known as the Avocado Capital of the World?", 

	 "How many earthquakes are recorded anually in California?",

	 "How many gallons of wine does California produce annually?"];

var correctAnswers = [0, 0, 2, 3, 1 ];

var choices = [

	["Olvera Street", "Supulveda", "Ocean blvd", "WestWood"],

	["Condor", "Turkey", "Bald Eagle", "Swallow"],

	["Whittier", "San Louis Obispo", "Fallbrook", "Carlsbad"],

	["10k", "300K", "150k", "500k"], 

	["2 million", "17 million", "500 thousand", "200 million" ]

	];




//counter variables

var incorrect = 0;
var correct = 0;
var missed = 0;
var timeleft = 30;
var timelapse;
var n = 0; //next question
var i = 0;

$(document).ready(function(){

$("#startGame").on("click", function(){
	event.preventDefault();
	nextQuestion();
	//countDown();	

    });

function nextQuestion(){
    if 
    (n < 5){ 
     n++; 
	//question
	$("#question").html(questions[n]);
	//answer choices
	$("#choice0").html(choices[n][0]);
	$("#choice1").html(choices[n][1]);
	$("#choice2").html(choices[n][2]);
	$("#choice3").html(choices[n][3]);
	//timer
	$("#timer").html(timeleft);

	timeleft = 30;
	
	countDown();
	
	}
	else {
		endGame();
	}
}

function checkRadio(){

	var choice = "";
	var len = document.frmOne.choice.length;
	var i;
	for (i=0; i < len; i++){
		if (document.frmOne.choice[i].checked)
			
				{
					document.frmOne.choice[i].value;
				break;
		}
		if (choice == "")
		{
		document.getElementById("radio_error").innerHTML="No answer chosen";
		return false;			

		}
		else {
		document.getElementById("radio_error").innerHTML="";
		return true;

		}

	}




}

function timesUp() {
	missed++;
	$("#question").html("Sorry, your time is up. Moving on to next question");
	
	setTimeout(nextQuestion, 5000 
		);  
}

 function countDown() {
 	  

		timelapse = setInterval(hourGlass, 1000);
		function hourGlass() {
		if (timeleft === 0) {
			clearInterval(timelapse);
			timesUp();
			//setTimeout(nextQuestion, 5000);
			
		}
		if (timeleft > 0){
			timeleft--;
		}
		$("#timer").html(timeleft);
		}

 }

function endGame(){
$("#question").html("Game Over");

}

		

})	