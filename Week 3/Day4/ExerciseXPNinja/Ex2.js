// Exercise 2: Zip Codes
// Instruction
// Harder exercise
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length

// Without Regular Expressions
var zipCode = prompt("Please enter your zip code");
if (zipCode.length === 5 && !isNaN(zipCode) && !zipCode.includes(" ")) {
    console.log("success");
} else {
    console.log("Error");
}

//With Regular Expressions
var zipCode = prompt("Please enter your zip code");
var regex=/^\d{5}$/;
if (regex.test(zipCode)){
    console.log("Success");
}
else{
    console.log("Error");   
}