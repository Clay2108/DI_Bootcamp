//Exercise : Secret Word
// Instruction
// Harder exercise
// Hint : Use Regular Expressions

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
// Bonus: Replace the vowels with another character and console.log the result
// a = 1
// e = 2
// i = 3
// o = 4
// u = 5

const word = prompt("Please enter a word");
const vowels = /[aeiou]/gi;
const numbers = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
}
const newWord = word.replace(vowels, (vowel) => numbers[vowel.toLowerCase()]);
console.log(newWord);