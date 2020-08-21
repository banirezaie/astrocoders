import React, { useState } from "react";
import "../App.css";
import LocationSelect from "./LocationSelect";
import GroupSelect from "./GroupSelect";

const CreateClassCode = (props) => {
  // const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);

  function handleSubmit() {
    const body = JSON.stringify({
      selectedLocation,
      selectedGroup,
      type,
      date,
      time,

      
    });

    // fetch(`http://localhost:9000/admins`, {
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


  return (
    <div className="App-header">
      <div className="col-6  mx-auto">
        <div className="text-center pb-5">
          <h1>Create Class Code</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <LocationSelect
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </div>
          <GroupSelect
            selectedLocation={selectedLocation}
            selectedGroup={selectedGroup}
            setSelectedGroup={setSelectedGroup}
          />
          <div className="form-group mx-5">
            <label htmlFor="type">Type</label>
            <select
              className="form-control"
              id="type"
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option defaultValue="" disabled selected hidden>
                Is it class or homework club?
              </option>
              <option>Class</option>
              <option>Homework club</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group mx-5">
            <label htmlFor="date">Date</label>
            <input
              className="form-control"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            ></input>
          </div>

          <div className="form-group mx-5">
            <label htmlFor="time">Time</label>
            <input
              className="form-control"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            ></input>
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
