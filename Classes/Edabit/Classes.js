// Classes  all questions from https://edabit.com/

// Very Easy

//--------------------------------------------------------

// 1 Classes For Fetching Information on a Sports Player

// class Player {
//   constructor(name, age, height, weight) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.weight = weight;
//   }

//   getAge() {
//     return this.age;
//   }
//   getHeight() {
//     return this.height;
//   }

//   getWeight() {
//     return this.weight;
//   }
// }

// p1 = new Player("David Jones", 25, 175, 75);

// console.log(p1.getAge(), p1.getHeight(), p1.getWeight());

//--------------------------------------------------------

// 2 Simple OOP Calculator

// class Calculator {
//   add(a, b) {
//     return a + b;
//   }
//   subtract(a, b) {
//     return a - b;
//   }
//   multiply(a, b) {
//     return a * b;
//   }
//   divide(a, b) {
//     return a / b;
//   }
// }

// var calculator = new Calculator();

// console.log(calculator.name);

// console.log(calculator.add(10, 5));

// console.log(calculator.subtract(10, 5));

// console.log(calculator.multiply(10, 5));

// console.log(calculator.divide(10, 5));

//--------------------------------------------------------

// 3 Fullname and Email

// class Employee {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.fullname = firstname + " " + lastname;
//   }
// }
// let emp1 = new Employee("John", "Smith");
// console.log(emp1.fullname);

//--------------------------------------------------------
// 4 Older Than Me

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   get myage() {
//     return this.age + 5;
//   }

//   set setmyAge(age) {
//     this.age = age;
//   }

//   compareAge(other) {
//     if (other.age > this.age) {
//       return `${other.name} is older than me.`;
//     } else if (other.age < this.age) {
//       return `${other.name} is younger than me.`;
//     } else {
//       return `${other.name} is the same age as me.`;
//     }
//   }
// }

// let p1 = new Person("Samuel", 23);
// let p2 = new Person("Joel", 20);

// console.log(p1.compareAge(p2));
// console.log(p1.myage);
// p1.setmyAge = 50;

// console.log(p1.myage);

//--------------------------------------------------------

// 5 Count Number of Instances

class User {
  static total = 0;
  users = [];
  constructor(name) {
    this.users.push(name);
    User.total += 1;
  }
}

let u1 = new User("Nitish");
let u2 = new User("Nitish");

console.log(User.total);

//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
