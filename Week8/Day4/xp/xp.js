// Exercise 1 : Location

// Instructions

// Analyze the code below. What will be the output?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// this is an object person, that have properties - name, age and location.
// location is also an object with properties country, city asnd coordinates.
// coordinates is an array with 2 elements long and latt

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// here we destructuring an object person and extracting values from this object.
// additionaly here we destructuring coordinates object to extract it's values also.

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// here we printing the string statement using the values of objects person including the coordinates objects values also


// Exercise 2: Display Student Info

// Instructions

function displayStudentInfo(objUser){
    const { first, last } = objUser
    return `Your full name is ${first} ${last}`
    //destructuring
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));


// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'

// Exercise 3: User & Id

// Instructions

// Using this object 
const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array: 
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
const usersArr = Object.entries(users);
console.log(usersArr);
// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const modifiedUsersArr = usersArr.map(([user, id]) => [user, id * 2]);
console.log(modifiedUsersArr);

// Exercise 4 : Person Class

// Instructions

// Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}
// we have a class named Person with a constructor method that take a name as a parameter 
// and assign it to the name property of the instance that we create

const member = new Person('John');
// here we create a new object with a name John
console.log(typeof member);
// we're printing to the console type of created instance which is an object
// so output to the console will be 'object'

// Exercise 5 : Dog Class

// Instructions

// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
// Analyze the options below. Which constructor will successfully extend the Dog class?
  // 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};


  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

// this constructor successfully extends the superclass Dog with a size parameter as it 


  // 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};


  // 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};


// Exercise 6 : Challenges

// Evaluate these (ie True or False)

// [2] === [2] 
// it will be False as we check here equality of references of this objects
// (arrays are also objects) and these are 2 distinct objects 

// {} === {}
// same answer and explanation as in the previous - False


// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)
// so here we created object1 with initial parameter number and it's value 5. 
// Also we pointed object 2 to reference object 1, and object 3 reference to obkect 2 - so they all have the same value.
// object 4 is a distinct object with a value 5
// Then we're changing value of object 1 to 4 which takes effect to the object 2 and 3.
// so when we're printing values to the console it will be 
// 4 
// 4
// 5  

// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …
class Animal {
    constructor (name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    } 
};

class Mammal extends Animal {
    sound(sound) {
        return `${sound} I.m a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

const farmerCow = new Mammal ('Lily', 'cow', 'brown and white');
let soundCow = farmerCow.sound('Moooo');

const farmerDog = new Mammal ('Barky', 'dog', 'black and white');
let soundDog = farmerDog.sound('Wafff');

console.log(soundCow);
console.log(soundDog);

// Create a class Mamal that extends from the Animal class. 
// Inside the class, add a method called sound(). 
// This method takes a parameter: the sound the animal makes, 
// and returns the details of the animal (name, type and color) as well as the sound it makes. 

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

