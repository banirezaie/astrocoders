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
    <div >
      <button
        style={{ color: "black" }}
        className="btn btn-link"
        onClick={handleSignOut}
      >
        <div>
          {"  "}
          Sign Out
        </div>
      </button>
    </div>
  );
}
