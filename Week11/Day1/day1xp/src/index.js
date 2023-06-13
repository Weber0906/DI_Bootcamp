import React from 'react';
import ReactDOM from 'react-dom';
import UserFavouriteColors from './UserFavColors';
import Exercise4 from './Exercise4'
// import './index.css';
// import App from './App';

// Exercise1
import reportWebVitals from './reportWebVitals';

// import ReactDOM from 'react-dom';

const element = React.createElement('h1', null, 'I do not use JSX');

ReactDOM.render(element, document.getElementById('root'));


// Exercise2
const myelement = <h1>I Love JSX!</h1>;

const sum = 5 + 5;

const jsxElement = (
  <div>
    <h2>Hello World!</h2>
    <p>React is {sum} times better with JSX</p>
    {myelement}
  </div>
);

ReactDOM.render(jsxElement, document.getElementById('root'));

// Exercise3
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey'],
};

const Exercise3 = () => {
  return (
    <div>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavouriteColors favAnimals={user.favAnimals}/>
    </div>
  );
};

ReactDOM.render(<Exercise3 />, document.getElementById('root'));


// Exercise4
const Ex4 =() => {
  return (
    <div>
      <Exercise4/>
    </div>
  );
};

ReactDOM.render(<Ex4 />, document.getElementById('root'));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
