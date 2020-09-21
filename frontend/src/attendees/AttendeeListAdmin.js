import React, { useState, useEffect } from "react";
import "../App.css";
import LocationSelect from "../admin/LocationSelect";
import GroupSelect from "../admin/GroupSelect";
import TypeSelect from "../admin/TypeSelect";
import ModuleSelect from "../admin/ModuleSelect";
import ModuleLessonSelect from "../admin/ModuleLessonSelect";

import qs from "query-string";
import AdminNavbar from "../navbar/AdminNavbar";

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
    const apiBaseUrl =
      process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_PROD_API_URL
        : process.env.REACT_APP_LOCAL_API_URL;
    fetch(
      `${apiBaseUrl}/attendance/student?` +
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
          (person.name || "").toLowerCase().includes(searchVal.toLowerCase())
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
    <div className="same-background">
      <AdminNavbar background="#aaa" hoverBackground="#ddd" linkColor="#eee" />
      <div className="text-center" style={{ paddingTop: "95px" }}>
        <h3 className="text-white">Attendee List</h3>
      </div>

      <div className="list-jumbotron">
        <div className="col-md-2 col-sm-12">
          <LocationSelect
            selectedLocation={selectedLocation}
            setSelectedLocation={(value) => {
              setSelectedLocation(value);
              setSelectedGroup(null);
            }}
          />
        </div>
        <div className="col-sm-12 col-md-2">
          <GroupSelect
            selectedLocation={selectedLocation}
            selectedGroup={selectedGroup}
            setSelectedGroup={setSelectedGroup}
          />
        </div>
        <div className="col-sm-12 col-md-2">
          <TypeSelect type={selectedType} setType={setSelectedType} />
        </div>
        <div className="col-sm-12 col-md-2">
          <ModuleSelect
            selectedModule={selectedModule}
            setSelectedModule={(value) => {
              setSelectedModule(value);
              setSelectedLesson(null);
            }}
          />
        </div>
        <div className="col-sm-12 col-md-2">
          <ModuleLessonSelect
            selectedModule={selectedModule}
            selectedLesson={selectedLesson}
            setSelectedLesson={setSelectedLesson}
          />
        </div>
        <div className="col-sm-12 col-md-2">
          <form className="form-group search-box">
            <label htmlFor="studentName">Student Name</label>
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

      {filteredStudents ? (
        <div className="wrapper">
          {filteredStudents.map((data, i) => {
            return (
              <div key={i} className="container">
                <div className="row">
                  <div className="col-sm-4 col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h5>{data.name ? data.name : null}</h5>
                        <p>{data.email ? data.email : null}</p>

                        <hr></hr>
                        <p>
                          {data.class_code && data.class_code.location
                            ? data.class_code && data.class_code.location.name
                            : null}
                        </p>
                        <p>
                          {data.class_code && data.class_code.group
                            ? data.class_code && data.class_code.group.name
                            : null}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4 col-md-3">
                    <div className="card">
                      <div className="card-body">
                        <h5>Group Details</h5>
                        <hr></hr>

                        <p>
                          {data.class_code && data.class_code.syllabus
                            ? data.class_code && data.class_code.syllabus.module
                            : null}
                        </p>
                        <p>
                          {data.class_code && data.class_code.lesson
                            ? data.class_code && data.class_code.lesson.name
                            : null}
                        </p>
                        <p>
                          {data.class_code && data.class_code.type
                            ? data.class_code.type
                            : null}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-3">
                    <div className="card">
                      <div className="card-body">
                        <h5>Class Details</h5>
                        <hr></hr>

                        <p>Date: {data.date ? data.date : null}</p>
                        <p>Time: {data.time ? data.time : null}</p>
                        <p>Code: {data.code ? data.code : null}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-2">
                    <div className="card">
                      <div className="card-body">
                        <h5>Notes</h5>
                        <hr></hr>

                        <p> {data.notes ? data.notes : null}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <tr>
            <th>No one attended yet</th>
          </tr>
        </div>
      )}
    </div>
  );
};

export default AttendeeList;
