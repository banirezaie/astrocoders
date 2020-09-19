import React, { useState } from "react";
import "../App.css";
import LocationSelect from "./LocationSelect";
import GroupSelect from "./GroupSelect";
import TypeSelect from "./TypeSelect";
import ModuleSelect from "./ModuleSelect";
import ModuleLessonSelect from "./ModuleLessonSelect";
import Swal from "sweetalert2";

const CreateClassCode = (props) => {
  // const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();

    const body = JSON.stringify({
      location: selectedLocation,
      group: selectedGroup,
      type,
      date,
      time,
      syllabus: selectedModule,
      lesson: selectedLesson,
    });

    const apiBaseUrl =
      process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_PROD_API_URL
        : process.env.REACT_APP_LOCAL_API_URL;

    fetch(`${apiBaseUrl}/admins`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then((response) => {
        Swal.fire(
          "Success!",
          "Your class code has been generated with code: " + response.code,
          "success"
        );
        props.history.push("/");
      })
      .catch((error) =>
        Swal.fire(
          "Error",
          "An error occured while creating the class code.",
          "error"
        )
      );
  }

  return (
    <div className="App-header">
      <div className="col-12  col-sm-6">
        <div className="text-center pb-5">
          <h1>Create Class Code</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <LocationSelect
              selectedLocation={selectedLocation}
              setSelectedLocation={(value) => {
                setSelectedLocation(value);
                setSelectedGroup(null);
              }}
            />
          </div>
          <GroupSelect
            selectedLocation={selectedLocation}
            selectedGroup={selectedGroup}
            setSelectedGroup={setSelectedGroup}
          />
          <ModuleSelect
            selectedModule={selectedModule}
            setSelectedModule={(value) => {
              setSelectedModule(value);
              setSelectedLesson(null);
            }}
          />
          <ModuleLessonSelect
            selectedModule={selectedModule}
            selectedLesson={selectedLesson}
            setSelectedLesson={setSelectedLesson}
          />
          <TypeSelect type={type} setType={setType} />
          <div className="col-12"  >
            <label htmlFor="date">Date</label>
            <input
              className="form-control"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            ></input>
          </div>

          <div className="col-12 ">
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
