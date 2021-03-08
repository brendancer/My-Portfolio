
import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"


const App = () => {


  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route exact path="/contact" component={Contact}>
          <Contact />
        </Route>
        <Route exact path="/projects" component={Projects}>
          <Projects />
        </Route>
        <Route exact path="/resume" component={Resume}>
          <Resume />
        </Route>
      </Switch>
    </HashRouter>
  );
}




export default App;
