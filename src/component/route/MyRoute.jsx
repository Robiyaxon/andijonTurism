import React from "react";
import { Routes, Route } from "react-router-dom";

import karoake from '../../acsserts/karoake.jpg'
import zoopark from '../../acsserts/zoopark.jpg'
import park from '../../acsserts/park.jpg'

import Header from "../Header/Header";
import Anction from "../anction/Anction";
import NewsSingle from "../anction/SingleAnction";


const MyRoute = () => {
  const   map1 = [
    {
      id:1,
      img: park,
      title: "'Alisher Navoi' bog'i",
      text2: "Eski shahar",
      text3: "lorem imsone 4556",
    }
  ]
  const   map2 = [
    {
      id:1,
      img: zoopark,
      title: "Bog'ishamol hayvonot bog'i",
      text2: "Bog'ishamol",
      text3: "lorem imsone 4556",
    }
  ]
  const   map3 = [
    {
      id:1,
      img: karoake,
      title: "Karoake Club",
      text2: "Milliy tiklanish",
      text3: "lorem imsone 4556",
    }
  ]
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route
          path="/action"
          element={<Anction title={"Qadimiy obidalar"} />}
        ></Route>
        <Route path="/action/singleaction" element={<NewsSingle />}></Route>
        <Route
          path="/park"
          element={
            <Anction
              title={"Istirohat bog'i"}
             map={map1}
            />
          }
        ></Route>
        <Route
          path="/zoo"
          element={<Anction title={"Hayvonot bog'i"}    map={map2} />}
        ></Route>
        <Route
          path="/karaoke"
          element={<Anction title={"Karaoki bar"}    map={map3} />}
        ></Route>
        <Route path="/disco" element={<Anction title={"Diskateka"} />}></Route>
        <Route path="/theatre" element={<Anction title={"Teart"} />}></Route>
      </Routes>
    </div>
  );
};

export default MyRoute;
