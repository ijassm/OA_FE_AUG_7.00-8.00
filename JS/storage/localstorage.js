console.log(window.localStorage);
localStorage.setItem("name", "ocean");
localStorage.setItem("age", 12);
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("age"));
// console.log(localStorage.clear());
// localStorage.removeItem("name");
// localStorage.removeItem("name");
// console.log(localStorage.key(0));
// console.log(localStorage.key(1));

const key = localStorage.key(0);
const obj = { [key]: localStorage.getItem(key) };
// console.log(key);
console.log(obj);