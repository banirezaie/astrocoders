import React, { useState, useEffect } from "react";

const ClassSelect = ({ selectedClass, setSelectedClass }) => {
  const [classes, setClasses] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:9000/admins`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  const changeHandler = (event) => {
    setSelectedClass(
      event.target.selectedIndex === 0
        ? null
        : classes[event.target.selectedIndex - 1]
    );
  };

  return (
    <div className="form-group mx-5">
      <label htmlFor="class">Class</label>
      <select
        id="class"
        className="form-control"
        onChange={changeHandler}
        disabled={!selectedLocation}
      >
        <option>Choose a Class</option>
        {classes && classes.map((element, index) => {
            return <option key={index}>{element.location}</option>;
          })}
      </select>
    </div>
  );
};

export default ClassSelect;
