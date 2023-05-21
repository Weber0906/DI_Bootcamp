function bottlesOfBeer(num) {
    let subtracted = 1;
    

    for (let i = num; i > 0; i -= subtracted) {
        let bottles;
        let nextBottles;
        let pronoun;
        
        if (i - subtracted < 0) {
            break;
          }
          
        if (subtracted === 1) {
          bottles = 'bottle';
          pronoun = 'it';
        } else {
          bottles = 'bottles';
          pronoun = 'them';
        }
    
        nextBottles = i - subtracted === 1 ? 'bottle' : 'bottles';

        console.log(`${i} ${bottles} of beer on the wall`);
        console.log(`${i} ${bottles} of beer`);

        if (i - subtracted === 0) {
            console.log(`Take ${subtracted} ${bottles} down, pass ${pronoun} around`);
            console.log(`No more bottles of beer on the wall`);
        } else {
            console.log(`take ${subtracted} ${bottles} down, pass ${pronoun} around`)
            console.log(`We have now ${i - subtracted} ${nextBottles} of beer on the wall`)
        }

        console.log('');    

        subtracted++;
    }
}

let startingBottles = prompt("Enter the number of boyttles you'd like to start");
bottlesOfBeer(parseInt(startingBottles))