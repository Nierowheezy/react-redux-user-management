import axios from "axios";
import { url } from "./apiUrl";
import {
  CREATE_USER,
  USER_LOADING,
  DELETE_USER,
  GET_USERS,
  UPDATE_USER,
} from "../constants/types";

// Add User
export const addUser = (userData) => (dispatch) => {
  axios
    .post(url, userData)
    .then((res) =>
      dispatch({
        type: CREATE_USER,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

// Update User
export const updateUser = (id, updatedUser) => (dispatch) => {
  axios
    .put(`${url}/${id}`, updatedUser)
    .then((res) => {
      dispatch({
        type: UPDATE_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// Get Users
export const getUsers = () => (dispatch) => {
  dispatch(setUserLoading());
  axios
    .get(url)
    .then((res) =>
      dispatch({
        type: GET_USERS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

// Delete User
export const deletUser = (id) => (dispatch) => {
  axios
    .delete(`${url}/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_USER,
        payload: id,
      })
    )
    .catch((err) => console.log(err));
};

// Set loading state
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};
