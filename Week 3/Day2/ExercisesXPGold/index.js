
//Exercise 1
// let sentence = ["my","favorite","color","is","blue"];
//console.log(sentence)

// Exercise 2
// let str1 = "box";
// let str2 = "mug";

// let firstTwoStr1 = str1.slice(0,2)
//console.log(firstTwoStr1) Ans bo

// let firstTwoStr2 = str2.slice(0,2)
//console.log(firstTwoStr2) Ans: mu

// let restStr1= str1.slice(2)
// let restStr2= str2.slice(2)
//console.log(restStr1) Ans: x
//console.log(restStr1) Ans: g

// const swappedStr1= firstTwoStr2 +restStr1
// const swappedStr2= firstTwoStr1 +restStr2
//console.log(swappedStr1) Ans: mux
//console.log(swappedStr2) Ans: bog
//console.log ( swappedStr1 + " "+ swappedStr2) Ans : mux bog


//Exercise 3
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!
let num1 = prompt ("Enter the first number");
num1 =Number(num1)
let num2 = prompt ("Enter the second number")
num2 =Number(num2)
let sum =num1 + num2
let Sub= num1 -  num2
let product =num1 * num2
let quotient = num1 / num2

alert ("The sum is:" + (sum))
