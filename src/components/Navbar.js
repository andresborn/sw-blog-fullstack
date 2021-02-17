import React from "react";
import Favorites from "./Favorites";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light px-auto">
      <span className="navbar-brand mb-0 h1 sw-font">StarWars</span>
      <Favorites />
    </nav>
  );
};

export default Navbar;
