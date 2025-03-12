//Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.

function isPalindrome(str){
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}
console.log(isPalindrome("madam")); //true   
console.log(isPalindrome("hello")); //false

