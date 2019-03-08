window.onload = function() {
// Word Guess Game

// Globals

// create an array full of words [words = words]
var words = [
  "appetizer",
  "apple pie",
  "bake",
  "baked Alaska",
  "baking soda",
  "banana split",
  "basil",
  "beef",
  "BLT",
  "Bundt pan",
  "cheese",
  "corn",
  "crepe",
  "doughnuts",
  "egg nog",
  "fork",
  "freeze",
  "fruit salad",
  "grape",
  "KFC",
  "lemon zester",
  "mac and cheese",
  "McDonalds",
  "melt",
  "muffin tin",
  "pear",
  "poach",
  "potato chips",
  "produce",
  "rolling pin"
];

//create array for all letters in the alphabet
var allowedInput = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Create variables to hold references to html insertion points
// var titleBlock = document.getElementById("title-block");
var playerWinsCount = document.getElementById("player-wins");
var changeMsgText = document.getElementById("welcome-msg");
var addMsgText = document.getElementById("add-msg");
var guessResultText = document.getElementById("guess-result");
// var playAgain = document.getElementById("play-again");
var guessWordText = document.getElementById("guess-word");
var alreadyGuessedText = document.getElementById("guessed-already");
var guessesRemainingCount = document.getElementById("guesses-remaining");

//other global variables
var wordLetters;
var matchedLetters = [];
var wordLetters = [];
var alreadyGuessed = [];
var guessesRemaining = 0;
var totalGuesses = 0;
var playerWins = 0;
var letterGuessed = null;
var word = "";


// set game to default state when page loads

// listen for player keystrokes
document.onkeyup = function (event) {
  var letterGuessed = event.key.toLowerCase();
  console.log(letterGuessed);
}
  


gameReady();



// set game to 'ready' state when player presses first key ||
// or when game ends
function gameReady() {
  //computer chooses a word at random from the word list array
  var index = Math.floor(Math.random() * words.length);
  word = words[index];
  //now we need to split the word up into its component letters
  wordLetters = word.split("");

  console.log(wordLetters);
  console.log(word);
  
}

}  
