// // -------------------------------------  1. Arrow Function (=>) ----------------------------------
const greet = (name) => {
  return `Hello, ${name}`;
};
console.log(greet("Prince")); // Hello, Prince

// //👉------------------------------- Real use case ---------------------------------------
// let users = ["Raj", "Simran", "Rohan"];
// users.forEach((user) => console.log("Welcome", user));

//👉--------------------------------  2. Rest Operator ... (for multiple arguments) -------------------------------
// "Rest" ka matlab: baaki sab cheeze collect karo array ke form me

// function registerUser(name, ...skills) {
//   console.log(`${name} has skills: ${skills.join(", ")}`);
// }

// registerUser("Prince", "HTML", "CSS", "JS");
// // Prince has skills: HTML, CSS, JS

// 👉------------------------------- 3. Spread Operator ... (for spreading arrays/objects) --------------------------
// ------  "Spread" ka matlab: array ya object ko alag-alag karke nikaalna ---------

// //1.use with arrays
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let merged = [...arr1, ...arr2];
// console.log(merged); // [1, 2, 3, 4]

// //2.use with objects
// let user = { name: "Raj" };
// let details = { age: 22, city: "Delhi" };
// let finalUser = { ...user, ...details };

// console.log(finalUser);
// // { name: "Raj", age: 22, city: "Delhi" }

//👉------------------------------------ 4.DEFAULT PARAMETER ------------------------------------------

// //default parameters
// function greet(name = "Guest") {
//   console.log(`Hello, ${name}`);
// }

// greet(); // Hello, Guest
// greet("Prince"); // Hello, Prince
