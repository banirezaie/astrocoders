import "../App.css";

import React, { useState } from "react";

import Swal from "sweetalert2";

const AddLesson = ({ props }) => {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const body = JSON.stringify({
      name,
    });

    const apiBaseUrl =
      process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_PROD_API_URL
        : process.env.REACT_APP_LOCAL_API_URL;

    fetch(`${apiBaseUrl}/syllabus/${props.id}/lesson`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then((response) => {
        props.onAddLesson(response);
        Swal.fire(
          "Success!",
          "Your location has been submitted",
          response.name,
          "success"
        );

        // props.history.push("/");
      })
      .catch((error) =>
        Swal.fire(
          "Error",
          "An error occurred while creating the new location.",
          "error"
        )
      );
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="form-row align-items-center">
          <div className="col-md-9">
            <input
              placeholder="Add a new Lesson"
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <button type="submit" className="btn-sm btn-warning">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddLesson;
