import React from 'react'
import { Link } from "react-router-dom";
import Favorites from "./Favorites";
import SearchBar from './SearchBar';


const Navbar = ({}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="col-6 d-flex flex-row sw-font">
        <span>StarWars</span>
      </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link to="/sw-blog/">
          <span className="m-1 text-white d-flex justify-content-end">Home</span>
        </Link>
      </li>
      <li className="nav-item d-flex justify-content-end">
      <Favorites />
      </li>
      <li className="nav-item">
      <SearchBar />
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar

