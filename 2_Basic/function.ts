function add(a: number, b: number): number {
  return a + b;
}

/* 
void type
*/

function log(message: string): void {
  console.log(message);
}

/* 
never type
*/

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

/* 
Function as type
*/

/* function performJob(cb: Function) {
  cb();
} */

const logMessage = (msg: string) => {
  console.log("msg", msg);
};

function performJob(cb: (message: string) => void) {
  cb("Job done!");
}

performJob(logMessage);

type UserExType = {
  name: string;
  age: number;
  greet: () => string;
};

let userN: UserExType = {
  name: "Ajay",
  age: 30,
  greet() {
    console.log("Hello there!");
    return this.name;
  },
};

userN.greet();
