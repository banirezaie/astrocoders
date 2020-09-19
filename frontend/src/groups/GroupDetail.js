import React, { useState, useEffect } from "react";
import "../App.css";

const GroupDetail = ({ match }) => {
  const [group, setGroup] = useState(null);

  console.log("Match: ", match);
      const apiBaseUrl =
        process.env.NODE_ENV === "production"
          ? process.env.REACT_APP_PROD_API_URL
          : process.env.REACT_APP_LOCAL_API_URL;

  useEffect(() => {
    fetch(`${apiBaseUrl}/admins/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => setGroup(data));
  }, [apiBaseUrl, match.params.id]);

  if (!group) {
    return <div>Loading...</div>;
  }

  console.log("data===>", group);

  return (
    <div className="wrapper">
      <div className="list-jumbotron">
        <h4>Group Details of  {group.group.name}</h4>{" "}
       
      </div>
      <div className="">
        <table className="table table-striped container bg-white table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
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
