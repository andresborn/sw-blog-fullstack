import React from "react";

const PlanetCard = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Tatooine</h5>
        <p className="card-text">
          A barren wasteland. Home of the Skywalkers.
        </p>
        <a href="#" className="btn btn-warning">
          Click to view description
        </a>
      </div>
    </div>
  );
};

export default PlanetCard;