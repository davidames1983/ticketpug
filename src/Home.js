import React from 'react';
import logo from './logo.png';
import './Home.css';
import Search from './stories/Search/Search';
import EVENTS from './data.js';

function Home() {
  return (
    <div className="Home">
      <div className="Home-message">
        Find great pug-related events
      </div>
      <header className="Home-header">
        <div className="Home-logoWrapper">
          <img src={logo} className="Home-logo" alt="logo" />
          <div className="Home-logoTitleWrapper">
            <div className="Home-logoTextBG" />
            <div className="Home-title">
              TicketPug
            </div>
          </div>
        </div>
        <div className="Home-nav">
          <Search placeholder="Search" />
        </div>
      </header>
    </div>
  );
}

export default Home;
