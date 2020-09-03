import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
// import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div className="login-header">
          <h4>Log in</h4>
        </div>
        <FormGroup controlId="email">
          {/* <ControlLabel>Email</ControlLabel> */}
          <label>Email</label>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <label>Password</label>
          {/* <ControlLabel>Password</ControlLabel> */}
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button disabled={!validateForm()} type="submit">
          Login
        </Button>
        <hr></hr>
        <Button block bsSize="medium" type="submit">
          <i className="fa fa-google-plus"></i>
          Log in with Google
        </Button>
      </form>
    </div>
  );
}
