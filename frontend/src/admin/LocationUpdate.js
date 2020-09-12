import React, { useState, useEffect,useCallback } from "react";
import "../App.css";
// import { Link } from "react-router-dom";
import AddGroup from "../admin/AddGroup";
import ViewGroups from "./ViewGroups";
import AddLocation from "./AddLocation";
import DeleteLocation from "./DeleteLocation";

const LocationUpdate = ({ props }) => {
  const [location, setLocation] = useState("");

  const apiBaseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PROD_API_URL
      : process.env.REACT_APP_LOCAL_API_URL;

  const loadLocation = useCallback(() => {
    fetch(`${apiBaseUrl}/location`)
      .then((res) => res.json())
      .then((data) => setLocation(data));
  }, [apiBaseUrl]);

  useEffect(() => {
    loadLocation();
  }, [loadLocation]);

  if (!location) {
    return <div>Loading...</div>;
  }

  const handleOnDeleteLocation = () => {
    loadLocation();
  };
  const handleOnAddLocation = () => {
    loadLocation();
  };
  const handleOnAddGroup = () => {
    loadLocation();
  };

  return (
    <div>
      <div className="header">
        <h2>Location List</h2>
      </div>

      <div className="table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">
                <h4>Location</h4>
              </th>
              <th scope="col">
                <h4>Groups</h4>
              </th>
              <th scope="col">
                <h4>Actions</h4>
              </th>
              <th scope="col">
                <AddLocation
                  props={{
                    onAddLocation: handleOnAddLocation,
                  }}
                />
              </th>
            </tr>
          </thead>

          {location ? (
            <tbody>
              {location.map((data, i) => {
                return (
                  <tr key={i}>
                    <th>
                      <h4>{i + 1}</h4>
                    </th>
                    <td>
                      <h4>{data.name}</h4>
                      <DeleteLocation
                        props={{
                          id: data._id,
                          onDeleteLocation: handleOnDeleteLocation,
                        }}
                      />
                    </td>

                    <td>
                      {/* <Link
                        to={"/location/" + data._id}
                        className="btn btn-sm btn-primary"
                      >
                        View Groups
                      </Link> */}
                      <ViewGroups
                        id={data._id}
                        groups={data.groups}
                        setGroups={group => setLocation(location
                          .map(oldLocation => oldLocation === data ? ({ ...data, groups: group}) : oldLocation))}
                      />
                    </td>
                    <td>
                      <AddGroup
                        props={{
                          id: data._id,
                          onAddGroup: (group) => setLocation(location
                            .map(oldLocation => oldLocation === data ? ({ ...data, groups: data.groups.concat([group])}) : oldLocation))
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
