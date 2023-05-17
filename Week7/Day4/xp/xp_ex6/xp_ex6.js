
const navBar = document.getElementById('navBar');
navBar.setAttribute('id', 'socialNetworkNavigation');

const ul = navBar.firstElementChild;

const newListItem = document.createElement('li');
const logoutText = document.createTextNode('Logout');
newListItem.appendChild(logoutText);

ul.append(newListItem)


const firstLink = ul.firstElementChild;
const lastLink = ul.lastElementChild;

console.log('text of first link:', firstLink.textContent);
console.log('text of last link:', lastLink.textContent);
