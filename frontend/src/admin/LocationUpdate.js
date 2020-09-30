import React, { useState, useEffect, useCallback } from "react";
import "../App.css";
import AddGroup from "../admin/AddGroup";
import ViewGroups from "./ViewGroups";
import AddLocation from "./AddLocation";
import DeleteLocation from "./DeleteLocation";
import AdminNavbar from "../navbar/AdminNavbar";

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


  return (
    <div className="same-background">
      <AdminNavbar background="#aaa" hoverBackground="#ddd" linkColor="#eee" />
      <div className="wrapper">
        <div className="margin-top row justify-content-between width">
          <div className="col-4">
            <h1 className="text-white">Location List</h1>
          </div>
          <div className="col-4">
            <AddLocation
              props={{
                onAddLocation: handleOnAddLocation,
              }}
            />
          </div>
        </div>
        {location.map((data, i) => {
          return (
            <div className="container">
              <div className="row">
                <div className="col-sm-4 col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-city">{data.name}</h4>
                      <DeleteLocation
                        props={{
                          id: data._id,
                          onDeleteLocation: handleOnDeleteLocation,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Group Names</h5>

                      <ul className="list-group ">
                        <ViewGroups
                          id={data._id}
                          groups={data.groups}
                          setGroups={(group) =>
                            setLocation(
                              location.map((oldLocation) =>
                                oldLocation === data
                                  ? { ...data, groups: group }
                                  : oldLocation
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
                      <AddGroup
                        props={{
                          id: data._id,
                          onAddGroup: (group) =>
                            setLocation(
                              location.map((oldLocation) =>
                                oldLocation === data
                                  ? {
                                      ...data,
                                      groups: data.groups.concat([group]),
                                    }
                                  : oldLocation
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

export default LocationUpdate;
