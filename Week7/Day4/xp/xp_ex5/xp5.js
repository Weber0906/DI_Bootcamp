const container = document.getElementById('container');
console.log(container);

const listItem = document.querySelectorAll('.list li');
listItem[1].textContent = 'Richard'

const listItem2 = document.querySelectorAll('.list:nth-of-type(2) li');
listItem2[1].remove();

const myName = 'Nikolas';
const firstRows = document.querySelectorAll('.list');

for (let i = 0; i < firstRows.length; i++) {
    const firstItems = firstRows[i].querySelector('li');
    firstItems.textContent = myName
}

const ulElements = document.querySelectorAll("ul");
ulElements.forEach((ul) => {
  ul.classList.add("student_list");
});

ulElements[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

listItem[0].style.display = 'none';

const border = document.querySelectorAll(".list li");
for (let i = 0; i < border.length; i++) {
  if (border[i].textContent === "Richard") {
    border[i].style.border = "1px solid black";
    break;
  }
}

document.body.style.fontSize = '18px'