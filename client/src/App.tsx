import React from 'react';
import Launches from './components/Launches';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="SpaceX Logo" style={{width: 300, display: 'block', margin: 'auto'}}/>
      <div>
        <Launches />
      </div>
    </div>
  );
}

export default App;
