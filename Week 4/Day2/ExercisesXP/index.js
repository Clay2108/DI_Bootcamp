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

function calculateTip(){
      const amount = prompt ("What is the amount of the bill?")
  let tipPercent
  if (amount <50) tipPercent =0.2
  if (amount > 50 && amount < 200) tipPercent = 0.15
  if (amount > 200) tipPercent = 0.1
  const tip =amount *(1+tipPercent)
  console.log("bill:" , amount)
  console.log("Total bill incl tip:",tip)

}
calculateTip()

// Inside the function, use prompt to ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.

//----------------------------------------------------------------------------------------------------->
// Exercise 3
// Create a function call isDivisible() that takes no parameter.