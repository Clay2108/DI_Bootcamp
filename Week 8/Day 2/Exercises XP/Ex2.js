//Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
//First, use function declaration and invoke it.

const kgToGrams= function (weightInKg) {
    return weightInKg * 1000;
}
console.log(kgToGrams(5)); // 5000

//Then, use function expression and invoke it.  
const kgToGrams2 = function (weightInKg) {
    return weightInKg * 1000;
}
console.log(kgToGrams2(5)); // 5000

//Write in a one line comment, the difference between function declaration and function expression.Write in a one line comment, the difference between function declaration and function expression.
//Finally, use a one line arrow function and invoke it.
const kgToGrams3 = (weightInKg) => weightInKg * 1000;
console.log(kgToGrams3(5)); // 5000