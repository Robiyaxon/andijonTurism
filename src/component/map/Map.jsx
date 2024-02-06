import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import style from "./Map.module.css"
export const MyMap = () => {
  const defaultState = {
    center: [40.81955403266653, 72.29506064141155],
    zoom: 9,
  };
  return (
    <div className={style.Map}>
      <YMaps>
        <Map width={"100%"} height={100+"%"} defaultState={defaultState}>
          <Placemark geometry={[40.81955403266653, 72.29506064141155]} />
        </Map>
      </YMaps>
    </div>
  );
};
