import React, { useState } from "react";
import "../App.css";
import Swal from "sweetalert2";

const Students = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const body = JSON.stringify({
      name,
      email,
      code,
    });

    fetch(`http://localhost:9000/attendance`, {
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
          "Your class code has been submitted",
          response.code,
          "success"
        );
        props.history.push("/");
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
    <div className="App-header">
      <div className="col-6  mx-auto">
        <div className="text-center pb-5">
          <h1>Attend class</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mx-5">
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
          <div className="form-group mx-5">
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

          <div className="form-group mx-5">
            <label htmlFor="name">Class code</label>
            <input
              type="text"
              className="form-control"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
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
