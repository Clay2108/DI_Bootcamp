//Exercise 1: Age Difference
//Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

function findHalfAgeYear(birthYear1, birthYear2) {
  // Convert the years to numbers to make sure we are working with numbers
  birthYear1 = Number(birthYear1);
  birthYear2 = Number(birthYear2);

  // Ensure valid input for the years (numbers greater than 0)
  if (isNaN(birthYear1) || isNaN(birthYear2) || birthYear1 <= 0 || birthYear2 <= 0) {
    return "Please provide valid birth years.";
  }

  // Convert the birth years to strings for some string manipulation later if needed
  let birthYearStr1 = String(birthYear1);
  let birthYearStr2 = String(birthYear2);

  // Determine who is older and who is younger
  let older = Math.max(birthYear1, birthYear2);
  let younger = Math.min(birthYear1, birthYear2);

  // Calculate the age difference
  let ageDifference = older - younger;

  // Use conditionals to check and calculate when the younger will be half the older age
  let yearWhenHalfAge;
  if (older > younger) {
    // The younger person will be half the age of the older when the older person's age is twice the age difference
    yearWhenHalfAge = older + ageDifference;
  } else {
    return "Both people must have different birth years.";
  }

  // Return the result as a string
  return `The year when the younger person is exactly half the age of the older one is: ${yearWhenHalfAge}`;
}

// Example usage:
let birthYearPerson1 = "1990"; // String input
let birthYearPerson2 = "2000"; // String input

let result = findHalfAgeYear(birthYearPerson1, birthYearPerson2);
console.log(result);