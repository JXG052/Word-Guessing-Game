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
const messageEl = document.querySelector("#message")


// Variables that will change
let liveGame = false;
let gamesPlayed = 0;
let winCount = 0;
let lossCount = 0;
let numberOfGuesses = 5;
let theWord = "";
let blanks = [];
let lettersGuessed = [];
let countdown = 60;
let intervalID = null

// events
newGameBtn.addEventListener("click", function (){
    liveGame = true;
    messageEl.style.color = "red"

    // start timer
    intervalID = window.setInterval(timer, 100)

    // generate random word
    let word = generateRandomWord()
    console.log(word)
    theWord = word.split("")
    let n = theWord.length
    
    
    // display word as blanks
    for (let i = 0; i < n; i++){
    blanks.push("_");
    }
    
    theWordEl.textContent = blanks.join(" ");
    
    

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

// checks if letter is in the word
const checkWord = function (letter) {

    // If letter is not included in word
    if(!theWord.includes(letter)){
        console.log(`Sorry, ${letter} is not in the word`)
        numberOfGuesses --
        guessesRemainingEl.textContent = `${numberOfGuesses} guesses left`
        lettersGuessed.push(letter);
        lettersGuessedEl.textContent = lettersGuessed

    }
    else{

        // What happens when the letter is in theWord
        let index = theWord.indexOf(letter);
        blanks[index] = letter;
        theWordEl.textContent = blanks.join(" ")
    }
}

// create a function for countdown


const timer = function () {
    if (countdown <= 0) {
        clearInterval(intervalID)
        stopGame()
    } else {
    countdown --
    countdownEl.textContent = `${countdown} seconds left`
    }
}



const stopGame = function () {
    console.log("countdown finished")
}

    
    
    
