import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-message">
        Find great pug-related events (only in NY at the moment)
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
