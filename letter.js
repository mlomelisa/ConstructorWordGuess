
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

letter.updateBooleanvalue = function(character){
      if (this.character === character){
        letterIsGuessed=true;
      }
  }

module.exports = letter;