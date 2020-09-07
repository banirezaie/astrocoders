import React from "react";
import "../App.css";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";

const DeleteGroup = ({ props }) => {
  function handleSubmit(e) {
    e.preventDefault();

        const apiBaseUrl =
          process.env.NODE_ENV === "production"
            ? process.env.REACT_APP_PROD_API_URL
            : process.env.REACT_APP_LOCAL_API_URL;

    fetch(`${apiBaseUrl}/location/${props.locationId}/group/${props.groupId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        props.onDeleteGroup();
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
      <div className="add-group">
        <FaTrash color="purple" onClick={handleSubmit} />

        {/* <button onClick={handleSubmit}>Delete</button> */}
      </div>
    </div>
  );
};

export default DeleteGroup;
