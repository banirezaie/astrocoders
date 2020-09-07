import React, { useState, useEffect } from "react";
import "../App.css";
// import { Link } from "react-router-dom";
import DeleteGroup from "./DeleteGroup";

const ViewGroups = ({ id }) => {
  const [group, setGroup] = useState("");
  const apiBaseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PROD_API_URL
      : process.env.REACT_APP_LOCAL_API_URL;
  const loadLocation = () => {
    fetch(`${apiBaseUrl}/location/${id}`)
      // , { query: { location, groups, type } }
      .then((res) => res.json())
      .then((data) => setGroup(data));
  };

  useEffect(() => {
    loadLocation();
  });

  if (!group) {
    return <div>Loading...</div>;
  }

  const handleOnDeleteGroup = () => {
    loadLocation();
  };

  return (
    <div>
      <div className=""></div>
      <div className="table">
        <table className="table">
          {/* <thead>
            <tr>
              <th scope="col">#</th>
                          <th scope="col">Group Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead> */}

          {group ? (
            <tbody>
              {group.groups.map((data, i) => {
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{data.name}</td>
                    <td>
                      <DeleteGroup
                        props={{
                          locationId: group._id,
                          groupId: data._id,
                          onDeleteGroup: handleOnDeleteGroup,
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <th>No groups added yet</th>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default ViewGroups;
