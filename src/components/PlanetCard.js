import React, { useContext } from "react";
import { Context } from '../store/AppContext'
import { Link } from "react-router-dom";

const PlanetCard = ({ planet }) => {

  const { actions } = useContext(Context)

  return (
    <div className="col-xs-6 py-1">
      <div className="card" style={{ width: "12rem", height: "32rem" }}>

        <img style={{height: "10rem", objectFit: "cover", objectPosition: "top"}} src={planet.pic} className="card-img-top" alt={planet.name} />

        <div className="card-body d-flex flex-column justify-content-around">
          <h4 className="card-title">{planet.name}</h4>
          <p>
            Population:
            <small className="text-muted"> {planet.population} </small>
          </p>
          <p>
            Gravity: <small className="text-muted"> {planet.gravity} </small>
          </p>
          <p>
            Climate: <small className="text-muted"> {planet.climate} </small>
          </p>
          <p>
            Terrain: <small className="text-muted"> {planet.terrain} </small>
          </p>
          <Link to={`/sw-blog-fullstack/planet/${planet.id}`}>
            <button className="btn btn-warning">View description</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
