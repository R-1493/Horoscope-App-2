import React from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Card from "./Card";
import data from "../../helper/data";
import "../main/Main.scss";
const Main = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="card-container">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            desc={item.desc}
            img={item.image}
          />
        ))}
      </div>
    </div>
  );
};
export default Main;
