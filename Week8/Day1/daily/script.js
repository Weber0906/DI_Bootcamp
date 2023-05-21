const form = document.getElementById('libform');
const storyElement = document.getElementById('story');
const shuffleButton = document.getElementById('shuffle-button');


function handleFormSubmit(event) {
    event.preventDefault();

    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;
    const verb = document.getElementById('verb').value;
    const place = document.getElementById('place').value;

    if(!noun || !adjective || !person || !verb || !place) {
        alert('please fill in all the fields');
        return;
    }

    const story = `Once upon a time, there was a ${adjective} ${noun} named ${person}. ${person} loved to ${verb} in ${place}.`;

    storyElement.textContent = story;
}

function handleShuffleButtonClick() {
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;
    const verb = document.getElementById('verb').value;
    const place = document.getElementById('place').value;

    if (!noun || !adjective || !person || !verb || !place) {
        alert('Please fill in all the fields');
        return;
    }

    const stories = [
        `Once upon a time, there was a ${adjective} ${noun} named ${person}. ${person} loved to ${verb} in ${place}.`,
        `In a ${place}, there lived a ${noun}. ${noun} was known for its ${adjective} nature. One day, ${person} visited ${place} and started ${verb}.`,
        `${person} found a ${adjective} ${noun} in ${place}. They couldn't resist and decided to ${verb} with it.`,
    ];

    const randomStory = stories[Math.floor(Math.random() * stories.length)];

    storyElement.textContent = randomStory;
}

form.addEventListener('submit', handleFormSubmit);

shuffleButton.addEventListener('click', handleShuffleButtonClick)