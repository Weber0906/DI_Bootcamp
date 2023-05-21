
let allBoldItems;

function getBold_items() {
    allBoldItems = document.getElementsByTagName('strong');
}

getBold_items();

function highlight() {
    for (let i = 0; i<allBoldItems.length; i++) {
        allBoldItems[i].style.color = 'blue';
    }
}

function return_normal() {
    for(let i = 0; i<allBoldItems.length; i++) {
        allBoldItems[i].style.color = 'black'
    }
}

const paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', return_normal);




