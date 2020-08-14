import React, { useState } from "react";
import "../App.css";

const CreateClassCode = (props) => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [code, setCode] = useState("");

  function handleSubmit() {
    const body = JSON.stringify({
      location,
      type,
      code,
    });

    fetch(`http://localhost:9000/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then();

    props.history.push("/");
  }

  const cyfCities = [
    "Medellín",
    "Rome",
    "London",
    "Manchester",
    "Birmingham",
    "Glasgow",
    "Cape Town",
  ];
  const generateRandomString = function (length = 6) {
    return Math.random().toString(20).substr(2, length);
  };

  return (
    <div className="App-header">
      <div className="col-6  mx-auto">
        <div className="text-center pb-5">
          <h1>Create Class Code</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="class">Class</label>
            <select
              className="form-control"
              id="class"
              onChange={(e) => setLocation(e.target.value)}
              // required="required"
            >
              <option defaultValue>Please select your class...</option>
              {cyfCities.sort().map((city, index) => (
                <option key={index}>{city}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select
              className="form-control"
              id="type"
              onChange={(e) => setType(e.target.value)}
              // required="required"
            >
              <option defaultValue>Is it class or homework club?</option>
              <option>Class</option>
              <option>Homework club</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name">Class Code</label>
            <input
              type="text"
              className="form-control"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <button className="btn btn-warning">
              generate
            </button>

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

export default CreateClassCode;
