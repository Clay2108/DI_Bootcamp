// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.


// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}



// #1.1 - run in the console:
funcOne()
//Answer: inside the funcOne function 3
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

//Answer: if const is used, it will throw an error because const variables cannot be reassigned.

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
// Answer: inside the funcThree function 0
funcTwo()
//Answer: unspecified, because funcTwo() is not called yet

funcThree()
// Answer: inside the funcThree function 5
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
//Answer: if const is used, it will throw an error because const variables cannot be reassigned.

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
//Answer: inside the funcSix function test


// #4.2 What will happen if the variable is declared 
// with const instead of let ?
//Answer: const variables cannot be reassigned, so it will the answer remains the same.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
//Answer: in the if block 5, outside of the if block 2


// #5.2 What will happen if the variable is declared 
// with const instead of let ?

//Answer: const variables cannot be reassigned, so it will the answer remains the same.