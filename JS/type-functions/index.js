// function declaration or function statement
// function greeting() {
//     console.log("hello");
// }

// function expression
// named function
// const a = function greeting() {
//     console.log("hello");
// };
// anonymousFunc
// const anonymousFunc = function () {
//     console.log("anonymousFunc is called");
// };

// a();

// anonymousFunc();

// greeting();

// Arrow Function(ES6)2015

// const arrow = () => {
//     console.log("arrow func is called");
// }

// arrow()

// 1. Diff between function expression vs function declaration

console.log(greeting("imran"));

function greeting(name) {
    return "Hello " + name;
}


console.log(greeting("ocean"), "---");

console.log(addNum);

// functions acts as a value

var addNum = function (a, b) {
    return a + b;
}

console.log(addNum(2, 3));


// 2. What is Higher Order Function
// 3. First class Function/ First class Citizen
// 4. create sum function return number value

// sum([3,4,6,8,9]) => sum of the number

// 5. Parenthesis Checker
//  parenthesisChecker({([])}) => True

// { ([]) } => True
// { ([()])) } => False
