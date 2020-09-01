import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import AddGroup from "../admin/AddGroup";
import ViewGroups from "./ViewGroups";
import AddLocation from "./AddLocation";
import DeleteLocation from "./DeleteLocation";

const LocationUpdate = (props) => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetch("http://localhost:9000/location")
      // , { query: { location, groups, type } }
      .then((res) => res.json())
      .then((data) => setLocation(data));
  }, [setLocation]);

  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="header">
        <h2>Location List</h2>
      </div>
      <div className="col-md-6">
        <AddLocation />
      </div>
      <div className="table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Location</th>
              <th scope="col"></th>
              <th scope="col">Groups</th>
                          <th scope="col">Actions</th>
            </tr>
          </thead>

          {location ? (
            <tbody>
              {location.map((data, i) => {
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{data.name}</td>
                    <DeleteLocation props={data._id} />
                    <td>
                      {/* <Link
                        to={"/location/" + data._id}
                        className="btn btn-sm btn-primary"
                      >
                        View Groups
                      </Link> */}
                      <ViewGroups id={data._id} />
                    </td>
                    <td>
                      <AddGroup props={data._id} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <th>No location added yet</th>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default LocationUpdate;
