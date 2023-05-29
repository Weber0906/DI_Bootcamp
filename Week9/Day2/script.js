// function getX() {
//     setTimeout(() => {
//         return 5;
// },1000);

// }


// function getY() {
//     return 6;
// }

// function getXY() {
//     let x = getX();
//     let y = getY();
//     console.log(x+y);
// }

// getXY()

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

