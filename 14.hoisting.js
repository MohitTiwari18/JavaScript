/*
Hoisting ka matlab hota hai — JavaScript execution se pehle variables aur functions ka declaration memory
 me top pe utha lena (move kar lena).

    Yani:
Jab JS code run hota hai, tab pura code do phase me execute hota hai:
1.Memory Creation Phase (hoisting hoti hai yahaan)
2.Execution Phase


    Memory Creation Phase me kya hota hai?
- Sare var, let, const variables ko declare kar diya jata hai.
- Sare function declarations ko memory me upar rakh diya jata hai.
- Lekin var ko undefined set kiya jata hai, aur let / const ko initialize nahi kiya jata.


*/

// //hoisting example - 1
// var a; // Declaration ho gaya (hoisted)
// console.log(a); // undefined
// a = 10; // Initialization

//hoisting example - 2
greet(); // Output: Hello!

function greet() {
  console.log("Hello!");
}
