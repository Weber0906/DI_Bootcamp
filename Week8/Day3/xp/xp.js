// Exercise 1 : Analyzing

// Instructions

// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// 2 arrays fruits and vegetables are given. We create a new array result
// which incudes both given arrays with a spread operator (...) and two new elements bread and chicken so output will be
// ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
const country = "USA";
console.log([...country]);

// we have a variable country with a value of USA which is a string.
// Then we use spread operator on the variable within array literal so when the spread operator is used on a string, it converts it into an array 
// and makes each character as an array element. So the output will be
// ['U', 'S', 'A']

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);

// we declare a variable new array which initialize empty array with a spread operator
// as no values are assigned to the array the output will be
// [undefined, undefined]


// Exercise 2 : Employees

// Instructions

// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
const fullStackResidents = users.filter(user => user.role === `Full Stack Resident`);
console.log(fullStackResidents);

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
const fullStackResidentsLastName = users
    .filter(user => user.role === `Full Stack Resident`)
    .map(user => user.lastName);
console.log(fullStackResidentsLastName);


// Exercise 3 : Star Wars

// Instructions

// Using this array 
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.
const combineString = epic.reduce((acc, currentValue) => acc + ' ' + currentValue);
console.log(combineString);

// Exercise 4 : Employees #2

// Instructions

// Using this object:

const students = [
    {name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}
];

// Using the filter() method, create a new array, containing the students that passed the course.
const studentsPassed = students.filter(student => student.isPassed);
console.log(studentsPassed);

// Bonus : Chain the filter method with a forEach method, to congratulate the students 
// with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”,
//  “Good Job Marco you passed the course in Robotics” ect…)

studentsPassed.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
});



