//Exercise 1:
// Part 1
// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

// function infoAboutMe (){
//     console.log ("Hi my name is Clayton, I'm 34, I love playing basketball")
// }
// infoAboutMe()
//----------------------------------------------------------------------------------------------------->

//Part 2
// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

// function infoAboutPerson (personName, personAge, personFavoriteColor){
//     console.log ("Your name is", personName)
//     console.log ("you are" , personAge, "years old")
//     console.log ("your favourite color is", personFavoriteColor)


// }
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

//----------------------------------------------------------------------------------------------------->

//Exercise 2:
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.
// calculateTip()
//Inside the function, use prompt to ask John for the amount of the bill.
//Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

//Answer:
// function calculateTip(){
//       const amount = prompt ("What is the amount of the bill?")
//   let tipPercent
//   if (amount <50) tipPercent =0.2
//   if (amount > 50 && amount < 200) tipPercent = 0.15
//   if (amount > 200) tipPercent = 0.1
//   const tip =amount *(1+tipPercent)
//   console.log("bill:" , amount)
//   console.log("Total bill incl tip:",tip)

// }


// Call the calculateTip() function.

//----------------------------------------------------------------------------------------------------->
// Exercise 3
// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// function isDivisible(divisor){
//   let sum = 0
//   for (let i=0; i < 500 ; i++){
//     if (i % divisor === 0) {
//       console.log (i)
//       sum = sum + i
//     };
//   }
//   console.log ("Sum of number divisible by 20:" , sum)
// }
// isDivisible(20)

//----------------------------------------------------------------------------------------------------->

// Exercise 4:

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
const shoppingList= ["banana", "orange" , "apple"];
// Create a function called myBill() that takes no parameters.
function myBill(){
  let totalPrice=0
  if(let i=0; i != stock ; i++)
}

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1