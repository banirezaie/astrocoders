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

    //fetch(`http://localhost:9000/admins`, {
    fetch(`https://astrocodersbackend.herokuapp.com/admins`, {
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

  const cyfGroups = [
    "Birmingham-1",
    "Manchester-1",
    "Rome-1",
    "Cape Town-1",
    "Medellin-1",
    "Glasgow-1",
    "Glasgow-2",
    "Glasgow-3",
    "London-1",
    "London-2",
    "London-3",
    "London-4",
    "London-5",
    "London-6",
  ];

  const handleGenerateClick = (e) => {
    e.preventDefault();
    setCode(Math.random().toString(20).substr(2, 6));
  };
  console.log(code);

  return (
    <div className="App-header">
      <div className="col-6  mx-auto">
        <div className="text-center pb-5">
          <h1>Create Class Code</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mx-5">
            <label htmlFor="class">Group</label>
            <select
              className="form-control"
              id="class"
              onChange={(e) => setLocation(e.target.value)}
              required
            >
              <option value="" disabled selected hidden>
                Please select your group...
              </option>
              {cyfGroups.sort().map((city, index) => (
                <option key={index}>{city}</option>
              ))}
            </select>
          </div>
          <div className="form-group mx-5">
            <label htmlFor="type">Type</label>
            <select
              className="form-control"
              id="type"
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="" disabled selected hidden>
                Is it class or homework club?
              </option>
              <option>Class</option>
              <option>Homework club</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group mx-5">
            <label htmlFor="date">Date</label>
            <input className="form-control" type="date" required></input>
          </div>

          <div className="form-group mx-5">
            <label htmlFor="time">Time</label>
            <input className="form-control" type="time" required></input>
          </div>

          <div className="form-group mx-5">
            <label htmlFor="name">Class code</label>
            <input
              type="text"
              className="form-control"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button
              onClick={handleGenerateClick}
              className="btn btn-warning mt-2"
            >
              Generate
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
