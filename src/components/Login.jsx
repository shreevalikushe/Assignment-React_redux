import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginError, loginLoading, loginSucess } from "../store/Auth/actions";

export const Login = () => {
  const { loading, error, token } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token,
  }));
  let validToken = localStorage.getItem("myToken");
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(loginLoading());
    let payload = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        dispatch(loginSucess(r));
      })
      .catch((e) => dispatch(loginError()));
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <div>
        <label>Email:</label>
        <input type="email" placeholder="Enter Email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" placeholder="Enter Password" />
      </div>
      <button onClick={handleLogin}>Login</button>
      {loading ? (
        <h1>...loading</h1>
      ) : error ? (
        <h1>Something is wrong</h1>
      ) : (
        validToken && <h1>Token is {validToken}</h1>
      )}
    </div>
  );
};
