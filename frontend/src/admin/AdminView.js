import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import AdminNavbar from "../navbar/AdminNavbar";
import { UserContext } from "../providers/UserProvider";

function Home() {
  const user = useContext(UserContext);

  return (
    <div>
      <AdminNavbar background="#aaa" hoverBackground="#ddd" linkColor="#eee" />

      <div className="welcomeAdmin">
        <h1> Welcome {user && user.displayName}</h1>
      </div>

      <div className="home">
        <div className="col-4">
          <NavLink to="/createCode" className="btn btn-primary col-12">
            Create a class code
          </NavLink>
          <hr></hr>
          <NavLink to="/locations" className="btn btn-primary col-12">
            Add-Delete Locations
          </NavLink>
          <hr></hr>
          <NavLink to="/groups" className="btn btn-primary col-12">
            Groups
          </NavLink>
          <hr></hr>
          <NavLink to="/attendees-admin" className="btn btn-primary col-12">
            Attendees
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
