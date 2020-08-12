import React, { useState } from "react";
import "../App.css";

const ClassType = ({name,email}) => {
  const [myClass, setMyClass] = useState("");
  const [type, setType] = useState("");
  
  function handleSubmit() {
    const body = JSON.stringify({
      myClass,
      type,
      name,
      email
    });

    fetch(`http://localhost:9000/attendance`, {
      method: "POST",
      referrer: "",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then();
  }

  return (
    <div className="App-header">
      <div className="col-6  mx-auto">
        <div className="text-center pb-5">
          <h1>Attend class</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="class">Class</label>
            <select
              className="form-control"
              id="class"
              onChange={(e) => setMyClass(e.target.value)}
            >
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select
              className="form-control"
              id="type"
              onChange={(e) => setType(e.target.value)}
            >
              <option>...</option>
              <option>class</option>
              <option>Homework club</option>
              <option>Other</option>
            </select>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClassType;
