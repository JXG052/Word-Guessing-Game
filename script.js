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
const theWord = document.querySelector('#theWord');

// Variables that will change

let gamesPlayed = 0;
let winCount = 0;
let lossCount = 0;
let numberOfGuesses = 5;

// events
newGameBtn.addEventListener("click", function (){
    // generate random word
    let word = generateRandomWord()
    console.log(word)
    let wordSplit = word.split("")
    let n = wordSplit.length
    let blanks = ""
    
    // display word as blanks
    for (let i = 0; i < n; i++){
    blanks += " _";
    }
    theWord.textContent = blanks;
    
    // listen for key
    window.addEventListener("keydown", function (e) {
        console.log(`e.key is: ${e.key}`)
        let letter = e.key.toUpperCase()
        let regex = /[A-Z]/;
        let found = letter.match(regex)
         if (!found || e.key.length > 1) {
            alert("please enter an alphabetical character")
        }
        else {
            let confirmed = confirm(`You entered ${letter}, are you sure?`)
            if (!confirmed){
                alert("No problem, we all make mistakes, please enter another character")
            } else {
                console.log(letter)
            }
        }
        
})
})
// Returns a random word
const generateRandomWord = function () {
    let randomIndex = Math.floor(Math.random()*wordsArray.length)
    return wordsArray[randomIndex]
}

// Event listener for keydown
