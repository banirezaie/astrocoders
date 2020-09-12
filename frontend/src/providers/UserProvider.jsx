import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const UserContext = createContext({ user: null });
export const useUserProfile = ()=>React.useContext(UserContext);

const UserProvider = (props) => {
  const apiBaseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_LOCAL_API_URL;
  const [user, setUser] = useState(null);
  
  const body = JSON.stringify({
    // socialId : user.socialId,
    // email: user.email,
    // name: user.displayName,
    email: "mahmut@hotmail.com",
    displayName: "Mahmut",
  });



console.log(user)
   useEffect(() => {
     auth.onAuthStateChanged(() => {
       fetch(`${apiBaseUrl}/login/create-user`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body,
       })
         .then((res) => res.json())
         .then((data) => {
           setUser(data);
         })

         .catch((error) => console.log(error));
     });
   }, [apiBaseUrl, body]);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
