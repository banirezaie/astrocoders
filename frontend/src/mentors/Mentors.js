import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import "../App.css";

const Mentors = () => {
  const [students, setStudents] = useState("");
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [myClass, setMyClass] = useState("");
  // const [type, setType] = useState("");
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  useEffect(() => {
    fetch(`http://localhost:9000/attendance/student`)
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="App-header">
        <table className="table table-striped container bg-white table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">myClass</th>
              <th scope="col">Type</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          {students ? (
            <tbody>
              {students.map((data, i) => {
                return (
                  <tr key={i}>
                    {console.log(data)}
                    <th>{i + 1}</th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.myClass}</td>
                    <td>{data.type}</td>
                    <td>{data.date}</td>
                    <td>{data.time}</td>
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
