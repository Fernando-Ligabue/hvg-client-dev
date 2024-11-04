import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AreaReservadaPage from "./pages/AreaReservadaPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/areareservada" element={<AreaReservadaPage />} />
        </Routes>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </Router>
  );
}

export default App;
