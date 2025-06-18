/*
this refers to the object that is executing the current function.
Matlab: Jab tum kisi object ke andar method likhte ho, aur uske andar this use karte ho — to this usi object ko
 point karega.
*/

//INSIDE OBJECT METHOD
const persons = {
  name: "ravi",
  greet: function () {
    console.log("hii, i am " + this.name);
  },
};
persons.greet();

//ARROW FUNCTION THIS KEYWORD
const person = {
  name: "Amit",
  greet: () => {
    console.log(this.name);
  },
};

person.greet(); // undefined (Arrow functions me this apna khud ka context nahi lete, wo apne parent (outer) scope ka this le lete hain.)
