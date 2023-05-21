function showAlert() {
    alert("Hello world");
}

setTimeout(showAlert, 2000);

function addParagraph() {
    const container = document.getElementById('container');
    const paragraph = document.createElement('p');
    paragraph.textContent = "Hello World";
    container.appendChild(paragraph);
}

setTimeout(addParagraph, 2000);


const container = document.getElementById('container');
console.log(container)
const clearButton = document.getElementById('clear');
console.log(clearButton)
let intervalId;

function addParagraphInterval() {
  let paragraphInt = document.createElement('p');
  paragraphInt.textContent = 'Hello World';
  container.appendChild(paragraphInt);

  if (container.getElementsByTagName('p').length === 5) {
    console.log('function worked')
    clearInterval(intervalId);
  }
}

intervalId = setInterval(addParagraphInterval, 2000);

clearButton.addEventListener('click', function () {
    console.log('button clicked')
    clearInterval(intervalId);
});



