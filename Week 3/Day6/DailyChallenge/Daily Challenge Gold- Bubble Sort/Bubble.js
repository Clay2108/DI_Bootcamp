const numbers = [5,0,9,1,7,4,2,6,3,8];

// 1.Using the .toString() method convert the array to a string.
// let x =numbers.toString()
// console.log(x)

// 2.sing the .join()method convert the array to a string. Try passing different values into the join.
//Eg .join(“+”), .join(” “), .join(“”)

// console.log (numbers.join())
// console.log (numbers.join(""))
// console.log(numbers.join ("-"))
// console.log(numbers.join ("+"))



//3. Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.
// Requirement: Don’t copy paste solutions from Google
// Bubble Sort Algorithm to sort in descending order
for (let i = 0; i < numbers.length; i++) {
    // Inner loop goes through the remaining unsorted part of the array
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        // Compare adjacent elements
        if (numbers[j] < numbers[j + 1]) {
            // Swap if the current element is less than the next element (for descending order)
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }

        // Log the array after each swap to visualize the sorting process
        console.log(numbers);
    }
}

// Final sorted array in descending order
console.log('Sorted array in descending order:', numbers);