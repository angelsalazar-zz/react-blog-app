import axios from 'axios';

const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=angelsalazar1992';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';


export const fetchPosts = ()  => {
  const request = axios.get(`${BASE_URL}/posts${API_KEY}`);
  return {
    type : FETCH_POSTS,
    payload : request
  }
}

export const createPost = (values, callback) => {
  const request = axios.post(`${BASE_URL}/posts${API_KEY}`, values).then(() => callback());
  return {
    type : CREATE_POST,
    payload : request
  }
}

export const fetchPost = (postId) => {
  const request = axios.get(`${BASE_URL}/posts/${postId}${API_KEY}`);
  return {
    type : FETCH_POST,
    payload : request
  }
}

export const deletePost = (postId, callback) => {
  const request = axios.delete(`${BASE_URL}/posts/${postId}${API_KEY}`).then(() => callback());
  return {
    type : DELETE_POST,
    payload : request
  }
}
