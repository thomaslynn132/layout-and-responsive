import React from "react";
import "../styles/HappeningNow.css";
import { hn1, hn2, hn3, hn4, hn5 } from "../assets";

import { FaRegClock } from "react-icons/fa6";
function HappeningNow() {
  const largeArticles = [
    { image: hn1, title: "Large article title" },
    { image: hn2, title: "Large article title" },
  ];
  const smallArticles = [
    { image: hn3, title: "Small article title" },
    { image: hn4, title: "Small article title" },
    { image: hn5, title: "Small article title" },
  ];
  return (
    <>
      <div className="happening-now">
        <h2>Happening Now</h2>
        <div className="container">
          <div className="largeArticles">
            {largeArticles.map((article, index) => (
              <div
                className="largeArticle article"
                style={{ backgroundImage: `url(${article.image})` }}
                key={index}>
                <div className="article-text">
                  <h2>{article.title}</h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum pretium pharetra justo, sed posuere eros tempus
                    eget. Ut nec velit ac magna aliquet ...
                    <br /> <FaRegClock /> 2 min ago
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="smallArticles">
            {smallArticles.map((article, index) => (
              <div className="smallArticle" key={index}>
                <img
                  src={article.image}
                  className="smalImage"
                  alt={article.title}
                />
                <h2>{article.title}</h2>

                <p>
                  <FaRegClock /> 4h ago by{" "}
                  <i>
                    {" "}
                    <u>days</u>
                  </i>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HappeningNow;
