import React, { useContext } from "react";
import PersonCard from "../components/PersonCard";
import PlanetCard from "../components/PlanetCard";
import { Context } from "../store/AppContext";

const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container my-2">
      <h2 className="text-white">Characters</h2>
      <div className="row my-3 d-flex flex-row mx-auto justify-content-between">
        {store.people &&
          store.people.map((person, i) => (
            <PersonCard key={i} person={person} />
          ))}
      </div>
      <h2 className="text-white">Planets</h2>
      <div className="row my-3 d-flex flex-row mx-auto justify-content-between">
        {store.planets &&
          store.planets.map((planet, i) => (
            <PlanetCard key={i} planet={planet} />
          ))}
      </div>
    </div>
  );
};

export default Home;
