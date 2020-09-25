import React from "react";
import Login from "./Login";
import logo from "../image/cyf_brand.png";
import "../App.css";


export default function LoginPage() {
  return (
    <div>
      {/* <LoginNavbar background="#888" hoverBackground="#ddd" linkColor="#eee" /> */}
      <div className="">
        <div className="row-login">
          <div className="col-md-5">
            <div className="row-login">
              <div className="col-md-5">
              <span className = "extra"></span>
                <img alt="login-logo" className="login-logo" src={logo} />
              </div>
              <div className="col-md-5 stretch"></div>
            </div>
            <div>
              <span className = "extra"></span><hr></hr>
              <span className ="extra"></span>
              <Login />
            </div>
            <span className = "extra"></span>
            <hr></hr>
            <span className = "" ></span>
            <div className="row-login">
              <div className="col-md-12">
                <nav className="navbar navbar-expand-lg ">
                  <a className="" href="https://codeyourfuture.io/about/">
                    ABOUT US
                  </a>
                  {
                    <div className="navbar navbar-expand-lg">
                      <ul className="navbar-nav">
                        <li className="nav-item active">
                          <a
                            className="nav-link"
                            href="mailto:contact@codeyourfuture.io"
                          >
                            CONTACT <span className="sr-only">(current)</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  }
                </nav>{" "}
              </div>

              {/* <div className="col-md-5">
                <p>Learn to code and change your life</p>
              </div> */}
            </div>
          </div>
          <div className="col-md-7">
            <div className="login-image"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
