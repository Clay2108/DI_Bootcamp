
for (let i =0; i < 4; i++){
    //console.log("Hello")

}


let names = [ "john" , "sarah", 23, "Rudolf" ,34 ]

for (let i = 0; i < names.length; i++) {
  if (typeof names[i] !== 'string') {
    continue; // Skip the non-string items
  }
 // console.log(names[i]); // Output only strings
}


for (let i = 0; i < names.length; i++) {
  if (typeof names[i] !== 'string') {
    continue; // Skip non-string items
  }
  
  // Check if the first letter is uppercase
  let name = names[i];
  if (name.charAt(0) !== name.charAt(0).toUpperCase()) {
    // Change the first letter to uppercase
    name = name.charAt(0).toUpperCase() + name.slice(1);
  }
//console.log(name); // Display the name
  
}

for (let i = 0; i < names.length; i++) 
  if (typeof names[i] !== 'string') {
    break; // Exit the loop if the item is not a string
  }

  console.log(names);

  

