// Exercise 2: Write a JavaScript function to convert a string into an abbreviated form.
function abbrev_name(str){
    var split_name= str.split('')
    if (split_name.length >1){
        return (split_name[0] + '.' + split_name[split_name.length-1])

    }
  
    return split_name[0]
}
console.log(abbrev_name("Clayton Raymond"))