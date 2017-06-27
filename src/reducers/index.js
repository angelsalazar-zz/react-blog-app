import {combineReducers} from 'redux';

// import other reducers
import posts from './postReducer';
import {reducer as form} from 'redux-form';

export default combineReducers({
  posts,
  form
});
