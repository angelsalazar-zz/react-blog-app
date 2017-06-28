import _ from 'lodash';

import {FETCH_POSTS, CREATE_POST} from '../actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS: {
      const posts = _.mapKeys(action.payload.data, 'id');
      return {...state, posts};
    }
    // case CREATE_POST: {
    //   const
    // }
    default: {
      return state;
    }

  }
}
