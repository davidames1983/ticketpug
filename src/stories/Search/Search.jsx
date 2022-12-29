import React, { useState } from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../assets/search-icon.svg';
import closeX from '../assets/x-icon.png';
import './search.css';

export const Search = ({ placeholder, onClick, ...props }) => {
  const [searchValue, setSearchValue] = useState("");
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
    console.log("HERE AAA")
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
