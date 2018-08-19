var psychicLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesEntered = [];


document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


var psychicGuess = psychicLetters[Math.floor(Math.random() * psychicLetters.length)];

var userLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

if (userLetters.indexOf(userGuess) > -1) {
   
    if (userGuess === psychicGuess) {
        wins++;
        guessesLeft = 9;   
        guessesEntered = []; 
    }

    if (userGuess !== psychicGuess) {
        guessesLeft--;
        guessesEntered.push(userGuess); 
    }

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        guessesEntered = [];
    }
};

var html = 
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses Left: " + guessesLeft + "</p>" +
"<p>Your Guesses So Far: " + guessesEntered.join(", ") + "</p>";

document.querySelector("#game").innerHTML = html;

}