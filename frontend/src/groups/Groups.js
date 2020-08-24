import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Mentors = () => {
  const [students, setStudents] = useState("");
  // const { groups, type, location } = "";

  // const [groups, setGroups] = useState("");
  // const [type, setType] = useState("");
  // const [location, setLocation] = useState("");

  useEffect(() => {
    fetch("http://localhost:9000/admins")
      // , { query: { location, groups, type } }
      .then((res) => res.json())
      .then((data) => setStudents(data));

 
  }, [setStudents]);
  console.log(students)
 
 
  if (!students) {
    return <div>Loading...</div>;
  }
  
  return (

    <div>
      <div className="header">
        <h2>Group List</h2>
      </div>
      <div className="table">
        <table className="table table-striped container bg-white table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Location</th>
              <th scope="col">Group</th>
              <th scope="col">Type</th>
              <th scope="col">Attendees Count</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {students ? (
            <tbody>
              
              {students.map((data, i) => {
                
                return (
                  <tr key={i}>
                    
                    <th>{i + 1}</th>
                    <td>{data.location.name}</td>
                    <td>{data.group.name}</td>
                    <td>{data.type}</td>
                    <td>{data.attendes ? data.attendes.length : "-"}</td>
                    <td>
                      <Link
                        to={"/groups/" + data._id + "/details"}
                        className="btn btn-sm btn-primary"
                      >
                        View attendees
                      </Link>
                    </td>
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
