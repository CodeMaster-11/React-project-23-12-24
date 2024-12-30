import React from "react";
import "./App.css"; // Add your CSS styles if needed

const SketchfabBackground = () => {
  return (
    <div className="background-container">
      <iframe
        title="Real-time Bones Demo: Phoenix Bird"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/6a8d1fd20a1f46e988d9d06e028f75a0/embed"
      ></iframe>
      <div className="attribution">
  <p style={{ fontSize: "13px", color: "#4A4A4A", textAlign: "center" }}>
    <a
      href="https://sketchfab.com/3d-models/real-time-bones-demo-phoenix-bird-6a8d1fd20a1f46e988d9d06e028f75a0"
      target="_blank"
      rel="noopener noreferrer"
      style={{ fontWeight: "bold", color: "#1CAAD9" }}
    >
      Real-time Bones Demo: Phoenix Bird
    </a>{" "}
    by{" "}
    <a
      href="https://sketchfab.com/Sketchfab"
      target="_blank"
      rel="noopener noreferrer"
      style={{ fontWeight: "bold", color: "#1CAAD9" }}
    >
      Sketchfab
    </a>
  </p>
</div>

    </div>
    
  );
};

export default SketchfabBackground;
