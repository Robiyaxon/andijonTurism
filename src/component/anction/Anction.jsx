import React from "react";
import { NavLink } from "react-router-dom";

import img from "../../acsserts/jome.jpg";
import img2 from "../../acsserts/mingqala.jpg";
import img3 from "../../acsserts/muslim.jpg";

import "./Anction.css";

const Anctions = ({
  title,
  map = [
    {
      id: 1,
      img: img,
      title: "Jome me’moriy majmuasi",
      text2: " Jome joyi",
      text3: "lorem imsone 4556",
      path: "singleaction",
    },
    {
      id: 2,
      img: img2,
      title: "Mingtepa manzilgohi",
      text2: " Mingtepa manzilgohi",
      text3: "lorem imsone 4556",
      path: "singleaction1",
    },
    {
      id: 3,
      img: img3,
      title: "Qutayba  ibn Muslim maqbarasi",
      text2: "Qutayba  ibn Muslim maqbarasi",
      text3: "lorem imsone 4556",
      path: "singleaction2",
    },
  ],
}) => {
  const map2 = map.map((a) => (
    <NavLink key={a.id} to={a.path}>
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
