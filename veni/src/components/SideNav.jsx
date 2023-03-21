import React from "react";
import "./SideNav.css";

const SideNav = ({ selectedButtons }) => {
  return (
    <div className="sideNav">
      <h2>Ban List</h2>
      <h4>Select an attribute in your listing to ban it</h4>
      {selectedButtons.map((buttonName, index) => (
        <button style={{ borderRadius: "10px" }} key={index}>
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default SideNav;
