import React from "react";
import style from "./NewsHeader.module.css";
import { NavLink } from "react-router-dom";
import img from "../../acsserts/jome.jpg";
const AnctionHeader = () => {
  return (
    <div>
      <div>
        <div className={style.HeaderNews}>
          <img src={img} alt="rasm bor edi!" />

          <div className={style.BlockLink}>
            <h1>Jome me’moriy majmuasi </h1>
            <NavLink to="/" className={style.Block1}>
              Bosh sahifa / 
            </NavLink> 
            <a href="home/action" className={style.Block2}>
               Qadimiy Obidalar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AnctionHeader;
