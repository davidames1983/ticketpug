import React from 'react';
import { useParams } from 'react-router-dom';
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
        <div>Event: {event.name}</div>
    );
}

export default EventPage;
