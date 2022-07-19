class Letter {
  constructor(letter) {
    this.char = letter;

    if (letter.match(/[a-z]/i) || letter >= '0' && letter <= '9') {
        this.visible = false;
    } else {
        this.visible = true;
    }
  }

  toString  ()  {
    if (this.visible) {
        return this.char;
    }
    return "_";
  }

  guess  (otherLetter)  {
    if (this.char === otherLetter) {
        return true
    }
    return false;
  }

  getSolution ()  {
    return this.char;
  }

}

module.exports = Letter;
