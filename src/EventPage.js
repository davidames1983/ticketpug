import React from 'react';
import { useParams } from 'react-router-dom';
import Venue from './stories/Venue/Venue';
import EVENTS from './data.js';

function EventPage() {
    const { id } = useParams();
    const event = EVENTS[id - 1];

    if (!id || !event) {
        return (
            <div>No event found with that ID.</div>
        );
    }

    return (
        <div className="EventPage">
            <div className="EventPage-header">Event: {event.name}</div>
            <div className="EventPage-container">
                <div className="EventPage-results"></div>
                <div className="EventPage-venueMap">
                    <Venue />
                </div>
                <div className="EventPage-filter"></div>
            </div>
        </div>
    );
}

export default EventPage;
