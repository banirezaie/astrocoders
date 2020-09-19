import React, { useState, useEffect } from "react";

const LocationSelect = ({ selectedLocation, setSelectedLocation }) => {
  const [locations, setLocations] = useState([]);

      const apiBaseUrl =
        process.env.NODE_ENV === "production"
          ? process.env.REACT_APP_PROD_API_URL
          : process.env.REACT_APP_LOCAL_API_URL;

  useEffect(() => {
    fetch(`${apiBaseUrl}/location`)
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, [apiBaseUrl]);

  const changeHandler = (event) => {
    console.log(
      "Location changed: ",
      locations[event.target.selectedIndex - 1]
    );
    setSelectedLocation(
      event.target.selectedIndex === 0
        ? null
        : locations[event.target.selectedIndex - 1]
    );
  };

  return (
    <div className="col-12">
      <label htmlFor="class">Location</label>
      <select id="class" className="form-control" onChange={changeHandler}>
        <option>Select the Location</option>
        {locations.map((element, index) => {
          return <option key={index}>{element.name}</option>;
        })}
      </select>
    </div>
  );
};

export default LocationSelect;
