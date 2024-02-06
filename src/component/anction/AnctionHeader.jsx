import React from "react";
import { NavLink } from "react-router-dom";

import style from "./NewsHeader.module.css";

const AnctionHeader = ({ title, route, route_path, main_pic }) => {
  return (
    <div>
      <div>
        <div className={style.HeaderNews}>
          <img src={main_pic} alt="rasm bor edi!" />

          <div className={style.BlockLink}>
            <h1>{title} </h1>
            <NavLink to="/" className={style.Block1}>
              Bosh sahifa /
            </NavLink>
            <a href={"/#/home/" + route_path} className={style.Block2}>
              {route}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AnctionHeader;
