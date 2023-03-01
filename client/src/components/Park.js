import React from "react";
import "./Park.css";

export default function Park(props) {
  return (
    <div className="park-container">
      <div
        className="park-img"
        style={{ backgroundImage: `url(${props.imgUrl[0]})` }}
        alt={`${props.name} national park`}
      ></div>
      <h3>{props.name}</h3>
      <div id={props.name} className="transparent-click"></div>
    </div>
  );
}