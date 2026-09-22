let skills: string[] = [
  "React",
  "Node.js",
  "Python"
];

// Arrays of Objects
// define the structure:
type Employee = {
  id: number;
  name: string;
  salary: number;
};

const employees: Employee[] = [
  {
    id: 1,
    name: "Rahul",
    salary: 30000
  },
  {
    id: 2,
    name: "Amit",
    salary: 40000
  }
];


// Optional properties -> Sometimes a property isn't always available.
type User = {
  name: string;
  age: number;
  phone?: string;
};
// The ? means phone is optional.


// Readonly properties -> You can prevent a property from being changed:
type User2 = {
  readonly id: number;
  name: string;
};
const user: User2 = {
  id: 101,
  name: "Chaitanya"
};
user.name = "Rahul";  // Valid
// user.id = 102;  (Invalid)


// Function returning nothing — void
function printMessage(message: string): void {
  console.log(message);
}
// void means the function isn't returning a useful value.

// Arrow Functions
const square = (num: number): number => {
  return num * num;
};

const doubleNumbers = (numbers: number[]): number[] => {
  return numbers.map(num => num * 2);
};

// Function type -> You can even describe a function itself.
type AddFunction = (a: number, b: number) => number;

const addition: AddFunction = (a, b) => {
  return a + b;
};


// Callback functions
const numbers_array: number[] = [1, 2, 3, 4];
const result = numbers_array.map((num: number) => {
  return num * 2;
});

// ---------------------------------------------- //

// Practice
type Product = {
  id: number,
  name: string,
  price: number,
  inStock: boolean,
  category?: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Mouse",
    price: 200,
    inStock: true,
    category: 'Hardware'
  },
  {
    id: 2,
    name: "Keyboard",
    price: 500,
    inStock: true,
    category: 'Hardware'
  },
  {
    id: 3,
    name: "Monitor",
    price: 2000,
    inStock: true,
    category: 'Hardware'
  },
  {
    id: 4,
    name: "CPU",
    price: 20000,
    inStock: true
  },
] 

const calculateTotal = (products: Product[]): number => {
  return products.reduce((total, item) => {
    return total + item.price
  }, 0)
}

console.log(calculateTotal(products))

// map() is normally used when you want to create a new array.
// For calculating a total, reduce() is more appropriate
