// Instructions

// 1rst Daily Challenge

// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
// Test:

//in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

//in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        const allStrings = words.every((word) => typeof word === 'string');
        if (allStrings) {
            const uppercasedWords = words.map((word) => word.toUpperCase());
            resolve(uppercasedWords);
        } else {
            reject('Not all are strings')
        }
    });
}

function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (words.length > 4) {
            const sortedWords = words.sort();
            resolve(sortedWords);
        } else {
            reject('Lenght is not more than 4')
        }
    });
}

makeAllCaps([1,'pear', 'banana'])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

makeAllCaps(['apple', 'pear', 'banana'])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

makeAllCaps(['apple', 'pear', 'banana', 'kiwwi', 'melon'])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));


// Daily 2
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

//   Create three functions. The two first functions should return a promise..

//   The first function is named toJs():
//   this function converts the morse json string provided above to a morse javascript object.
//   if the morse javascript object is empty, throw an error (use reject)
//   else return the morse javascript object (use resolve)
  
//   The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
  
//   This function asks the user for a word or a sentence.
//   if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
//   else return an array with the morse translation of the user’s word.
//   if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
//   if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object
  
  
//   The third function called joinWords(morseTranslation), takes one argument: the morse translation array
  
//   this function joins the morse translation by using line break and display it on the page (ie. On the DOM)
  
//   Chain the three functions.


const toJs = (jsonString) => {
    return new Promise((resolve, reject)=> {
        let objMorse = JSON.parse(jsonString);
        if(Object.keys(objMorse).length === 0){
            reject(`this json obj is empty - ERROR in tojs function line 50`)
        }
        else {
            resolve(objMorse)
        }
    })
  }

const toMorse = (morseJs) => {
    return new Promise((resolve, reject) => {
        let userStr = prompt('enter a word');
        let arrStr = userStr.trim().toLowerCase().split('');
        let returnArr = [];

        for (let i = 0; i < arrStr.length; i++) {
            if ( arrStr[i] in morseJs) {
                returnArr.push(morseJs[arrStr[i]])
            }
            else {
                reject(`Letter ${arrStr[i]} doesnt exist`)
            }
        }
        resolve(returnArr)
    })
  }


const joinWords = (morseTranslation) => {
    let str = morseTranslation.join('<br>');
    document.getElementById('output').innerHTML = str;
  }

toJs(morse)
  .then((morseJs) => {
    return toMorse(morseJs);
  })
  .then((morseTranslation) => {
    joinWords(morseTranslation);
  })
  .catch((error) => {
    console.log(error);
  });
