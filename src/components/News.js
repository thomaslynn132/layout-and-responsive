// src/components/NewsSection.js
import React from "react";
import "../styles/NewsSection.css";
import { FaRegClock } from "react-icons/fa6";

function NewsSection() {
  const news = [{ category: "TRVEL" }, { category: "TECHNOLOGY" }];
  return (
    <section className="news-section">
      <div className="world-news">
        <h1>World News</h1>
        <div className="lineBreak"></div>
        <h2>Amazing places in America to visit</h2>
        <p>
          For some reason - this country, this city, this neighborhood, this
          particular street - is the place you are living a majorit of your life
          in.
        </p>
        <button
          style={{
            color: "white",
            backgroundColor: "pink",
            borderRadius: "12px",
          }}>
          Learn More
        </button>
      </div>
      <div className="more-news">
        <h3>More News</h3>
        <div className="lineBreak2"></div>
        <div className="more-news-sec">
          {news.map((item) => (
            <div key={item.category} className="more-new-specific">
              <h4 style={{ color: "pink" }}>{item.category}</h4>
              <h3>Article Title</h3>

              <p style={{ color: "gray" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum pretium pharetra justo, sed posuere eros tempus eget.
                Ut nec velit ac magna aliquet ...
                <br /> <FaRegClock /> 2 min ago
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
