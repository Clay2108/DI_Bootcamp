// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output

let isString = (value) => {
    return typeof value === 'string';
    }

console.log(isString('Hello')); // true
console.log(isString([1, 2, 4, 0])); // false
