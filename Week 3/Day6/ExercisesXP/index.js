//Exercise 1

// const people = ["Greg", "Mary", "Devon", "James"];
// Part I - Review about arrays
// 1.Write code to remove “Greg” from the people array.
// people.shift()
//console.log (people)

// 2.Write code to replace “James” to “Jason”.
// people[people.length -1]= "Jason"



// 3.Write code to add your name to the end of the people array.
// people.push("Clayton")
// console.log(people)
//4.Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// let index = people.indexOf( "Mary" );
// console.log(index)

// 5.Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
// const peopleSliced = people.slice(1)
// console.log(peopleSliced)

// 6.Write code that gives the index of “Foo”. Why does it return -1 ?
// let index1 = people.indexOf( "Foo" );
// console.log(index1)


// 7.Create a variable called last which value is the last element of the array.
// const last= [people.length -1]
// console.log('last' , last)
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

//---------------------------------------------------------------------------------------------------------------------------------
//Part II
// 1.Using a loop, iterate through the people array and console.log each person.
// for (const student of people) {console.log ("this student is:" , student)}


// 2.Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
// for (const student of people) {console.log ("this student is:" , student)
// if (student === "Devon"){break}
// }
//---------------------------------------------------------------------------------------------------------------------------------
//Exercise 2
// 1.Create an array called colors where the value is a list of your five favorite colors.

// const colors = ["Red", "Turquoise" , "Green" , "Blue" , "purple"]
// const suffixes = ["st", "nd" , "rd" , "th" , "th"]

// 2.Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// for (let i = 0 ; i < colors.length ; i++){
//     console.log (`My #${i+1} choice is ${colors[i]}`)
// }


// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
// for (let i = 0 ; i < colors.length ; i++){
//     console.log (`My ${i+1}${suffixes[i]} choice is ${colors[i]}`)
// }

//---------------------------------------------------------------------------------------------------------------------------------
//Exercise 3
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// let Usernumber = prompt ("What is the number?")
// const number =Number(Usernumber)
// console.log(number, typeof number)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

// let number = null
// while (number !=10 ){
// const Usernumber = prompt ("What is the number?")
// number =Number (Usernumber)}

//---------------------------------------------------------------------------------------------------------------------------------
//Exercise 4 :

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

//2.Console.log the number of floors in the building.
// console.log (building.numberOfFloors)

// 3.Console.log how many apartments are on the floors 1 and 3
// console.log ("Apartments on First Floor",building.numberOfAptByFloor.firstFloor)
// console.log ("Apartments on Third Floor",building.numberOfAptByFloor.thirdFloor)

//4.Console.log the name of the second tenant and the number of rooms he has in his apartment.
// console.log ("Name of Second Tenant:", building.nameOfTenants[1])
// console.log ("Number of rooms owned by Second Tenant:", building.numberOfRoomsAndRent.dan[0])

//5.Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
// const SarahRent= building.numberOfRoomsAndRent.sarah[1]
// const DavidRent = building.numberOfRoomsAndRent.david[1]
// const DanRent = building.numberOfRoomsAndRent.dan[1]

// if (SarahRent + DavidRent  > DanRent){
//     building.numberOfRoomsAndRent.dan[1]=1200
//     }
// console.log(building)
//---------------------------------------------------------------------------------------------------------------------------------
//Exercise 5
// 1.Create an object called family with a few key value pairs.
// var family = {Father: "Michel", Mother: "Odille", Son: "Clayton"}

// 2.Using a for in loop, console.log the keys of the object.
// for (const relationship in family) {
//     console.log ("relationship:", relationship)
// }

// 3.Using a for in loop, console.log the values of the object.
// for (const names in family) {
//     console.log ("Name:",family[names])
// }
//---------------------------------------------------------------------------------------------------------------------------------

//Exercise 6
// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'reindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
// let sentence = " "
// for(const key in details) {
//     sentence = sentence + " " + key + " " + details[key]
// }
// console.log(sentence)
//---------------------------------------------------------------------------------------------------------------------------------

//Exercise 7
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
//1.A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
//Hint: a string is an array of letters
//2.Console.log the name of their secret society. The output should be “ABJKPS”
// let firstLetter = ""
// const sortedNames = names.sort()
// for (const name of sortedNames){
//     firstLetter= firstLetter + name[0]
// }
// console.log(firstLetter)