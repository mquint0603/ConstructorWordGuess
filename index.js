var Word = require("./word.js")
var inquirer = require("inquirer")

const wordArray = ["dog", "aardvark", "anteater", "moose", "zebra", "catepillar", "shark", "cat"]
var usedGuesses = 0;
var totalGuesses = ""
var correctGuesses = 0;
var randomWord = ""
var target = ""

function pickWord() {
    randomWord = wordArray[Math.floor(Math.random() * wordArray.length)]
}


function startGame(){
    pickWord();
    totalGuesses = randomWord.length + 6
    target = new Word(randomWord)
    // console.log(target)
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

        for (i=0; i < target.word.length; i++){
            if (res.guess === target.word[i]){
                correctGuesses ++
            }
        }

        if (usedGuesses < totalGuesses && correctGuesses < target.word.length){
            getGuess()
        } else if (usedGuesses === totalGuesses){
            console.log("Out of guesses! The answer was " + target.word)
            restartGame()
        } else if (correctGuesses === target.word.length){
            console.log(`You won!\n\n`)
            restartGame()
        }

    });

}

startGame()

function restartGame(){
    usedGuesses = 0;
    totalGuesses = ""
    correctGuesses = 0;
    randomWord = ""
    target = ""
    startGame()
}


