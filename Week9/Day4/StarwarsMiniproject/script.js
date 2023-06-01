async function fetchCharacterData() {
    try {
        const randomId = Math.floor(Math.random() * 82) + 1;
        const apiUrl = `https://www.swapi.tech/api/people/${randomId}`
        const response = await fetch(apiUrl);
        const data = await response.json();
        const characterProperties = data.result.properties;
        
        const homeWorldUrl = characterProperties.homeworld;
        const homeWorldResponse = await fetch(homeWorldUrl);
        const homeWorldData = await homeWorldResponse.json();
        const homeWorldName = homeWorldData.result.properties.name;

        characterProperties.homeworld = homeWorldName;
        return characterProperties;
    } catch (error) {
        throw new Error('Error fetching character data');
    }
  }

function getRandomCharacter(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }

function displayCharacter(character) {
    const nameElement = document.getElementById('name');
    const heightElement = document.getElementById('height');
    const genderElement = document.getElementById('gender');
    const birthYearElement = document.getElementById('birth-year');
    const homeWorld = document.getElementById('home-world')

    nameElement.textContent = character.name;
    heightElement.textContent = character.height;
    genderElement.textContent = character.gender;
    birthYearElement.textContent = character.birth_year;
    homeWorld.textContent = character.homeworld;
  }
  
function showLoading() {
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'block';
  }
  
function hideLoading() {
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'none';
  }
  
function showError(message, characterInfoElement) {
    let errorElement = document.getElementById('error');

    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.id = 'error';
        document.getElementById('character-info').appendChild(errorElement)
    }
    errorElement.textContent = message;
  }
  
function showCharacterInfo() {
    const characterInfoElement = document.getElementById('character-info');
    characterInfoElement.style.display = 'block';
  }
  
async function getCharacter() {
    try {
      
      showLoading();
  
      const character = await fetchCharacterData();
      
      console.log(character);
   
  
      displayCharacter(character);
      hideLoading();
   
    
      
      showCharacterInfo();
    } catch (error) {
  
      showError('Error loading character. Please try again later.');
    }
  }

const getCharacterButton = document.getElementById('get-character');
getCharacterButton.addEventListener('click', getCharacter);