import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { VenueSection } from '../VenueSection/VenueSection';
import { ReactComponent as Section1 } from '../assets/sectionImages/section-1.svg';
import { ReactComponent as Section2 } from '../assets/sectionImages/section-2.svg';
import { ReactComponent as Section3 } from '../assets/sectionImages/section-3.svg';
import { ReactComponent as Section4 } from '../assets/sectionImages/section-4.svg';
import { ReactComponent as Section201 } from '../assets/sectionImages/section-201.svg';
import { ReactComponent as Section202 } from '../assets/sectionImages/section-202.svg';
import { ReactComponent as Section203 } from '../assets/sectionImages/section-203.svg';
import { ReactComponent as Section204 } from '../assets/sectionImages/section-204.svg';
import { ReactComponent as Section303 } from '../assets/sectionImages/section-303.svg';
import { ReactComponent as Section304 } from '../assets/sectionImages/section-304.svg';
import './venue.css';

export const Venue = ({ venueName, ...props }) => {

    return (
        <div className="Venue"> 
            <h3>{props.venueName}</h3>
            <svg className="Venue-Wrapper" viewBox="0 0 2000 4000">
                <VenueSection available={true} selected={false} label="1" sectionClassName="Section1"><Section1/></VenueSection>
                <VenueSection available={true} selected={false} label="2" sectionClassName="Section2"><Section2/></VenueSection>
                <VenueSection available={true} selected={false} label="3" sectionClassName="Section3"><Section3/></VenueSection>
                <VenueSection available={true} selected={false} label="4" sectionClassName="Section4"><Section4/></VenueSection>
                <VenueSection available={true} selected={false} label="201" sectionClassName="Section201"><Section201/></VenueSection>
                <VenueSection available={true} selected={false} label="202" sectionClassName="Section202"><Section202/></VenueSection>
                <VenueSection available={true} selected={false} label="203" sectionClassName="Section203"><Section203/></VenueSection>
                <VenueSection available={true} selected={false} label="204" sectionClassName="Section204"><Section204/></VenueSection>
                <VenueSection available={true} selected={false} label="303" sectionClassName="Section303"><Section303/></VenueSection>
                <VenueSection available={true} selected={false} label="304" sectionClassName="Section304"><Section304/></VenueSection>
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
