import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import { useUserProfile } from "./providers/UserProvider";
import StudentsView from "./students/StudentsView";
import { FaSearchLocation } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import MentorsNavbar from "./navbar/MentorsNavbar";
import AdminNavbar from "./navbar/AdminNavbar";
import StudentsNavbar from "./navbar/StudentsNavbar";

function Home(props) {
  const user = useUserProfile();

  // console.log("User in Home", user);

  const adminView = () => (
    <div>
      <AdminNavbar background="#888" hoverBackground="#ccc" linkColor="#eee" />
      <div className="home">
        <div className="home-menu">
          <NavLink to="/user-list" className="btn btn-primary home-menu-items">
            <div>
              <FaUserEdit color="white" size="35px" />
            </div>
            Update Users
          </NavLink>

          <NavLink
            to="/syllabus-admin"
            className="btn btn-primary home-menu-items"
          >
            <div>
              <FaList color="white" size="35px" />
            </div>
            Update Syllabus
          </NavLink>

          <NavLink
            to="/create-code-admin"
            className="btn btn-primary home-menu-items"
          >
            <div>
              <FaKey color="white" size="25px" />
            </div>
            Create a class code
          </NavLink>

          <NavLink
            to="/attendees-admin"
            className="btn btn-primary home-menu-items"
          >
            <div>
              <FaUserGraduate color="white" size="35px" />
            </div>
            Attendees
          </NavLink>

          <NavLink
            to="/groups-admin"
            className="btn btn-primary home-menu-items"
          >
            <div>
              <i style={{ color: "#fff" }} className="ion-clipboard ion" />
            </div>
            Groups
          </NavLink>

          <NavLink to="/locations" className="btn btn-primary home-menu-items">
            <div>
              <FaSearchLocation color="white" size="35px" />
            </div>
            Manage Locations
          </NavLink>
        </div>
      </div>
    </div>
  );

  const mentorView = () => (
    <div>
      <MentorsNavbar
        background="#888"
        hoverBackground="#ccc"
        linkColor="#eee"
      />

      <div className="home">
        <div className="home-menu">
          <NavLink
            to="/create-code"
            className="btn btn-primary home-menu-items"
          >
            <div>
              <FaKey color="white" size="25px" />
            </div>
            Create a class code
          </NavLink>

          <NavLink to="/groups" className="btn btn-primary home-menu-items">
            <div>
              <FaSchool color="white" size="35px" />
            </div>
            Show Groups
          </NavLink>

          <NavLink to="/attendees" className="btn btn-primary home-menu-items">
            <div>
              <FaUserGraduate color="white" size="35px" />
            </div>
            Show Attendees
          </NavLink>
        </div>
      </div>
    </div>
  );

  const studentView = () => (
    <div className="">
      <StudentsNavbar
        background="#888"
        hoverBackground="#ccc"
        linkColor="#eee"
      />
      <StudentsView {...props} />
    </div>
  );

  return (
    <div>
      {user && user.role === "student" && studentView()}
      {user && user.role === "admin" && adminView()}
      {user && user.role === "mentor" && mentorView()}
    </div>
  );
}

export default Home;
