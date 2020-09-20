import React, { useState } from "react";
import "../App.css";
import Swal from "sweetalert2";

const AddModule = ({ props }) => {
  const [module, setModule] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const body = JSON.stringify({
      module,
    });

    const apiBaseUrl =
      process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_PROD_API_URL
        : process.env.REACT_APP_LOCAL_API_URL;

    fetch(`${apiBaseUrl}/syllabus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then((response) => {
        props.onAddModule();
        Swal.fire(
          "Success!",
          "Module has been submitted",
          response.module,
          "success"
        );
        // props.history.push("/");
      })
      .catch((error) =>
        Swal.fire(
          "Error",
          "An error occurred while creating the new module.",
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
              placeholder="Add a new Module"
              type="text"
              className="form-control"
              id="name"
              value={module}
              onChange={(e) => setModule(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <button type="submit" className="btn-sm btn-danger">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddModule;
