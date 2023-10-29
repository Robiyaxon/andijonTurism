import React from "react";
import { NavLink } from "react-router-dom";

import img from "../../acsserts/jome.jpg";

import "./Anction.css";

const Anctions = ({
  title,
  path,
  map = [
    {
      id: 1,
      img: img,
      title: "Jome me’moriy majmuasi",
      text2: " Jome joyi",
      text3: "lorem imsone 4556",
    },
  ],
}) => {
  const map2 = map.map((a) => (
    <NavLink key={a.id} to={path}>
      <div className="box">
        <img className="main-img" src={a.img} alt="" />
        <div className="box-content">
          <a href={"/#"} className="PageameNavlink">
            <div className="item">{a.title}</div>
            <div className="description show-animate">
              {a.text2}
              <br />
              <span>{a.text3}</span>
            </div>
          </a>
        </div>
      </div>
    </NavLink>
  ));
  return (
    <div className="PrejectName">
      <h1>{title}</h1>
      <div className="wrapper">{map2}</div>
    </div>
  );
};

export default Anctions;
