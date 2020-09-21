import React, { useState } from "react";
import mentorsNav from "./mentorsNav.json";
import { NavLink } from "react-router-dom";
import Logout from "../authentication/Logout";
import "../App.css";

const MentorsNavbar = ({ background, hoverBackground }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);
  const [hamburgerHover, setHamburgerHover] = useState(false);

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
        {window.innerWidth < 760 ? (
          <li
            onClick={() => {
              setNavOpen(!navOpen);
            }}
            onMouseEnter={() => {
              setHamburgerHover(true);
            }}
            onMouseLeave={() => {
              setHamburgerHover(false);
            }}
            style={{
              background:
                hamburgerHover === true ? hoverBackground || "#999" : "",
            }}
          >
            <i style={{ color: "#bc3d53" }} className="ion-navicon" />
            <span style={{ marginLeft: "20px" }}>Close Menu</span>
          </li>
        ) : null}
        {mentorsNav.map((item, i) => (
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
            <i style={{ color: "#bc3d53" }} className={item.icon} />
            {/* https://ionicons.com/v2/ */}
            <NavLink to={item.path}>{item.text}</NavLink>
          </li>
        ))}
        <li className="logOut">
          <i style={{ color: "#bc3d53" }} className={"ion-log-out"} />
          <Logout />
        </li>
      </ul>
    </nav>
  );
};

export default MentorsNavbar;
