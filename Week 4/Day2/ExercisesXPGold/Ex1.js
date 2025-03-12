//Exercise 1: Write a program to check whether a string is blank or not.
function isBlank(str) {
    return str.trim() === '';
}

let string= "";
if (string === ""){
    console.log(isBlank('')); // true
} else {
   console.log(isBlank('abc')); // false
}

