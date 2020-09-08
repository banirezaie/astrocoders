import React from "react";
import Home from "./Home";
import Students from "./students/Students";
import { Route, Switch } from "react-router-dom";
import MentorsView from "./mentors/MentorsView";
import Admin from "./admin/Admin";
import CreateClassCode from "./admin/CreateClassCode";
import ClassCodes from "./admin/ClassCodes";
import Groups from "./groups/Groups";
import GroupDetail from "./groups/GroupDetail";
import AttendeeList from "./attendees/AttendeeList";
import LocationUpdate from "./admin/LocationUpdate";
import AddLocation from "./admin/AddGroup";
import LoginPage from "./authentication/LoginPage";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
// import PasswordReset from "./authentication/PasswordReset";
import UserProvider from "./providers/UserProvider";
// const UserContext = createContext({ user: null });
import AdminView from "./admin/AdminView";

function App() {
  // useEffect(() => {
  //   auth.onAuthStateChanged(setUser);
  // });
  return (
    <UserProvider>
      <Switch>
        {}
        <Route path="/login" component={LoginPage} />
        <Route path="/loginx" component={Login} />
        {/* <Route path="/sign-in" component={SignIn} /> */}
        <Route path="/register" component={Register} />
        {/* <Route path="/password-reset" component={PasswordReset} /> */}
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
        <Route path="/mentors" component={MentorsView} />
      </Switch>
    </UserProvider>
  );
}

export default App;
