
// const planets = [
//     { name: 'Mercury', color: 'gray' },
//     { name: 'Venus', color: 'orange' },
//     { name: 'Earth', color: 'blue' },
//     { name: 'Mars', color: 'red' },
//     { name: 'Jupiter', color: 'brown' },
//     { name: 'Saturn', color: 'yellow' },
//     { name: 'Uranus', color: 'lightblue' },
//     { name: 'Neptune', color: 'darkblue' },
//   ];

// const planetsList = document.querySelector('.listPlanets');

// planets.forEach(planet => {
//     const planetDiv = document.createElement('div');
//     planetDiv.className = 'planet';
//     planetDiv.style.backgroundColor = planet.color;

//     const planetName = document.createTextNode(planet.name);

//     planetDiv.appendChild(planetName);

//     planetsList.appendChild(planetDiv);

// })

// Bonus

const planets = [
    {
      name: "Mercury",
      color: "gray",
      moons: []
    },
    {
      name: "Venus",
      color: "beige",
      moons: []
    },
    {
      name: "Earth",
      color: "blue",
      moons: ["Moon"]
    },
    {
      name: "Mars",
      color: "red",
      moons: ["Phobos", "Deimos"]
    },
    {
      name: "Jupiter",
      color: "orange",
      moons: ["Io", "Europa", "Ganymede", "Callisto"]
    },
    {
      name: "Saturn",
      color: "yellow",
      moons: ["Titan", "Enceladus", "Rhea"]
    },
    {
      name: "Uranus",
      color: "lightblue",
      moons: ["Miranda", "Ariel", "Umbriel", "Titania", "Oberon"]
    },
    {
      name: "Neptune",
      color: "darkblue",
      moons: ["Triton", "Nereid"]
    },
  ];

  const planetsList = document.querySelector('.listPlanets');

  planets.forEach(planet => {
        const planetDiv = document.createElement('div');
        planetDiv.className = 'planet';
        planetDiv.style.backgroundColor = planet.color;
    
        const planetName = document.createTextNode(planet.name);
        planetDiv.appendChild(planetName);

        const moonList = document.createElement('ul');
        planet.moons.forEach(moon => {
            const moonItem = document.createElement('li');
            moonItem.className = 'moon';
            moonItem.textContent = moon;
            moonList.appendChild(moonItem);
        });

        planetDiv.appendChild(moonList);
        planetsList.appendChild(planetDiv);

    });