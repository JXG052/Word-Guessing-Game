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

// Variables that will change

let gamesPlayed = 0;
let winCount = 0;
let lossCount = 0;
let numberOfGuesses = 5;

// events
newGameBtn.addEventListener("click", function (){
    
    console.log(generateRandomWord())
})

// Returns a random word
const generateRandomWord = function () {
    let randomIndex = Math.floor(Math.random()*wordsArray.length)
    return wordsArray[randomIndex]
}

