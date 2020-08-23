import React, { useState, useEffect } from "react";

const GroupSelect = ({ selectedLocation, selectedGroup, setSelectedGroup }) => {
  const [groups, setGroups] = useState([]);
  /*
  useEffect(() => {
    if (selectedLocation) {
      fetch(`http://localhost:9000/location/${selectedLocation}`)
        .then((res) => res.json())
        .then((data) => setGroups(data));
    }
  }, [selectedLocation]);
*/

  const changeHandler = (event) => {
    setSelectedGroup(
      event.target.selectedIndex === 0
        ? null
        : selectedLocation.groups[event.target.selectedIndex - 1]
    );
  };
  return (
    <div className="form-group mx-5">
      <label htmlFor="class">Group</label>
      <select
        id="class"
        className="form-control"
        onChange={changeHandler}
        disabled={!selectedLocation}
      >
        <option>Choose a Group </option>
        {selectedLocation &&
          selectedLocation.groups.map((element, index) => {
            return <option key={index}>{element.name}</option>;
          })}
      </select>
    </div>
  );
};

export default GroupSelect;
