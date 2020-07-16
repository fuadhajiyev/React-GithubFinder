import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavigationItems = () => {
  return (
    <ul className="menu">
      <li>
        <NavLink exact activeClassName="main-nav-active" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="main-nav-active" to="/about">About</NavLink>
      </li>
    </ul>
  );
};

export default NavigationItems;
