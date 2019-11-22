import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import appRoutes from "./shared/appRoutes";

import ProjectScrollList from "./components/ProjectScrollList/projectscrolllist.js";
import ProjectScrollListR from "./components/ProjectScrollList/projectscrollp.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path={appRoutes.home}>
            <ProjectScrollList />
          </Route>
          <Route exact path={appRoutes.projects}>
            <ProjectScrollListR />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
