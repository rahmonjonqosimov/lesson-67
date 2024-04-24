import React from "react";
import "../SingleRoute.css";

const SingleRouteLoading = () => {
  return (
    <section id="loading__single">
      <div className="single__route__loading container">
        <div className="single__image"></div>
        <div className="image__wrappaer">
          <div className="pro-img"></div>
          <div className="pro-img"></div>
          <div className="pro-img"></div>
        </div>
        <div className="pro--title"></div>
        <div className="pro--desc"></div>
        <div className="pro--price">
          <span></span>
          <div className="narx"></div>
        </div>
        <div className="pro--btn"></div>
      </div>
    </section>
  );
};

export default SingleRouteLoading;
