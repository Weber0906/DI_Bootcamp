// function playTheGame() {
//     const play = confirm("Would you like to play game?");

//     if (!play) {
//         alert("Thanks, Bye Bye");
//     } else {
//         let userInput = prompt("Enter a number between 0 and 10:");

//         if (userInput === null || isNaN(userInput)) {
//             alert("Sorry, Not a number.");
//         } else {
//             let number = parseInt(userInput);

//             if(number < 0 || number > 10) {
//                 alert("Sorry it out of range of 0 to 10");
//             } else {
//                 let computerNumber = Math.floor(Math.random() * 11);
//                 compareNumbers(number, computerNumber)
//             }
//         }
//     }
// }


// BONUS
function playTheGame() {
    const play = confirm("Would you like to play?");

    if (!play) {
        alert("Thanks, Bye Bye");
    } else {
        let number
        let userInput = prompt("Enter a number between 0 and 10:");

        while (userInput !== null) {
            if (isNaN(userInput)) {
                alert("Sorry, not a number.");
          } else {
            number = parseInt(userInput);

            if (number < 0 || number > 10) {
                alert("Sorry it's out of range between 0 to 10");
          } else {
            let computerNumber = Math.floor(Math.random() * 11);
            compareNumbers(number, computerNumber);
            break;
          }

        }

        userInput = prompt("Enter a valid number from 0 to 10:");

        }

        if (userInput === null) {
            alert("Thanks, Bye Bye");
        
        }
    }
}


function compareNumbers(userNumber, computerNumber) {
    let tries = 1;
    while (tries <= 3) {
        if(userNumber === computerNumber) {
            alert("You win");
            return;
        } else if (tries === 3) {
            alert("No luck wuth 3 tries. See you soon");
            return;
        } else if (userNumber > computerNumber) {
            let userInput = prompt("Your number is bigger, try again");
            if (userInput === null) {
                alert("Thanks, Bye Bye");
                return;
            } else {
                userNumber = parseInt(userInput);
            }
        } else if (userNumber < computerNumber) {
            let userInput = prompt("Your number is smaller, try again");
            if (userInput === null) {
                alert("Thanks, Bye Bye");
                return;
            } else {
                userNumber = parseInt(userInput);
            }
        } 

        tries++
    }
}


