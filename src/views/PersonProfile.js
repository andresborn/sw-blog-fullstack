import React, { useContext } from "react";
import { Context } from "../store/AppContext";

const PersonProfile = ({ match }) => {
  const { store, actions } = useContext(Context);
  const person = store.people.filter(
    person => person.id === parseFloat(match.params.id)
  )[0];

  return (
    <div className="container">
      <h1 className="breadcrumb">{person.name}</h1>
      { // Obi-Wan is missing planet, conditionally render out his homeworld
        person.name === "Obi-Wan Kenobi" 
        ? null 
        : <h6 className="breadcrumb bg-warning">Homeworld: {person.homeworld}</h6>
        }
      <div className="row d-flex flex-column">
      <div className="col-12">
      <img className="pb-5" style={{maxWidth:"100%", objectFit: "cover", objectPosition: "top"}} src={person.pic} alt=""/>
      </div>
      <div className="col-12">
        
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
  );
};

export default PersonProfile;
