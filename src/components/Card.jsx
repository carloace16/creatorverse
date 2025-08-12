import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link
import "./Card.css";

const Card = (props) => {
  const handleVisitChannel = (event) => {
    // ADD THIS LINE TO DEBUG
    console.log("Attempting to open URL:", props.url);

    window.open(props.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="Card">
      {props.imageURL && (
        <img
          className="card-image"
          src={props.imageURL}
          alt={props.name + "'s custom image"}
        />
      )}

      {/* Name is no longer a link */}
      <h2 className="name">{props.name}</h2>

      <div className="card-spacer"></div>

      <div className="card-buttons">
        <Link className="details-link" to={"/view/" + props.id}>
          <button className="details-button">View Details</button>
        </Link>

        {/* Visit Channel button is now second */}
        <button className="view-button" onClick={handleVisitChannel}>
          👀 Visit Channel
        </button>
      </div>
    </div>
  );
};

export default Card;
