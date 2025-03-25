// Create an empty array. For example: let shoppingList=[].
// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
// Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.

let shoppingList = [];  
let input = document.createElement('input');
document.body.appendChild(input);
let button = document.createElement('button');
button.innerHTML = 'AddItem';
document.body.appendChild(button);
button.addEventListener('click', addItem);  
let clearButton = document.createElement('button');
clearButton.innerHTML = 'ClearAll';
document.body.appendChild(clearButton);
clearButton.addEventListener('click', clearAll);

function addItem(){
    let item = input.value;
    shoppingList.push(item);
    console.log(shoppingList);  

}

