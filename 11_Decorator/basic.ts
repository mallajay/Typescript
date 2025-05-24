/* 
3. Understanding Decorator Code Executation Order
*/

function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  console.log("logger Decorator");
  console.log("Target:", target);
  console.log("Context:", ctx);

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log("class constructor");
      console.log(this);
    }
  };
}

@logger
class Person {
  name = "Ajay";

  greet() {
    console.log("Hi, I am ", this.name);
  }
}

const ajay = new Person();
const jhon = new Person();

/* 



*/
