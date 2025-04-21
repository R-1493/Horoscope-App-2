import React from "react";
import "../main/Main.scss";

const Card = ({ title, desc, img }) => {
  return (
    <div className="cards">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <img src={img} alt={title} />
      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};
export default Card;
