import React from "react";
import PARKS_MAP from "../components/data.json";
import { Map } from "react-map-gl";
import DeckGL, { GeoJsonLayer } from "deck.gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYnJhbmRvbjg3d3IiLCJhIjoiY2xldW5pZ2RuMGw4ZjNwcGJyMGZlOTZ5eCJ9.R6r87K6VhqAMtq49k1zqQg";
const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json";

const INITIAL_VIEW_STATE = {
  latitude: 39.8283,
  longitude: -98.5795,
  zoom: 3,
  bearing: 0,
  pitch: 30,
};

export default function USMap() {
  const onClick = (info) => {
    if (info.object) {
      alert(info.object.properties.Name);
    }
  };

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
      onClick: onClick,
    }),
  ];
  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <Map mapStyle={MAP_STYLE} mapboxAccessToken={MAPBOX_TOKEN}></Map>
    </DeckGL>
  );
}
