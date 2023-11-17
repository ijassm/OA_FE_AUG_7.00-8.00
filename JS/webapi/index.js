const id1 = setTimeout(function cb() { console.log("callback function call1") }, 5000);
const id2 = setTimeout(function cb() { console.log("callback function call2") }, 0);
const id3 = setTimeout(function cb() { console.log("callback function call3") }, 2000);
const id4 = setTimeout(function cb() { console.log("callback function call4") }, 1000);

console.log(id1);
console.log(id2);
console.log(id3);
console.log(id4);

clearTimeout(id1);


console.log("global space");
