
var letter = function(character) {
  // this.validate = !/^[a-zA-Z]*$/g.test(character);
  this.character = character;
  this.letterIsGuessed = false;
}

 letter.prototype.toString = function() {
   
      if (this.letterIsGuessed){
        console.log('yes3')
        return this.character;
      }    
      return '_';
  };

  var stringFunc = function(letterIsGuessed, letter) {
    this.letterIsGuessed = letterIsGuessed;
    this.character = letter;
    console.log(letterIsGuessed + " " + letter)
    if (this.letterIsGuessed){
      
      return this.character;
    }    
    return '_';
};

 letter.prototype.updateBooleanvalue = function(letter){
     console.log('here')
      if (this.character === letter){
       
            letterIsGuessed = true;
        // console.log(stringFunc(letterIsGuessed, this.letter))
      }
  }



module.exports = letter;