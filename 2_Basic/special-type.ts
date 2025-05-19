let a: string | null;

let b: string | undefined;

/* 
TYPE CASTING AND Unknow
*/

let someValue: unknown = "Hello World";
let strLength: number = (someValue as string).length;

function process(val: unknown) {}

/*
 * Optional Value ?
 *
 */
function generateError(msg?: string) {
  throw new Error(msg);
}

/* 
Nullish Coalescing  ??
*/

let input = null;
const didProvideInput = input ?? false;

let input2 = ""; // empty string will store as value in input 2
const didProvideInput2 = input ?? false;
// didProvideInput2 - undefined
