var Word = require("./word.js")
var inquirer = require("inquirer")

const wordArray = ["dog", "aardvark", "anteater", "moose", "zebra", "catepillar", "shark"]
var usedGuesses = 0;
var totalGuesses = ""
var randomWord = ""
var target = ""

function pickWord() {
    randomWord = wordArray[Math.floor(Math.random() * wordArray.length)]
}


function startGame(){
    pickWord();
    totalGuesses = randomWord.length + 6
    target = new Word(randomWord)
    console.log(target)
    target.makeLetters();
    target.showWord()
    getGuess()
}

function getGuess(){
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter",
            name: "guess"
        }
    ]).then(function (res){
        target.takeGuess(res.guess)
        target.showWord()
        usedGuesses ++
        if (usedGuesses < totalGuesses){
            getGuess()
        } else if (usedGuesses === totalGuesses){
            console.log("Out of guesses! The answer was " + target.word)
        } else if (target.guessed === true){
            console.log('You win!')
        }

    });

}

startGame()

// function restartGame(){

// }


