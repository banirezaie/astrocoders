import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="home">
      <div className="col-6">
        <NavLink to="/students" className="btn btn-primary col-5">
          Students
        </NavLink>
        <span className="col-2"></span>
        <NavLink to="/mentors" className="btn btn-primary col-5">
          Mentors
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
