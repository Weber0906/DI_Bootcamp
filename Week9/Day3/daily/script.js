const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const form = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const gifContainer = document.getElementById('gifContainer');
let gifCount = 0;
let deleteAllButton = null;

async function fetchrandomGif(query) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${query}`);
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        const data = await response.json();
        const gifUrl = data.data.images.fixed_height.url;
        return gifUrl;
    } catch (error) {
        console.error(error);
        return null;
    }
}

function appendGif(gifUrl) {
    const gifElement = document.createElement('div');
    const imgElement = document.createElement('img');
    imgElement.src = gifUrl;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        gifElement.remove();
        gifCount--;
        if (gifCount === 0) {
            deleteAllButton.style.display = 'none'
        }
    });
    gifElement.appendChild(imgElement);
    gifElement.appendChild(deleteButton);
    gifContainer.appendChild(gifElement);
    gifCount++;
    
    if (!deleteAllButton) {
        deleteAllButton = document.createElement('button');
        deleteAllButton.textContent = 'Delete All';
        deleteAllButton.addEventListener('click', () => {
            gifContainer.innerHTML = '';
            gifCount = 0;
            deleteAllButton.style.display = 'none';
        });
        document.body.appendChild(deleteAllButton);
    }
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = searchInput.value;
    const gifUrl = await fetchrandomGif(query);
    if (gifUrl) {
        appendGif(gifUrl);
    }
    searchInput.value = '';
});

