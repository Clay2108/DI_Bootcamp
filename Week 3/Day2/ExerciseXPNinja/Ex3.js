//Exercise : Find Nemo
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// If you can’t find Nemo, console.log “I can’t find Nemo”.
// Some examples:

//     "I love the movie named Nemo" ➞ "I found Nemo at 5"
//     "Nemo is a cute fish" ➞ "I found Nemo at 0"
//     "My fish is called Nemo, I love it" ➞ "I found Nemo at 4"

let sentence = prompt ("Please enter a sentence containing the word Nemo");
let word = "Nemo";
let position  = sentence.indexOf(word); 
if (position !== -1) {
    console.log (`I found Nemo at ${position}`);
} else {
    console.log ("I can't find Nemo");
}
