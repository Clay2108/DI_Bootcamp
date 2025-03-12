// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.
// To do this challenge you only need Javascript(No HTML and no CSS)
function createFrame() {
    const input = prompt("Enter words separated by commas:");
    if (!input) {
        console.log("No input provided.");
        return;
    }
    
    const words = input.split(",").map(word => word.trim()).filter(word => word.length > 0);
    if (words.length === 0) {
        console.log("No valid words provided.");
        return;
    }
    
    const maxLength = Math.max(...words.map(word => word.length));
    const border = "*".repeat(maxLength + 4);
    
    console.log(border);
    words.forEach(word => {
        console.log(`* ${word.padEnd(maxLength)} *`);
    });
    console.log(border);
}

createFrame();

