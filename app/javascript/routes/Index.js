import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Posts from "../components/Posts";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/posts" exact component={Posts} />
    </Switch>
  </Router>
);
