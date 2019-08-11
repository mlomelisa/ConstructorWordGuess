
var letter = function(character) {
  // this.validate = !/^[a-zA-Z]*$/g.test(character);
  this.character = character;
  this.letterIsGuessed = false;
}

 letter.prototype.toString = function() {
   
      if (this.letterIsGuessed){
      
        return this.character;
      }    
      return '_';
  };


 letter.prototype.updateBooleanvalue = function(letter){
     
      if (this.character === letter){
       
            letterIsGuessed = true;
        return letterIsGuessed;
      }
  }

module.exports = letter;