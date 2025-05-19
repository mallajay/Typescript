"use strict";
// class User {
//   name = "Max";
//   age: number;
//   constructor( n: string,  a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }
class User {
    name;
    age;
    hobbies = ["Test"];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const firstUser = new User("ajay", 31);
const secondUser = new User("Anita", 31);
firstUser.hobbies.push("sports");
console.log(firstUser, secondUser);
