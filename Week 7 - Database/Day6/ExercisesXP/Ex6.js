// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

const bankAmount = 1000; // Initial bank amount
const vat = 0.17; // VAT percentage
const details = ["+200", "-100", "+146", "+167", "-2900"]; // Monthly expenses
const currentBankAmount = addVat(details); // Calculate the current bank amount
console.log("Current bank amount:", currentBankAmount); // Display the current bank amount

function addVat(details) {
  let total = bankAmount; // Start with the initial bank amount

  for (let i = 0; i < details.length; i++) {
    const expense = parseFloat(details[i]); // Convert string to number
    const vatExpense = expense * (1 + vat); // Calculate the expense including VAT
    total += vatExpense; // Update the total amount
  }

  return total; // Return the final amount after all expenses
}   
addVat(details); // Call the function to calculate the total amount

