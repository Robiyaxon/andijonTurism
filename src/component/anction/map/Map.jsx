import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import style from "./Map.module.css";
export const MyMap = ({title, map1, map2}) => {
  const defaultState = {
    center: [map1, map2],
    zoom: 17,
  };
  return (
    <div className={style.Map}>
      <h1>{title}</h1>
      <YMaps>
        <Map width={100 + "%"} height={100 + "%"} defaultState={defaultState}>
          <Placemark geometry={[map1, map2]} />
        </Map>
      </YMaps>
    </div>
  );
};
