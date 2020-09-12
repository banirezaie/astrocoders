import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import Logout from "./authentication/Logout";
import HomeNavbar from "./navbar/HomeNavbar";
import { useUserProfile } from "./providers/UserProvider";
import StudentsView from "./students/StudentsView";

function Home(props) {
  const user = useUserProfile();
  
  console.log('User in Home', user);

  const adminView = () => (
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
          Show Groups
        </NavLink>
        <hr></hr>
        <NavLink to="/attendees" className="btn btn-primary col-12">
          Show Attendees
        </NavLink>
        <hr></hr>
        <NavLink to="/user-list" className="btn btn-primary col-12">
          Update Users
        </NavLink>
      </div>
    </div>
  );
  

  const mentorView = () => (
    <div className="home">
      <div className="col-4">
        <NavLink to="/groups" className="btn btn-primary col-12">
          Show Groups
          </NavLink>
        <hr></hr>
        <NavLink to="/attendees" className="btn btn-primary col-12">
          Show Attendees
          </NavLink>
      </div>
    </div>
  )

  const studentView = () => (
    <div className="">
      <div className="">
        <StudentsView {...props} />
      </div>
    </div>
  )


  return (
    <div>
      <HomeNavbar background="#888" hoverBackground="#ddd" linkColor="#eee" />
      {user && user.role === "student" && studentView()}
        {user && user.role === "admin" && adminView()}

        {user && user.role === "mentor" && mentorView()}
        <Logout />
    </div>
  );
}

export default Home;
