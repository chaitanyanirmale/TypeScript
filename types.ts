// What is a type? -> A type tells TypeScript what kind of value a variable is expected to contain.

let myname: string = "YourName";
let age: number = 25;
let isDeveloper: boolean = true;
let numbers: number[] = [10, 20, 30];
let numbers_arr: Array<number> = [10, 20, 30];
let names: string[] = ["Amit", "Rahul", "Priya"];

let fruits: string[] = ['Apple', 'Banana', 'Mango']

// Type annotation -> When you explicitly tell TypeScript the type, that's called a type annotation.

// null and undefined
let username: string | null = null;
// This means: username can be -> string OR null
let value: string | undefined;

// TypeScript with functions
function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): string {
  return `Hello ${name}`;
}

function calculateArea(length: number, width: number): number{
  return length * width
}
