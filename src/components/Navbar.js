import React from "react";
import { Link } from "react-router-dom";
import Favorites from "./Favorites";
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark px-auto">
      <div className="col-6 d-flex flex-row sw-font">
        <span>StarWars</span>
      </div>
      <div className="col-6 d-flex flex-row justify-content-end">
        <Link to="/sw-blog/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        <SearchBar />
        <Favorites />
      </div>
    </nav>
  );
};

export default Navbar;
