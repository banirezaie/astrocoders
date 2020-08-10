import React from "react";
import Home from "./Home";
import Students from "./students/Students";
import ClassType from "./students/ClassType";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/students" component={Students} exact />
      <Route path="/students/classtype" component={ClassType} />
    </Switch>
  );
}

export default App;
