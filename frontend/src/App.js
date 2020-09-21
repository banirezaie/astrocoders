import React from "react";
import Home from "./Home";
import { Route, Switch, Redirect } from "react-router-dom";
import MentorsView from "./mentors/MentorsView";
import Admin from "./admin/Admin";
import CreateClassCodeMentor from "./mentors/CreateClassCodeMentor";
import ClassCodes from "./admin/ClassCodes";
import GroupsMentor from "./groups/GroupsMentor";
import GroupDetail from "./groups/GroupDetail";
import AttendeeListMentor from "./attendees/AttendeeListMentor";
import LocationUpdate from "./admin/LocationUpdate";
import AddLocation from "./admin/AddGroup";
import LoginPage from "./authentication/LoginPage";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import UserProvider, { useUserProfile } from "./providers/UserProvider";
import StudentsView from "./students/StudentsView";
import StudentViewHistory from "./students/StudentViewHistory";
import AdminView from "./admin/AdminView";
import UserList from "./admin/UserList";
import SyllabusUpdate from "./admin/SyllabusUpdate";
import AttendeesListAdmin from "./attendees/AttendeeListAdmin";
import GroupsAdmin from "./groups/GroupsAdmin";
import CreateClassCode from "./admin/CreateClassCode";
import SyllabusUpdateMentor from "./mentors/SyllabusUpdateMentor";

function Routes() {
  const user = useUserProfile();

  if (!user) {
    return (
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/loginx" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect to="/login" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/studentsView" component={StudentsView} />
      <Route path="/locations" component={LocationUpdate} />
      <Route path="/attendees" component={AttendeeListMentor} exact />
      <Route path="/attendees-admin" component={AttendeesListAdmin} exact />
      <Route path="/add-location" component={AddLocation} />
      <Route path="/groups-admin" component={GroupsAdmin} exact />
      <Route path="/groups" component={GroupsMentor} exact />
      <Route path="/groups/:id/details" component={GroupDetail} />
      <Route path="/admin" component={Admin} />
      <Route path="/create-code" component={CreateClassCodeMentor} />
      <Route path="/class-code" component={ClassCodes} />
      <Route path="/create-code-admin" component={CreateClassCode} />
      <Route path="/adminView" component={AdminView} />
      <Route path="/user-list" component={UserList} />
      <Route path="/mentors" component={MentorsView} />
      <Route path="/student-history" component={StudentViewHistory} />
      <Route path="/syllabus" component={SyllabusUpdateMentor} />
      <Route path="/syllabus-admin" component={SyllabusUpdate} />
      <Redirect to="/" />
    </Switch>
  );
}

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
