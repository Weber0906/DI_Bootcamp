import React from 'react';
import {connect} from 'react-redux';
import { changePropOne } from './redux/actions';
import {mapDispatchToProps, mapStateToProps} from './Components/Counter'
import Counter from './Components/Counter';
import './App.css';

class App extends React.Component {
  constructor() {
      super();
      this.state = {
        property_one:'text one'
      }
  }
  render(){
    return( 
    <div className='App'>
        <header className='App-header'> 
          <Counter />
          {/* <h2>Simple Redux Example</h2>
          <div>
            Change Prop One:<input onChange={this.propschangeOne}/>
          </div>
          <div>{this.props.a}</div>
          <Test title="test" /> */}
        </header>
    </div>
  )}
}

// const mapStateToProps = (state) => {
//   return {
//     a:state.property_one
//   }
// }

// export const mapDispatchToProps = (dispatch) => {
//   return {
//     changeOne: (e) => dispatch(changePropOne(e.target.value))

//   }
// }
export default connect(mapStateToProps, mapDispatchToProps)(App);
















// import {useState} from 'react'
// import './App.css';
// import Test from './Components/test';

// function App() {
//   const [title, setTitle] = useState('My title')
//   return (
//     <div className="App">
//       <header className="App-header">
//        <Test title={title} setTitle={setTitle} />
//       </header>
//     </div>
//   );
// }

// export default App;
