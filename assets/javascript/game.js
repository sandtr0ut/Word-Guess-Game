window.onload = function() {
// Word Guess Game

// Globals

// create an array full of words [words = words]
var words = [
  "boil", "boston", "clambake", "clams", "crab", "crabcakes", "crawfish", "harbor", "kingcrab", "lobster", "lobsterroll", "maine", "muscles", "pissa", "saltwater", "seafood", "tastycakes"
];


// Create variables to hold references to html insertion points
// var titleBlock = document.getElementById("title-block");
var playerWinsCount = document.getElementById("player-wins");
var changeMsgText = document.getElementById("welcome-msg");
var addMsgText = document.getElementById("add-msg");
// var guessResultText = document.getElementById("guess-result");
// var playAgain = document.getElementById("play-again");
var guessWordText = document.getElementById("guess-word");
var alreadyGuessedText = document.getElementById("guessed-already");
var guessesRemainingCount = document.getElementById("guesses-remaining");

//other global variables
var word = ""; // -the word-in-play (empty string until game starts)
var wordLetters = []; // -array to be filled with the letters in 'word'
var matchedLetters = []; //  guessed letters that match letters in word
var alreadyGuessed = []; //  letters player has guessed
var guessesRemaining = 0; // (totalGuesses) minus (alreadyGuessed.length)
var totalGuesses = 0; // # of guesses player gets (wordLetters.length + 5)
var playerWins = 0;  // # of times player has guessed word
var letterGuessed = null; //player's guess (key-pressed)





// Set game to 'ready' state when player presses first key ||
// or when game ends (Define gameReady function)
function gameReady() {
  //computer chooses a word at random from the word list array
  var index = Math.floor(Math.random() * words.length);
  word = words[index];
  
  //now we need to split the word up into its component letters
  wordLetters = word.split("");
  
   
  //call the function that displays the word to be guessed with underscores 
  //(call displayWord function)*
    displayWord();
  
  //call the function that establishes the total number of guesses player gets
  //and updates that figure on the page*
    setTotalGuesses();
  
}

// Set function to run game when player selects a letter 
// (define updatePage function)
function updatePage(letter) {
  //if guesses remaining = 0, restart the game (call restart game function)*
  if (guessesRemaining === 0) {
    alert("Sadly, you lose and have failed your family.  The game will restart now");
    restartGame();    
  }
  //otherwise...
  else {
    //...deal with incorrect guesses (call updateGuesses function)*
    updateGuesses(letter);
    //... and correct guessess (call updateMatchedLetters function)*
    updateMatchedLetters(letter);
    //...and update the page with letters/underscores (call displayWord)*
    displayWord();
    
    //if player wins, restart the game (call restart game function)*
    if (updateWins() === true) {
      restartGame();
    }
  }
}

//when the player makes an incorrect guess that they have not
//guessed before... (Define updateGuesses function)
function updateGuesses(letter) {
  
  //if the letter guessed is not in either alreadyGuessed or wordLetters arrays
  if ((alreadyGuessed.indexOf(letter) === -1) &&
  (wordLetters.indexOf(letter) === -1)) {
    
    //add the letter to the alreadyGuessed array...
    alreadyGuessed.push(letter);
    //and decrease guessesRemaining by one
    guessesRemaining--;
    //and display alreadyGuessed and guessesRemaining on the page
    alreadyGuessedText.innerHTML = alreadyGuessed.join(", ");
    guessesRemainingCount.innerHTML = guessesRemaining;
    } 
  }

function setTotalGuesses() {
  //total guesses is a function of the length of the word + a few extra
  totalGuesses = wordLetters.length + 5;
  guessesRemaining = totalGuesses;
  //display guessesRemaining on the page
  guessesRemainingCount.innerHTML = guessesRemaining;
}

//function updates the matchedLetters array when player makes a
//correct guess (Define updateMatchedLetters function)
function updateMatchedLetters(letter) {
  for (var i = 0; i < wordLetters.length; i++) {
    //if the letter is in the word AND has not been guessed before
     if ((letter === wordLetters[i]) && (matchedLetters.indexOf(letter) === -1)){
       //then push letter into matchedLetters array
       matchedLetters.push(letter);
     }
     if (matchedLetters.indexOf(" ") !== -1) {
       matchedLetters.push(" ");
     }
    }
  }

//This function displays the updated combination of letters and blanks
//after each guess (Defines displayWord function)
function displayWord() {
  //nothing at first (empty string)
  var wordDisplay = "";
    
  //loop through wordLetters array
  for (var i = 0; i < wordLetters.length; i++) {
    
    // if (wordLetters.indexOf(" ") !== -1) {}
      
      //if the wordLetter has been guessed, display it...
    if (matchedLetters.indexOf(wordLetters[i]) !== -1) {
      wordDisplay += wordLetters[i]; 
            
    }
    //...otherwise, display an underscore
    else {
      wordDisplay += "&nbsp;_&nbsp;";
      
    }
   }
  //update page with the new wordDisplay string
    
  guessWordText.innerHTML = wordDisplay;
  
  console.log(wordLetters);
  console.log(wordDisplay);
 
  
}

//function for game-restart (reset variables to initial state)*
function restartGame() {
alreadyGuessedText.innerHTML = "";
word = ""; // -the word-in-play (empty string until game starts)
wordLetters = []; // -array to be filled with the letters in 'word'
matchedLetters = []; //  guessed letters that match letters in word
alreadyGuessed = []; //  letters player has guessed
guessesRemaining = 0; // (totalGuesses) minus (alreadyGuessed.length)
totalGuesses = 0; // # of guesses player gets (wordLetters.length + 5)
letterGuessed = null; //player's guess (key-pressed)
gameReady();
displayWord();
}

//funtion that checks to see if the player has won
function updateWins() {
  var win;
  
  //if player has yet to correctly guess a word, set win to false
  if (matchedLetters.length === 0) {
    win = false;
  }
  //otherwise, set win to true
  else {
    win = true;
  }

  // If a letter appears in the lettersOfTheWord array, but not in the matchedLetters array, set win to false.
  // In English, if you haven't yet guessed all the letters in the word, you don't win yet.
  for (var i = 0; i < wordLetters.length; i++) {
   if (matchedLetters.indexOf(wordLetters[i]) === -1) {
   win = false;
      }
    }
  // If win is true...
  if (win) {
    
    // Increment playerWins...
    playerWins = playerWins + 1;
    
    // and update the page
    playerWinsCount.innerHTML = playerWins;
    guessWordText.innerHTML = word;
    changeMsgText.innerHTML = "YOU WIN!   FORTUNE SMILES UPON YOU!   PLAY AGAIN!";
   
    alert("the word was " + word)
    
    // ...and alert player of his/her success
   
    // alert("PLAY AGAIN?");
    
    // return true (triggers updatePage() function which
    // triggers restartGame() function)
    return true;
  }
  // If win is false, return false to updatePage() and keep playing
  return false;
}


// set game to default state when page loads (call gameReady function)
gameReady();

// listen for player keystrokes
document.onkeyup = function (event) {
  //be sure the key pressed is a letter and, if so, convert it to lower case
  if (event.keyCode >= 65 && event.keyCode <= 90) {
      letterGuessed = event.key.toLowerCase();
      
      //update the welcome message to indicate that the game is starting
        changeMsgText.innerHTML = "SO IT BEGINS...challenge word selected";
        addMsgText.innerHTML = "Select a letter!";
  
      // then, pass the player's guess (letter) into updatePage function 
      // to run the game logic (i.e. call updatePage function)
        updatePage(letterGuessed);
  
}

}  

  console.log(word);
  // console.log(wordLetters);
  // console.log(letterGuessed);
}
