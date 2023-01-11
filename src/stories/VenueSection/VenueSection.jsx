import React from 'react';
import PropTypes from 'prop-types';
import './venueSection.css';

export const VenueSection = ({ available, selected, rotateLabel, labelX, labelY, xPos, yPos, label, ...props }) => {
  return (
    <div className={`VenueSection 
                        ${available ? '' : 'VenueSection--disabled'}
                        ${selected ? 'VenueSection--selected' : ''}
                    `}>
        {props.children}
        <div className="VenueSection-label" style={{ top: `${labelY}px`, left: `${labelX}px` }}>{label}</div>
    </div>
  );
};

VenueSection.propTypes = {
    available: PropTypes.bool,
    selected: PropTypes.bool,
    rotateLabel: PropTypes.bool,
    xPos: PropTypes.number,
    yPos: PropTypes.number,
    labelX: PropTypes.number,
    labelY: PropTypes.number,
    label: PropTypes.string,
    onClick: PropTypes.func,
};

VenueSection.defaultProps = {
    sectionSVG: null,
    available: true,
    selected: false,
    rotateLabel: false,
    labelX: 50,
    labelY: 50,
    xPos: 0,
    yPos: 0,
    label: "Default",
    onClick: undefined,
};
