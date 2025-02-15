import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  const nextColor = () => {
    setColor((prevColor) =>
      prevColor === "red" ? "yellow" : prevColor === "yellow" ? "green" : "red"
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <div
        style={{
          width: "50px",
          height: "150px",
          background: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: color === "red" ? "red" : "gray",
            borderRadius: "50%",
            margin: "5px",
            transition: "background-color 0.3s",
          }}
        ></div>
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: color === "yellow" ? "yellow" : "gray",
            borderRadius: "50%",
            margin: "5px",
            transition: "background-color 0.3s",
          }}
        ></div>
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: color === "green" ? "green" : "gray",
            borderRadius: "50%",
            margin: "5px",
            transition: "background-color 0.3s",
          }}
        ></div>
      </div>
      <button onClick={nextColor} style={{ marginTop: "20px", padding: "10px", borderRadius: "5px" }}>
        Cambiar
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TrafficLight />);

export default TrafficLight 