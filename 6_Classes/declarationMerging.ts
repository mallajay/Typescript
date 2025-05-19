/* 
TODO: 
FIXME: 
HACK:
NOTE: 
BUG: 
Example: 1: Interface Merging
*/

interface Person {
  name: string;
}

interface Person {
  age: number;
}

// Now `Person` has both `name` and `age`
const p: Person = {
  name: "Ajay",
  age: 30,
};

// Example 2: Namespace + Function Merging
function greet(name: string) {
  console.log("Hello, " + name);
}

namespace greet {
  export const defaultName = "Guest";
}

greet(greet.defaultName); // Hello, Guest
