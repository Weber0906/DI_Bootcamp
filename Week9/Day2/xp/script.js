// Exercise 1 : Comparison

// Instructions

// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.
// Test:

// //In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

const checkNumber = value => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value < 10) {
                resolve('Number is less than 10 - Success!');
            } else {
                reject(new Error('Number is more than 10 - Error!'));
            }
        }, 1000)
    });
}

checkNumber(5)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
            console.log(error)
        });

checkNumber(9)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
            console.log(error)
        });


// Exercise 2 : Promises

// Instructions
        
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');

    }, 4000);
});

promise
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log('Something went wrong')
    })

// promise.resolve
// is a utility function that returns a new Promise object, that is already resolved
// with a given value
setTimeout(() => {
    const promise1 = Promise.resolve('success');

    promise1.then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log('Oops,something went wrong again');
    })

}, 5000)   

// Exercise 3 : Resolve & Reject

// Instructions

// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
const promise2 = Promise.resolve(3);
const promise3 = Promise.reject('Boo')

promise2
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log('Oops something went wrong');
    });

promise3
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });