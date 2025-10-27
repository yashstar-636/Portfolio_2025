import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <a href="#" className="logo">
          Yash Rathod
        </a>
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#skill">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#project">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
