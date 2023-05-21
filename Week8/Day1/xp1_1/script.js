const h1 = document.querySelector('article').firstElementChild;
console.log(h1.textContent);

h1.addEventListener('mouseover', function() {
    const randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = randomSize +'px';
})

const lastParagraph = document.querySelector('article').lastElementChild;
lastParagraph.remove();

const h2 = document.querySelector('h2');
h2.addEventListener('click', function() {
    h2.style.backgroundColor = 'red';
})

const h3 = document.querySelector('h3');
h3.addEventListener('click', function() {
    h3.style.display = 'none'
})

const boldButton = document.querySelector('#boldButton');

const allParagraphs = document.querySelectorAll('article p');

boldButton.addEventListener('click', function () {
    allParagraphs.forEach(function(paragraph) {
        paragraph.style.fontWeight = 'bold';
    });
});

const secondParagraph = document.querySelector('article p:nth-of-type(2)');
secondParagraph.addEventListener('mouseover', function() {
    secondParagraph.classList.add('fade-out');
}); 


