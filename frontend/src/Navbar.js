import React from "react";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a href="https://codeyourfuture.io/">
        <img src="logo.png" className="logo ml-4" alt="logo" />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#somethingnavbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="https://codeyourfuture.io/about/">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="something">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="something"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="something">
                Action
              </a>
              <a className="dropdown-item" href="something">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="something">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="something"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
