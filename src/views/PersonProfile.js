import React, { useContext } from "react";
import { Context } from "../store/AppContext";

const PersonProfile = ({ match }) => {
  const { store, actions } = useContext(Context);
  const person = store.people.filter(
    person => person.created === match.params.id
  )[0];
  const homeworld = store.planets.filter(
    planet => person.homeworld === planet.url
  )[0];

  return (
    <div className="container">
      <h1 className="breadcrumb">{person.name}</h1>
      <h6 className="breadcrumb bg-warning">Homeworld: {homeworld.name}</h6>
      <div className="d-flex flex-row">
      <img style={{width:"38rem", height: "28rem", objectFit: "cover", objectPosition: "top"}} src={`${actions.getPersonImage(person)}`} alt=""/>
      <div className="col">
        <div className="col">
          <ul className="list-group" style={{ listStyle: "none" }}>
            <li className="list-group-item">Birth year: {person.birth_year}</li>
            <li className="list-group-item">Eye color: {person.eye_color}</li>
            <li className="list-group-item">Gender: {person.gender}</li>
            <li className="list-group-item">Hair color: {person.hair_color}</li>
            <li className="list-group-item">Height: {person.height}</li>
            <li className="list-group-item">Mass: {person.mass}</li>
            <li className="list-group-item">Skin color: {person.skin_color}</li>
          </ul>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default PersonProfile;
