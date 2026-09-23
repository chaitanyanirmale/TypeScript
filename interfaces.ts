// Interfaces are commonly used to describe the structure of:

// Objects
// API responses
// React props
// Data models

interface User_ {
  id: number;
  name: string;
  email: string;
}

const user_: User_ = {
  id: 1,
  name: "Test",
  email: "test@gmail.com"
};

// Use interface when describing object structures such as React props or API data, and use type when you need more advanced type combinations.

// Extending interfaces

interface Employee_ extends User_ {
  salary: number;
  department: string;
}

const employee: Employee_ = {
  id: 1,
  name: "Rahul",
  email: "rahul@gmail.com",
  salary: 50000,
  department: "IT"
};
// This is called interface inheritance/extension.

// ----------------------------------------------- //
// Union Types
// Suppose an ID can be either a number or a string.
let id: number | string;

function printId(id: number | string) {
  console.log(id);
}

printId(101);
printId("EMP101");


// if you want to perform different operations depending on the type?

// Use typeof:

function printEmpId(id: number | string) {
  if (typeof id === "number") {
    console.log(id * 1);
  } else {
    console.log(id.toUpperCase());
  }
}

printEmpId('emp01')
printEmpId(3)

// ---------------------------------------------- //
// Literal Types ⭐

// A literal type restricts a variable to specific values. Only the specified values are allowed.

let status_: "success" | "error";

// -------------------------------------------- //

// Practice
interface Students  {
  id: number,
  name: string,
  age: number,
  course?: string
}

const students : Students[] = [
  {
    id: 1,
    name: 'Ajinkya',
    age: 18,
    course: 'IT'
  },
  {
    id: 2,
    name: 'Rohit',
    age: 18,
    course: 'Computer'
  },
] 

console.log(students)


interface Employees extends Students {
  salary: number,
  department: string
}

const employees_: Employees = {
  id: 101,
  name: 'Virat',
  age: 20,
  salary: 4000,
  department: 'Marketing'
}

console.log(employees)

function displayValue(value: number | string) {
  if(typeof value === 'number'){
    console.log('It is a number value')
  } else {
    console.log('It is a string value')
  }
}

displayValue(100)
displayValue('100')


interface Products {
  id: number;
  name: string;
  price: number;
  category: string;
  status: "Available" | "Out of stock"
}

const products1 : Products[] = [
  {
    id: 101,
    name: 'Monitor',
    price: 20000,
    category: 'Hardware',
    status: "Available"
  },
  {
    id: 102,
    name: 'CPU',
    price: 30000,
    category: 'Hardware',
    status: "Available"
  },
  {
    id: 103,
    name: 'Keyboard',
    price: 2000,
    category: 'Hardware',
    status: "Out of stock"
  },
]

function getAvailableProducts(products1: Products[]): Products[] {
  return products1.filter((product) => {
    return product.status === "Available";
  });
}

console.log(getAvailableProducts(products1))