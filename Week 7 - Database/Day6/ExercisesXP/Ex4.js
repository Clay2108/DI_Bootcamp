const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
//Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

let result = colors.map((color, index) => `${index + 1}# choice is ${color}.`).join(" ");
console.log(result);
