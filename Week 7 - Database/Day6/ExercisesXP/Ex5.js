const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];


//Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…

let result = colors.map((color, index) => {
    let suffix = ordinal[(index + 1) % 10] || "th";
    if ((index + 1) % 100 >= 11 && (index + 1) % 100 <= 13) {
        suffix = "th";
    } else if ((index + 1) % 10 === 1) {
        suffix = "st";
    } else if ((index + 1) % 10 === 2) {
        suffix = "nd";
    } else if ((index + 1) % 10 === 3) {
        suffix = "rd";
    }
    return `${index + 1}${suffix} choice is ${color}.`;
}).join(" ");
console.log(result);