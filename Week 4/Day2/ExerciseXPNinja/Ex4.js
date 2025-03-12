//Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number
//Note : This function should work with any array;
//Example:
// const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
// const array2 = ['a', 3, 4, 2]; // should return 4 
// const array3 = []; // should return 0

function biggestNumberInArray(arrayNumber) {
    let biggest = 0;
    for (let i =0 ; i < arrayNumber.length; i++){
    if(arrayNumber[i] >= biggest){
        biggest= arrayNumber[i];
    }
    }
    return biggest;
}

console.log(biggestNumberInArray([-1,0,3,100, 99, 2, 99]));// should return 100 
console.log(biggestNumberInArray(['a', 3, 4, 2])); // should return 4
console.log(biggestNumberInArray([])); // should return 0