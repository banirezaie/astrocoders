import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import Logout from "./authentication/Logout";
import StudentsNavbar from "./navbar/StudentsNavbar";
import { useUserProfile } from "./providers/UserProvider";
import StudentsView from "./students/StudentsView";
import { FaSearchLocation } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import MentorsNavbar from "./navbar/MentorsNavbar";


function Home(props) {
  const user = useUserProfile();

  console.log("User in Home", user);

  const adminView = () => (
    <div className="home">
      <div className="home-menu">
        <NavLink to="/createCode" className="btn btn-primary home-menu-items">
          <div>
            <FaKey color="white" size="25px" />
          </div>
          Create a class code
        </NavLink>

        <NavLink to="/locations" className="btn btn-primary home-menu-items">
          <div>
            <FaSearchLocation color="white" size="35px" />
          </div>
          Add-Delete Locations
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

        <NavLink to="/user-list" className="btn btn-primary home-menu-items">
          <div>
            <FaUserEdit color="white" size="35px" />
          </div>
          Update Users
        </NavLink>

        <NavLink to="/syllabus" className="btn btn-primary home-menu-items">
          <div>
            <FaList color="white" size="35px" />
          </div>
          Update Syllabus
        </NavLink>
      </div>
    </div>
  );

  const mentorView = () => (
    <div>
      <MentorsNavbar background="#888" hoverBackground="#ccc" linkColor="#eee"/>
      <div className="home">
        <div className="home-menu">
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
        background="#aaa"
        hoverBackground="#ccc"
        linkColor="#eee"
      />

      <div className="">
        <StudentsView {...props} />
      </div>
    </div>
  );

  return (
    <div>
      {user && user.role === "student" && studentView()}
      {user && user.role === "admin" && adminView()}

      {user && user.role === "mentor" && mentorView()}
      <Logout />
    </div>
  );
}

export default Home;
