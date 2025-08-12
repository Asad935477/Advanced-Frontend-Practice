import React from "react";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <div
      className={`footer ${
        location.pathname === "/thinking" ? "footer-dark" : ""
      }`}
    >
      <div className="container">
        <div className="footer-item">
          <p>
            <Link to="/">Neoteric Studio</Link>
          </p>
        </div>
        <div className="footer-item" id="footer-contact">
          <p>
            Work with us — write to <a href="#">contact@neoteric.com</a>
          </p>
        </div>
        <div className="footer-item">
          <p>&copy; 2016-2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
