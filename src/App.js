import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-message">
        Worldest best place to find tickets to pug-related events
      </div>
      <header className="App-header">
        <div className="App-logoWrapper">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-title">
            TicketPug
          </div>
        </div>
        <div className="App-nav">

        </div>
      </header>
    </div>
  );
}

export default App;
