// console.log(document);
const doc = document;
// console.log(document.head);
// console.log(document.body);

// console.log(doc.getElementsByClassName("title"));
// console.log(doc.getElementById("para"));
// console.log(doc.getElementsByName("field"));
// console.log(doc.getElementsByTagName("h1"));

// console.log(doc.querySelector("h1"));
// console.log(doc.querySelectorAll("h1"));

// styling

const h1 = doc.querySelectorAll("h1")[0];

console.log(h1.style);

h1.style.color = "white";
h1.style.backgroundColor = "purple";
h1.style.paddingBlock = "10px";
h1.style.fontSize = "20px";

// creating new content

// h1.textContent = "hello js"
// h1.innerHTML = "<span> Hi </span> <span> Hi </span> <span> Hi </span>"

// console.log(h1.textContent);

// creating new element

const div = doc.createElement("div");
const div2 = doc.createElement("div");

div.textContent = "hello🤴";
div.style.fontSize = "30px";
div.style.marginBlock = "30px";
console.log(div);

// doc.body.append(div, div2)
doc.body.appendChild(div)

