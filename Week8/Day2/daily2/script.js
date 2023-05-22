let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
};

// 1. 
let displayGroceries = () => {
    groceries.fruits.forEach((fruit) => {
        console.log(fruit);
    });
};

// 2.
let cloneGroceries = () => {
    let user = client;
    client = 'Betty';
    // user is not effected as it's another copy

    let shopping = groceries;
    shopping.totalPrice = '35$'
    // this is going to be reflected in groceries object as objects are passed by reference in JS

    shopping.other.payed = false;
    // this is going to be reflected in groceries object as nested objects are passed by reference in JS
    console.log(user);
    console.log(shopping);
};

displayGroceries();
cloneGroceries()

