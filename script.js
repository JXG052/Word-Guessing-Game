let  wordsArray = [
    "HELLO",
    "BURGER",
    "WELCOME",
    "PHOTOSYNTEHSIS", 
    "FOOTBALL", 
    "RELIGION", 
    "TRUCK", 
    "AMERICA", 
    "MOVIE",
    "POLICE",
    "CUPBOARD",
    "GARAGE",
    "BOTTLE",
]

// DOM variables

const newGameBtn = document.getElementById("newGameBtn");
const gamesPlayedEl = document.querySelector("#gamesPlayed");
const winCountEl = document.querySelector("#winCount");
const loseCountEl = document.querySelector('#loseCount');
const guessesRemainingEl = document.querySelector('#guessesRemaining');
const countdownEl = document.querySelector('#countdown');
const lettersGuessedEl = document.querySelector('#lettersGuessed');
const theWordEl = document.querySelector('#theWord');

// Variables that will change
let liveGame = false;
let gamesPlayed = 0;
let winCount = 0;
let lossCount = 0;
let numberOfGuesses = 5;
let theWord = ""

// events
newGameBtn.addEventListener("click", function (){
    liveGame = true;
    // generate random word
    let word = generateRandomWord()
    console.log(word)
    theWord = word.split("")
    let n = theWord.length
    let blanks = ""
    
    // display word as blanks
    for (let i = 0; i < n; i++){
    blanks += " _";
    }
    theWordEl.textContent = blanks;
    
    // listen for key

})
// Returns a random word
const generateRandomWord = function () {
    let randomIndex = Math.floor(Math.random()*wordsArray.length)
    return wordsArray[randomIndex]
}

// Event listener for keydown. logs that letter and runs checkword function
window.addEventListener("keydown", function (e) {
    if(!liveGame){
        console.log("click new game")
    }
    else{
        console.log(`e.key is: ${e.key}`)
        let letter = e.key.toUpperCase()
        let regex = /[A-Z]/;
        let found = letter.match(regex)
         if (!found || e.key.length > 1) {
            console.log("please enter an alphabetical character")
        }
        else {
            checkWord(letter)
        }
    }
})



const checkWord = function (letter) {
    if(!theWord.includes(letter)){
        console.log(`Sorry, ${letter} is not in the word`)
        numberOfGuesses --
        guessesRemainingEl.textContent = `${numberOfGuesses} guesses left`
    }
    else{
        console.log('letter is in theWord')
    }
}