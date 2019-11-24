import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import appRoutes from "./shared/appRoutes";

import Homepage from "./components/Homepage/homepage.js";
import ProjectScrollList from "./components/ProjectScrollList/projectscrolllist.js";

function App() {
  return (
    <Switch>
      <Route exact path={appRoutes.home}>
        <Homepage/>
      </Route>
      <Route exact path={appRoutes.projects}>
        <ProjectScrollList/>
      </Route>
    </Switch>
  );
}

export default App;
