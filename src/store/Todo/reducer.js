import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  TODO_TOGGLE_STATUS,
} from "./actionTypes";

const init = { todos: [], error: false, loading: false };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        todos: [...state.todos, payload],
      };
    }
    case ADD_TODO_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_TODO_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        todos: payload,
      };
    }
    case GET_TODO_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case TODO_TOGGLE_STATUS: {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === payload ? { ...item, status: !item.status } : item
        ),
      };
    }
    default: {
      return state;
    }
  }
};
