import React from 'react'
import Cart from './Components/Cart';
import Products from './Components/Products';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Products />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
