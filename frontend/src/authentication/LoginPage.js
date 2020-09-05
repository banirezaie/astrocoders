import React from "react";
import Login from "./Login";
import logo from "../image/cyf_brand.png";
import "../App.css";

export default function LoginPage() {
  return (
    <div className="">
      <div className="row-login">
        <div className="col-md-5">
          <div>
            <div className="login-title">
              <h1>ATTENDANCE REGISTRATION</h1>
            </div>
            <Login />
          </div>
          <span></span>
          <div className="row-login">
            <div className="col-md-5">
              <img alt="login-logo" className="login-logo" src={logo} />
            </div>
            <div className="col-md-5">
              <p>Learn to code and change your life</p>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="login-image"></div>
        </div>
      </div>
    </div>
  );
}
