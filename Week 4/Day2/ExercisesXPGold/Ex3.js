 // Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example : if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.

function swapCase(str){
    let newStr= ""
    for (let i=0; i <str.length; i++){
        if (str[i] === str[i].toLowerCase()){
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i].toLowerCase();
        }
    }
    return newStr;
}
console.log(swapCase("The Quick Brown Fox"))