//declare variables and arrays 

 
 
 
 var questions =  
 
 
 	 ["Where is the first home in Los Angeles located?", 
 
 
 	 "What is the state bird of California?", 
 
 
 	 "Which California city is known as the Avocado Capital of the World?",  
 
 
 	 "How many earthquakes are recorded anually in California?", 

 
 	 "How many gallons of wine does California produce annually?"]; 
 
 
 var correctAnswers = [0, 0 , 2, 3, 1 ]; 
 
 
 var choices = [ 

 
 	["Olvera Street", "Supulveda", "Ocean blvd", "WestWood"], 
 
 
 	["Condor", "Turkey", "Bald Eagle", "Swallow"], 
 
 
 	["Whittier", "San Louis Obispo", "Fallbrook", "Carlsbad"], 

 
 	["10k", "300K", "150k", "500k"],  
 
 
 	["2 million", "17 million", "500 thousand", "200 million" ] 
 
 
	]; 
 
 var imglinkArray = ["https://images.pexels.com/photos/126371/pexels-photo-126371.jpeg?h=350&auto=compress&cs=tinysrgb",
 "https://images.pexels.com/photos/86462/red-kite-bird-of-prey-milan-raptor-86462.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
 "https://images.pexels.com/photos/2316/city-road-people-street.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
 "https://images.pexels.com/photos/3527/rubble-street-construction.jpg?h=350&auto=compress&cs=tinysrgb",
 "https://images.pexels.com/photos/132948/pexels-photo-132948.jpeg?h=350&auto=compress&cs=tinysrgb"
 ];
 
 
 //counter variables 

 
 var incorrect = 0; 
 var correct = 0; 
 var missed = 0; 
 var timeleft = 30; 
 var timelapse; 
 var clickedChoice;

 var n = 0; //next question 
 var i = 0; 
 
 
$(document).ready(function(){ 
 
 
 $("#startGame").on("click", function(){ 
 	event.preventDefault(); 
 	nextQuestion(); 
	//countDown();	 
 
 
     }); 
 
 
 function nextQuestion(){ 
	 $("#correct-answer").html(""); 
     if 
        (n < 5){  
 	//question 
 	$("#question").html(questions[n]); 
 	//answer choices 
 	$("#choice0").html("a.  "+choices[n][0]); 
 	$("#choice1").html("b.  "+choices[n][1]); 
 	$("#choice2").html("c.  "+choices[n][2]); 
 	$("#choice3").html("d.  "+choices[n][3]); 
 	//timer 
 	$("#timer").html(timeleft); 
 
 
 	timeleft = 30; 
 	 
 	countDown(); 

 	 
 	} 
 	else { 
 		endGame(); 
 	} 
 } 
 
 
 
function validGuess(){
	correct++;
	$("#correct-answer").html("Excellent! That's correct! " + choices[n][correctAnswers[n]] + " is the correct answer");	
	//$("#correctImage").html(imglinkArray[n]);
	$("<img>").attr("src", imglinkArray[i]);
	n++;
	
	 setTimeout(nextQuestion, 5000); 
}

function invalidGuess() {
	incorrect++;
	$("#correct-answer").html("Sorry that answer is not correct. The correct answer is: " + choices[n][correctAnswers[n]]);	
	//$("#correctImage").html(imglinkArray[n]);
	$("<img>").attr("src", imglinkArray[i]);
	n++;
	setTimeout(nextQuestion, 5000); 
	}
 
 
 function timesUp() { 
 	missed++; 
 	if (n ===4 ){
 		$("#question").html("Sorry, your time is up");
 	
 	} else
 	{
 	 	$("#question").html("Sorry, your time is up. Moving on to next question"); 
 	}
 	$("#correct-answer").html("The correct answer is: " + choices[n][correctAnswers[n]]);
 	//$("#correctImage").html(imglinkArray[n]);
 	$("<img>").attr("src", imglinkArray[i]);
 	n++;
 	setTimeout(nextQuestion, 5000  
 		); 

 } 

  function countDown() { 

 		timelapse = setInterval(hourGlass, 1000); 
 		function hourGlass() { 
 		if (timeleft === 0 ) { 
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


  function clickAnswer(){

  	 document.getElementById("#choice-btn0").innerHTML = choices[n][0];

 
  }
 
//  ("body").on("click", ".choices", function(event){
	
// 	clickedChoice = $(this).text();
// 	if(clickedChoice === choices[n][correctAnswer[n]]) {
		

// 		clearInterval(timelapse);
// 		validGuess();
// 	}
// 	else {
	
// 		clearInterval(timelapse);
// 		invalidGuess();
// 	}
// });
 
 function endGame(){ 
 	//empty contents and display finall tallies
 	$("#choice0").html(""); 
 	$("#choice1").html(""); 
 	$("#choice2").html(""); 
 	$("#choice3").html("");
 	$("#correct-answer").html("");
 	$("#timer").html("");
 	$("#time-remaining").html("");
 	 $("#question").html("Game Over");


 $("#game-over").html("Game Over"); 
	 $("#correct").html("Correct Answers: " + correct); 
 	$("#incorrect").html("Incorrect Answers: " + incorrect); 
 	$("#missed").html("Missed Questions: " + missed); 

 
 } 

 
 })	 
