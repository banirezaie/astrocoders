import React, { useState, useEffect } from "react";
import "../App.css";

const GroupDetail = ({ match }) => {
  const [group, setGroup] = useState(null);

  console.log("Match: ", match);

  useEffect(() => {
    fetch(`http://localhost:9000/admins/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => setGroup(data));
  }, [match]);

  if (!group) {
    return <div>Loading...</div>;
  }

  console.log("data===>", group);

  return (
    <div>
      <div ClassName="App-header">
        <p>Group Detail of </p> <p style={{ color: "red" }}> {group.group.name}</p>
      </div>
      <div className="table">
        <table className="table table-striped container bg-white table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Type</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Code</th>
            </tr>
          </thead>
          {group && group.attendees ? (
            <tbody>
              {group.attendees.map((data, i) => {
                return (
                  <tr key={i}>
                    {console.log(data)}
                    <th>{i + 1}</th>
                    <td>{data.name ? data.name : null}</td>
                    <td>{data.email ? data.email : null}</td>
                    <td>{data.class_code.type ? data.class_code.type : null}</td>
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

export default GroupDetail;
