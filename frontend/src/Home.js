import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import HomeNavbar from "./navbar/HomeNavbar";
import { useUserProfile } from "./providers/UserProvider";

function Home() {
  const user = useUserProfile();
  

  const adminView=()=>(
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
      </div>
    </div>
  )
  

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
    <div className="home">
      <div className="col-4">
        
      </div>
    </div>
  )


  return (

    <div>
      <HomeNavbar background="#888" hoverBackground="#ddd" linkColor="#eee" />
      <div className="home">
     
        { user.role === "admin" && 
           adminView()
        }

        {user.role === "mentor" &&
          mentorView()
        }
        {user.role === "student" &&
          studentView()
        }
          

      </div>
    </div>
  );
}

export default Home;
