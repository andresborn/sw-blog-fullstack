import React from "react";

const PersonCard = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Luke Skywalker</h5>
        <p className="card-text">
          Jedi Knight
        </p>
        <a href="#" className="btn btn-warning">
          Open Bio
        </a>
      </div>
    </div>
  );
};

export default PersonCard;
