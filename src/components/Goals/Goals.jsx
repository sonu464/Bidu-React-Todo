import React from "react";
import "./Goals.css";

const Goals = (props) => {
  return (
    <div className="goals-section">
      <ul>
        {props.textList.map((items) => (
          <li key={items.id}>{items.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Goals;
