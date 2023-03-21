import React from "react";
import { useState } from "react";
import Ban from "./Ban";
import "./Planet.css";

function Planet({ name, attributes, image, onAttributeClick }) {
  const [bannedAttributes, setBannedAttributes] = useState([]);

  const handleButtonClick = (attribute) => {
    //setBannedAttributes([...bannedAttributes, attribute]);
    onAttributeClick(attribute);
  };

  return (
    <div className="listingContainer">
      <h2>{name}</h2>
      <div className="button-grid">
        {attributes.map((attribute) => (
          <Ban
            buttonText={attribute}
            key={attribute}
            onButtonClick={handleButtonClick}
          />
        ))}
      </div>
      <img src={image} className="APIimage"></img>
    </div>
  );
}

export default Planet;
