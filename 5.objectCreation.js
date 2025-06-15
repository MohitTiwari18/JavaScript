// ---OBJECT IN JS : JavaScript object ek real-world entity ko represent karta hai — jisme key-value pairs hote hain.

//Object.keys() and Object.values()

let person = [
  {
    name: "Prince",
    age: 21,
    city: "Dehradun",
  },
];
let keys = Object.keys(person);
let values = Object.values(person);
console.log("All keys are:", keys, "&", "All Values are:", values); // ["name", "age", "city"]
