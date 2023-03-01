import React, { useState, useEffect } from "react";
import Park from "../components/Park";
import "./Homepage.css";

export default function Homepage() {
  const [parksData, setParksData] = useState([]);

  const API_BASE = "http://localhost:3000/Parks";

  useEffect(() => {
    fetch(API_BASE)
      .then((res) => res.json())
      .then((data) => setParksData(data))
      .catch((err) => console.error("Error: ", err));
  }, [API_BASE]);

  const parks = parksData.map((park) => {
    return <Park key={park._id} {...park} />;
  });
  console.log(parks);
  return <div className="parks-container">{parks}</div>;
}
