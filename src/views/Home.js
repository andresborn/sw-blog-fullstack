import React from "react";
import PersonCard from "../components/PersonCard";
import PlanetCard from "../components/PlanetCard";

const Home = () => {
  return (
    <div className="container my-2">
      <h2>Characters</h2>
      <div className="row my-3 d-flex flex-row mx-auto justify-content-between">
        <div className="col-xs-6">
          <PersonCard />
        </div>
        <div className="col-xs-6">
          <PersonCard />
        </div>
        <div className="col-xs-6">
          <PersonCard />
        </div>
      </div>
      <h2>Planets</h2>
      <div className="row my-3 d-flex flex-row mx-auto justify-content-between">
        <div className="col-xs-6">
          <PlanetCard />
        </div>
        <div className="col-xs-6">
          <PlanetCard />
        </div>
        <div className="col-xs-6">
          <PlanetCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
