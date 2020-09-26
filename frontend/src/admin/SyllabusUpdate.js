import React, { useState, useEffect, useCallback } from "react";
import "../App.css";
import AdminNavbar from "../navbar/AdminNavbar";
import AddLesson from "./AddLesson";
// import { Link } from "react-router-dom";
// import AddGroup from "../admin/AddGroup";

import AddModule from "./AddModule";
import DeleteModule from "./DeleteModule";
import ViewLessons from "./ViewLessons";

const SyllabusUpdate = ({ props }) => {
  const [syllabus, setSyllabus] = useState("");

  const apiBaseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PROD_API_URL
      : process.env.REACT_APP_LOCAL_API_URL;

  const loadSyllabus = useCallback(() => {
    fetch(`${apiBaseUrl}/syllabus`)
      .then((res) => res.json())
      .then((data) => setSyllabus(data));
  }, [apiBaseUrl]);

  useEffect(() => {
    loadSyllabus();
  }, [loadSyllabus]);

  if (!syllabus) {
    return <div>Loading...</div>;
  }

  const handleOnDeleteSyllabus = () => {
    loadSyllabus();
  };
  const handleOnAddSyllabus = () => {
    loadSyllabus();
  };

  return (
    <div className="same-background">
      <AdminNavbar background="#888" hoverBackground="#ccc" linkColor="#eee" />
      <span className="extra"></span>
      <div className="wrapper">
        <div className="list-jumbotron">
          <div className="col-sm-12 col-md-4">
            <h2>Syllabus List</h2>
          </div>

          <hr className="my-4"></hr>
          <div className="col-sm-12 col-md-4">
            <AddModule
              props={{
                onAddModule: handleOnAddSyllabus,
              }}
            />
          </div>
        </div>
        {syllabus.map((data, i) => {
          return (
            <div className="container">
              <div className="row">
                <div className="col-sm-4 col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-city">{data.module}</h4>
                      <DeleteModule
                        props={{
                          id: data._id,
                          onDeleteModule: handleOnDeleteSyllabus,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Class Names</h5>

                      <ul className="list-group ">
                        <ViewLessons
                          id={data._id}
                          lessons={data.lesson}
                          setLessons={(lesson) =>
                            setSyllabus(
                              syllabus.map((oldLesson) =>
                                oldLesson === data
                                  ? { ...data, lesson: lesson }
                                  : oldLesson
                              )
                            )
                          }
                        />
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <AddLesson
                        props={{
                          id: data._id,
                          onAddLesson: (lesson) =>
                            setSyllabus(
                              syllabus.map((oldLesson) =>
                                oldLesson === data
                                  ? {
                                      ...data,
                                      lesson: data.lesson.concat([lesson]),
                                    }
                                  : oldLesson
                              )
                            ),
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SyllabusUpdate;
