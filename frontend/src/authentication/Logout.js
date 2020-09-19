import React from "react";
import { googleSignout } from "../firebase";
import { useHistory } from "react-router-dom";

export default function Logout() {
  const history = useHistory();
  const handleSignOut = () => {
    googleSignout(() => {
      history.push("/login");
    });
  };
  return (
    <button onClick={handleSignOut} className="btn btn-link logOut">
      Sign out
    </button>
  );
}
