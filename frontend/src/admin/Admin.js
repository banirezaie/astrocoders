import React, { useState } from "react";

const Admin = (props) => {
  const [classCode, setClassCode] = useState("");

  function handleSubmit() {
    const body = JSON.stringify({
      classCode,
    });
    const apiBaseUrl =
      process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_PROD_API_URL
        : process.env.REACT_APP_LOCAL_API_URL;

    fetch(`${apiBaseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then();

    // props.history.push("/");
  }

  return (
    <div className="App-header">
      <div className="col-6  mx-auto">
        <div className="text-center pb-5">
          <h1>Make a unique class code</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="classCode">Class code</label>
            <input
              type="text"
              className="form-control"
              id="classCode"
              value={classCode}
              onChange={(e) => setClassCode(e.target.value)}
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

export default Admin;
