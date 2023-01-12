import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './venueSection.css';

export const VenueSection = ({ 
        available,
        selected,
        rotateLabel,
        labelX,
        labelY,
        label,
        clickable,
        labelSize,
        sectionClassName,
        ...props
    }) => {
    const [isSelected, setIsSelected] = useState(selected);
    
    const handleSelectClick = () => {
        setIsSelected(!isSelected);
    }

    return (
        <g 
            stroke-width="42"
            onClick={(clickable && available) ? handleSelectClick : null}
            className={`VenueSection ${sectionClassName} ${available ? '' : 'VenueSection--disabled'} ${isSelected ? 'VenueSection--selected' : ''}`}
        >
            {props.children}
            <text stroke-width="8" font-size={labelSize} x={labelX} y={labelY}>{label}</text>
        </g>
    );
};

VenueSection.propTypes = {
    available: PropTypes.bool,
    selected: PropTypes.bool,
    sectionClassName: PropTypes.string,
    label: PropTypes.string,
    rotateLabel: PropTypes.bool,
    clickable: PropTypes.bool,
    labelX: PropTypes.number,
    labelY: PropTypes.number,
    labelSize: PropTypes.number,
    onClick: PropTypes.func,
};

VenueSection.defaultProps = {
    sectionSVG: null,
    available: true,
    sectionClassName: "Section1",
    selected: false,
    label: "1",
    clickable: true,
    rotateLabel: false,
    labelX: 50,
    labelY: 50,
    labelSize: 100,
    onClick: undefined,
};
