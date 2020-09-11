import React, { useState } from "react";

import Logout from "../authentication/Logout";
import "../App.css";

const StudentNavbar = ({ background, hoverBackground }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="responsive-toolbar" style={{ background }}>
      <ul style={{ background }} className={navOpen ? "active" : ""}>
        <figure
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <img src="logo.png" alt="logo" />
        </figure>
        <Logout />{" "}
      </ul>
    </nav>
  );
};

export default StudentNavbar;
