// Exercise 1 : Find The Sum

// Instructions

// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const sum = (num1, num2) => num1 + num2;

// Exercise 2 : Kg And Grams

// Instructions

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
function kgToGrammsDeclare(kg){
    return kg * 1000;
};
console.log(kgToGrammsDeclare(2));

// Then, use function expression and invoke it.
const kgToGrammsExpress = function(kg) {
    return kg * 1000;
};

console.log(kgToGrammsExpress(2))
// Write in a one line comment, the difference between function declaration and function expression.
// function declaration defined with a 'function' and can be called before it declared,
// while function expression defined by assigning to a variable or function and only can be called after you assigned it
// Finally, use a one line arrow function and invoke it.
const kgToGrammsArrow = kg => kg * 1000;

console.log(kgToGrammsArrow(2)); 


