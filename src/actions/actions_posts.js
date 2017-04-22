import axios from 'axios';

const url = 'http://localhost:3000/posts';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';

export function fetchPosts(){
  const request = axios.get(`${url}`);

  return{
    type: FETCH_POSTS,
    payload: request
  };

}

export function fetchPost(id){
  const request = axios.get(`${url}/${id}`);

  return{
    type: FETCH_POST,
    payload: request
  };
}

export function createPost(props){
  const request = axios.post(`${url}`, props);

  return{
    type: CREATE_POST,
    payload: request
  };
}
