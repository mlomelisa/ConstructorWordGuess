var inquirer = require('inquirer');
var word = require('./word');
var words = require('./words')
var newLetterArray = [];

//Function select a random word
var wordRandomFunc = function() {
  var randomWord = words[Math.floor(Math.random() * words.length)];
  var testWord = new word(randomWord);
  testWord.convertstoString();
  askEntryFunction();
}

function askEntryFunction(){

inquirer.prompt([
  {
    type: 'input',
    name: 'letter',
    message: 'Guess a letter of word',
    validate: function(val) {
      return /[a-zA-Z]/gi.test(val);
    }
  }
]).then(function(guess){
  
  var newLetter = guess.letter;
  if (newLetterArray.includes(newLetter)){
    console.log("This letter is already select, Please enter a new letter.")
    askEntryFunction();
  } else {
    newLetterArray.push(newLetter);
   console.log('ok')
   askEntryFunction();
  }
  
 });
}

wordRandomFunc();
