import React, { useState, useEffect } from "react";

const ModuleSelect = ({ selectedModule, setSelectedModule }) => {
  const [modules, setModules] = useState([]);
      const apiBaseUrl =
        process.env.NODE_ENV === "production"
          ? process.env.REACT_APP_PROD_API_URL
          : process.env.REACT_APP_LOCAL_API_URL;

  useEffect(() => {
    fetch(`${apiBaseUrl}/syllabus`)
      .then((res) => res.json())
      .then((data) => setModules(data));
  }, [apiBaseUrl]);

  const changeHandler = (event) => {
    console.log("Location changed: ", modules[event.target.selectedIndex - 1]);
    setSelectedModule(
      event.target.selectedIndex === 0
        ? null
        : modules[event.target.selectedIndex - 1]
    );
  };

  return (
    <div className="col-12">
      <label htmlFor="class">Module</label>
      <select id="class" className="form-control" onChange={changeHandler}>
        <option>Select the Module</option>
        {modules.map((element, index) => {
          return <option key={index}>{element.module}</option>;
        })}
      </select>
    </div>
  );
};

export default ModuleSelect;
