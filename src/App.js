import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logoWrapper">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-title">
            Ticket Pug
          </div>
        </div>
        <div className="App-nav">

        </div>
      </header>
    </div>
  );
}

export default App;
