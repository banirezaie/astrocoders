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
          <NavLink to="/mentors" className="btn btn-primary col-5">
            Mentors
          </NavLink>
          <span className="col-2"></span>
          <hr></hr>
          <NavLink to="/createCode" className="btn btn-primary col-5">
            Create a class code
          </NavLink>
          <span className="col-2"></span>
          <NavLink to="/class-code" className="btn btn-primary col-5">
            Show classes
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
