// Create a form like the form provided above. The form should contain three inputs:
// name,
// lastname,
// submit
// Send the data to another HTML file and display the sent data in the body.
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value; 
        const lastName = document.getElementById('lastname').value; 

        localStorage.setItem('name', name);
        localStorage.setItem('lastname', lastName);

        window.location.href = 'new_window.html';
    })
});
