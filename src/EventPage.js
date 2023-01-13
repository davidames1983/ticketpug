import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Venue from './stories/Venue/Venue';
import EVENTS from './data.js';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Slider, Switch, Button, Drawer, Space } from 'antd';
import type { DrawerProps } from 'antd/es/drawer';
import logo from './logo.png';
import olypics from './pug-olympics.png';
import race from './pug-race.png';
import song from './pug-song.png';
import './EventPage.css';

const IMAGES = [race, song, olypics];

const filterByPriceRange = (priceRangeMin, priceRangeMax, tickets) => {
    return tickets.filter((ticket) => ticket.price >= priceRangeMin && ticket.price <= priceRangeMax)
}

const filterBySections = (sections, tickets) => {
    return tickets.filter((ticket) => sections.includes(ticket.section))
}

const filterByNumOfTickets= (numOfTickets, tickets) => {
    return tickets.filter((ticket) => tickets.filter((t) => t.section === ticket.section).length >= numOfTickets)
}

function EventPage() {
    const { id } = useParams();
    const index = id - 1;
    const event = EVENTS[index];
    const image = IMAGES[index];

    let date = new Date(event.date);
    const eventDate = date.toDateString();
    const ALL_SECTIONS = [... new Set(event.tickets.map(t => t.section))];

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500);
    const [selectedSections, setSelectedSections] = useState([]);
    const [sectionsNotAvailable, setSectionsNotAvailable] = useState([]);
    const [numOfTickets, setNumOfTickets] = useState('any');
    const [filteredTickets, setFilteredTickets] = useState([]);

    const [cartItems, setCartItems] = useState(0);
    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        setFilteredTickets(event.tickets);
    },[])

    const updateSectionsAvailable = (tickets) => {
        const sectionsUnavailable = ALL_SECTIONS.filter(s => ![... new Set(tickets.map(t => t.section))].includes(s));
        setSectionsNotAvailable(sectionsUnavailable);
    }

    const handlePriceRangeChange = (priceRange) => {
        const [min, max] = priceRange;
        setMinPrice(min);
        setMaxPrice(max);
    }

    const handleSectionSelectionChange = (section, removing) => {
        if (!removing) {
            setSelectedSections(oldArray => [...oldArray, section])
        } else {
            setSelectedSections(selectedSections.filter(selection => selection !== section));
        }
    }

    const handleNumOfTicketsChange = (num) => {
        setNumOfTickets(num);
    }

    if (!id || !event) {
        return (
            <div>No event found with that ID.</div>
        );
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
                <div style={{ position: 'absolute', right: '75px', top: '30px' }}>
                    <div style={{ position: 'relative' }}>
                        <ShoppingCartOutlined onClick={() => setCartOpen(true)} style={{ color: `${cartItems > 0 ? '#6021c3' : '#5d5d5d'}`, fontSize: "40px" }} />
                        <div style={{
                            position: 'absolute',
                            top: "-12px",
                            left: "8px",
                            fontWeight: 500,
                            color: "#8900bc",
                            width: "30px",
                            display: "flex",
                            justifyContent: "center",
                        }} >{cartItems}</div>
                    </div>
                </div>
                <Drawer title="Cart" placement="right" onClose={() => setCartOpen(false)} open={cartOpen}>
                    <h3>Tickets in Cart: {cartItems}</h3>
                    <div>
                        <button className="EventPage-cartBtn" onClick={() => setCartItems(0)}>Empty Cart</button>
                    </div>
                </Drawer>
            </div>
            <div className="EventPage-container">
                <div className="EventPage-results">
                    {filteredTickets.map((ticket, i) => (
                        <div key={`ticket-0${i}`} className="EventPage-resultsItem">
                            <div className="EventPage-resultsItem--left">
                                <div>Section: {ticket.section}</div>
                                <div>Row: {ticket.row}</div>
                            </div>
                            <div className="EventPage-resultsItem--right">
                                <div className="EventPage-resultsItem--price">
                                    <div style={{ fontWeight: 600, fontSize: "20px", marginRight: "10px" }}>${ticket.price}</div>
                                    <div style={{ fontStyle: "italic", fontSize: "12px", marginRight: "10px" }}>each</div>
                                </div>
                                <div style={{ marginTop: "20px" }}>
                                    <button onClick={() => setCartItems(cartItems + 1)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="EventPage-venueMap">
                    <Venue disabledSections={sectionsNotAvailable} changeHandler={handleSectionSelectionChange} />
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
                            onChange={handlePriceRangeChange}
                            max={5000}
                            tooltip={{
                                formatter: (val) => `$${val.toLocaleString()}`
                            }}
                        />
                        <div>
                            <div>Min Price: ${minPrice.toLocaleString()}</div>
                            <div>Max Price: ${maxPrice.toLocaleString()}</div>
                        </div>
                    </div>
                    <div className="EventPage-filterItem">
                        <div className="EventPage-filterItemLabel">Number of Tickets</div>
                        <div className="EventPage-numOfTickets">
                            <button onClick={() => handleNumOfTicketsChange("any")}>any</button>
                            <button onClick={() => handleNumOfTicketsChange(1)}>1</button>
                            <button onClick={() => handleNumOfTicketsChange(2)}>2</button>
                            <button onClick={() => handleNumOfTicketsChange(3)}>3</button>
                            <button onClick={() => handleNumOfTicketsChange(4)}>4+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventPage;
