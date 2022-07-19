class Letter {
  constructor(letter) {
    this.letter = letter;

    if (letter.match(/[a-z]/i) || letter >= '0' && letter <= '9') {
        this.visible = false;
    } else {
        this.visible = true;
    }
  }

  toString = () => {
    if (this.visible) {
        return this.letter;
    }
    return "_";
  }

  guess = (otherLetter) => {
    if (this.letter === otherLetter) {
        return true
    }
    return false;
  }

  getSolution = () => {
    return this.letter;
  }

}

module.exports = Letter;
