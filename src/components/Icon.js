import React from "react";

export default function Icon(props) {
  return (
    <div className="icon">
      <img src={props.icon} alt="icon" />
      <h3 className="title2 xy">{props.title}</h3>
    </div>
  );
}
