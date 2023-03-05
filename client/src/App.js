import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ParkPage from "./pages/ParkPage";
import USMap from "./pages/USMap";

function App() {
  let routes = (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/:pid" element={<ParkPage />} />
      <Route path="/map" element={<USMap />} />
    </Routes>
  );

  return (
    <div className="App">
      <Router>{routes}</Router>
    </div>
  );
}

export default App;
