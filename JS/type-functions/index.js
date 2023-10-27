// function declaration
function greeting() {
    console.log("hello");
}

// function expression
const a = greeting;
const anonymousFunc = function () {
    console.log("anonymousFunc is called");
};

a();

anonymousFunc();

greeting();

// Arrow Function(ES6)2015

const arrow = () => {
    console.log("arrow func is called");
}

arrow()
