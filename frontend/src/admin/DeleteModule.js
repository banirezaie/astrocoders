import React from "react";
import "../App.css";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const DeleteModule = ({ props }) => {
  function handleSubmit(e) {
    e.preventDefault();

    const apiBaseUrl =
      process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_PROD_API_URL
        : process.env.REACT_APP_LOCAL_API_URL;

    fetch(`${apiBaseUrl}/admin/syllabus/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        props.onDeleteModule();
        Swal.fire(
          "Success!",
          "Module has been deleted",

          "success"
        );
        // props.history.push("/");
      })
      .catch((error) =>
        Swal.fire(
          "Error",
          "An error occurred while deleting the module.",
          "error"
        )
      );
  }

  return (
    <div className="">
      <div className="">
        <FaTrashAlt color="danger" size="1.1rem" onClick={handleSubmit} />

      </div>
    </div>
  );
};

export default DeleteModule;
