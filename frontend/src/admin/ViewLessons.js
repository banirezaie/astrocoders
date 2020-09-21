import React from "react";
import "../App.css";
import DeleteLesson from "./DeleteLesson";

const ViewLessons = ({ id, lessons, setLessons }) => {
  return (
    <div>
      <div className=""></div>
      <div className="table">
        <table className="table">
          {lessons && lessons.length > 0 ? (
            <tbody>
              {lessons.map((data, i) => {
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{data.name}</td>
                    <td>
                      <DeleteLesson
                        props={{
                          moduleId: id,
                          lessonId: data._id,
                          onDeleteLesson: () =>
                            setLessons(
                              lessons.filter((oldlesson) => oldlesson !== data)
                            ),
                        }}
                      />
                      {console.log(id)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <th>No lesson added yet</th>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default ViewLessons;
