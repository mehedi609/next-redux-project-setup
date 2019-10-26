import { GET_USERS } from '../actions/types';

export const user_reducer = (state = null, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return { ...state, payload };
    default:
      return state;
  }
};
