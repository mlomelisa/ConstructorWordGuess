var inquirer = require('inquirer');
var word = require('./word');
var words = require('./words')
var newLetterArray = [];
var randomWordArray = [];
var guesstries = 5;

//Function select a random word
var wordRandomFunc = function() {
  var randomWord = words[Math.floor(Math.random() * words.length)];
  randomWordArray  = randomWord.split(''); // convert to array the random word to guess

  this.testWord = new word(randomWordArray);
  
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
    if(randomWordArray.includes(newLetter)){
     
      testWord.eachLetterFunc(newLetter)
     if(testWord.wonValidation()){
      //process.exit();
      console.log("Try a new word!!!")
      newLetterArray = [];
      wordRandomFunc();
    } else {
      askEntryFunction();
    }
    
      
    } else {
      guesstries--;
      console.log("You have " + guesstries + " guess tries")
      if(guesstries === 0){
        console.log("You lost")
        //process.exit();
        console.log("Try a new word!!!")
        newLetterArray = [];
        wordRandomFunc();
      } else {
        askEntryFunction();
      }

    }

   
  }
  
 });
}

wordRandomFunc();
