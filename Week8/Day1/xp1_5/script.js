const eventButton = document.getElementById('Event-Button');
const article = document.querySelector('article');

eventButton.addEventListener('click', function() {
    article.style.backgroundColor = 'green';
});

eventButton.addEventListener('mouseover', function() {
    article.style.color = 'red';
});

eventButton.addEventListener('mouseout', function() {
    article.style.transform = 'none';
});

eventButton.addEventListener('dblclick', function() {
    article.style.color = 'blue';
});

eventButton.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    article.style.fontSize = '32px'
})