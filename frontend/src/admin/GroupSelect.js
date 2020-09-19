import React from "react";

const GroupSelect = ({ selectedLocation, selectedGroup, setSelectedGroup }) => {
  const changeHandler = (event) => {
    setSelectedGroup(
      event.target.selectedIndex === 0
        ? null
        : selectedLocation.groups[event.target.selectedIndex - 1]
    );
  };
  return (
    <div className="col-12">
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
