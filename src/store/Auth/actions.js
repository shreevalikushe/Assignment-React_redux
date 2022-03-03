import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCESS } from "./actionTypes";

export const loginLoading = () => ({
  type: LOGIN_LOADING,
});

export const loginSucess = (data) => ({
  type: LOGIN_SUCESS,
  payload: data,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});
