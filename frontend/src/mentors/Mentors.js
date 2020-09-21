import React, { useState, useEffect } from "react";
import "../App.css";
import GroupSelect from "../admin/GroupSelect";

const Mentors = () => {
  const [students, setStudents] = useState("");
  const [myClass, setMyClass] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");

  const getClassList = () => {
    const apiBaseUrl =
      process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_PROD_API_URL
        : process.env.REACT_APP_LOCAL_API_URL;

    let url = `${apiBaseUrl}/attendance/student`;

    let query = [];
    if (location) query.push(`location=${location}`);
    if (myClass) query.push(`myClass=${myClass}`);
    if (type) query.push(`type=${type}`);

    if (query.length > 0) {
      const queryString = query.join("&");
      url += "?" + queryString;
    }
    return url;
  };
  useEffect(() => {
    fetch(getClassList())
      // fetch(`${process.env.APIURL}/attendance/student`)
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div>
      <div className="App-header">
        <h2>Attendance List</h2>
      </div>
      <div>
        <GroupSelect />
      </div>
      <div className="table">
        <table className="table table-striped container bg-white table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Location</th>
              <th scope="col">Type</th>
              <th scope="col">Module</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Code</th>
            </tr>
          </thead>
          {students ? (
            <tbody>
              {students.map((data, i) => {
                return (
                  <tr key={i}>
                    {console.log(data)}
                    <th>{i + 1}</th>
                    <td>{data.name ? data.name : null}</td>
                    <td>{data.email ? data.email : null}</td>
                    <td>{data.myClass ? data.myClass : null}</td>
                    <td>{data.type ? data.type : null}</td>
                    <td>{data.module ? data.module : null}</td>
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
                <th>No one attended yet</th>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Mentors;
