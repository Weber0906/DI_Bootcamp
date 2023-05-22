// Exercise 1 : Scope

// Instructions

// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// #1.1 - run in the console:
// funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// Answer:
// The value of 'a' will be 3 because the condition a > 1 is true
// if we'll change a variably type to const - it will throw an error, as const can't be reassigned

//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }


// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }


// #2.1 - run in the console:
// funcThree() 
// funcTwo() 
// funcThree() 
// Answer
// The value of 'a' will be 0 in funcThree, and 5 in next funcTwo and funcThree functions because 'a' is a let variable that can be reassigned
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// If we use const variable instead of let 0 it will throw a mistake as we can't reassign const variable


//#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour()
// funcFive()

// Answer
// The value of a will be "hello" in funcFive because funcFour assigns the value "hello" to the global a variable (window.a).
//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:
// funcSix()

// Answer
// The value of a inside the funcSix function will be "test" because a new variable a is declared with the value "test" within the function scope, which shadows the outer variable a with the value 1.
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// Answer
// If the variable is declared with const instead of let, it will not allow the redeclaration of a inside funcSix, and it will result in an error.

//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// answer
// Inside the if block, a new block-scoped variable a is declared with the value 5. So, the alert display "in the if block 5".
// Outside the if block, the a variable still holds the value 2 because the variable declared inside the if block does not affect the outer scope. Therefore, the subsequent alert message will show 2 as a".
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// answer
// The code will produce the same output as before, because of the if block


// Exercise 2 : Ternary Operator

// Instructions

// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);

// Exercise 3 : Is It A String ?

// Instructions

// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output
// Example:

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

const isString = (value) => typeof value === 'string' ? true : false;

console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false

// Exercise 4 : Colors

// Instructions

// Using this array :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`)
})

if (colors.includes("Violet")) {
    console.log("Yeah")
} else {
    console.log("No...")
}

// Exercise 5 : Colors #2

// Instructions

// Using these arrays :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

colors.forEach((color, index) => {
    const ordinalIndex = (index + 1) % 10;
    const ordinalSuffix = ordinal[ordinalIndex] || ordinal[0];

    console.log(`${index + 1}${ordinalSuffix} choice is ${color}. `);
})

// Exercise 6 : Bank Details

// Instructions

// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

let bankAmount = 1000;
const VAT = 0.17;
const expences = ["+200", "-100", "+146", "+167", "-2900"]

const modifiedExpences = expences.map(expence => {
    const amount = parseFloat(expence);
    const modifiedAmount = amount * (1 + VAT);
    return modifiedAmount.toFixed(2);
});

const totalExpences = modifiedExpences.reduce((sum, expence) => {
    return sum + parseFloat(expence);
}, 0);

const finalBalance = bankAmount - totalExpences;

console.log(`Account balance ${finalBalance}`)