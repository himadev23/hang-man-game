var animalNames = ["cat", "cow", "rat", "dog", "pig"];
var computerGuess;
var userInput;
var wins = 0;
var loses = 0;
var NumberOfAttempts = 5;
var guessedLetters = " ";
var count = 0;

function random() {
    computerGuess = animalNames[Math.floor(Math.random() * animalNames.length)];
}
random();

function reset(){
	wins=0;
	guessedLetters="";
	document.getElementById("wins").innerHTML=wins;
	document.getElementById("guessed").innerHTML=guessedLetters;
}
//console.log("computerGuess " + computerGuess);
if(NumberOfAttempts>0){
document.onkeyup = function(event) {
    userInput = event.key;
    NumberOfAttempts = NumberOfAttempts - 1;
    //console.log("userInput " + userInput);
    if (computerGuess.indexOf(userInput) !== -1)  {
        var i = computerGuess.indexOf(userInput);
        //console.log("indexOf " + computerGuess.indexOf(userInput) );
        document.getElementsByTagName("span")[i].innerHTML = userInput;
        count = count + 1;
        console.log(count);

    } else {
        guessedLetters = guessedLetters + userInput + ",";
        document.getElementById("guessed").innerHTML = guessedLetters;
    }
    
    if (count === computerGuess.length) {
        wins = wins + 1
        console.log("computerGuess length " + computerGuess.length);
        document.getElementById("word").innerHTML="correct word :---";
        
    }
    if(NumberOfAttempts===0){
    	loses=loses+1;
    	random();
    	reset();
    }

    document.getElementById("chances").innerHTML = NumberOfAttempts;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("lose").innerHTML=loses;

}
}