import React from "react";

const Favorites = () => {
  return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-dark dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Favorites
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <button className="dropdown-item" type="button">
            Darth Maul
          </button>
          <button className="dropdown-item" type="button">
            Luke Skywalker
          </button>
          <button className="dropdown-item" type="button">
            C3PO
          </button>
        </div>
      </div>
  );
};

export default Favorites;
