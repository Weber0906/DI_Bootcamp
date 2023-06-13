import logo from './logo.svg';
import './App.css';
import React from 'react';
import Car from "./Components/Car"
import Events from "./Components/Events"
import Phone from "./Components/Phone"
import Color from "./Components/Color"
import Language from "./Components/Language"
import "./App.css"


// Exercise 1 XP 
// const carInfo = {name:"Ford", model:"Mustang"}

// function App() {
//   return <div>
//     <Car model={carInfo.model}/>
//     </div>;
// }

// function App() {
//   return (
//     <div>
//       <Car name={carInfo.name} model={carInfo.model}/>
//     </div>
//   );
// }

// Exersise 2
// function App() {
//   return (
//     <div>
//       <Events />
//     </div>
//   )
// }

// Exercise 3
// function App() {
//   return (
//     <div>
//       <Phone />
//     </div>
//   )
// }

// Exercise 4
// function App() {
//   return (
//     <div>
//       <Color />
//     </div>
//   )
// }


// Daily Challenge
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "Javascript", votes: 0 },
        { name: "Java", votes: 0 }
      ]
    };
  }

  increaseVote = (index) => {
    this.setState((prevState) => {
      const updatedLanguages = [...prevState.languages];
      updatedLanguages[index] = {
        ...updatedLanguages[index],
        votes: updatedLanguages[index].votes + 1,
      };
      return { languages: updatedLanguages };
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.languages.map((language, index) => (
          <Language
            key={index}
            name={language.name}
            votes={language.votes}
            increaseVote={this.increaseVote} // Update this line
            index={index} // Add index as a prop
          />
        ))}
      </div>
    );
  }
}

export default App;
