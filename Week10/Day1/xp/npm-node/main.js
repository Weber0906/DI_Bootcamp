// Exercise 1 : Hello Node.js

// Create a new folder called - npm-node
// Create a JS file called - main.js
// Add the following code to the file main.js :

const a = 5;
const b = 10;

// Write some more code in the main.js file 
// so when you run it in the command prompt it logs Hello you are 15
console.log(`Hello, you are ${a+b}`)

// Exercise 2 : Hello Node.js #2

// Create a package.json file - use npm init
// Run the main.js file using npm start. 
// Tip: you need to change the package.json file in order to achieve this.
// You should output something in the command prompt, for example: Hi! How are you ?

console.log('Hi! How are you?');

// Exercise 3 : Nodemon

// Create a package.json file - use npm init
// Install nodemon
// Write the following code, in a main.js file:

const a1 = 5;
const b1 = 10;
let x;
const c = 6;
x = a1 + b1;


// Add some more code in the main.js, and run it using nodemon in order to log the sum of a + b.
// Tip: you need to change the package.json file in order to achieve this.
console.log('Sum of a+b:',x)
// Update the main.js file to console.log the sum of x + c
const sum = x + c;
console.log('Sum of x+c', sum)