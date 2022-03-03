import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div
      style={{
        width: "300px",
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        margin: "auto",
      }}
    >
      <Link to="/">Home Page</Link>
      <Link to="/login">Login Page</Link>
    </div>
  );
};
