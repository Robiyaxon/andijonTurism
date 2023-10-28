import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import style from "./Map.module.css";
export const MyMap = () => {
  const defaultState = {
    center: [40.78791552216897, 72.3459619671118],
    zoom: 17,
  };
  return (
    <div className={style.Map}>
      <h1>Jome me’moriy majmuasi</h1>
      <YMaps>
        <Map width={100 + "%"} height={100 + "%"} defaultState={defaultState}>
          <Placemark geometry={[40.78791552216897, 72.3459619671118]} />
        </Map>
      </YMaps>
    </div>
  );
};
