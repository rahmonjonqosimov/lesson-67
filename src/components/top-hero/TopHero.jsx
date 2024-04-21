import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./TopHero.css";
const TopHero = ({ title, desc, url, aos }) => {
  useEffect(() => {
    AOS.init({ duration: "800" });
  }, []);
  return (
    <section id="top__hero">
      <div className="container">
        <div className="top__hero">
          <div className="top__hero--text">
            <h2>{title}</h2>
            <p>{desc}</p>
            <button>Work With Us</button>
          </div>
          <div className="top">
            <div className="left__div"></div>
            <img data-aos={aos} src={url} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHero;
