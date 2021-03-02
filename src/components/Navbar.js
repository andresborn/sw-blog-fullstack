import React from "react";
import { Link } from "react-router-dom";
import Favorites from "./Favorites";
import SearchBar from "./SearchBar";
import Button from "./Button";

const Navbar = ({}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="col-4 d-flex flex-row sw-font">
        <span>StarWars</span>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active d-flex align-items-center">
            <Link to="/sw-blog/">
              <span className="text-white nav-item nav-link">
                Home
              </span>
            </Link>
          </li>
          <li className="nav-item nav-link mr-auto">
            <Button linkTo="/sw-blog/register" content="Register" className="btn-secondary" />
          </li>
          <li className="nav-item nav-link mr-auto">
            <Button linkTo="/sw-blog/login" content="Log In" className="btn-warning" />
          </li>
          <li className="nav-item nav-link mr-auto">
            <Favorites />
          </li>
          <li className="nav-item nav-link mr-auto">
            <SearchBar />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
