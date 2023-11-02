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

// console.log(greeting("imran"));

// function greeting(name) {
//     return "Hello " + name;
// }

// console.log(greeting("ocean"), "---");

// console.log(addNum);

// // functions acts as a value

// var addNum = function (a, b) {
//     return a + b;
// };

// console.log(addNum(2, 3));

// 2. What is Higher Order Function

`A function which one or more as its aruguments 
and or function returns as a result.`

// example
// hof(cbFunc);

// camelCase;
// isValid;

// level 1 understanding

// const name = "imran";

// function greet1() {
//     return "Hello";
// }

// function greet2() {
//     return "Hi";
// }

// function hof(name, cbFunc) {
//     return cbFunc() + " " + name;
// }

// console.log(hof(name, greet1));
// console.log(hof(name, greet2));

// level 2 understanding

const arr = [2, 4, 5, 6];

function double(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const logic = arr[i] * 2;
        newArray.push(logic);
    }

    return newArray;
}

function triple(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const logic = arr[i] * 3;
        newArray.push(logic);
    }

    return newArray;
}

function quadruple(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const logic = arr[i] * 4;
        newArray.push(logic);
    }

    return newArray;
}

function quintruple(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const logic = arr[i] * 5;
        newArray.push(logic);
    }

    return newArray;
}

// console.log(double(arr));
// console.log(triple(arr));
// console.log(quadruple(arr));
// console.log(quintruple(arr));


function myMap(arr, cb) {
    const newArray = [];
    const length = arr.length
    for (let i = 0; i < length; i++) {
        let logic = cb(arr[i], i, arr);
        newArray.push(logic);
    }
    return newArray;
}

// function double(value) {
//     return value * 2
// }

// function triple(value) {
//     return value * 3
// }


const d = myMap(arr, (value) => value * 2);
const t = myMap(arr, (value) => value * 3);
const m = arr.map((value) => value * 3);
const f = arr.filter((value) => value % 2 == 0);

// const t = myMap(arr, triple)

// const d = myMap(arr, double)
// const t = myMap(arr, triple)

console.log(d);
console.log(t);
console.log(m);
console.log(f);
// 3. First class Function/ First class Citizen
// 4. create sum function return number value

// sum([3,4,6,8,9]) => sum of the number

// 5. Parenthesis Checker
//  parenthesisChecker({([])}) => True

// { ([]) } => True
// { ([()])) } => False
