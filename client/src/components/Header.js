import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  let navigate = useNavigate();

  function openMap(event) {
    navigate(`/map`, { replace: true });
  }
  return (
    <div className="header-container">
      <h1>National Park Info Site</h1>
      <button className="game-btn" onClick={openMap}>
        View Map
      </button>
    </div>
  );
}
