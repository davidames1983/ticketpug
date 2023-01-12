import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Venue from './stories/Venue/Venue';
import EVENTS from './data.js';
import { Slider, Switch } from 'antd';
import logo from './logo.png';
import olypics from './pug-olympics.png';
import race from './pug-race.png';
import song from './pug-song.png';
import './EventPage.css';

const IMAGES = [race, song, olypics];

function EventPage() {
    const { id } = useParams();
    const index = id - 1;
    const event = EVENTS[index];
    const image = IMAGES[index];

    let date = new Date(event.date);
    const eventDate = date.toDateString();

    const [disabled, setDisabled] = useState(false);

    console.log("event:", event);

    if (!id || !event) {
        return (
            <div>No event found with that ID.</div>
        );
    }

    function SliderTooltip(props) {
        console.log("props:", props);
        return (
            <div>
                Some Value
            </div>
        )
    }

    return (
        <div className="EventPage">
            <div className="EventPage-header">
                <a className="EventPage-logoLink" href="/">
                    <img src={logo} className="EventPage-logo" alt="logo" />
                </a>
                <div className="EventPage-headerDetails">
                    <img src={image} alt="logo" />
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
                        <div style={{ fontSize: "17px", fontWeight: 700, marginBottom: "7px", marginTop: "10px" }}>{event.name}</div>
                        <div style={{ fontSize: "12px" }}>{eventDate} at {event.time}</div>
                        <div style={{ fontSize: "12px" }}>{event.venue} in {event.city}, {event.state}</div>
                    </div>
                </div>
            </div>
            <div className="EventPage-container">
                <div className="EventPage-results">
                    <div className="EventPage-resultsItem">
                        <div className="EventPage-resultsItem--left">
                            <div>Section: 331</div>
                            <div>Row: 43</div>
                        </div>
                        <div className="EventPage-resultsItem--right">
                            <div className="EventPage-resultsItem--price">
                                <div style={{ fontWeight: 600, fontSize: "20px", marginRight: "10px" }}>$81</div>
                                <div style={{ fontStyle: "italic", fontSize: "12px", marginRight: "10px" }}>each</div>
                            </div>
                            <div style={{ marginTop: "20px" }}>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className="EventPage-resultsItem">
                        <div className="EventPage-resultsItem--left">
                            <div>Section: 302</div>
                            <div>Row: 14</div>
                        </div>
                        <div className="EventPage-resultsItem--right">
                            <div className="EventPage-resultsItem--price">
                                <div style={{ fontWeight: 600, fontSize: "20px", marginRight: "10px" }}>$81</div>
                                <div style={{ fontStyle: "italic", fontSize: "12px", marginRight: "10px" }}>each</div>
                            </div>
                            <div style={{ marginTop: "20px" }}>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className="EventPage-resultsItem">
                        <div className="EventPage-resultsItem--left">
                            <div>Section: 303</div>
                            <div>Row: 21</div>
                        </div>
                        <div className="EventPage-resultsItem--right">
                            <div className="EventPage-resultsItem--price">
                                <div style={{ fontWeight: 600, fontSize: "20px", marginRight: "10px" }}>$104</div>
                                <div style={{ fontStyle: "italic", fontSize: "12px", marginRight: "10px" }}>each</div>
                            </div>
                            <div style={{ marginTop: "20px" }}>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="EventPage-venueMap">
                    <Venue />
                </div>
                <div className="EventPage-filter">
                    <div>
                        <h2 style={{
                            textAlign: "center",
                            fontFamily: "Helvetica",
                            fontWeight: 300,
                            marginTop: "30px"
                        }}>Filters</h2>
                    </div>
                    <div className="EventPage-filterItem">
                        <div className="EventPage-filterItemLabel">Price</div>
                        <Slider
                            range
                            defaultValue={[80, 500]}
                            min={0}
                            max={5000}
                            tooltip={{
                                formatter: (val) => `$${val.toLocaleString()}`
                            }}
                        />
                    </div>
                    <div className="EventPage-filterItem">
                        <div className="EventPage-filterItemLabel">Number of Tickets</div>
                        <div className="EventPage-numOfTickets">
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventPage;
