import React, { useContext } from "react";
import { Context } from '../store/AppContext'
import { Link } from "react-router-dom";

const PlanetCard = ({ planet }) => {

  const {store} = useContext(Context)

  const getPlanetImage = () => {
    const filtered = store.planetImages.filter(image => image.name === planet.name)
    const image = filtered.map(each=> each.url)[0]
    return image
  }

  return (
    <div className="col-xs-6 py-1">
      <div className="card" style={{ width: "12rem", height: "32rem" }}>

        <img style={{height: "10rem", objectFit: "cover", objectPosition: "top"}} src={`${getPlanetImage()}`} className="card-img-top" alt="A picture of the planet of the Wookies" />

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
          <Link to={`/sw-blog/planet/${planet.created}`}>
            <button className="btn btn-warning">View description</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
