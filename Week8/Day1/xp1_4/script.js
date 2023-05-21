document.getElementById('MyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const radius = parseFloat(document.getElementById('radius').value);

    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    document.getElementById('volume').value = volume.toFixed(2);

});