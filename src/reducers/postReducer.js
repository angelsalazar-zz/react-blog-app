import _ from 'lodash';

import {FETCH_POSTS, FETCH_POST} from '../actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS: {
      const posts = _.mapKeys(action.payload.data, 'id');
      return {...state, posts};
    }
    case  FETCH_POST: {
      return {...state, [action.payload.data.id] : action.payload.data};
    }
    default: {
      return state;
    }

  }
}
