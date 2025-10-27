import React from "react";
import profile from "../Photos/yash_photo.jpg";
import "../App.css";

const Header = () => {
  return (
    <header className="header-section">
      <div className="header-container">
        <div className="header-left">
          <div className="header-left-detail">
            <h4>
              <b>Hello,</b> It's Me...
            </h4>
            <h1>Yash Rathod</h1>
            <h3>
              And I'm a <strong>MERN stack developer</strong>
            </h3>
            <p>
              Highly Motivated and enthusiastic recent graduate seeking to
              launch a career in web development with a focus on the MERN stack.
              Committed to continuous learning and professional growth in a
              dynamic work environment.
            </p>
          </div>
          <div className="social-icon">
            <li>
              <a
                href="https://linkedin.com/in/yash-rathod-676914338"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yashstar-636"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/yxsh_rxthod666/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </div>
        </div>
        <div className="header-right">
          <img src={profile} alt="Yash Rathod" />
        </div>
      </div>
    </header>
  );
};

export default Header;
