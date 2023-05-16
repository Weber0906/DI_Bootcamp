// Daily Challenge: Not Bad

// Submit
// Last updated : March, 14th 2023


// What You Will Learn :

// Use Javascript string and array methods
// Use conditionals statement


// Instructions

// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”. 
// For example, “The movie is not that bad, I like it”.

// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result. 
// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
// Example:

//   Your string is : 'This dinner is not that bad ! You cook well', 
//   --> the result is : 'This dinner is good ! You cook well'

//   Your string is : 'This movie is not so bad !' 
//   --> the result is : 'This movie is good !'

//   Your string is : 'This dinner is bad !' 
//   --> the result is : 'This dinner is bad !'

const sentence = 'This movie is not bad! You should watch it';

const wordNot = sentence.indexOf('not');
const wordBad = sentence.indexOf('bad');

if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad) {
  const modifiedSentence = sentence.slice(0, wordNot) + 'good' + sentence.slice(wordBad + 3);
  console.log(modifiedSentence);
} else {
  console.log(sentence);
}


// Daily Challenge: Stars

// Submit
// Last updated : March, 15th 2023


// What You Will Learn :

// For loops and nested for loops


// Instructions

// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *


let pattern = '';

for (let i = 1; i <= 6; i++) {
  pattern += '* ';
  console.log(pattern);
}


for (let i = 1; i <= 6; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
      pattern += '* ';
    }
    console.log(pattern);
  }

//   Daily Challenge GOLD: Bubble Sort

// Not Completed
// Last updated : March, 15th 2023


// What You Will Learn :

// Use array methods and loops to solve a sorting algorithm
// Use nested for loops


// Instructions

// 

// Using the .toString() method convert the array to a string.
// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.
// Requirement: Don’t copy paste solutions from Google

const numbers = [5,0,9,1,7,4,2,6,3,8];


const numbersToString = numbers.toString();
console.log(numbersToString);


const numbersJoined = numbers.join('+');
console.log(numbersJoined);


for (let a = 0; a < numbers.length; a++) {
  for (let b = 0; b < numbers.length - 1; b++) {
    if (numbers[b] < numbers[b + 1]) {

      let temp = numbers[b];
      numbers[b] = numbers[b + 1];
      numbers[b + 1] = temp;
    }
  }
}

console.log(numbers);