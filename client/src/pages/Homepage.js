import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Park from "../components/Park";
import Search from "../components/Search";
import "./Homepage.css";

export default function Homepage() {
  const [parksData, setParksData] = useState([]);
  const [filteredParkList, setFilteredParkList] = useState("");
  const [query, setQuery] = useState("");

  const API_BASE = "http://localhost:3000/Parks";

  useEffect(() => {
    fetch(API_BASE)
      .then((res) => res.json())
      .then((data) => setParksData(data))
      .catch((err) => console.error("Error: ", err));
  }, [API_BASE]);

  const parks = parksData
    .filter((park) => park.location.toUpperCase().includes(filteredParkList))
    .filter((park) => park.name.toLowerCase().includes(query))
    .map((park) => {
      return <Park key={park._id} {...park} />;
    });

  function checkLocation(location) {
    setFilteredParkList(location);
  }

  function checkQuery(searchInput) {
    setQuery(searchInput.toLowerCase());
  }

  return (
    <>
      <Header />
      <Search filterLocation={checkLocation} checkSearch={checkQuery} />
      <div className="parks-container">{parks}</div>
    </>
  );
}
