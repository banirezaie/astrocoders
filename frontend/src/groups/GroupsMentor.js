import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import MentorsNavbar from "../navbar/MentorsNavbar";

const Mentors = () => {
  const [students, setStudents] = useState("");
  const apiBaseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PROD_API_URL
      : process.env.REACT_APP_LOCAL_API_URL;

  useEffect(() => {
    fetch(`${apiBaseUrl}/admins`)
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, [apiBaseUrl]);

  if (!students) {
    return <div>Loading...</div>;
  }

  return (
    <div className="same-background">
      <MentorsNavbar
        background="#aaa"
        hoverBackground="#ddd"
        linkColor="#eee"
      />
      <div style={{ paddingTop: "75px" }} className="header">
        <h2 className="text-white text-center">Group List</h2>
      </div>
      <div className="wrapper">
        <table className="table table-striped container bg-white table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Location</th>
              <th scope="col">Group</th>
              <th scope="col">Type</th>
              <th scope="col">Module</th>
              <th scope="col">Lesson</th>
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
                    <td>
                      {data.syllabus && data.syllabus.module
                        ? data.syllabus.module
                        : null}
                    </td>
                    <td>
                      {data.lesson && data.lesson.name
                        ? data.lesson.name
                        : null}
                    </td>
                    <td>{data.attendees ? data.attendees.length : "-"}</td>
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
