import React, {  useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { Redirect } from "react-router-dom";


import { signInWithGoogle } from "../firebase";
import { Button, } from "react-bootstrap";

// import "./Login.css";

export default function Login() {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const signInWithEmailAndPasswordHandler = (event) => {
  //   event.preventDefault();
  // };
  const user = useContext(UserContext);

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }
  
  return (

   <div className="Login">
      <div className="login">
        <h4> </h4>
      </div>

     
      {user ? <Redirect to="/" /> :
        <div>


      <Button block bsSize="small" onClick={signInWithGoogle}>
              <i className="fa fa-google-plus"></i>
        Login with Google
      </Button>


        </div> }

         </div>
    
  );
}
// Native login form 
      // {/* <form onSubmit={signInWithEmailAndPasswordHandler}>
      //   <FormGroup controlId="email">
      //     {/* <ControlLabel>Email</ControlLabel> */}
      //     <label>Email</label>
      //     <FormControl
      //       autoFocus
      //       type="email"
      //       value={email}
      //       onChange={(e) => setEmail(e.target.value)}
      //     />
      //   </FormGroup>
      //   <FormGroup controlId="password">
      //     <label>Password</label>
      //     {/* <ControlLabel>Password</ControlLabel> */}
      //     <FormControl
      //       value={password}
      //       onChange={(e) => setPassword(e.target.value)}
      //       type="password"
      //     />
      //   </FormGroup>
      //   <Button disabled={!validateForm()} type="submit" block bsSize="medium">
      //     Login
      //   </Button>{" "}
      //       <p className="text-center my-3">or</p>
      //       <Button block bsSize="small" onClick={signInWithGoogle}>
      //         <i className="fa fa-google-plus"></i>
      //   Login with Google
      // </Button>
      //       <p className="text-center my-3">
      //         Don't have an account?{" "}
      //         <Link to="/register" className="text-blue-500 hover:text-blue-600">
      //           Sign up here
      //   </Link>{" "}
      //         <br />{" "}
      //         {/* <Link
      //     to="/password-reset"
      //     className="text-blue-500 hover:text-blue-600"
      //   >
      //     Forgot Password?
      //   </Link> */}
      //       </p>
      // </form> */}

