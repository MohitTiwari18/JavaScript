/*

🔶 2. Classes and Inheritance
✅ Theory:
🔸 JavaScript me class ek blueprint hota hai object banane ka
🔸 Uske andar properties (like name) aur methods (like speak()) hote hain
🔸 constructor() method class ke object banate waqt call hota hai
🔸 Inheritance se ek class dusri class ke features reuse kar sakti hai

------------------------------------------------------------------------------------

📦 Real Life Analogy:
Class: Vehicle
Car, Bike → Vehicle ke child hote hain (inherit karte hain)

*/

// -------------------------------------------------------------------------------------

// ✅ Ek simple class: Person
class Person {
  // Constructor: jab bhi naya object banega, ye run hoga
  constructor(name, age) {
    this.name = name; // this.name ka matlab hai object ke andar ek property 'name'
    this.age = age; // this.age ka matlab hai object ke andar ek property 'age'
  }

  // Ek method (function) banate hain class ke andar
  introduce() {
    // Ye method object ka naam aur age console pe show karega
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// ✅ Object banate hain Person class ka
const person1 = new Person("Ravi", 25);

// ✅ Method call karte hain
person1.introduce(); // Output: Hi, my name is Ravi and I am 25 years old.
