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

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// const shoppingList= ["banana", "orange" , "apple"];
// Create a function called myBill() that takes no parameters.
// function myBill(){
// for(const item of shoppingList) {
// const StockQuantity= stock[item]
// if (StockQuantity > 0){
//   const price= prices[item]
//   console.log("Total price of the",item ,"is:", price)
//   console.log("and we have this quantity","of", item, "in stock", StockQuantity)
// } else {
//    console.log("Sorry", item, "is out of stock")
// }
 
// } 
// }
// myBill()
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1

//----------------------------------------------------------------------------------------------------->
// Exercise 5:
//1.Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
//- an item price
//- and an array representing the amount of change in your pocket.

// 2.In the function, determine whether or not you can afford the item.
// -If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// -If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// 3.Change will always be represented in the following order: quarters, dimes, nickels, pennies
//4.After you created the function, invoke it like this:
//changeEnough(4.25, [25, 20, 5, 0])

// function changeEnough (itemPrice, amountOfChange){
//  const change = amountOfChange[0]*0.25 + amountOfChange[1]*0.1 + amountOfChange[2]*0.05 + amountOfChange[3]*0.01
//   return change >= itemPrice}
//   console.log(changeEnough (4.25, [25,20,5,0])) 
//   if ( changeEnough(4.25,[25,20,5,0]))
//     console.log( "You can affford the item")
//      return true;
//      else{
//       console.log("You cannot afford the item")
//       return false;
//      }
 
//----------------------------------------------------------------------------------------------------->  
// Exercise 6/
// /   Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

//Answer:
// function hotelCost() {
//   let nights;
//   while (true) {
//       nights = prompt("Enter the number of nights you would like to stay:");
      
//       if (nights === null || nights.trim() === "") {
//           alert("Please enter a valid number.");
//           continue;
//       }
      
//       nights = Number(nights);
      
//       if (!isNaN(nights) && Number.isInteger(nights) && nights >= 0) {
//           return nights * 140;
//       } else {
//           alert("Invalid input. Please enter a valid number of nights.");
//       }
//   }
// }
// const totalCost = hotelCost();
// alert(`Total cost of the hotel stay: $${totalCost}`);hotelCost()


// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

//Answer:

// function planeRideCost() {
//     let destination;
    
//     do {
//         destination = prompt("Enter your destination:").trim();
//     } while (!destination);
    
//     destination = destination.toLowerCase();

//     return destination === "london" ? 183 :
//            destination === "paris" ? 220 : 300;
// }

// alert(`The cost of your plane ride is: $${planeRideCost()}`)



// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

//Answer:
// function rentalCarCost() {
//   let rentDays;
  
//   do {
//     rentDays = Number(prompt("Enter the number of days you would like to rent the car"));
//     if (isNaN(rentDays) || rentDays <= 0) {
//       alert("Invalid input. Please enter a valid number of days");
//     }
//   } while (isNaN(rentDays) || rentDays <= 0);

//   let totalCost = rentDays * 40;
//   return rentDays > 10 ? totalCost * 0.95 : totalCost;
// }

// alert(`Total cost of the car rental: $${rentalCarCost()}`);


// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.




