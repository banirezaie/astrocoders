import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../firebase";
import { FormGroup, FormControl } from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  // const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = (event) => {
    event.preventDefault();
  
  };

  return (
    <div className="Login">
      <h1 className="">Sign Up</h1>
      <div className="">
        {/* {error !== null && (
          <div className="">
            {error}
          </div>
        )} */}
        <form className="" onSubmit={createUserWithEmailAndPasswordHandler}>
          <label htmlFor="displayName">Display Name:</label>
          <input
            type="text"
            className="form-control "
            name="displayName"
            value={displayName}
            id="displayName"
            onChange={(event) => setDisplayName(event.target.value)}
          />

          <FormGroup controlId="email">
            {/* <ControlLabel>Email</ControlLabel> */}
            <label>Email</label>
            <FormControl
              autoFocus
              type="email"
              name="userEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
         
          <FormGroup controlId="password">
            <label htmlFor="userPassword">Password</label>
            {/* <ControlLabel>Password</ControlLabel> */}
            <FormControl
              id="userPassword"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <button
            className=""
            onClick={() => {
              createUserWithEmailAndPasswordHandler();
            }}
          >
            Sign up
          </button>
        </form>
        <p className="text-center my-3">or</p>
        <button
          className=""
          onClick={signInWithGoogle}
        >
          Sign In with Google
        </button>
        <p className="text-center my-3">
          Already have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:text-blue-600">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
