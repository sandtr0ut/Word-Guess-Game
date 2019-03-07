window.onload = function () {
// Word Guess Game

// Globals

// create an array full of words [words = words]
var words = ["appetizer", "apple pie", "bake", "baked Alaska", "baking soda", "banana split", "basil", "beef", "BLT", "Bundt pan", "cheese", "corn", "crepe", "doughnuts", "egg nog", "fork", "freeze", "fruit salad", "grape", "KFC", "lemon zester", "mac and cheese", "McDonalds", "melt", "muffin tin", "pear", "poach", "potato chips", "produce", "rolling pin"];

//create array for all letters in the alphabet
var allowedInput = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Create variables to hold references to html insertion points
var titleBlock = document.getElementById("title-block");
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
var alreadyGuessed =[];
var guessesRemaining = 0;
var totalGuesses = 0;
var playerWins = 0;
var letterGuessed = null;
var word = "";


//game setup on page load
function setupGame () {
  //computer chooses a word at random from the word list array [word = word]
  var index = Math.floor(Math.random() * words.length);
  word = words[index];
  wordLetters = word.split("");
  console.log(wordLetters);

  console.log(word);
  
  displayWord();
  
  setTotalGuesses();


//runs when player selects a letter

function statusUpdate(letterGuessed) {
  if (guessesRemaining === 0) {
    restartGame();
    
  } else {
    //identify incorrect guesses and trigger function to display
    updateGuesses(letterGuessed);
    
    //identify correct guesses and trigger function to display
    updateMatchedLetters(letterGuessed);
    
    //show on-screen results of player guess
    displayWord();
    
    //restart game if player wins
    if (updatePlayerWins() === true) {
      restartGame();      
    }
  }
}
//if player guesses wrong
function updateGuesses(letterGuessed) {
  if ((alreadyGuessed.indexOf(letterGuessed) === -1) &&
     (wordLetters.indexOf(letterGuessed) === -1)) {
    
      //add to alreadyGuessed array
      alreadyGuessed.push(letterGuessed);
      
      //decrease guessesRemaining by 1
      guessesRemaining--;      
    
  }
  //update page
  guessesRemainingCount.innerHTML = guessesRemaining;
  alreadyGuessedText.innerHTML = alreadyGuessed;
  console.log(guessesRemaining);
  console.log(alreadyGuessed);
  // alreadyGuessedText.innerHTML = alreadyGuessed.join(", ");
  }
  
  //function to set the total number of guesses the player gets
  function setTotalGuesses() {
    totalGuesses = wordLetters.length + 5;
    guessesRemaining = totalGuesses;
    
    //update page with guesses remaining
    guessesRemainingCount.innerHTML = guessesRemaining;
  }
  
  // if the player guesses correctly
  function updateMatchedLetters(letterGuessed) {
    //run through wordLetters array
    for (var i = 0; i < wordLetters.length; i++) {
      // If the guessed letter is in the solution, and it has yet to be guessed
      if ((letter === wordLetters[i]) && (matchedLetters.indexOf(letterGuessed) === -1)) {
        // Push letter into matchedLetters array.
        matchedLetters.push(letter);
      }
    }    
  }

//set up display of current word using underscores in place of the letters
function displayWord() {
  //start with empty string
  var wordDisplay = "";
  
  //run through wordLetters array
  for (var i = 0; i < wordLetters.length; i++) {
    //if the guessed letter is a match, display it
    if (matchedLetters.indexOf(wordLetters[i]) !== -1) {
      wordDisplay += wordLetters[i];
      }
      //if not, display an "_"
      else {
        wordDisplay += "&nbsp;_&nbsp;";
      }    
    }
    //update page with new string
    guessWordText.innerHTML = wordDisplay;  
}

// Function that resets the game
function restartGame() {
  alreadyGuessedText.innerHTML = "";
  word = null;
  wordLetters = [];
  matchedLetters = [];
  alreadyGuessed = [];
  guessesRemaining = 0;
  totalGuesses = 0;
  letterGuessed = "";
  setupGame();
  displayWord();  
}

//check if user has won
function updatePlayerWins() {
  var win;
  if (matchedLetters.length === 0) {
    win = false;
  }
  else {
    win = true;
  }
  // If a letter appears in the wordLetters array, but not in the matchedLetters array, set win to false.
  for (var i = 0; i < wordLetters.length; i++) {
    if (matchedLetters.indexOf(wordLetters[i]) === -1) {
      win = false;
    }
  }
  
  // If win is true...
  if (win) {

    // Increment wins.
    playerWins = playerWins + 1;

    // Update wins on the page.
    playerWinsCount.innerHTML = playerWins;
  
    return true;
}
  
return false;
}
}

    //clear the game info when page is loaded || reloaded
    setupGame();
    
    //listen for keyup, check if it is a letter, convert to lower case, and store it
    document.onkeyup = function (event) {
      letterGuessed = event.key.toLowerCase();
      if (allowedInput.indexOf(letterGuessed) !== -1) {
      console.log(word); 
      console.log(letterGuessed);
      console.log(guessesRemaining);
        
        //update the welcome message and instructions
        changeMsgText.innerHTML = "SO IT BEGINS...challenge word selected";
        addMsgText.innerHTML = "Select a letter!";
        
        
        // var test = "you pressed a letter";
        // console.log(test);
      }
      else {
                
        alert("Select letters only please!");
      }
        // console.log(letterGuessed);
        
      }
    
    
    }
