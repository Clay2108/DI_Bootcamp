//Part 1

// function makeJuice (size){
//     function addIngredients (ingredient1, ingredient2, ingredient3){
//        const juiceDetails = `The client wants a ${size} drink juice, containing ${ingredient1}, ${ingredient2} and ${ingredient3}.`;
//          console.log(juiceDetails);
//     }

//     addIngredients ("Mango", "Pineapple", "Banana");
// }
// makeJuice("large");

//Part 2
function makeJuice(size) {
    // Empty array to store ingredients
    const ingredients = [];

    // Inner function to add ingredients to the ingredients array
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    // Inner function to display the juice details in the console
    function displayJuice() {
        const juiceDetails = `The client wants a ${size} drink juice, containing ${ingredients.join(', ')}.`;
        console.log(juiceDetails); // Log the details to the console
    }

    // Call addIngredients twice to add 6 ingredients
    addIngredients("Mango", "Pineapple", "Banana");
    addIngredients("Strawberry", "Spinach", "Lime");

    // Call displayJuice to show the final juice details in the console
    displayJuice();
}

// Invoke the makeJuice function in the global scope with a "large" size
makeJuice("large");