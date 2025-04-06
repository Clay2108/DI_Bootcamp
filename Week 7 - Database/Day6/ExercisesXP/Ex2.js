// Removed the initial function declaration to avoid redefinition conflict.

//Transform the winBattle() function to an arrow function.
const winBattle = () => true;

//Create a variable called experiencePoints.
let experiencePoints=0;
//Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.

experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);
//Answer: 10

