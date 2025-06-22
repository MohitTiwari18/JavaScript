// ✅ Parent Class: Person
class Person {
  // Jab bhi koi new object banega, ye constructor call hoga
  constructor(name, age) {
    this.name = name; // object ke andar 'name' property set ho jaayegi
    this.age = age; // object ke andar 'age' property set ho jaayegi
  }

  // Ye ek method hai jo har person ke liye kaam karega
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    // Ye line console pe person ka naam aur umar print karegi
  }
}

// ✅ Child Class: Student, jo Person class ko extend/inherit karti hai
class Student extends Person {
  // Student ka constructor (isme ek extra property "grade" bhi milegi)
  constructor(name, age, grade) {
    super(name, age);
    // 🔸 super() ka matlab hai: parent class (Person) ka constructor call karo
    // 🔸 isse name aur age parent class ke through set ho jaata hai

    this.grade = grade; // Student ke liye ek extra property: grade
  }

  // Student-specific method
  study() {
    // Ye method sirf students ke liye hoga
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}

// ✅ Ab ek Student ka object banate hain
const student1 = new Student("Ravi", 16, "10th");
// 🔸 Is line me: name = "Ravi", age = 16, grade = "10th"
// 🔸 Student class ka object bana, lekin wo Person class ka bhi features le raha hai

// ✅ Method calls:

student1.introduce();
// 🔸 Ye method Person class ka hai
// 🔸 Isliye Ravi ka naam aur age print hoga

student1.study();
// 🔸 Ye method Student class ka hai
// 🔸 Isliye Ravi ka grade print hoga
