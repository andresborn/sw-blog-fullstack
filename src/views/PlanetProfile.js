import React, { useContext } from "react";
import { Context } from "../store/AppContext";

const PlanetProfile = ({ match }) => {
  console.log(match.params.id);
  const { store, actions } = useContext(Context);

  const planet = store.planets.filter((planet) => planet.created === match.params.id)[0];

  return (
    <div className="container">
      <h1 className="breadcrumb">{planet.name}</h1>
      <h6 className="breadcrumb bg-warning">Gravity: {planet.gravity}</h6>
      <div className="d-flex flex-row">
      <img style={{width:"38rem", height: "28rem", objectFit: "cover", objectPosition: "top"}} src={`${actions.getPlanetImage(planet)}`} alt=""/>
      <div className="col">
      <div className="col">
          <ul className="list-group" style={{ listStyle: "none" }}>
            <li className="list-group-item">Population: {planet.population}</li>
            <li className="list-group-item">Climate: {planet.climate}</li>
            <li className="list-group-item">Terrain: {planet.terrain}</li>
            <li className="list-group-item">Surface water: {planet.surface_water}</li>
            <li className="list-group-item">Diameter: {planet.diameter}</li>
            <li className="list-group-item">Orbital Period: {planet.orbital_period}</li>
            <li className="list-group-item">Rotation Period: {planet.rotation_period}</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PlanetProfile;
