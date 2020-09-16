import React, { useState, useEffect, useCallback } from "react";
import "../App.css";
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
    <div>
      <div className="header">
        <h2>Syllabus</h2>
      </div>

      <div className="table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">
                <h4>Module</h4>
              </th>
              <th scope="col">
                <h4>Lesson</h4>
              </th>
              <th scope="col">
                <h4>Actions</h4>
              </th>
              <th scope="col">
                <AddModule
                  props={{
                    onAddModule: handleOnAddSyllabus,
                  }}
                />
              </th>
            </tr>
          </thead>

          {syllabus ? (
            <tbody>
              {syllabus.map((data, i) => {
                return (
                  <tr key={i}>
                    <th>
                      <h4>{i + 1}</h4>
                    </th>
                    <td>
                      <h4>{data.module}</h4>
                      <DeleteModule
                        props={{
                          id: data._id,
                          onDeleteModule: handleOnDeleteSyllabus,
                        }}
                      />
                    </td>

                    <td>
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
                    </td>
                    <td>
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
                      {console.log( data)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <th>No Modules added yet</th>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default SyllabusUpdate;
