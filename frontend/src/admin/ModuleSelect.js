import React, { useState, useEffect } from "react";

const ModuleSelect = ({ selectedModule, setSelectedModule }) => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/syllabus")
      .then((res) => res.json())
      .then((data) => setModules(data));
  }, []);

  const changeHandler = (event) => {
    console.log("Location changed: ", modules[event.target.selectedIndex - 1]);
    setSelectedModule(
      event.target.selectedIndex === 0
        ? null
        : modules[event.target.selectedIndex - 1]
    );
  };

  return (
    <div className="form-group mx-5">
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
