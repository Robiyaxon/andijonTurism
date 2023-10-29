import React from "react";
import { Routes, Route } from "react-router-dom";

import karoake from "../../acsserts/karoake.jpg";
import zoopark from "../../acsserts/zoopark.jpg";
import park from "../../acsserts/park.jpg";

import img from "../../acsserts/jome.jpg";
import img2 from "../../acsserts/jome2.jpg";
import img3 from "../../acsserts/jome3.jpg";
import main_jome from "../../acsserts/jome.jpg";


import Header from "../Header/Header";
import Anction from "../anction/Anction";
import NewsSingle from "../anction/SingleAnction";

const MyRoute = () => {
  const map1 = [
    {
      id: 1,
      img: park,
      title: "'Alisher Navoi' bog'i",
      text2: "Eski shahar",
      text3: "lorem imsone 4556",
    },
  ];
  const map2 = [
    {
      id: 1,
      img: zoopark,
      title: "Bog'ishamol hayvonot bog'i",
      text2: "Bog'ishamol",
      text3: "lorem imsone 4556",
    },
  ];
  const map3 = [
    {
      id: 1,
      img: karoake,
      title: "Karoake Club",
      text2: "Milliy tiklanish",
      text3: "lorem imsone 4556",
    },
  ];
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route
          path="/action"
          element={<Anction title={"Qadimiy obidalar"} path={'singleaction'} />}
        ></Route>
        <Route
          path="/action/singleaction"
          element={
            <NewsSingle
              title={"Jome me’moriy majmuasi"}
              text={
                "Andijon shahrining eski qismida joylashgan Jome me’moriy majmuasi 1885-1892-yillarda hukmdor va xoqon Muhammadaliboy tomonidan qurilgan. Eski majmuada Farg‘ona vodiysining islom shaharsozlik an‘analariga binoan madrasalar, minoralar va xonaqolar mavjud. Loyiha muallifi o‘sha davrning taniqli me’mori Isaxon Muhammad Muso o‘g‘li bo‘lgan."
              }
              text_2={
                "Majmuaning umumiy maydoni 2 gektardan oshadi. 2 gektarlik kompleks to‘rtburchak shaklida, to‘rt burchagida gumbazlari bilan birga qurilgan. G‘arbiy tomonida 50 xonadan iborat xonaqo, minora joylashgan."
              }
              img1={img}
              img2={img2}
              img3={img3}
              map1={40.78791552216897}
              map2={72.3459619671118}
              main_pic={main_jome}
              route={'Obidalar'}
              route_path={'action'}
            />
          }
        ></Route>
        <Route
          path="/park"
          element={<Anction title={"Istirohat bog'i"} map={map1} path={'singlepark'} />}
        ></Route>
        <Route
          path="/park/singlepark"
          element={
            <NewsSingle
              title={"'Alisher Navoiy' nomidagi istirohat bog'i"}
              text={
                "Andijon shahrining eski qismida joylashgan Jome me’moriy majmuasi 1885-1892-yillarda hukmdor va xoqon Muhammadaliboy tomonidan qurilgan. Eski majmuada Farg‘ona vodiysining islom shaharsozlik an‘analariga binoan madrasalar, minoralar va xonaqolar mavjud. Loyiha muallifi o‘sha davrning taniqli me’mori Isaxon Muhammad Muso o‘g‘li bo‘lgan."
              }
              text_2={
                "Majmuaning umumiy maydoni 2 gektardan oshadi. 2 gektarlik kompleks to‘rtburchak shaklida, to‘rt burchagida gumbazlari bilan birga qurilgan. G‘arbiy tomonida 50 xonadan iborat xonaqo, minora joylashgan."
              }
              img1={park}
              img2={park}
              img3={park}
              map1={40.78791552216897}
              map2={72.3459619671118}
              main_pic={main_jome}
              route={"Istirohat bo'gi"}
              route_path={'park'}
            />
          }
        ></Route>
        <Route
          path="/zoo"
          element={<Anction title={"Hayvonot bog'i"} map={map2} />}
        ></Route>
        <Route
          path="/karaoke"
          element={<Anction title={"Karaoki bar"} map={map3} />}
        ></Route>
        <Route path="/disco" element={<Anction title={"Diskateka"} />}></Route>
        <Route path="/theatre" element={<Anction title={"Teart"} />}></Route>
      </Routes>
    </div>
  );
};

export default MyRoute;
