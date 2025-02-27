// Exercise 1: Simple if/else statement
// Instructions
// 1.Create 2 variables, x and y. Each of them should have a different numeric value.
const x = 22
const y = 6


// 2.Write an if/else statement that checks which number is bigger.
if(x > y) {
    console.log ("x is bigger")
} else{
    console.log ("y is bigger")
}
//---------------------------------------------------------------------------------------------------------

// Exercise 2: Chihuahua
//1.Create a variable called newDog where it’s value is “Chihuahua”.

const newDog= ("Chihuahua")

// 2.Check and display how many letters are in newDog.
console. log ("Number of letters in newDog:", newDog.length)

// 3.Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
console.log((newDog.toUpperCase)())
console.log((newDog.toLowerCase)())
// 4.Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’

if (newDog === "Chihuahua")
{console.log("I love Chihuahuas, it’s my favorite dog breed")}

    else {console.log("I dont care, I prefer cats")} 

//---------------------------------------------------------------------------------------------------------    
//Exercise 3: Even or Odd
   //1.Prompt the user for a number and save it to a variable.
  //const userNumber= prompt("Enter a number")


    //2.Check whether the variable is even or odd.
    // If it is even, display: “x is an even number”. Where x is the actual number the user chose.
    
//---------------------------------------------------------------------------------------------------------   
//Exercise 4: Group Chat
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.
if (users.length === 0){ console.log ("no one is online")}
    
// If there is 1 user, console.log “<name_user> is online”.
if (users.length === 1 ){ console.log (users[0] +" is online")}
    
// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.

if (users.length === 2 ){ console.log (users[0] +"and" +users[1] +" are online")}
// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.

if (users.length > 2 ){ console.log (`${users[0]} ,${users[1]} and ${users.length-2} more are online`)}
    
