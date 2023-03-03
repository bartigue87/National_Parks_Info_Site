import React from "react";
import { useNavigate } from "react-router-dom";
import "./Park.css";

export default function Park(props) {
  let navigate = useNavigate();

  function showPark(event) {
    navigate(`/${event.target.id}`, { replace: true });
  }
  return (
    <div className="park-container">
      <div
        className="park-img"
        style={{ backgroundImage: `url(${props.imgUrl[0]})` }}
        alt={`${props.name} national park`}
      ></div>
      <h3>{props.name} National Park</h3>
      <p>{props.location}</p>
      <div
        id={props._id}
        onClick={showPark}
        className="transparent-click"
      ></div>
    </div>
  );
}
