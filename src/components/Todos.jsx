import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
  todoToggleStatus,
} from "../store/actions";

export const Todos = () => {
  const [text, setText] = useState("");
  let { loading, todos, error } = useSelector((state) => ({
    loading: state.loading,
    todos: state.todos,
    error: state.error,
  }));
  useEffect(() => {
    getTodo();
  }, []);
  const dispatch = useDispatch();
  const getTodo = () => {
    dispatch(getTodoLoading());
    fetch("http://localhost:3001/todos")
      .then((r) => r.json())
      .then((res) => {
        dispatch(getTodoSuccess(res));
      })
      .catch((e) => dispatch(getTodoError(e)));
  };
  const addTodo = () => {
    const payload = {
      title: text,
      status: false,
    };
    dispatch(addTodoLoading());
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((r) => r.json())
      .then((res) => {
        dispatch(addTodoSuccess(res));
        setText("");
      })
      .catch((err) => dispatch(addTodoError(err)));
    getTodo();
  };
  const toggle = ({ id, title, status }) => {
    let payload = {
      title,
      id,
      status: !status,
    };
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((r) => r.json())
      .then((r) => dispatch(todoToggleStatus(id)))
      .catch((e) => console.log(e));
    getTodo();
  };
  const deleteTodo = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
    getTodo();
  };

  return (
    <div>
      <br />
      <div>
        <input
          type="text"
          placeholder="Add Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}>Add </button>
      </div>
      {loading ? (
        <h1>...loading</h1>
      ) : error ? (
        <h1>Something went wrong</h1>
      ) : (
        <>
          {todos.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid black",
                padding: "1rem",
                width: "600px",
                margin: "1rem auto",
              }}
            >
              {" "}
              <Link to={`todos/${item.id}`}>
                <h3>
                  Title: {item.title} | Status:{" "}
                  {item.status ? "DONE" : "NOT DONE"}
                </h3>{" "}
              </Link>
              <button onClick={() => toggle(item)}>Toggle Status</button>
              <button
                onClick={() => deleteTodo(item.id)}
                style={{ marginLeft: "1rem" }}
              >
                X
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
