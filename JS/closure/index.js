// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i, "i");

console.log("func start");

function outerFunc() {
    const a = 2;
    function innerFunc() {
        console.log(a);
    }
    innerFunc();
}

// let f = outerFunc();


outerFunc();