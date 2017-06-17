import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

@connect(null, {fetchPosts})
export default class PostsList extends React.Component {
  componentDidMount () {
      this.props.fetchPosts();
  }

  render () {
    return (
      <div> Post List </div>
    );
  }
}
