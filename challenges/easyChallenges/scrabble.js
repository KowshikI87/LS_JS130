/*

Problem
- input: a word --> assume that the word makes sense
- output: score for that word

- score for each letter is given
- whitespace scores zero
- null scores zero
- scores are case insensitive


Example/Test Cases
- given


Data Structure
- let's use a dictionary
- probably would be more efficient if I seperated each letter out and write them
  as individual keys but could create error. So don't do that
- key: string (the letters concatenated together)
- value: the scores

Algorithm
- function getLetterScore(char)
  - input: character
  - output: score from that dictionary

- main function: score
  - input: word
  - output: total score
    - use a reduce method


Code

*/

let tileScores = {
  AEIOULNRST : 1,
  DG : 2,
  BCMP : 3,
  FHVWY : 4,
  K : 5,
  JX : 8,
  QZ : 10
};

class Scrabble {
  constructor(word) {
    this.word = word;
  }

  score() {
    if (this.word === null) return 0;
    if (this.word.trim().length === 0) return 0;
    return this.word.toUpperCase().trim().split('').reduce((totalScore, letter) => {
      return totalScore + this._getLetterScore(letter);
    }, 0);
  }

  static score(word) {
    let newScrabble = new Scrabble(word);
    return newScrabble.score();
  }

  _getLetterScore(letter) {
    let tile = Object.keys(tileScores).find(tile => tile.includes(letter));
    return tileScores[tile];
  }
}

module.exports = Scrabble;