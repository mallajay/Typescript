// class User {
//   name = "Max";
//   age: number;

//   constructor( n: string,  a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }

class User {
  readonly hobbies: string[] = ["Test"];

  constructor(public name: string, public age: number) {}
}

const firstUser = new User("ajay", 31);
const secondUser = new User("Anita", 31);

firstUser.hobbies.push("sports");

console.log(firstUser, secondUser);
