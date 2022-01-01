/*

Problem
- Input: given a word and list of possible anagrams
- Output: selects the correct sublist that contains the anagrams of the word

- Input: given targetWord and list of words
- Output: return the sublist from the list of words
  - each of the word in the sublist can be rearranged to form targetWord


Example/Test Cases

Data Structure
- array


Algorithm


Code

*/

class Anagram {
  constructor(targetWord) {
    this.targetWord = targetWord;
  }

  match(possibleAnagrams) {
    return possibleAnagrams.filter((curntPossbAnagram) => {
      return this.isTwoWordsAnagram(this.targetWord, curntPossbAnagram);
    });
  }

  isTwoWordsAnagram(word1, word2) {
    return (word1.toUpperCase() !== word2.toUpperCase()) &&
           (word1.toUpperCase().split('').sort().join('') === word2.toUpperCase().split('').sort().join(''));
  }
}

module.exports = Anagram;


