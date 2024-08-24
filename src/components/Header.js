// src/components/Header.js
import React from "react";
import "../styles/Header.css";
import { profileImage } from "../assets";
function Header() {
  return (
    <header className="header">
      <div className="logo" style={{ color: "pink", fontWeight: "bold" }}>
        LOGO
      </div>

      <div className="profile">
        <nav className="nav" style={{ color: "black" }}>
          <a href="#home">Home</a>
          <a href="#discovery">Discovery</a>
          <a href="#photos">Photos</a>
          <a href="#contact">Contact</a>
        </nav>
        <img
          src={profileImage}
          width={30}
          height={30}
          style={{ borderRadius: "50%" }}
          alt="profile"
        />
      </div>
    </header>
  );
}

export default Header;
