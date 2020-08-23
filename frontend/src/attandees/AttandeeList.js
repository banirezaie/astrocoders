import React, { useState, useEffect } from "react";
// import Navbar from "../Navbar";
import "../App.css";
import { Link } from "react-router-dom";
import LocationSelect from "../admin/LocationSelect";
import GroupSelect from "../admin/GroupSelect";
import TypeSelect from "../admin/TypeSelect";
import qs from "query-string";

const AttandeeList = () => {
  const [students, setStudents] = useState("");

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    console.log("Selected location: ", selectedLocation);
    console.log("Selected group: ", selectedGroup);
    console.log("Selected type: ", selectedType);

    fetch(
      "http://localhost:9000/attendance/student?" +
        qs.stringify({
          location: selectedLocation ? selectedLocation._id : undefined,
          group: selectedGroup ? selectedGroup._id : null,
          type: selectedType ? selectedType : null,
        })
    )
      // fetch(`${process.env.APIURL}/attendance/student`)
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, [selectedLocation, selectedGroup, selectedType]);

  return (
    <div>
      {/* <Navbar /> */}
      <div ClassName="App-header">
        <h2>Attandee List</h2>
      </div>

      <div className="row">
        <div className="col-md-4">
          <LocationSelect
            selectedLocation={selectedLocation}
            setSelectedLocation={(value) => {
              setSelectedLocation(value);
              setSelectedGroup(null);
            }}
          />
        </div>
        <div className="col-md-4">
          <GroupSelect
            selectedLocation={selectedLocation}
            selectedGroup={selectedGroup}
            setSelectedGroup={setSelectedGroup}
          />
        </div>
        <div className="col-md-4">
          <TypeSelect type={selectedType} setType={setSelectedType} />
        </div>
      </div>

      <div className="table">
        <table className="table table-striped container bg-white table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Location</th>
              <th scope="col">Group</th>
              <th scope="col">Type</th>
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
                    <th>{i + 1}</th>
                    <td>{data.name ? data.name : null}</td>
                    <td>{data.email ? data.email : null}</td>
                    <td>
                      {data.class_code && data.class_code.location
                        ? data.class_code && data.class_code.location.name
                        : null}
                    </td>
                    <td>
                      {data.class_code && data.class_code.group
                        ? data.class_code && data.class_code.group.name
                        : null}
                    </td>
                    <td>
                      {data.class_code && data.class_code.type
                        ? data.class_code.type
                        : null}
                    </td>
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

export default AttandeeList;
