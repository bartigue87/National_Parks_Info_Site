import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import "./ParkPage.css";
import backArrow from "../images/back-arrow.png";

export default function ParkPage() {
  const [parkData, setParkData] = useState();
  const navigate = useNavigate();

  const parkId = useParams().pid;
  const API_BASE = `http://localhost:3000/Parks/${parkId}`;

  useEffect(() => {
    fetch(API_BASE)
      .then((response) => response.json())
      .then((data) => setParkData(data));
  }, [API_BASE]);

  let parkImage = [];
  let thingsToDo = [];

  if (parkData) {
    parkImage = parkData.imgUrl.map((img) => {
      return (
        <div
          className="park-image"
          style={{ backgroundImage: `url(${img})` }}
        />
      );
    });
  }
  if (parkData) {
    thingsToDo = parkData.todo.map((todo) => {
      return <li className="todo">{todo}</li>;
    });
  }

  function returnHome(event) {
    navigate(`/`, { replace: true });
  }

  return (
    <div className={`single-park-container ${parkData.type}-main-bg`}>
      <div className={`back-btn ${parkData.type}-sec-bg`} onClick={returnHome}>
        <img src={backArrow} alt="back arrow" />
        <p>Back</p>
      </div>
      {!parkData ? (
        <div>Loading.....</div>
      ) : (
        <div>
          <h1 className="title">{`${parkData.name} National Park`}</h1>
          <div className="img-container">{parkImage}</div>
          <div className="info-todo-container">
            <div className="info-container">
              <p>
                <strong>Location:</strong> {parkData.location}
              </p>
              <p>
                <strong>Date Established:</strong> {parkData.dateEstablished}
              </p>
              <p>{parkData.description}</p>
            </div>
            <ol>Things to do: {thingsToDo}</ol>
          </div>
          <div className={`sidenote ${parkData.type}-sec-bg`}>
            <p>{`America's ${parkData.rank} National Park`}</p>
            <p>
              <strong>Did You Know?:</strong>
              <br></br> {parkData.funFact}
            </p>
            <p>
              {`Animal to look for: `}
              <span>{parkData.animal}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
