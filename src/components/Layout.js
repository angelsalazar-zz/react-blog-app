import React from 'react';
import {Route, Switch} from 'react-router-dom';

import PostsList from './PostsList';

export default class Layout extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path="/" component={PostsList} />
        </Switch>
      </div>
    );
  }
}
