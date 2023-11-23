// function sum(a, b) {
//     return a * b
// }

// console.log(sum(2, 4));
// console.log(sum(2, 3));
// console.log(sum(2, 6));


function multiply(a) {
    return function (b) {
        return a * b
    }
}

// const multiplyByTwo = multiply(2);
// const multiplyByFive = multiply(5);
// const multiplyByFiveByBind = sum.bind(this, 2, 5);
// console.log(multiplyByFiveByBind(), "==");


// console.log(multiplyByTwo(4));
// console.log(multiplyByTwo(3));
// console.log(multiplyByTwo(6));
// console.log(multiplyByFive(6));
// console.log(multiplyByFive(8));
// console.log(multiplyByFive(3));


// function outer() {
//     return function inner() {
//         return outer
//     }
// }

// console.log(outer()()()()()()()()()());

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return a * b * c * d;
//             }
//         }
//     }
// }

// console.log(sum(2)(3)(5)(2));



// let c = 0;
// function count() {
//     console.log(c);
//     if (c < 10) {
//         count(++c);
//     }

// }


// count()