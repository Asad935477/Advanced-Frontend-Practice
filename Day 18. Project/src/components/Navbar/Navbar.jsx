import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  return (
    <div
      className={`navbar ${
        location.pathname === "/thinking" ? "navbar-dark" : ""
      }`}
    >
      <div className="container">
        <div className="navbar-logo">
          <div className="navbar-item">
            <Link to="/">Neoteric Studio</Link>
          </div>
        </div>
        <div className="navbar-items">
          <div className="navbar-item">
            <Link to="/work">Work</Link>
          </div>
          <div className="navbar-item">
            <Link to="/studio">Studio</Link>
          </div>
          <div className="navbar-item">
            <Link to="/thinking">Thinking</Link>
          </div>
          <div className="navbar-item">
            <Link to="/feed">Feed</Link>
          </div>
          <div className="navbar-item">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
