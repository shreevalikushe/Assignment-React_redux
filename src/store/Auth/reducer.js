import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCESS } from "./actionTypes";

const init = {
  loading: false,
  error: false,
  token: "",
};
export const authReducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case LOGIN_SUCESS: {
      return {
        ...state,
        loading: false,
        token: localStorage.setItem("myToken", payload.token),
      };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default:
      return { state };
  }
};
