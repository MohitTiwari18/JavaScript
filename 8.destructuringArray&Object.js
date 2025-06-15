// ------------------------------------ ✅ 8. Destructuring in JavaScript -------------------------------
/*

🔸 What is Destructuring?
Destructuring ka matlab hota hai:
📦 kisi array ya object ke andar se value nikalna aur variable mein assign karna, easily.

*/

// //👉----------- 1.object destructuring -----------------
// let user = { name: "Raj", age: 22 };
// let { name, age } = user;

// console.log(name); // Raj
// console.log(age); // 22

// // 👉---------------------- 2.Array Destructuring -------------
// let colors = ["red", "green", "blue"];
// let [first, second, third] = colors;

// console.log(first); // red
// console.log(second); // green
// console.log(third); // blues

//👉 -------------- 3.FIND EMAIL AND PASSWORD FROM THE USER API ------------------------
fetch("https://jsonplaceholder.typicode.com/users/1") // dummy user API
  .then((response) => response.json())
  .then((data) => {
    // Destructure name and email from the user object
    const { name, email } = data;

    console.log("User Name:", name);
    console.log("User Email:", email);
  })
  .catch((error) => {
    console.log("Error fetching user data:", error);
  });
