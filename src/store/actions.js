import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  TODO_TOGGLE_STATUS,
} from "./actionTypes";

export const addTodoLoading = () => ({
  type: ADD_TODO_LOADING,
});
export const addTodoSuccess = (res) => ({
  type: ADD_TODO_SUCCESS,
  payload: res,
});

export const addTodoError = () => ({
  type: ADD_TODO_ERROR,
});

export const getTodoLoading = () => ({
  type: GET_TODO_LOADING,
});

export const getTodoSuccess = (res) => ({
  type: GET_TODO_SUCCESS,
  payload: res,
});

export const getTodoError = () => ({
  type: GET_TODO_ERROR,
});

export const todoToggleStatus = (id) => ({
  type: TODO_TOGGLE_STATUS,
  payload: id,
});
