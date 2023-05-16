// Part I - Review About Arrays
const people = ["Greg", "Mary", "Devon", "James"];
// Write code to remove “Greg” from the people array.
people.splice(people.indexOf('Greg'), 1);
// Write code to replace “James” to “Jason”.
people[people.indexOf('James')] = 'Jason';
// Write code to add your name to the end of the people array.
people.push('Nikolas')
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf('Mary'));
// Write code to make a copy of the people array using the slice method.
const arrayCopy = people.slice();
// The copy should NOT include “Mary” or your name.
const copyArray = people.slice(1,3);
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf('Foo'));
// this returns -1 because "Foo" is not present in the array.

// Create a variable called last which value is the last element of the array.
const last = people[people.length - 1];
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

// Part II - Loops

// Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
  }
// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” . 
// Hint: take a look at the break statement in the lesson.

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Jason") {
      break;
    }
  }

//   Exercise 2 : Your Favorite Colors

// Instructions

// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

  const colors = ["blue", "red", "green", "yellow", "purple"];
  
  for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
  }
  
  const suffixes = ["st", "nd", "rd", "th", "th"]; 

  for (let i = 0; i < colors.length; i++) {
    let suffix = suffixes[i];
    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
  }

//   Exercise 3 : Repeat The Question

// Instructions

// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

let number = prompt("Enter a number:");
let dataType = typeof number;

while (dataType !== "number") {
  number = prompt("Please enter a valid number:");
  dataType = typeof number;
}

console.log("Valid number entered:", number);



let number1 = prompt('Enter a number');

while (typeof +number1 !== 'number' || +number1 < 10) {
    number1 = prompt('Please enter a valid number');
}

console.log('valid number entered', number1);

// or like this

let number2;

do {
    number2 = parseInt(prompt('Enter a number'));
} while (number2 < 10);

console.log('Entered number is greater or equal 10');

// Exercise 4 : Building Management

// Instructions:

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.
console.log('Number of floors in building:', building.numberOfFloors);
// Console.log how many apartments are on the floors 1 and 3.
console.log('1st floor apartments quantity', building.numberOfAptByFloor.firstFloor);
console.log('3rd floor apartments quantity', building.numberOfAptByFloor.thirdFloor);
// Console.log the name of the second tenant and the number of rooms he has in his apartment. 
const secondTenant = building.nameOfTenants[1];
const secondTenantRooms = building.numberOfRoomsAndRent[secondTenant][0];
console.log('Name of the 2nd tenant is:', secondTenant);
console.log("Number of rooms in 2nd tenant's apartment:", secondTenantRooms);
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
const sarahrent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahrent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log('Updated rent for Dan:', building.numberOfRoomsAndRent.dan[1]);


// Exercise 5 : Family

// Instructions

// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

const family = {
    father: "Nikolas",
    mother: "Katherine",
    son: "Viktor",
  };
  
  
  console.log("Keys of the family object:");
  for (let i in family) {
    console.log(i);
  }
  

  console.log("Values of the family object:");
  for (let a in family) {
    console.log(family[a]);
  }


//   Exercise 6 : Rudolf

// Instructions

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let sentence = '';

// Using a for loop, construct the sentence
for (let a in details) {
  sentence += details[a] + ' ';
}

console.log(sentence.trim());


// Exercise 7 : Secret Group

// Instructions

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

let secretSociety = '';

for (let name of names) {
  secretSociety += name[0];
}

secretSociety = secretSociety.split('').sort().join('');

console.log(secretSociety);