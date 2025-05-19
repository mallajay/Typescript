// Inheritance AND Abstract

class InheritanceUser {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  static eid = "USER";

  static greet() {
    console.log("Hello");
  }
}

class Employee extends InheritanceUser {
  constructor(firstName: string, lastName: string, public jobTitle: string) {
    super(firstName, lastName);
  }

  work() {
    console.log(`${this.fullName} is working as a ${this.jobTitle}!`);
  }
}

// const employDetail = new Employee("Ajay", "Mall", "Software Engineer");
// employDetail.work();

abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {}
}

class SideDrawerElemet extends UIElement {
  constructor(public identifier: string, public position: "left" | "right") {
    super(identifier);
  }
}

/* 
Abstract Class
- An abstract class acts as a blueprint for other classes. It can have:
    - Concrete methods (with implementation)
    - Abstract methods (without implementation)
- You cannot create an object of an abstract class directly.


When to Use Abstract Classes?
- When you want to enforce certain methods to be implemented in child classes.
- When you want to provide a shared base with some reusable logic.

*/

abstract class Animal {
  constructor(public name: string) {}

  // Abstract method (no implementation)
  abstract makeSound(): void;

  // Concrete method (has implementation)
  move() {
    console.log(`${this.name} is moving`);
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Woof!
dog.move(); // Buddy is moving

// const animal = new Animal("Generic"); ❌ Error: Cannot create an instance of an abstract class.
