import React, { useState } from "react";
import "../App.css";

const Students = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [myClass, setMyClass] = useState("");
  const [type, setType] = useState("");

  function handleSubmit() {
    const body = JSON.stringify({
      myClass,
      type,
      name,
      email,
    });

    fetch(`http://localhost:9000/attendance`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then();
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

  return (
    <div className="App-header">
      <div className="col-6  mx-auto">
        <div className="text-center pb-5">
          <h1>Attend class</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="class">Class</label>
            <select
              className="form-control"
              id="class"
              onChange={(e) => setMyClass(e.target.value)}
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
              <option defaultValue>
                Are you attending class or homework club?
              </option>
              <option>Class</option>
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

export default Students;
