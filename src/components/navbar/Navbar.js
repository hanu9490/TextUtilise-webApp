import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.textMode} bg-${props.textMode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          TextUtiles
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`form-check form-switch text-${
            props.textMode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="toggleButton"
            onClick={props.toggleMode}
          />
          <label className="form-check-label mt-0" htmlFor="toggleButton">
            {props.textMode === "light"
              ? "Enable Darkmode"
              : "Enable Lightmode"}
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
