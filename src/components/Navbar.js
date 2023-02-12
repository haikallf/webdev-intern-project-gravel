import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        style={{
          fontSize: "22px",
          textDecoration: "none",
          color: "#000000",
        }}
      >
        Pokemon
      </NavLink>
    </div>
  );
}

export default Navbar;
