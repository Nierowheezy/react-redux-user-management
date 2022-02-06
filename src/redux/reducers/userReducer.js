import {
  ADD_USER,
  USER_LOADING,
  DELETE_USER,
  GET_USER,
  GET_USERS,
  UPDATE_USER,
} from "../constants/types";

const initialState = {
  users: [],
  user: {},
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case ADD_USER:
      console.log(action.payload);
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
