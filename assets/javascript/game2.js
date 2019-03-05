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
var guessesRemainingCount = document.getElementById("guesses-remainingLetters");


//computer chooses a word at random from the word list array [word = word]
var word = words[Math.floor(Math.random() * words.length)];

//set up array to show how many letters there are using underscores in place of the letters
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
//create variable to hold number of letters left to be guessed
var remainingLetters = word.length;


// ******Here Begins Ye Old Main Game******

//Player responds to initial welcome message and presses any key
document.onkeyup = function (event) {
  changeMsgText.innerHTML = "SO IT BEGINS...challenge word selected";
  addMsgText.innerHTML = "Select a letter!";
}
  
  //while there are still letters left to guess
  while (remainingLetters > 0){
    //show progress
    guessWordText.innerHTML(answerArray.join(" "));
    
    //convert the guessed letter to lower case and
    //store it in a var ***(do we need to run onkeyup again here? careful)***
    //***mind the scope***
    document.onkeyup = function(event) {
      
    //determine which key is pressed
    var guessLetter =  event.key;
    var guess = guessLetter.toLowerCase();
    
    //if the letter that is guessed is in allowedInput[]
    var allowed = allowedInput.includes(guessLetter);
    if (allowed == false) {
      alert("letters only please!");
    }else{
      //update the game state
      for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
              //update the answer array with the letter they guessed
              answerArray[j] = guess;
              //subtract one from remaining letters
              remainingLetters--;
            }
          }
        }
      }
    }
    if (remainingLetters = 0) {
      guessWordText.innerHTML(answerArray.join(" "));
      
    }
  
  









// quick functionality test
  // console.log(answerArray.join(" "));
  // console.log(word);
  // console.log(remainingLetters);

//while there are letters yet to be guessed
// while (remainingLetters > 0) {
  
  
  //display progress at guessWordText (answerArray is the answer array)
  // var progressBlanks = answerArray.join(" ");
  // guessWordText.innerHTML = progressBlanks;
  
  //store the letter that is guessed
  // var guessLetter = event.key;
  
  // update guessWordText

// for (var j = 0; j < word.length; j++) {
//   // if letter guessed is in the word,
//   // ...at that index location
//   if (word[j] === guessLetter) {
//     // update the answer array with the letter they guessed
//     answerArray[j] = guessLetter;
//     //subtract one from remaining letters
//     remainingLetters--;  

//   }

// }
  
// }

// //let player know the word and say congrats
// alert(answerArray.join(" "));
// alert("Good Job!  The answer was " + word);








// while (remainingLetters > 0) {
//   guessWord.textContent = answerArray.join(" ");
// }
