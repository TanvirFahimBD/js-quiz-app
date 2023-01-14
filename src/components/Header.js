import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            JS Quiz App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <Link to="/" className="navbar-text mx-3">
              Topics
            </Link>
            <Link to="/statistics" className="navbar-text mx-3">
              Statistics
            </Link>
            <Link to="/blogs" className="navbar-text mx-3">
              Blogs
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
