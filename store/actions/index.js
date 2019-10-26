import axios from 'axios';
import { GET_USERS } from './types';

export const getUsers = () => {
  const data = axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data);

  return {
    type: GET_USERS,
    payload: data
  };
};
