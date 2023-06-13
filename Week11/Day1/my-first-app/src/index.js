import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const str = 'blabla'
// const imgurl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.topgear.com%2Fcar-news%2Felectric%2Ftop-gears-top-20-electric-cars&psig=AOvVaw0Cq0QFsk1HOz2MAaxrxK7A&ust=1686554236191000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDewqLWuv8CFQAAAAAdAAAAABAE'
// const element = (<div>
//   <h1> My First Element </h1>
//   <h1> {str} </h1>
//   <img src={imgurl}/>
// </div>)


// root.render(element)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
