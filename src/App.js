import React from "react";
import Navbar from "./components/Navbar";
import "./App.css"; // Make sure we import the CSS file

function App() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero-section">
        <h2>Welcome to My Resort and Spa!</h2>
      </div>
    </div>
  );
}

export default App;
