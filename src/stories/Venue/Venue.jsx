import React, { useState, useRef } from 'react';
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
import { ReactComponent as Section301 } from '../assets/sectionImages/section-301.svg';
import { ReactComponent as Section302 } from '../assets/sectionImages/section-302.svg';
import { ReactComponent as Section303 } from '../assets/sectionImages/section-303.svg';
import { ReactComponent as Section304 } from '../assets/sectionImages/section-304.svg';
import { ReactComponent as Section305 } from '../assets/sectionImages/section-305.svg';
import { ReactComponent as Section306 } from '../assets/sectionImages/section-306.svg';
import { ReactComponent as Mix } from '../assets/sectionImages/mix.svg';
import { ReactComponent as Stage } from '../assets/sectionImages/stage.svg';
import { ReactComponent as StageBG } from '../assets/sectionImages/stageBG.svg';
import { ReactComponent as GARight } from '../assets/sectionImages/general-admission-right.svg';
import { ReactComponent as GALeft } from '../assets/sectionImages/general-admission-left.svg';
import Reset from '../assets/reset.svg';
import './venue.css';

export const Venue = ({ venueName, ...props }) => {
    const [isReset, setIsReset] = useState(true);

    const venueSVG = useRef(null);

    const zoom = (direction) => {
        const svg = venueSVG.current;
        const { scale, x, y } = getTransformParameters(svg);
        let dScale = 0.1;
        if (direction == "out") dScale *= -1;
        if (scale == 0.1 && direction == "out") dScale = 0;
        svg.style.transform = getTransformString(scale + dScale, x, y);
        setIsReset(false);
    };

    const getTransformParameters = (element) => {
        const transform = element.style.transform;
        let scale = 1,
            x = 0,
            y = 0;
        if (transform.includes("scale"))
            scale = parseFloat(transform.slice(transform.indexOf("scale") + 6));
        if (transform.includes("translateX"))
            x = parseInt(transform.slice(transform.indexOf("translateX") + 11));
        if (transform.includes("translateY"))
            y = parseInt(transform.slice(transform.indexOf("translateY") + 11));
        return { scale, x, y };
    };

    const pan = (direction) => {
        const svg = venueSVG.current;
        const { scale, x, y } = getTransformParameters(svg);
        let dx = 0,
            dy = 0;
        switch (direction) {
            case "left":
            dx = -3;
            break;
            case "right":
            dx = 3;
            break;
            case "up":
            dy = -3;
            break;
            case "down":
            dy = 3;
            break;
        }
        svg.style.transform = getTransformString(scale, x + dx, y + dy);
        setIsReset(false);
    };

    const getTransformString = (scale, x, y) =>
        "scale(" + scale + ") " + "translateX(" + x + "%) translateY(" + y + "%)";

    const reset = () => {
        const svg = venueSVG.current;
        svg.style.transform = getTransformString(1, 0, 0);
        setIsReset(true);
    }

    return (
        <div className="Venue"> 
            <h3>{props.venueName}</h3>
            <div className="Venue-OuterContainer">
                <svg ref={venueSVG} className="Venue-Wrapper" viewBox="0 0 2000 4000">
                    <VenueSection available={true} selected={false} label="1" sectionClassName="Section1"><Section1/></VenueSection>
                    <VenueSection available={false} selected={false} label="2" sectionClassName="Section2"><Section2/></VenueSection>
                    <VenueSection available={true} selected={false} label="3" sectionClassName="Section3"><Section3/></VenueSection>
                    <VenueSection available={true} selected={false} label="4" sectionClassName="Section4"><Section4/></VenueSection>
                    <VenueSection available={true} selected={false} label="201" sectionClassName="Section201"><Section201/></VenueSection>
                    <VenueSection available={true} selected={false} label="202" sectionClassName="Section202"><Section202/></VenueSection>
                    <VenueSection available={true} selected={false} label="203" sectionClassName="Section203"><Section203/></VenueSection>
                    <VenueSection available={true} selected={false} label="204" sectionClassName="Section204"><Section204/></VenueSection>
                    <VenueSection available={true} selected={false} label="301" sectionClassName="Section301"><Section301/></VenueSection>
                    <VenueSection available={true} selected={false} label="302" sectionClassName="Section302"><Section302/></VenueSection>
                    <VenueSection available={true} selected={false} label="303" sectionClassName="Section303"><Section303/></VenueSection>
                    <VenueSection available={true} selected={false} label="304" sectionClassName="Section304"><Section304/></VenueSection>
                    <VenueSection available={true} selected={false} label="305" sectionClassName="Section305"><Section305/></VenueSection>
                    <VenueSection available={true} selected={false} label="306" sectionClassName="Section306"><Section306/></VenueSection>
                    <VenueSection available={true} selected={false} label="General Admission Right" sectionClassName="GARight"><GARight/></VenueSection>
                    <VenueSection available={true} selected={false} label="General Admission Left" sectionClassName="GALeft"><GALeft/></VenueSection>
                    <VenueSection clickable={false} label="" sectionClassName="SectionMix"><Mix/></VenueSection>
                    <VenueSection clickable={false} label="" sectionClassName="SectionStageBG"><StageBG/></VenueSection>
                    <VenueSection clickable={false} label="" sectionClassName="SectionStage"><Stage/></VenueSection>
                </svg>
            </div>

            <div className="Venue-controls">
                <div className="Venue-zoomBtns">
                    <button className="Venue-btn" onClick={() => zoom("in")}>+</button>
                    <button className="Venue-btn" onClick={() => zoom("out")}>-</button>
                </div>
                <div className="Venue-panBtns">
                    <button className="Venue-btn" onClick={() => pan("left")}>pan left</button>
                    <button className="Venue-btn" onClick={() => pan("right")}>pan right</button>
                </div>
                {!isReset && <div className="Venue-resetBtn">
                    <button className="Venue-btn" onClick={() => reset()}>
                        <img src={Reset} />
                    </button>
                </div>}
            </div>
        </div>
    );
};

Venue.propTypes = {
    venueName: PropTypes.string
};

Venue.defaultProps = {
    venueName: "Default"
};

export default Venue;