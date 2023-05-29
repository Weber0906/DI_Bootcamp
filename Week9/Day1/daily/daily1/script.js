document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    
    let data = {
        name: name,
        lastName: lastName
    };

    let jsonData = JSON.stringify(data);

    let resultDiv = document.getElementById('result');
    resultDiv.textContent = jsonData;
});