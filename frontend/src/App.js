import React from "react";
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

function App() {
  return (
    <Switch>
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
  );
}

export default App;
