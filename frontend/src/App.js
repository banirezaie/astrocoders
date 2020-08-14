import React from "react";
import Home from "./Home";
import Students from "./students/Students";
import { Route, Switch } from "react-router-dom";
import Mentors from "./mentors/Mentors";
import Admin from "./admin/Admin";
import CreateClassCode from "./admin/CreateClassCode"

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/students" component={Students} exact />
      <Route path="/mentors" component={Mentors} />
      <Route path="/admin" component={Admin} />
      <Route path="/CreateCode" component={CreateClassCode} />
    </Switch>
  );
}

export default App;
