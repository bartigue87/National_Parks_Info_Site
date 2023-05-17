import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ParkPage from "./pages/ParkPage";

export const InitialScreenContext = createContext();

function App() {
  const [isFirstTime, setIsFirstTime] = useState(true);
  let routes = (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/:pid" element={<ParkPage />} />
    </Routes>
  );

  return (
    <InitialScreenContext.Provider value={[isFirstTime, setIsFirstTime]}>
      <div className="App">
        <Router>{routes}</Router>
      </div>
    </InitialScreenContext.Provider>
  );
}

export default App;
