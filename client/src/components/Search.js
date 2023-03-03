import React, { useState } from "react";
import searchGlass from "../images/white-search.png";
import "./Search.css";

export default function Search(props) {
  const [classActive, setClassActive] = useState(`options-container`);
  const [selected, setSelected] = useState("");

  const isActive = classActive.includes("active");

  function toggleActive() {
    isActive
      ? setClassActive(`options-container`)
      : setClassActive(`options-container active`);
  }

  function selectLocation(event) {
    const searchWord = event.target.id.toUpperCase();
    setSelected(event.target.id);
    toggleActive();
    filterByLocation(searchWord);
  }

  function filterByLocation(location) {
    props.filterLocation(location);
  }

  return (
    <div className="search-container">
      <div className="searchbar">
        <img src={searchGlass} alt="magnifting glass" />
        <input
          type="text"
          placeholder="Search for a National Park..."
          onChange={(e) => props.checkSearch(e.target.value)}
        />
      </div>
      <div className="select-box">
        <div className={classActive}>
          <div className="option" id="Alaska" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Alaska
          </div>
          <div className="option" id="American Samoa" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            American Samoa
          </div>
          <div className="option" id="Arizona" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Arizona
          </div>
          <div className="option" id="Arkansas" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Arkansas
          </div>
          <div className="option" id="California" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            California
          </div>
          <div className="option" id="Colorado" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Colorado
          </div>
          <div className="option" id="Florida" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Florida
          </div>
          <div className="option" id="Hawaii" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Hawaii
          </div>
          <div className="option" id="Indiana" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Indiana
          </div>
          <div className="option" id="Kentucky" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Kentucky
          </div>
          <div className="option" id="Maine" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Maine
          </div>
          <div className="option" id="Michigan" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Michigan
          </div>
          <div className="option" id="Minnesota" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Minnesota
          </div>
          <div className="option" id="Missouri" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Missouri
          </div>
          <div className="option" id="Montana" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Montana
          </div>
          <div className="option" id="Nevada" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Nevada
          </div>
          <div className="option" id="New Mexico" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            New Mexico
          </div>
          <div className="option" id="North Carolina" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            North Carolina
          </div>
          <div className="option" id="North Dakota" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            North Dakota
          </div>
          <div className="option" id="Ohio" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Ohio
          </div>
          <div className="option" id="Oregon" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Oregon
          </div>
          <div className="option" id="South Carolina" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            South Carolina
          </div>
          <div className="option" id="South Dakota" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            South Dakota
          </div>
          <div className="option" id="Tennessee" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Tennessee
          </div>
          <div className="option" id="Texas" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Texas
          </div>
          <div className="option" id="Virgin Islands" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Virgin Islands
          </div>
          <div className="option" id="Utah" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Utah
          </div>
          <div className="option" id="Virginia" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Virginia
          </div>
          <div className="option" id="Washington" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Washington
          </div>
          <div className="option" id="West Virginia" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            West Virginia
          </div>
          <div className="option" id="Wyoming" onClick={selectLocation}>
            <input type="radio" className="radio" name="location" />
            Wyoming
          </div>
        </div>
        <div className="selected" onClick={toggleActive}>
          {selected ? selected : "Filter by location"}
        </div>
      </div>
    </div>
  );
}
