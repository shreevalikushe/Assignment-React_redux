import { combineReducers, createStore } from "redux";
import { reducer as todoReducer } from "./Todo/reducer";
import { authReducer } from "./Auth/reducer";

const mainReducer = combineReducers({ todo: todoReducer, auth: authReducer });
export const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());
