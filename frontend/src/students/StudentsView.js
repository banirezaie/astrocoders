import React, { useState } from "react";
import "../App.css";
import Swal from "sweetalert2";
import { useUserProfile } from "../providers/UserProvider";

const StudentsView = (props) => {
  const user = useUserProfile();
  // console.log(user);
  const [code, setCode] = useState("");
  const [notes, setNotes] = useState("");
  // const [name, setName]= useState("");
  // const [email, setEmail] = useState("");

  const name = user.name;
  const email = user.email;

  const apiBaseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PROD_API_URL
      : process.env.REACT_APP_LOCAL_API_URL;

  //  const setName =()=>{
  //   name.displayName
  //   }

  function handleSubmit(e) {
    e.preventDefault();
    const body = JSON.stringify({
      name,
      email,
      code,
      notes,
    });

    fetch(`${apiBaseUrl}/attendance`, {
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
          "Your class code has been submitted: " + response.code,
          "success"
        );
        props.history.push("/student-history");
      })
      .catch((error) =>
        Swal.fire(
          "Error",
          "An error occurred while creating the class code.",
          "error"
        )
      );
  }

  return (
    <div>
      <div className="home">
        <div className="mx-auto">
          <div className="text-center pb-5">
            <h1>Attend Class</h1>
            <hr style={{ color: "white" }}></hr>
            <h5 style={{ color: "white" }}> Welcome {user.name}</h5>
          </div>
          <form className="create-code-container" onSubmit={handleSubmit}>
            <div className="form-group mx-5">
              <label htmlFor="name">Class code*</label>
              <input
                type="text"
                className="form-control"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>
            <div className="form-group mx-5">
              <label htmlFor="name">
                <p style={{ display: "inline" }}>Notes</p> <span></span>
                <span style={{ fontSize: "0.7rem" }} class="badge badge-light">
                  Optional
                </span>
              </label>
              <textarea
                placeholder="Add notes about your attendance, e.g. I was late due to child care"
                type="text"
                className="form-control"
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-info">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentsView;
