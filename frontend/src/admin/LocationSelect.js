import React, { useState, useEffect } from "react";

const LocationSelect = ({ selectedLocation, setSelectedLocation }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/location")
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, []);

  const changeHandler = (event) => {
    setSelectedLocation(
      event.target.selectedIndex === 0 ? null : event.target.value
    );
  };

  return (
    <div className="form-group mx-5">
      <label htmlFor="class">Location</label>
      <select id="class" className="form-control" onChange={changeHandler}>
        <option>Select the Location</option>
        {locations.map((element, index) => {
          return <option key={index}>{element.location}</option>;
        })}
      </select>
    </div>
  );
};

export default LocationSelect;
