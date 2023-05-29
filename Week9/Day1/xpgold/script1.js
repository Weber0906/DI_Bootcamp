document.addEventListener('DOMContentLoaded', function() {
    const name = localStorage.getItem('name');
    const lastName = localStorage.getItem('lastname');
    const message = `Name: ${name}<br>Lastname: ${lastName}`;

    document.getElementById('data').innerHTML = message;

    localStorage.removeItem('name');
    localStorage.removeItem('lastname');
})