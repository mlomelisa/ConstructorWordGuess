var letterFunc = require("./letter");

var word = function(randomWordArray){
  this.currentWordArray = [];
  this.randomWordArray  = randomWordArray; 
  this.convertstoString = function() {
    
    for (let i = 0; i < this.randomWordArray.length; i++){
      // currentWordArray[randomWordArray[i]] = new letterFunc(randomWordArray[i])
      this.currentWordArray[i] = new letterFunc(this.randomWordArray[i])
      this.currentWordArray.push(letterFunc.prototype.toString());
    //  this.currentWordArray.push(letterFunc.prototype.toString());
    
    }
    console.log(this.currentWordArray.join(" ")) //Convert the word to guess from array to string
    console.log(this.currentWordArray)
  }


  this.eachLetterFunc = function(letter){
    
    for (let j = 0; j < this.randomWordArray.length; j++){
      if (this.currentWordArray[j] === letter) {
      // currentWordArray[randomWordArray[j]] = new letterFunc(letter);
      this.currentWordArray[j] = new letterFunc(letter);
    // var letterFunc2 = new letterFunc(letter);
    this.currentWordArray[j].updateBooleanvalue(letter);
      }
    }
    console.log(this.currentWordArray)
  }
   
}

module.exports = word;