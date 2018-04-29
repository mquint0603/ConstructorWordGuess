var Letter = require("./letter.js")

var Word = function(word){
    this.word = word;
    this.letterObjects = []
    this.makeLetters = function(){
        var letterArray = this.word.split('')
        for(i = 0; i < letterArray.length; i++){
            let shownCharacter = new Letter(letterArray[i])
            this.letterObjects.push(shownCharacter)
        }
    }
    this.showWord = function(){
        let wordString = ""
        this.letterObjects.forEach((letter) =>{
            wordString += letter.display() + " "
        })
        console.log(wordString)
    }
    this.takeGuess = function(char){
        for(i = 0; i < this.letterObjects.length; i++){
        this.letterObjects[i].check(char)
        }
    }
}

module.exports = Word

