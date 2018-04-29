var Letter = require("./letter.js")

var Word = function(word){
    this.word = word;
    this.letterObjects = []
    this.makeLetters = function(){
        var letterArray = this.word.split('')
        for(i = 0; i < letterArray.length; i++){
            let shownCharacter = new Letter(letterArray[i])
            this.letterObjects.push(shownCharacter)
            // shownCharacter.display();
        }
    }
    // this.guessed = false;
    this.showWord = function(){
        let wordString = ""
        this.letterObjects.forEach((letter) =>{
            wordString += letter.display() + " "
        })
        console.log(wordString)
        // if (wordString === this.word){
        //     this.guessed = true;
        // }
    }
    this.takeGuess = function(char){
        for(i = 0; i < this.letterObjects.length; i++){
        this.letterObjects[i].check(char)
        }
        // this.showWord()
    }
}

module.exports = Word

