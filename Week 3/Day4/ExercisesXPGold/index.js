
// // Exercise 1 : The World Translator
// // Instructions
// // Hint: Use Switch Case

// //1. Ask the user which language they speak.
// let language =prompt ("Which language do you speak?");

// // 2.Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”
// language = language.toLowerCase();
// // 3.Create a few conditions :
// // 4.If the user speaks French : display “Bonjour”
// // 5.If the user speaks English : display “Hello”
// // 6.If the user speaks Hebrew : display “Shalom”
// // 7.If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’

// switch(language){
//     case "french":
//         console.log("Bonjour")
//         break;
//     case"English":
//         console.log("Hello")
//         break;
//     case "Hebrew":
//         console.log("Shalom")
//         break;
//         default:
//             console.log("01110011 01101111 01110010 01110010 01111001")
// }

//---------------------------------------------------------------------------------------------------------------------
// Exercise 2 : The Grade Assigner
// Instructions
// Ask the user for their grade.
let userGrade = prompt ("What is your grade?")

// 2.If the grade is bigger than 90, console.log “A”

// 3.If the grade is between 80 and 90 (included), console.log “B”


// If the grade is between 70(included) and 80 (included), console.log “C”

// If the grade is lower than 70, console.log “D”

if (userGrade >90){console.log("A");}
        else if(userGrade >=80 && userGrade <=90){
        console.log("B")}
    else if( userGrade >=70 && userGrade <=80){
        console.log("C")}
       
    else {console.log("D")}
