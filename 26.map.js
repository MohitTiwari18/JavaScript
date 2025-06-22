/*
✅ Map kya hota hai?
Map bhi object jaise hi hota hai lekin powerful version hota hai.
Isme values ko key-value pair ke form me store kiya jata hai.
Keys kuch bhi ho sakti hain – string, number, object, function, etc.
Order preserve hota hai (insertion order).
*/
// ✅ Ek naya Map banate hain
const myMap = new Map();

// 🔹 key-value pairs add karte hain
myMap.set("name", "Amit"); // string key
myMap.set("age", 25); // number value
myMap.set(true, "active"); // boolean key
myMap.set({ x: 10 }, "point"); // object key

// 🔹 kisi key ki value access karte hain
console.log(myMap.get("name")); // "Amit"
console.log(myMap.get(true)); // "active"

// 🔹 key exist karta hai ya nahi
console.log(myMap.has("age")); // true

// 🔹 map ke andar total kitne items hai
console.log(myMap.size); // 4

// 🔹 saare items loop se print karte hain
for (let [key, value] of myMap) {
  console.log(key, "=>", value);
}
