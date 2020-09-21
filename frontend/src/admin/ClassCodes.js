import React, { useState, useEffect } from "react";
import "../App.css";

const ClassCodes = () => {
  const [classes, setClasses] = useState("");

  const apiBaseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PROD_API_URL
      : process.env.REACT_APP_LOCAL_API_URL;

  useEffect(() => {
    fetch(`${apiBaseUrl}`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, [apiBaseUrl]);
  return (
    <div>
      <div className="App-header">
        <table className="table table-striped container bg-white table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Location</th>
              <th scope="col">Type</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Code</th>
            </tr>
          </thead>
          {classes ? (
            <tbody>
              {classes.map((data, i) => {
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{data.location ? data.location : null}</td>
                    <td>{data.type ? data.type : null}</td>
                    <td>{data.date ? data.date : null}</td>
                    <td>{data.time ? data.time : null}</td>
                    <td>{data.code ? data.code : null}</td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <th>No classes to be shown</th>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default ClassCodes;
