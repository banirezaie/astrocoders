import React, { useState, useEffect } from "react";
// import Navbar from "../Navbar";
import "../App.css";
import LocationSelect from "../admin/LocationSelect";
import GroupSelect from "../admin/GroupSelect";
import TypeSelect from "../admin/TypeSelect";
import ModuleSelect from "../admin/ModuleSelect";
import ModuleLessonSelect from "../admin/ModuleLessonSelect";

import qs from "query-string";

const AttendeeList = () => {
  const [students, setStudents] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [filteredStudents, setFilteredStudents] = useState("");
  useEffect(() => {
    fetch(
      "http://localhost:9000/attendance/student?" +
        qs.stringify({
          location: selectedLocation ? selectedLocation._id : undefined,
          group: selectedGroup ? selectedGroup._id : null,
          type: selectedType ? selectedType : null,
          module: selectedModule ? selectedModule._id : undefined,
          lesson: selectedLesson ? selectedLesson._id : null,
        })
    )
      // fetch(`${process.env.APIURL}/attendance/student`)
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setFilteredStudents(data);
      });
  }, [
    selectedLocation,
    selectedGroup,
    selectedType,
    selectedModule,
    selectedLesson,
  ]);
  const search = (searchVal) => {
    if (searchVal !== "") {
      setFilteredStudents(
        students.filter((person) =>
          person.name.toLowerCase().includes(searchVal.toLowerCase())
        )
      );
    } else {
      setFilteredStudents(students);
    }
  };
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    search(e.target.value);
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div>
        <h2>Attendee List</h2>
      </div>

      <div className="row">
        <div className="col-md-3">
          <LocationSelect
            selectedLocation={selectedLocation}
            setSelectedLocation={(value) => {
              setSelectedLocation(value);
              setSelectedGroup(null);
            }}
          />
        </div>
        <div className="col-md-3">
          <GroupSelect
            selectedLocation={selectedLocation}
            selectedGroup={selectedGroup}
            setSelectedGroup={setSelectedGroup}
          />
        </div>
        <div className="col-md-3">
          <TypeSelect type={selectedType} setType={setSelectedType} />
        </div>
        <div>
          <ModuleSelect
            selectedModule={selectedModule}
            setSelectedModule={(value) => {
              setSelectedModule(value);
              setSelectedLesson(null);
            }}
          />
        </div>
        <div className="col-md-3">
          <ModuleLessonSelect
            selectedModule={selectedModule}
            selectedLesson={selectedLesson}
            setSelectedLesson={setSelectedLesson}
          />
        </div>
        <div className="col-md-3">
          <form className="form-group search-box">
            <label htmlFor="customerName">Student Name</label>
            <input
              type="text"
              id="customerName"
              className="form-control"
              placeholder="Search student name or surname "
              value={searchInput}
              onChange={handleSearchInput}
            />
          </form>
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
              <th scope="col">Module</th>
              <th scope="col">Lesson</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Code</th>
            </tr>
          </thead>
          {filteredStudents ? (
            <tbody>
              {filteredStudents.map((data, i) => {
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
                    <td>
                      {data.class_code && data.class_code.syllabus
                        ? data.class_code && data.class_code.syllabus.module
                        : null}
                    </td>
                    <td>
                      {data.class_code && data.class_code.lesson
                        ? data.class_code && data.class_code.lesson.name
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

export default AttendeeList;
