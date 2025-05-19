// Simple String of array
let hobbies: string[] = ["Sport", "Cooking"];

// Advance array type
let users: (string | number)[];

// Genric Type
let genricTypeUser: Array<string | number>;

genricTypeUser = [1, "Ajay"];

/* 
Tuple Type

In TypeScript, a tuple is a special type of array that allows you to define an array with a fixed number of elements where each element can have a different type.
Key Features of Tuples:
    - Fixed length: The number of elements is set.
    - Typed positions: Each position in the tuple has a specific type.
    - Order matters: The order of elements is important.

*/
let possibleResult: [number, number];
possibleResult = [1, -1];

let example: [string, number];
example = ["Age", 30]; // ✅ Correct
// example = [30, "Age"]; ❌ Error: Type 'number' is not assignable to type 'string' at position 0

/* OBJECTS*/
interface UserDataModel {
  name: string;
  age: number;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
}

let user: UserDataModel = {
  name: "Max",
  age: 38,
  hobbies: ["Coading"],
  role: {
    description: "test",
    id: 4,
  },
};

/* 
MUST NOT BE NULL TYPE
*/
let val: {} = "Some Text"; // THIS IS ALLOWED BUT NOT NULL
// let val: {} = null;  // ❌ Error: Type 'null' is not assignable to type '{}'.

/* 
RECORD TYPE

*/

const someObj = {
  name: "Ajay",
  lastName: "Mall",
  0: "Tst",
};

let data: Record<string, number | string>;

data = {
  name: "ajay",
  lastName: "Mall",
};
