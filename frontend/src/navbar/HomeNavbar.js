import React, { useState } from "react";
import homeNav from "./homeNav.json";
import { NavLink } from "react-router-dom";

import "../App.css";

const HomeNavbar = ({ background, hoverBackground }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);
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
        {homeNav.map((item, i) => (
          <li
            key={i}
            onMouseEnter={() => {
              setHoverIndex(i);
            }}
            onMouseLeave={() => {
              setHoverIndex(-1);
            }}
            style={{
              background: hoverIndex === i ? hoverBackground || "#999" : "",
            }}
          >
            <i className={item.icon} />
            {/* https://ionicons.com/v2/ */}
            <NavLink to={item.path}>{item.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HomeNavbar;
