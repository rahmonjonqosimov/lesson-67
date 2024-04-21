import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./BlogHero.css";
import img from "../../assets/images/blog-img.svg";
import user from "../../assets/images/blog-user.png";
import { HiArrowLongRight } from "react-icons/hi2";

const BlogHero = () => {
  useEffect(() => {
    AOS.init({ duration: "800" });
  }, []);
  return (
    <section id="blog__hero">
      <div className="container">
        <div className="blog__hero">
          <div className="blog__hero--text">
            <div className="user">
              <img src={user} alt="User" />
              <span>Andrew Jonson</span>
              <span>Posted on 27th January 2021</span>
            </div>
            <h2>Our internal process and longerm vision</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized. We aim to attain the
            </p>
            <button>
              Read More <HiArrowLongRight />
            </button>
          </div>
          <div className="top">
            <div className="left__div"></div>
            <img data-aos="flip-down" src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
