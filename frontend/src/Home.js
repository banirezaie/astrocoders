import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import HomeNavbar from "./navbar/HomeNavbar";
import { UserContext } from "./providers/UserProvider";

function Home() {
  const user = useContext(UserContext);

  return (
    <div>
      <HomeNavbar background="#888" hoverBackground="#ddd" linkColor="#eee" />

      <div className="home">
        <div className="col-6">
          {<h1> Welcome {user && user.displayName}</h1>}

          <span className="col-2"></span>
          <NavLink to="/login" className="btn btn-primary col-5">
            Login Page
          </NavLink>
          {/* <NavLink to="/groups" className="btn btn-primary col-5">
            Show Groups
          </NavLink> */}
          <hr></hr>

          <NavLink to="/studentsView" className="btn btn-primary col-5">
           Students View
          </NavLink>
          <span className="col-2"></span>
          <NavLink to="/adminView" className="btn btn-primary col-5">
           Admin View
          </NavLink>
          <hr></hr>
          <NavLink to="/mentors" className="btn btn-primary col-5">
           Mentors page
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
