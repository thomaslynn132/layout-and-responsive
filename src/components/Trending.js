// src/components/Trending.js
import React from "react";
import "../styles/Trending.css";
import { trendingImg1, trendingImg2, trendingImg3 } from "../assets";
import { FaRegClock } from "react-icons/fa6";

function Trending() {
  const cardInfos = [
    { image: trendingImg1, title: "Dolore magna aliqua" },
    { image: trendingImg2, title: "Morbi elefend libero" },
    { image: trendingImg3, title: "Morbi elefend libero" },
  ];
  return (
    <section className="trending">
      <h2>Trending</h2>
      <div className="trending-cards">
        {cardInfos.map((cardInfo, index) => (
          <div key={index} className="trending-card">
            <img
              src={cardInfo.image}
              alt={cardInfo.title}
              style={{
                borderRadius: "5px 5px 0px 0px",
              }}
              className="image"
            />
            <div style={{ paddingLeft: "15px", paddingBottom: "15px" }}>
              <h4>{cardInfo.title}</h4>
              <p style={{ color: "gray", fontSize: "12px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum pretium pharetra...
                <br /> <FaRegClock /> 2 min ago
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;
