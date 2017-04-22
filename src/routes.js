import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostDetail from './components/posts_detail';
import PostsNew from './components/posts_new';
import Users from './components/users';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />

    <Route path="posts" component={PostsIndex} />
    <Route path="posts/:id" component={PostDetail} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="users" component={Users} />
  </Route>

);
