import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Todo = () => {
  const [todo, setTodo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/todos/${id}`)
      .then((r) => r.json())
      .then((r) => setTodo(r))
      .catch((e) => console.log(e));
  }, [id]);
  return (
    <>
      <br />
      <br />
      <div style={{ border: "1px solid black" }}>
        <h1>
          Title: {todo.title} | Status: {todo.status ? "DONE" : "NOT COMPLETE"}
        </h1>
      </div>
    </>
  );
};
