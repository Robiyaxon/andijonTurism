import React from "react";

// import img from "../../acsserts/jome.jpg";
// import img2 from "../../acsserts/jome2.jpg";
// import img3 from "../../acsserts/jome3.jpg";

import { MyMap } from "./map/Map";
import AnctionHeader from "./AnctionHeader";

import style from "./NewsSingle.module.css";

const NewsSingle = ({ title, text, text_2, img1, img2, img3, map1, map2, main_pic, route, route_path }) => {
  return (
    <div className={style.action}>
      <AnctionHeader title={title} main_pic={main_pic} route={route} route_path={route_path}/>
      {/* <Saidbar /> */}
      {/* {map2} */}
      <div className={style.Header}>
        <h1>{title}</h1>
        <p>
          {text}
          {text_2}
          {text_2}
        </p>
        <div className={style.IMG}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
      <MyMap title={title} map1={map1} map2={map2} />
    </div>
  );
};

export default NewsSingle;
