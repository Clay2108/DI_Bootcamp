const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// 1.Remove Banana from the array.

fruits.shift()
//console.log(fruits) Ans :[ 'Apples', 'Oranges', 'Blueberries' ]

//2.Sort the array in alphabetical order.

fruits.sort()
//console.log(fruits) Ans : [ 'Apples', 'Blueberries', 'Oranges' ]

//3.Add “Kiwi” to the end of the array
fruits.push("kiwi")
//console.log(fruits) Ans: [ 'Apples', 'Blueberries', 'Oranges', 'kiwi' ]


//4.Remove “Apples” from the array. Don’t use the same method as in part 1.
fruits.splice (0,1)
console.log(fruits)

//5.Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
//At the end you should see this outcome:

fruits.reverse()
//console.log(fruits) Ans: [ 'kiwi', 'Oranges', 'Blueberries']


//Exercise 2:
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];


//moreFruits[0]  // This gives "Banana" (the first element of the outer array)
//moreFruits[1]  // This gives ["Apples", ["Oranges"], "Blueberries"] (the second element of the outer array

//console.log(moreFruits[1][1][0])
