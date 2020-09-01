import React, { useState } from "react";
import "../App.css";
import Swal from "sweetalert2";

const AddGroup = ({ props }) => {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const body = JSON.stringify({
      name,
    });

    fetch(`http://localhost:9000/location/${props}/group`, {
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
      <div className="add-group">
        <form onSubmit={handleSubmit}>
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="col-md-10">
            <button type="submit" className="btn-sm btn-primary">
              Add new Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGroup;
