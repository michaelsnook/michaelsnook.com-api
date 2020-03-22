import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Posts from "../components/Posts";
import Post from "../components/Post";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/posts" exact component={Posts} />
      <Route path="/post/:id" exact component={Post} />
    </Switch>
  </Router>
);
