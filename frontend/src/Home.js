import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import HomeNavbar from "./navbar/HomeNavbar";

function Home() {
  return (
    <div>
      <HomeNavbar background="#888" hoverBackground="#ddd" linkColor="#eee" />
      <div className="home">
        <div className="col-6">
          <NavLink to="/students" className="btn btn-primary col-5">
            Students
          </NavLink>
          <span className="col-2"></span>
          <NavLink to="/locations" className="btn btn-primary col-5">
            Add-Delete Locations
          </NavLink>
          <hr></hr>
          <NavLink to="/createCode" className="btn btn-primary col-5">
            Create a class code
          </NavLink>
          <span className="col-2"></span>
          <NavLink to="/groups" className="btn btn-primary col-5">
            Show Groups
          </NavLink>
          <span className="col-2"></span>
          <hr></hr>
          <NavLink to="/attendees" className="btn btn-primary col-5">
            Show Attendees
          </NavLink>
          <span className="col-2"></span>
          <NavLink to="/login" className="btn btn-primary col-5">
            Login Page
          </NavLink>
          {/* <NavLink to="/groups" className="btn btn-primary col-5">
            Show Groups
          </NavLink> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
