import React from "react";
import "./Anction.css";
import img from "../../acsserts/jome.jpg";
import img2 from "../../acsserts/kala1.jpg";
import img3 from "../../acsserts/mingqala.jpg";
import im5 from "../../acsserts/sanatoriya.jpg";
import { NavLink } from "react-router-dom";
const Anctions = () => {
  const map = [
    {
      id:1,
      img: img,
      title: "Jome me’moriy majmuasi",
      text2: " Jome joyi",
      text3: "lorem imsone 4556",
    },
    {
      id:2,
      img: img2,
      title: "Qadimiy Qalʼa",
      text2: " Qadimiy Qalʼa",
      text3: "lorem imsone 4556",
    },
    {
      id:3,
      img: img3,
      title: "Mingtepa manzilgohi",
      text2: " Mingtepa manzilgohi",
      text3: "lorem imsone 4556",
    },
    {
      id:4,
      img: im5,
      title: "Xonobod sanatoriysi",
      text2: " Xonobod sanatoriysi",
      text3: "lorem imsone 4556",
    },
  ];
  const map2 = map.map((a) => (
    <NavLink to="singleaction">
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
      <h1>Qadimiy obidalar</h1>
      <div className="wrapper">{map2}</div>
    </div>
  );
};

export default Anctions;
