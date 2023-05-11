import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Park from "../components/Park";
import Search from "../components/Search";
import axios from "axios";
import "./Homepage.css";

export default function Homepage() {
  const [parksData, setParksData] = useState([]);
  const [filteredParkList, setFilteredParkList] = useState("");
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const API_BASE = `${process.env.REACT_APP_BACKEND_URL}/parks`;
  console.log(API_BASE);

  const fetchParks = async () => {
    try {
      axios.get(API_BASE).then((res) => setParksData(res.data));
      setLoading(false);
      console.log(loading);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchParks();
  }, []);

  const parks = loading ? (
    <h1 style={{ color: "Black", margin: "0 auto" }}>Loading Parks...</h1>
  ) : (
    parksData
      .filter((park) => park.location.toUpperCase().includes(filteredParkList))
      .filter((park) => park.name.toLowerCase().includes(query))
      .map((park) => {
        return <Park key={park._id} {...park} />;
      })
  );

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
