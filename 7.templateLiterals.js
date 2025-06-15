//-----------------------------✅ 7. Template Literals in JavaScript-----------------
/*
Template literals JavaScript mein string banane ka naya aur smart way hai. Ye aapko strings ko 
easy tareeke se likhne, join karne (concatenate) aur multi-line strings banane ki suvidha deta hai.
*/

// //👉----------------------- basic syntax ---------------------------
// `Your text goes here`;

// //1. SIMPLE METHOD TO PRINT
// let name = "Prince";
// console.log("Hello " + name + ", welcome!");

// //2. TEMPLATE LITERALS METHOD TO PRINT NAME
// let name = "Prince";
// console.log(`Hello ${name}, welcome!`);

// 👉---------------------------- REAL LIFE EXAMPLES ------------------------
let user = {
  name: "Raj",
  age: 21,
  city: "Delhi",
};

let message = `Hello ${user.name}, your age is ${user.age} and you live in ${user.city}.`;
console.log(message);
