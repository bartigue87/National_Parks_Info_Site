import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homepage from "./pages/Homepage";
import ParkPage from "./pages/ParkPage";

function App() {
  let routes = (<Routes>
    <Route exact path="/" element={<Homepage />} />
    <Route path="/:pid" element={<ParkPage />} />
</Routes>)

  return (
    <div className="App">
      <Router>{routes}</Router>
    </div>
  );
}

export default App;
