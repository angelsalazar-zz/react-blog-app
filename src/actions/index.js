import axios from 'axios';

const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=angelsalazar1992';

export const FETCH_POSTS = 'FETCH_POSTS';


export const fetchPosts = ()  => {
  const request = axios.get(`${BASE_URL}/posts${API_KEY}`);
  return {
    type : FETCH_POSTS,
    payload : request
  }
}
