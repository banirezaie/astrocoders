import React, { useState, useEffect } from "react";

const ClassSelect = ({ selectedClass, setSelectedClass }) => {
  const [classes, setClasses] = useState([]);

  const apiBaseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PROD_API_URL
      : process.env.REACT_APP_LOCAL_API_URL;

  useEffect(() => {
    fetch(`${apiBaseUrl}/admins`)
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
    <div className="col-12">
      <label htmlFor="class">Class</label>
      <select
        id="class"
        className="form-control"
        onChange={changeHandler}
        disabled={!selectedLocation}
      >
        <option>Choose a Class</option>
        {classes &&
          classes.map((element, index) => {
            return <option key={index}>{element.location}</option>;
          })}
      </select>
    </div>
  );
};

export default ClassSelect;
