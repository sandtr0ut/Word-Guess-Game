
// Word Guess Game: Pseudocode.js

// Globals

// create an array full of words
var foodList = ["appetizer", "apple pie", "bake", "baked Alaska", "baking soda", "banana split", "basil", "beef", "BLT", "Bundt pan", "cheese", "corn", "crepe", "doughnuts", "egg nog", "fork", "freeze", "fruit salad", "grape", "KFC", "lemon zester", "mac and cheese", "McDonalds", "melt", "muffin tin", "pear", "poach", "potato chips", "produce", "rolling pin"];

// Create variables to hold references to html insertion points
var gameTitle = document.getElementById("game-title");
var playerWins = document.getElementById("player-wins");
var welcomeMsg = document.getElementById("welcome-msg");
var guessResultMsg = document.getElementById("guess-result");
var playAgain = document.getElementById("play-again");
var guessWord = document.getElementById("guess-word");
var alreadyGuessed = document.getElementById("guessed-already");
var guessesRemaining = document.getElementById("guesses-remainingLetters");

//computer chooses a word at random from the word list array
var wordChoice = foodList[Math.floor(Math.random()*foodList.length)];

//once computer has selected the word, display it on the page with underscores in place of the letters

var wordLetters =[];
for (var i = 0; i < wordChoice.length; i++) {
  wordLetters[i] = "_";
}
var remainingLetters = wordChoice.length;

// while (remainingLetters > 0) {
//   guessWord.textContent = wordLetters.join(" ");
// }

console.log(wordLetters.join(" "));
console.log(wordChoice);
console.log(remainingLetters);

