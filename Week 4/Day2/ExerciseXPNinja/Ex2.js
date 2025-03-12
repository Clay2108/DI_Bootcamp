//1.Create a function that takes a string as an argument.
// 2.Have the function return:
//  (i) The string but all letters in even indexes should be capitalized.
// (ii) The string but all letters in odd indexes should be capitalized.
// Note:

// Index 0 will be considered even.
// -The argument of the function should be a lowercase string with no spaces.
// -For example:
// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']

function capitalize(str) {
    let even = '', odd = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            even += str[i].toUpperCase();
            odd += str[i];
        } else {
            even += str[i];
            odd += str[i].toUpperCase();
        }
    }
    return [even, odd];
}

console.log(capitalize("abcdef")); //['AbCdEf', 'aBcDeF']
console.log(capitalize("hello")); //['HeLlO', 'hElLo']     