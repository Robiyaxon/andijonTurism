import React from "react";

import img from "../../acsserts/jome.jpg";
import img2 from "../../acsserts/jome2.jpg";
import img3 from "../../acsserts/jome3.jpg";

import { MyMap } from "./map/Map";
import AnctionHeader from "./AnctionHeader";

import style from "./NewsSingle.module.css";

const NewsSingle = () => {
  const map = [
    {
      id:1,
      uz_title: "Jome me’moriy majmuasi",
      uz_text:
        "Andijon shahrining eski qismida joylashgan Jome me’moriy majmuasi 1885-1892-yillarda hukmdor va xoqon Muhammadaliboy tomonidan qurilgan. Eski majmuada Farg‘ona vodiysining islom shaharsozlik an‘analariga binoan madrasalar, minoralar va xonaqolar mavjud. Loyiha muallifi o‘sha davrning taniqli me’mori Isaxon Muhammad Muso o‘g‘li bo‘lgan.",
      uz_text_2:
        "Majmuaning umumiy maydoni 2 gektardan oshadi. 2 gektarlik kompleks to‘rtburchak shaklida, to‘rt burchagida gumbazlari bilan birga qurilgan. G‘arbiy tomonida 50 xonadan iborat xonaqo, minora joylashgan.",
    },
  ];
  const map2 = map.map((a) => (
    <div className={style.Header} key={a.id}>
      <h1>{a.uz_title}</h1>
      <p>
        {a.uz_text}
        {a.uz_text_2}
        {a.uz_text_2}
      </p>
      <div className={style.IMG}>
        <img src={img} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </div>
  ));
  return (
    <div className={style.action}>
      <AnctionHeader/>
      {/* <Saidbar /> */}
      {map2}
      <MyMap />
    </div>
  );
};

export default NewsSingle;
