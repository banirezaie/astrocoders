import React, { useState } from "react";
import "../App.css";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const DeleteLocation = ({ props }) => {
  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9000/location/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        props.onDeleteLocation();
        Swal.fire(
          "Success!",
          "Your GROUP has been deleted",

          "success"
        );
        // props.history.push("/");
      })
      .catch((error) =>
        Swal.fire(
          "Error",
          "An error occurred while deleting the group.",
          "error"
        )
      );
  }

  return (
    <div className="">
      <div className="">
        <FaTrashAlt color="danger" size="1.1rem" onClick={handleSubmit} />
        {/* <button className="btn btn-sm btn-warning" onClick={handleSubmit}> */}
        {/* Delete
        </button> */}
      </div>
    </div>
  );
};

export default DeleteLocation;
