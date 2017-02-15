
/*
	1.define a list of words 
	2.computer choose a word from list randomly 
	3.calculate the char number of compterguess word 
	3 . show it in the page when page is load (_)
	4.user guess a letter and has 10 choices to wrong letter
	loop --> if lives >0  do these steps :
	5.check it is letter ??
	6. compare the letter with the char in word
	7. if it is in the word show it in its right place
	8.if not lives --
	9. end of loop -> user win or replay (reset)
	
	? use googlefont
	? Press any key to get started!
	? Wins: (# of times user guessed the word correctly).


*/

 var words = [
        "lion", "cat", "dog", "light", "lamp", "love", "letter",
        "book", "dirtyharry", "gladiator", "findingnemo", "jaws","manchester", "milan", "madrid", "amsterdam", "prague" , "adult","aeroplane", "airaircraft", "carrier", "airforce", "airport", "arm",
"butterfly", "button", "cappuccino", "car",  "carpet", "carrot", "cave" ,"chair" ,"chess" ,"board", "chief" ,"child", "chisel" ,"chocolate", "church", "circle", "circus" ,"clock" ,"clown" ,"coffee", "coffeeshop" ,
"comet", "compact", "disc" ,"compass" ,"computer" ,"crystal" ,"cup" ,"cycle", "data", "base"

    ];

             
var randowWord = words[Math.floor(Math.random()*words.length)];      
console.log(randowWord); 
var placeholder ; 

var wordUArray = [];
var wordArray = [];
var lives = 10;
var userguess= []
var mainword;




function startup(){


	for (var i=0 ; i< randowWord.length ; i++)
	{
		wordUArray[i]= "_" ;
	}
	 
	placeholder = wordUArray.join(" ");
	document.getElementById("answer").innerHTML = placeholder ;
	
}       



function Letter(){
	var changes =0;

	var letter = document.getElementById("letter").value;
	document.getElementById("letter").value="";
	
	console.log(letter);
	// for making sure that user enter a letter
	if (letter.length >0){
		if(userguess.indexOf(letter) == -1){
			userguess.push(letter);
	for (var i=0; i < randowWord.length ; i++)
	{
		if (randowWord[i] === letter)
		{
			wordUArray[i] = letter;
			changes++;

		}		
	}

	 document.getElementById("userguess").innerHTML = userguess;
	}
	else{
		alert("you put this letter before , choose a new letter");
	}
}
		if (changes<1){
			
			lives--;
	document.getElementById("lives").innerHTML = lives;
			
		}

	
	document.getElementById("answer").innerHTML = wordUArray.join(" ");
	mainword = wordUArray.join("") 

	document.getElementById("playboard").innerHTML = '<img src="assets/image/hangman' + lives + '.jpg">';


	if (randowWord == mainword){
		document.getElementById("playboard").innerHTML = '<img src="assets/image/hangman_win.jpg">';
		var audio = document.createElement("audio");
  		audio.src = "assets/sound/win.mp3";
    	audio.play();
		alert("You guessed the word correctly. You win!");

		
	}

	if (lives < -1  ){
		document.getElementById("word").innerHTML = randowWord
		alert("You Have Run out of Lives, Please Try again");
		
		window.location.reload();
	}
}

function Reset(){
window.location.reload();
}



	



				