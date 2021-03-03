import React, { useContext } from "react";
import { Context } from "../store/AppContext";
import { Link } from "react-router-dom";

const PersonCard = ({ person }) => {

const { store, actions } = useContext(Context)

  const handleClick = () => {
    actions.addFavorite(person)
  }

  return (
    <div className="col-xs-6 py-1 px-0">
      <div className="card" style={{ width: "12rem", height: "24rem"}}>
        <img style={{height: "10rem", objectFit: "cover", objectPosition: "top"}} src={person.pic} className="card-img-top" alt={person.name} />
        <div className="card-body d-flex flex-column justify-content-around">
          <h5 className="card-title">{person.name}</h5>
          <p className="card-text">Born: {person.birth_year}</p>
          <div className="d-flex flex-row">
            <Link to={`/sw-blog-fullstack/person/${person.id}`}>
              <button style={{width:"6rem", height:"3rem", fontSize: "12px"}} className="btn btn-warning">Open Bio</button>
            </Link>
            <button onClick={handleClick} style={{width:"6rem"}} className="btn btn-warning mx-1"><i className="bi bi-star-fill"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
