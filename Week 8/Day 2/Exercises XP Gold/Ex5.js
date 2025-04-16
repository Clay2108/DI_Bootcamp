const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

//Ans=16
//Explanation: The compose function takes two functions f and g as arguments and returns a new function that takes a single argument a. This new function applies g to a and then applies f to the result of g(a). In this case, add5 is applied first to 10, resulting in 15, and then add1 is applied to 15, resulting in 16.