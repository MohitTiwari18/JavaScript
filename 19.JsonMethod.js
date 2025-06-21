/*
JSON ka full form hai: JavaScript Object Notation
Ye ek data format hai jisme data text (string) ke form me store & transfer hota hai.

🧾 JSON mainly use hota hai:
- API se data bhejne/paane me
- Server aur client ke beech data exchange me
----------------------------------------------------------------------------------------
| Method             | Kaam karta hai?                             |
| ------------------ | ------------------------------------------- |
| `JSON.stringify()` | JS object ko **JSON string** banata hai     |
| `JSON.parse()`     | JSON string ko **JS object** me badalta hai |


*/
//---------------------- JSON.stringify() – (Object to String) ------------------------------
const student = {
  name: "Virat Kohli",
  age: 21,
  course: "B.Tech",
};

const jsonString = JSON.stringify(student);
console.log(jsonString);

//-------------------------- JSON.parse() – (String to Object) -------------------------------
const jsonData = '{"name":"Rohit Sharma","age":20,"course":"MBA"}';

const jsObject = JSON.parse(jsonData);
console.log(jsObject.name); // Rohit Sharma

//////////////// -------------- REAL LIFE EXAMPLE ---------------/////////////////
// GET Example
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json()) // <- JSON.parse() ka shortcut
  .then((data) => console.log(data));

// POST Example
fetch("https://example.com/api", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Aman", city: "Delhi" }), // convert object to JSON
});
