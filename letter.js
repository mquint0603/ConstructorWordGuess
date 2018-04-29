var Letter = function (letter){
    this.character = letter;
    this.correct = false;
    this.display = function(){
        if (this.correct === true){
            return letter
        } else {
            return "_"
        }
    }
    this.check = function(char){
        if (char === this.character){
            this.correct = true;
            console.log("Correct!")
            this.display()
        }
    }
}

module.exports = Letter;

// var test = new Letter("y")
// test.display()