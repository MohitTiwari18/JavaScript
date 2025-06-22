/*
-Set kya hota hai?
Set ek special type ka object hota hai jo sirf unique values ko store karta hai.
Isme duplicate value allowed nahi hoti.
Iska size check karne ke liye .size ka use hota hai.
Isme values add karne ke liye .add(), check karne ke liye .has(), aur remove karne ke liye .delete() hota hai.
*/
// ✅ Ek naya Set banate hain
const mySet = new Set();

// 🔹 values add karte hain
mySet.add(1); // 1 add hua
mySet.add(2); // 2 add hua
mySet.add(2); // Duplicate, ignore ho jaayega
mySet.add(3); // 3 add hua

// 🔹 check karte hain koi value exist karti hai ya nahi
console.log(mySet.has(2)); // true, kyunki 2 present hai

// 🔹 ek value delete karte hain
mySet.delete(2); // 2 delete ho gaya

// 🔹 fir se check karte hain
console.log(mySet.has(2)); // false, ab nahi hai

// 🔹 set ke andar kitni unique values hai
console.log(mySet.size); // 2 (1 aur 3 bache hain)

// 🔹 saare values print karte hain
for (let value of mySet) {
  console.log(value); // 1 and 3
}
