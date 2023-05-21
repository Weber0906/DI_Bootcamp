// Retrieve the form and console.log it.
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    console.log(form)


// Retrieve the inputs by their id and console.log them.
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
console.log(firstNameInput);
console.log(lastNameInput);

// Retrieve the inputs by their name attribute and console.log them.
const firstNameByName = document.getElementsByName('f-name');
const lastNameByName = document.getElementsByName('l-name');
console.log(firstNameByName);
console.log(lastNameByName);

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();

    if (firstNameValue === '' || lastNameValue === '') {
        return;
    }

    const userList = document.querySelector('.usersAnswer');
    const firstNameItem = document.createElement('li')
    const lastNameItem = document.createElement('li')

    firstNameItem.textContent = firstNameValue;
    lastNameItem.textContent = lastNameValue;

    userList.appendChild(firstNameItem);
    userList.appendChild(lastNameItem);

    firstNameInput.value = '';
    lastNameInput.value = '';
    });
});