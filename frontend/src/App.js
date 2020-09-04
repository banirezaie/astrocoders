import React, { useState, createContext, useEffect } from "react";
import { auth } from "./firebase";
import Home from "./Home";
import Students from "./students/Students";
import { Route, Switch } from "react-router-dom";
// import Mentors from "./mentors/Mentors";
import Admin from "./admin/Admin";
import CreateClassCode from "./admin/CreateClassCode";
import ClassCodes from "./admin/ClassCodes";
import Groups from "./groups/Groups";
import GroupDetail from "./groups/GroupDetail";
import AttendeeList from "./attendees/AttendeeList";
import LocationUpdate from "./admin/LocationUpdate";
import AddLocation from "./admin/AddGroup";
import LoginPage from "./LoginPage";
import SignIn from "./authentication/SignIn";
import SignUp from "./authentication/SignUp";
import PasswordReset from "./authentication/PasswordReset";
import UserProvider from "./providers/UserProvider";
// const UserContext = createContext({ user: null });

function App() {

  // useEffect(() => {
  //   auth.onAuthStateChanged(setUser);
  // });
  return (
    <UserProvider>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/password-reset" component={PasswordReset} />
        <Route path="/" component={Home} exact />
        <Route path="/students" component={Students} exact />
        <Route path="/locations" component={LocationUpdate} />
        <Route path="/attendees" component={AttendeeList} />
        <Route path="/add-location" component={AddLocation} />
        <Route exact path="/groups" component={Groups} />
        <Route path="/groups/:id/details" component={GroupDetail} />
        <Route path="/admin" component={Admin} />
        <Route path="/CreateCode" component={CreateClassCode} />
        <Route path="/class-code" component={ClassCodes} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </UserProvider>
  );
}

export default App;
