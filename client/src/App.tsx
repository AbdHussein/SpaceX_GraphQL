import {Route} from 'react-router-dom'
import Launches from './components/Launches';
import Launch from './components/Launch';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="SpaceX Logo" style={{width: 300, display: 'block', margin: 'auto'}}/>
      <div>
        <Route exact path='/' component={Launches}/>
        <Route exact path='/launch/:flight_number' component={Launch}/>
      </div>
    </div>
  );
}

export default App;
