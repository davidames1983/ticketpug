import React, { useState } from 'react';
import logo from './logo.png';
import olypics from './pug-olympics.png';
import race from './pug-race.png';
import song from './pug-song.png';
import cartIcon from './cart-icon.svg';
import './Home.css';
import Search from './stories/Search/Search';
import EVENTS from './data.js';

function Home() {
  const [cartEmpty, setCartEmpty] = useState(true);

  return (
    <div className="Home">
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
      </header>
      <div style={{ padding: "50px", display: "flex", flexDirection: "column", margin: "auto", maxWidth: "1000px", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#5500be", textAlign: "left", marginLeft: "20px", fontSize: "22px" }}>Pug Events</div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ margin: "20px" }}>
              <a href="/event/1"><img className="Home-eventImg" src={olypics} /></a>
            </div>
            <div style={{ margin: "20px" }}>
              <a href="/event/2"><img className="Home-eventImg" src={race} /></a>
            </div>
            <div style={{ margin: "20px" }}>
              <a href="/event/3"><img className="Home-eventImg" src={song} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
