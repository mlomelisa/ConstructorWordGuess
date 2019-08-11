var letterFunc = require("./letter");

var word = function(randomWordArray){
  this.currentWordArray = [];
  this.randomWordArray  = randomWordArray; 
  this.convertstoString = function() {
    
    for (let i = 0; i < this.randomWordArray.length; i++){
     
      this.currentWordArray[i] = new letterFunc(this.randomWordArray[i])
      this.currentWordArray[i].character = letterFunc.prototype.toString();
    
    }
    console.log(this.currentWordArray.join(" ")) //Convert the word to guess from array to string
 
  }

  this.eachLetterFunc = function(letter){
   
    for (let j = 0; j < this.randomWordArray.length; j++){
      if (this.randomWordArray[j] === letter) {
   
    var letterFunc2 = new letterFunc(letter);
    var booleanNewValue = letterFunc2.updateBooleanvalue(letter);
     this.currentWordArray[j].letterIsGuessed = booleanNewValue;
     this.currentWordArray[j].character = letter;
    
      }
    }

     console.log(this.currentWordArray.join(" "))
  }
}

module.exports = word;