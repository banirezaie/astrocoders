import React from "react";
import { googleSignout } from "../firebase";
import {useHistory} from "react-router-dom"

 

export default function Logout() {
  const history = useHistory()
  const handleSignOut = ()=>{
    googleSignout(()=>{
     
     history.push("/login")
    })
    
  }
  return (
    <div>
      <button onClick={handleSignOut}>Google Signout</button>
    </div>
  );
}
