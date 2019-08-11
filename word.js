var letterFunc = require("./letter");

var word = function(randomWord){
  this.currentWordArray = [];
  this.convertstoString = function(){
    this.randomWordArray  = randomWord.split('');
    
    for (let i = 0; i < this.randomWordArray.length; i++){
     new letterFunc(this.randomWordArray[i])
     this.currentWordArray.push(letterFunc.prototype.toString());
    }
    console.log(this.currentWordArray.join(" "))
  }

}

module.exports = word;