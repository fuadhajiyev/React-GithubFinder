import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "component/layout/Navbar/Navbar";
import Home from "component/pages/Home";
import User from "component/Users/User/User";
import NotFound from "component/pages/NotFound"
import Alert from "component/layout/alert/Alert";
import About from "component/pages/About";
import Radium, { StyleRoot } from "radium";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <StyleRoot>
          <Router>

              <Navbar />
              <div className="container">
                <Alert />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/user/:login" component={User} />
                  <Route component={NotFound} />
                </Switch>
              </div>

          </Router>
        </StyleRoot>
      </AlertState>
    </GithubState>
  );
};

export default Radium(App);
