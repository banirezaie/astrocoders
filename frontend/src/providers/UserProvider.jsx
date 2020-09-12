import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const UserContext = createContext({ user: null });
export const useUserProfile = () => React.useContext(UserContext);

const UserProvider = (props) => {
  const apiBaseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PROD_API_URL
      : process.env.REACT_APP_LOCAL_API_URL;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fetch(`${apiBaseUrl}/login/create-user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            displayName: user.displayName,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            setUser(data);
            setLoading(false);
          })

          .catch((error) => console.log(error));
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, [apiBaseUrl]);

  if (loading) return <div>Please wait..</div>;
  console.log(user);
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
