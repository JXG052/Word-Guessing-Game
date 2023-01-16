let  wordsArray = [
    {
        word: "HELLO",
        clue: "English Greeting"
    },
    {
        word:"BURGER", 
        clue: "Eat it from a bun"
    },
    {
        word: "PHOTOSYNTEHSIS", 
        clue: "Plants do it"
    },
    {
        word:"FOOTBALL", 
        clue: "Messi is quite good at it"
    },
    {
        word: "RELIGION", 
        clue: "Muslim, Christianity, Judaism ..."
    },
    {
        word: "POLICE",
        clue: "fuck da ____!"
    }, 
    {
        word: "BOOK", 
        clue: "read one!"
    }
]
console.log(wordsArray[1].word)
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
const messageBoxEl = document.querySelector("#messageBox")
const stopBtn = document.getElementById("stopBtn");
const clueBtn = document.getElementById("clueBtn");


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
let matches = 0;
let cluesRemaining = 3;
let clue;
// events
newGameBtn.addEventListener("click", function (){
    prompt();
    liveGame = true;
    stopBtn.style.display = "inline";
    newGameBtn.style.display = "none";
    messageBoxEl.style.display= "flex";
    

    // start timer
    intervalID = window.setInterval(timer, 1000)

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
    messageEl.textContent = clue
    

})

// Returns a random word
const generateRandomWord = function () {
    let randomIndex = Math.floor(Math.random()*wordsArray.length)
    clue = wordsArray[randomIndex].clue;
    return wordsArray[randomIndex].word;
}

// Event listener for keydown. logs that letter and runs checkword function
window.addEventListener("keydown", function (e) {
    if(!liveGame){
        messageBoxEl.style.display = "flex";
        messageEl.textContent = "Don't forget to click new game"
    }
    else{
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
        
        if (numberOfGuesses === 0){
            lossCount ++
            messageBoxEl.style.backgroundColor = "red";
            messageEl.textContent  ="You LOSE!!! you ran out of guesses"
            stopGame()
        }
    }
    else if (lettersGuessed.includes(letter))
        console.log("you've already entered that letter")
    else {
        

        // What happens when the letter is in theWord
        // need a loop to catch the letter occuring more than once
        for (let i = 0; i < theWord.length; i++)
        {
            if (theWord[i].indexOf(letter) === 0 ){
                blanks[i] = letter;
                matches ++
                console.log(matches)
            }
        
        }
        lettersGuessed.push(letter)
        theWordEl.textContent = blanks.join(" ")



        if (matches === theWord.length){
            messageBoxEl.style.backgroundColor = "rgba(0, 255, 0, 0.9)"
            messageEl.textContent = "Woohoo you win!!!"

            winCount ++
            stopGame()
        }
    }
    lettersGuessedEl.textContent = lettersGuessed
}

// create a function for countdown


const timer = function () {
    if (countdown <= 0) {
        messageBoxEl.style.backgroundColor = "red"
        messageEl.textContent = "TIME UP!"
        lossCount++
        stopGame()
    } else {
    countdown --
    countdownEl.textContent = `${countdown} seconds left`
    }
}



const stopGame = function () {
    clearInterval(intervalID)
    liveGame = false;
    gamesPlayed ++
    numberOfGuesses = 5;
    theWord = "";
    blanks = [];
    lettersGuessed = [];
    countdown = 60;
    intervalID = null
    matches = 0;
    gamesPlayedEl.textContent = `Games Played: ${gamesPlayed}`
    countdownEl.textContent = `${countdown} seconds left`
    lettersGuessedEl.textContent = lettersGuessed
    guessesRemainingEl.textContent = `${numberOfGuesses} guesses left`
    winCountEl.textContent = `You have won: ${winCount}`;
    loseCountEl.textContent = `You have lost: ${lossCount}`;
    stopBtn.style.display = "none";
    newGameBtn.style.display = "inline";
}
const youWin = function(){
    messageEl.textContent = "you win"
    winCount ++
    stopGame()
}

const revealClue = function(){
    messageBoxEl.style.display = "flex";
    messageEl.textContent = clue;
    cluesRemaining --

}
    
    
