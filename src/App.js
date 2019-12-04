import React from 'react';
import { Switch, Route } from "react-router-dom";
import appRoutes from "./shared/appRoutes";

import NavBar from "./components/NavBar/NavBar";
import Background from "./components/Background/background";

import Homepage from "./components/Homepage/homepage.js";
import ProjectScrollList from "./components/ProjectScrollList/projectscrolllist.js";
// import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="MainContent">
        <Switch>
          <Route exact path={appRoutes.home}>
            <Homepage/>
          </Route>
          <Route exact path={appRoutes.homenew}>
            <Homepage/>
            <Background/>
          </Route>
          <Route exact path={appRoutes.projects}>
            <ProjectScrollList/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
