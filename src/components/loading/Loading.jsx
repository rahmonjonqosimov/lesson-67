import React from "react";
import "./Loading.css";

const Loading = () => {
  let arr = Array(12).fill("");
  let card = arr?.map((el, inx) => (
    <div key={inx} className="loading__card">
      <div className="img"></div>
      <div className="text">
        <div className="h4"></div>
        <div className="p"></div>
        <div className="p"></div>
        <div className="p"></div>
        <div className="button"></div>
      </div>
    </div>
  ));
  return <div className="loading__wrapper">{card}</div>;
};

export default Loading;
