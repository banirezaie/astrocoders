import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Students = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="App-header">
      <div className="col-6  mx-auto">
        <div className="text-center pb-5">
          <h1>Attend class</h1>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
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
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              {" "}
              <Link to="/students/classtype" className="text-white">
                {" "}
                Next
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Students;
