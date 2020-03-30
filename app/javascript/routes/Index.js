import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Posts from '../components/Posts';
import Post from '../components/Post';
import NewPost from '../components/NewPost'

export default (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/posts' exact component={Posts} />
      <Route path='/posts/new' exact component={NewPost} />
      <Route path='/posts/:id(\d+)' exact component={Post} />
    </Switch>
  </Router>
);
