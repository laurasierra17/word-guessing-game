const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.word = word.split("");
   this.letters = this.word.map(letter => {
        return new Letter(letter)
    });
  }

  guessLetter  (letter) {
    let foundLetter = false;
    this.letters.forEach(element => {
        if(element.char === letter) {
            element.visible = true;
            foundLetter = true;
        }
    });
    return foundLetter
  }

  guessedCorrectly ()  {
    let guessCorrectly = true;
    this.letters.forEach(element => {
        if(element.visible !== true) {
            guessCorrectly = false;
        }
    });
    return guessCorrectly;
  }
}

module.exports = Word;
