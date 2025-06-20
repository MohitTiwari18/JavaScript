/*

Closure ek aisa function hota hai jo apne outer (bahar wale) function ke variables ko yaad rakhta hai,
 chahe outer function execute ho chuka ho.
Yani:
Function ke andar ek aur function banate hain (nested function).
Aur wo inner function outer function ke variables ko access kar sakta hai, even after outer function
 has finished executing.

 --> Closure Ka Matlab:
Function ke paas apna lexical scope + outer function ka bhi scope hota hai.
Yani function apne surrounding environment (variables) ko yaad rakhta hai.

*/

// //closure example
// function outerFunction() {
//   let name = "mohit";
//   function innerFunction() {
//     console.log("Hello " + name);
//   }
//   innerFunction();
// }
// outerFunction();

//closure real life example
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log("Count is", count);
  };
}

const increment = counter();
increment(); // Count is 1
increment(); // Count is 2
increment(); // Count is 3
