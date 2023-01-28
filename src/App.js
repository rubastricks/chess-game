import React from "react";
import { Routes, Route } from "react-router-dom";

import SinglePlayer from "./components/SinglePlayer";
import Multiplayer from "./components/Multiplayer";
import Navbar from "./components/Navbar";
import Footer from "./Footer";

import "./App.css";

const App = () => {
  return (
    <div className="main-header">
      <Navbar />
      <Routes>
        <Route path="/" element={<SinglePlayer />} />
        <Route path="/Multiplayer" element={<Multiplayer />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
