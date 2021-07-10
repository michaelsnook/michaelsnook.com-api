import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from '../components/Posts';
import ListDraftPosts from '../components/ListDraftPosts';
import Post from '../components/Post';
import NewPost from '../components/NewPost';
import UpdatePost from '../components/UpdatePost';
import Brand from '../components/Brand';

export default (
  <Router>
    <Switch>
      <Route path='/' exact component={Posts} />
      <Route path='/brand' exact component={Brand} />
      <Route path='/posts' exact component={Posts} />
      <Route path='/posts/drafts' exact component={ListDraftPosts} />
      <Route path='/posts/new' exact component={NewPost} />
      <Route path='/posts/:id(\d+)' exact component={Post} />
      <Route path='/posts/:id(\d+)/update' exact component={UpdatePost} />
    </Switch>
  </Router>
);
