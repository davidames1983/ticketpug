import React, { useState } from 'react';
import logo from './logo.png';
import olympics from './pug-olympics.png';
import race from './pug-race.png';
import song from './pug-song.png';
import cartIcon from './cart-icon.svg';
import './Home.css';
import Search from './stories/Search/Search';
import EVENTS from './data.js';

function Home() {
  const [cartEmpty, setCartEmpty] = useState(true);
  const [raceEvent, songEvent, olympicsEvent] = EVENTS;
  
  let raceDate = new Date(raceEvent.date);
  const raceEventDate = raceDate.toDateString();

  let songDate = new Date(songEvent.date);
  const songEventDate = songDate.toDateString();

  let olympicsDate = new Date(olympicsEvent.date);
  const olympicsEventDate = olympicsDate.toDateString();

  return (
    <div className="Home">
      <div style={{ marginTop: "20px" }}>Fun pug-related events.</div>
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
          <div style={{ color: "#db2c7b", fontWeight: 600, textAlign: "left", marginLeft: "20px", fontSize: "22px" }}>Pug Events</div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ margin: "20px", display: "flex", flexDirection: "column" }}>
              <a style={{ display: "block", position: "relative" }} href="/event/1">
                <img className="Home-eventImg" src={race} />
                <div style={{ 
                  height: "30px", 
                  width: "30px", 
                  padding: "7px",
                  borderRadius: "10px", 
                  fontWeight: 600,
                  backgroundColor: "#3c1644",
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff"
                }}>
                  #1
                </div>
              </a>
              <a className="Home-detailsLink" href="/event/1">
                <div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <div style={{ fontSize: "17px", fontWeight: 700, marginBottom: "7px", marginTop: "12px", color: "#db2c7b" }}>{raceEventDate} @ {raceEvent.time}</div>
                    <div style={{ fontSize: "15px", color: "#070507", fontWeight: 600, marginBottom: "5px" }}>{raceEvent.name}</div>
                    <div style={{ fontSize: "15px", color: "#070507", marginBottom: "5px" }}>{raceEvent.venue}</div>
                    <div style={{ fontSize: "15px", color: "#070507"}}>{raceEvent.city}, {raceEvent.state}</div>
                  </div>
                </div>
              </a>
            </div>
            <div style={{ margin: "20px", display: "flex", flexDirection: "column" }}>
              <a style={{ display: "block", position: "relative" }} href="/event/2">
                <img className="Home-eventImg" src={song} />
                <div style={{ 
                  height: "30px", 
                  width: "30px", 
                  padding: "7px",
                  borderRadius: "10px", 
                  fontWeight: 600,
                  backgroundColor: "#3c1644",
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff"
                }}>
                  #2
                </div>
              </a>
              <a className="Home-detailsLink" href="/event/2">
                <div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <div style={{ fontSize: "17px", fontWeight: 700, marginBottom: "7px", marginTop: "12px", color: "#db2c7b" }}>{songEventDate} @ {songEvent.time}</div>
                    <div style={{ fontSize: "15px", color: "#070507", fontWeight: 600, marginBottom: "5px" }}>{songEvent.name}</div>
                    <div style={{ fontSize: "15px", color: "#070507", marginBottom: "5px" }}>{songEvent.venue}</div>
                    <div style={{ fontSize: "15px", color: "#070507"}}>{songEvent.city}, {songEvent.state}</div>
                  </div>
                </div>
              </a>
            </div>
            <div style={{ margin: "20px", display: "flex", flexDirection: "column" }}>
              <a style={{ display: "block", position: "relative" }} href="/event/3">
                <img className="Home-eventImg" src={olympics} />
                <div style={{ 
                  height: "30px", 
                  width: "30px", 
                  padding: "7px",
                  borderRadius: "10px", 
                  fontWeight: 600,
                  backgroundColor: "#3c1644",
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff"
                }}>
                  #3
                </div>
              </a>
              <a className="Home-detailsLink" href="/event/3">
                <div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <div style={{ fontSize: "17px", fontWeight: 700, marginBottom: "7px", marginTop: "12px", color: "#db2c7b" }}>{olympicsEventDate} @ {olympicsEvent.time}</div>
                    <div style={{ fontSize: "15px", color: "#070507", fontWeight: 600, marginBottom: "5px" }}>{olympicsEvent.name}</div>
                    <div style={{ fontSize: "15px", color: "#070507", marginBottom: "5px" }}>{olympicsEvent.venue}</div>
                    <div style={{ fontSize: "15px", color: "#070507"}}>{olympicsEvent.city}, {olympicsEvent.state}</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
