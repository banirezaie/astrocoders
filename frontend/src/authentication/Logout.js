import React from "react";
import { googleSignout } from "../firebase";


export default function Logout() {
  return (
    <div>
      <button onClick={googleSignout}>Google Signout</button>
    </div>
  );
}
