import React, { useState, useEffect } from "react";
import "../App.css";

const Mentors = () => {
  const [students, setStudents] = useState("");
  useEffect(() => {
    fetch(`http://localhost:9000/`)
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <div className="App-header">
      <table className="table table-striped container bg-white table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Class</th>
            <th scope="col">Type</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        {students ? (
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            <tr>
              <th>No one attended yet</th>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Mentors;
