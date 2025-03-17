// Exercise 2: Grade Average
// Instructions                 
// 1.Create a function called findAvg(gradesList) that takes an argument called gradesList.
//2.Your function must calculate and console.log the average.
//3.If the average is above 65 let the user know they passed
//4.If the average is below 65 let the user know they failed and must repeat the course.
//Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.

function findAvg(gradesList) {
    let sum = 0;
    for(let i = 0; i < gradesList.length; i++){
        sum += gradesList[i];
    }
    let avg = sum / gradesList.length;
    console.log(avg);
    if(avg > 65){
        console.log("You passed.");
    } else {
        console.log("You failed and must repeat the course.");
    }
}   findAvg([10, 20, 30, 15, 50]);

