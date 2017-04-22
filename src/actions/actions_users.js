import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

const USER_SELECTED = 'USER_SELECTED';
const FETCH_USER = 'FETCH_USER';

export function searchUser(){
  const request = axios.get(`${url}`);

  return{
    type: FETCH_USER,
    payload: request
  };
}


export function selectUser(user){
  return{
    type: USER_SELECTED,
    payload: user
  };
}
