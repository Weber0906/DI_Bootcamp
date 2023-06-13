
import './App.css';
import User from './components/User.js'
import robots from './users.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          robots.map((item, index) => {
            return <User userinfo={item} key={index}/>
          })
        }
        
      </header>
    </div>
  );
}

export default App;
