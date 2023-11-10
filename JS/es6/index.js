// spread operator
// const arr1 = [2, 4, 6, 7];
// const arr2 = [3, 5, 9];
// // const arr3 = arr1.concat(arr1, arr2);
// const arr3 = [...arr1, ...arr2];

// const [a, b, , d, ...rest] = arr3;

// console.log(a);
// console.log(b);
// console.log(d);
// console.log(rest);
// console.log(arr3);

const fullname = {
    name: "xyz"
}

const loc = {
    doorNo: 10,
    street: "saram",
    city: "pondy"
}

const person = { ...fullname, address: loc }

const { address } = person;
const { street, city, doorNo } = address;
// console.log(person);

// console.log(person.address.street)
// console.log(person.address.doorNo)
// console.log(person.address.city)

// console.log(address.street)
// console.log(address.doorNo)
// console.log(address.city)

console.log(street)
console.log(doorNo)
console.log(city)


// arr3.push(arr1)
// arr3.push(arr2)

// for (const i of arr1) {
//     arr3.push(i);
// }

// for (const i of arr2) {
//     arr3.push(i);
// }

// console.log(arr3);
// console.log(arr3[0]);