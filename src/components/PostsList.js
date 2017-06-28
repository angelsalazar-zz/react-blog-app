import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import {fetchPosts} from '../actions';

const mapStateToProps = (store) => {
  return { posts : store.posts }
}

@connect(mapStateToProps, {fetchPosts})
export default class PostsList extends React.Component {
  componentDidMount () {
      this.props.fetchPosts();
  }

  renderPosts () {
    return _.map(this.props.posts.posts, (post) => {
      return (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      );
    });
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <div className="text-xs-right">
          <Link
            className="btn btn-primary"
            to="/posts/new">
            Add post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}
