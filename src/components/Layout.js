import React from 'react';
import {Route, Switch} from 'react-router-dom';

import PostsList from './PostsList';
import PostsNew from './PostsNew';
import PostsShow from './PostsShow';

export default class Layout extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsList} />
        </Switch>
      </div>
    );
  }
}
