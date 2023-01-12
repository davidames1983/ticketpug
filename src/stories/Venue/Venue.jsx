import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { VenueSection } from '../VenueSection/VenueSection';
import { ReactComponent as Section1 } from '../assets/sectionImages/section-1.svg';
import { ReactComponent as Section2 } from '../assets/sectionImages/section-2.svg';
import './venue.css';

export const Venue = ({ venueName, ...props }) => {

    return (
        <div className="Venue"> 
            <h3>{props.venueName}</h3>
            <svg className="Venue-Wrapper" viewBox="0 0 2000 4000">
                <VenueSection
                    available={true}
                    selected={false}
                    labelX={280}
                    labelY={-700}
                    labelSize={300}
                    label="1"
                    sectionClassName="Section1"
                >
                    <Section1/>
                </VenueSection>
                <VenueSection
                    available={true}
                    selected={false}
                    labelX={280}
                    labelY={-700}
                    labelSize={300}
                    label="2"
                    sectionClassName="Section2"
                >
                    <Section2/>
                </VenueSection>
            </svg>
        </div>
    );
};

Venue.propTypes = {
    venueName: PropTypes.string
};

Venue.defaultProps = {
    venueName: "Default"
};