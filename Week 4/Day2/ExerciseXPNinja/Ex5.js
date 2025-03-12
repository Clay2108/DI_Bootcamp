//Write a JS function that takes an array and returns a new array with only unique elements.
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]

let list = [1,,2,2,2, 3, 3, 3, 3, 4, 5];
let newList = [];                       
for (let i = 0; i < list.length; i++) {
    if (newList.indexOf(list[i])=== -1){
    newList.push(list[i]);
    }
    else{
        continue;
    }
}
console.log(newList);