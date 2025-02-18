import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  const nextColor = () => {
    setColor((prevColor) =>
      prevColor === "red" ? "yellow" : prevColor === "yellow" ? "green" : "red"
    );
  };

  const handleCircleClick = (selectedColor) => {
    if (color !== selectedColor) {
      setColor(selectedColor);
    }
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
        {['red', 'yellow', 'green'].map((lightColor) => (
          <div
            key={lightColor}
            onClick={() => handleCircleClick(lightColor)}
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: color === lightColor ? lightColor : "gray",
              borderRadius: "50%",
              margin: "5px",
              transition: "background-color 0.3s",
              cursor: "pointer",
            }}
          ></div>
        ))}
      </div>
      <button onClick={nextColor} style={{ marginTop: "20px", padding: "10px", borderRadius: "5px" }}>
        Cambiar
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TrafficLight />);

export default TrafficLight;
