import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./Main.scss"

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Header />

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
      <Footer />
    </div>
  </HashRouter>,
  document.getElementById('root')
);


