import axios from "axios";
import { url } from "./apiUrl";
import {
  ADD_USER,
  USER_LOADING,
  CLEAR_ERRORS,
  DELETE_USER,
  GET_USER,
  GET_USERS,
  GET_ERRORS,
  UPDATE_USER,
} from "../constants/types";

// Add User
export const addUser = (userData) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post(url, userData)
    .then((res) =>
      dispatch({
        type: ADD_USER,
        payload: res.data,
      })
    )
    .catch(
      (err) => console.log(err)
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data,
      // })
    );
};

// Update User
export const updateUser = (id, updatedUser) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .put(`${url}/${id}`, updatedUser)
    .then((res) => {
      if (res.status === 200) {
        dispatch(getUsers());
      }
      dispatch({
        type: UPDATE_USER,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
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
    .catch((err) =>
      dispatch({
        type: GET_USERS,
        payload: null,
      })
    );
};

// Get User
export const getUser = (id) => (dispatch) => {
  dispatch(setUserLoading());
  axios
    .get(`${url}/${id}`)
    .then((res) =>
      dispatch({
        type: GET_USER,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_USER,
        payload: null,
      })
    );
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
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Set loading state
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
