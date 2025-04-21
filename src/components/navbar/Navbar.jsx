import React from "react";
import img from "../../helper/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="img" src={img} alt="Logo" />
      </div>
      <div className="link">
        <a href="#Horoscopes">Horoscopes</a>
        <a>Daily</a>
        <a>Tarot</a>
        <a>Articles</a>
        <a>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
