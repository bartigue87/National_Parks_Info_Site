import React, { useState } from "react";
import PARKS_MAP from "../components/data.json";
import { Map } from "react-map-gl";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import { useNavigate } from "react-router-dom";
import backArrow from "../images/back-arrow.png";
import "./USMap.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYnJhbmRvbjg3d3IiLCJhIjoiY2xldW5pZ2RuMGw4ZjNwcGJyMGZlOTZ5eCJ9.R6r87K6VhqAMtq49k1zqQg";
const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json";

const INITIAL_VIEW_STATE = {
  latitude: 39.8283,
  longitude: -98.5795,
  zoom: 2,
  bearing: 0,
  pitch: 30,
};

export default function USMap() {
  let navigate = useNavigate();
  const [parkData, setParkData] = useState("");
  const [activeState, setActiveState] = useState("hide");

  function showModal(info) {
    if (info.object) {
      setParkData(info.object.properties.Name);
      setActiveState("show");
    }
  }

  function closeModal() {
    activeState === "show" ? setActiveState("hide") : setActiveState("show");
  }

  console.log(activeState);

  function returnHome(event) {
    navigate(`/`, { replace: true });
  }

  const layers = [
    new GeoJsonLayer({
      id: "nationalParks",
      data: PARKS_MAP,
      filled: true,
      pointRadiusMinPixels: 6,
      pointRadiusScale: 2000,
      getPointRadius: (f) => 5,
      getFillColor: [86, 144, 58, 250],
      pickable: true,
      autoHighlight: true,
      onClick: showModal,
    }),
  ];
  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <Map mapStyle={MAP_STYLE} mapboxAccessToken={MAPBOX_TOKEN}></Map>
      <div className="back-btn" onClick={returnHome}>
        <img src={backArrow} alt="back arrow" />
        <p>Back</p>
      </div>
      <div className={`modal ${activeState}-modal`}>
        <h5>{parkData}</h5>
        <button className="close-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </DeckGL>
  );
}
