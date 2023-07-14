import React from "react";
import "./style.css";
const Card = ({ color, category, imageUrl, selected, onClick }) => {

  const handleCardClick = () => {
    onClick(category);
  };

  return (
    <div
      class="card"
      style={{
        backgroundColor: color,
        boxShadow: selected ? "0 0 5px 5px #a305f7" : "none",
      }}
      onClick={handleCardClick}
    >
      <p
        style={{
          textAlign: "left",
          width: "100%",
          padding: "5px 0 5px 10px",
          textTransform: "capitalize",
          fontWeight: "bold",
        }}
      >
        {category}
      </p>
      <img
        style={{ padding: "5px", borderRadius: "10px" }}
        src={imageUrl}
        alt="loading p"
      />
    </div>
  );
};

export default Card;
