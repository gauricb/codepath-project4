import React from "react";
import "./Ban.css";

const Ban = ({ buttonText, onButtonClick }) => (
  <button
    style={{ borderRadius: "10px" }}
    onClick={() => onButtonClick(buttonText)}
  >
    {buttonText}
  </button>
);

export default Ban;
