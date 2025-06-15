// //Array
// let fruits = ["apple", "banana", "mango"];
// console.log(fruits[0]); // Output: apple

//👉----------------- ARRAY METHODS ---------------------

//👉---------------------------- ✅ 1. push() – Add item at end ----------------

//1.push method
let users = [
  { id: 1, name: "Prince" },
  { id: 2, name: "Raj" },
];

// ✅ Create: Add a new user at end
users.push({ id: 3, name: "Riya" });

console.log(users);

//👉-------------------------- ✅ 2. pop() – Remove last item -------------

// //2.pop method
// let nums = [1, 2, 3];
// nums.pop();
// console.log(nums); // [1, 2]

//👉------------------------- ✅ 3. shift() – Remove first item ---------------

// //3shift method
// let nums = [1, 2, 3];
// nums.shift();
// console.log(nums); // [2, 3]

//👉----------------------- ✅ 4. unshift() – Add item at start ----------------------

// //4.unshift method
// let nums = [2, 3];
// nums.unshift(1);
// console.log(nums); // [1, 2, 3]

//👉--------------------------- ✅ 5. map() – Loop & return new array ----------------------

// //5. map method
// let nums = [1, 2, 3];
// let doubled = nums.map(function(n) {
//   return n * 2;
// });
// console.log(doubled); // [2, 4, 6]

//-----------practice question. Q.Update (Modify data) → Using map() --------------------

// // ✅ Update name where id = 2
// users = users.map((user) => {
//   if (user.id === 2) {
//     return { ...user, name: "Raj Kumar" };
//   }
//   return user;
// });

// console.log(users);

//👉-----------------------✅ 6. filter() – Return items that match a condition -----------

// //6. filter method
// let nums = [1, 2, 3, 4];
// let even = nums.filter(n => n % 2 === 0);
// console.log(even); // [2, 4]

//-------practice question. Q.Delete → Using filter() -----------------

// // ✅ Delete user with id = 1
// users = users.filter((user) => user.id !== 1);

// console.log(users);

//👉------------------ ✅ 7. reduce() – Reduce array to single value ---------------

// //7.reduce method
// let nums = [10, 20, 30];
// let total = nums.reduce((acc, val) => acc + val, 0);
// console.log(total); // 60

//👉------------------------✅ 8. find() – First value that matches condition ------------

// //8.find method
// let users = [
//   { name: "Raj", age: 22 },
//   { name: "Simran", age: 19 },
// ];

// let adult = users.find((user) => user.age >= 21);
// console.log(adult); // { name: "Raj", age: 22 }

//👉-------------------practice question. Q.Search (Find one) → Using find() ---------------

// //search by find method
// let user = users.find((u) => u.id === 2);
// console.log(user); // { id: 2, name: "Raj Kumar" }
