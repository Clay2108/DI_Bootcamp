//Exercise 1 : Divisible By Three
// let numbers = [123, 8409, 100053, 333333333, 7]
//Loop through the array above and determine whether or not each number is divisible by three.
//Each time you loop console.log true or false.
// for (let num in numbers){
// if (num % 3 == 0){
// console.log([num]+ true) }
// else{ console.log([num] + false)}
// }



//Exercise 2: Attendance
// let guestList = {
//   randy: "Germany",
//   karla: "France",
//   wendy: "Japan",
//   norman: "England",
//   sam: "Argentina"
// }
// Given the object above where the key is the student’s name and the value is the country they are from.

// 1.Prompt the student for their name.
// let name = prompt("What is the Student's name?")

// If the name is in the object, console.log the name of the student and the country they come from.
// For example: "Hi! I'm [name], and I'm from [country]."
// Hint: You don’t need to use a for loop, just look up the statement if ... in
// If the name is not in the object, console.log: "Hi! I'm a guest."

// if (name in guestList) {
//     console.log (`Hi! I'm ${name} and I'm from ${guestList[name]}`)
// }else {
//     console.log (`Hi! I'm a guest`)
// }


// Exercise 3 : Playing with Numbers
let age = [20,5,12,43,98,55];

// 1. Console.log the sum of all the numbers in the age array.
// let sum = 0
// for (let i=0; i < age.length ; i++){
//     sum += age[i]
// }
// console.log ("sum of age:" , sum)

// 2. Console.log the age in the array.
 let highestAge = age[0]
for (let i=1; i < age.length ; i++){
   if (age[i] > highestAge){ highestAge =age[i]}
}
console.log ("Highest age:" , highestAge)

