import React, { useState } from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../assets/search-icon.svg';
import closeX from '../assets/x-icon.png';
import './search.css';

const CITIES = [
	"New York City",
	"Los Angeles",
	"NYC"
]

const PUGS = [
  { name: "Bill", talent: "Tricks" },
  { name: "Charlie", talent: "Signing" },
  { name: "Sparky", talent: "Dancing" },
  { name: "Alex", talent: "Tricks" },
  { name: "Spike", talent: "Dancing" },
  { name: "Chester", talent: "Singing" }
]

const VENUES = [
  "Madison Square Garden"
]

const EVENTS = [
  { name: "Bill", talent: "Tricks", date: "1/01/2023", city: "New York", venue: "Madison Square Garden" },
  { name: "Charlie", talent: "Signing", date: "1/02/2023", city: "New York", venue: "Madison Square Garden" },
  { name: "Sparky", talent: "Dancing", date: "1/03/2023", city: "New York", venue: "Madison Square Garden" },
  { name: "Alex", talent: "Tricks", date: "1/04/2023", city: "New York", venue: "Madison Square Garden" },
  { name: "Spike", talent: "Dancing", date: "1/05/2023", city: "New York", venue: "Madison Square Garden" },
  { name: "Chester", talent: "Singing", date: "1/06/2023", city: "New York", venue: "Madison Square Garden" }
]

export const Search = ({ placeholder, onClick, ...props }) => {
  const [searchValue, setSearchValue] = useState("");
  const [cityResults, setCityResults] = useState([]);
  const [pugResults, setPugResults] = useState([]);
  const [activeElement, setActiveElement] = React.useState(document.activeElement);

  React.useEffect(() => {
    const onFocus = (event) => setActiveElement(event.target);
    const onBlur = (event) => setActiveElement(null);

    window.addEventListener("focus", onFocus, true);
    window.addEventListener("blur", onBlur, true);

    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  const handleClear = () => {
    setSearchValue("");
  }

  const handleSearchChange = (val) => {
    let newVal = val.target.value;
    setSearchValue(newVal);
  }

  const showX = () => {
    return activeElement && 
           activeElement.nodeName == "INPUT" &&
           searchValue.length > 0;
  }

  return (
    <div className="storybook-search">
      <img src={searchIcon} />
      <input 
        type="text" 
        onChange={handleSearchChange}
        value={searchValue}
      />
      <div
        className={`closeBtn ${!showX() && "closeBtn--hidden"}`}
        onClick={handleClear}
      >
        <img src={closeX} />
      </div>
      <div className="storybook-searchResults">

      </div>
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
};

Search.defaultProps = {
  placeholder: 'Search',
  onClick: undefined,
};
