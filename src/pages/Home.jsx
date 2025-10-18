import React from "react";
import "./Pages.css";

function Home() {
  return (
    <section
      className="page-section"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1350&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and creative journey!</p>
      </div>
    </section>
  );
}

export default Home;
