//1. Get a random number between 1 and 100.
function evenNumber (){
var randomNumber = Math.floor(Math.random() * 100) + 1;

// 2.Console.log all even numbers from 0 to the random number.


    if (randomNumber % 2 === 0) {
        console.log('${randomNumber} is an even number');
    }else{
        console.log('${randomNumber} is an odd number');
    }
    }

evenNumber();
