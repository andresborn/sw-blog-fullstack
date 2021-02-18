import React, { useContext } from "react";
import { Context } from "../store/AppContext";

const Favorites = () => {
  const { store, actions } = useContext(Context);

  const removeHandler = (favorite) => {
    actions.removeFavorite(favorite);
  };

  const preventMenuCloseOnClick = (e) => {
    e.stopPropagation();
  };
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
        {store.favorites.map((favorite, i) => (
            <div
              onClick={preventMenuCloseOnClick}
              key={i}
              className="dropdown-item d-flex flex-row justify-content-between"
              type="button"
            >
              {favorite.name}
              <button
                onClick={() => removeHandler(favorite)}
                type="button"
                className="close"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
