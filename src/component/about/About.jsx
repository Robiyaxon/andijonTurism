import React from "react";
import { useTranslation } from "react-i18next";

import i1 from "../../acsserts/ziyoratgoh.jpg";
import i2 from "../../acsserts/bog.jpg";
import i3 from "../../acsserts/bog.jpg";

import Photo from "../photo/Photo";
import { Count } from "../count/Count";
import { MyMap } from "../map/Map";

import styles from "./About.module.css";

const About = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: 0,
      img: i1,
      title: "Ziyoratgohlar",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting `,
    },
    {
      id: 1,
      img: i2,
      title: "Ko`ngilochar bog`lar",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting`,
    },
    {
      id: 2,
      img: i3,
      title: "Buyuk shahslar",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting`,
    },
  ];

  const dataMap = data.map((d) => (
    <div className={styles.box_wrap} key={d.id}>
      <div className={styles.box}>
        <img src={d.img} alt="" />
        <div className={styles.half_circle}></div>

        <h1>{d.title}</h1>
        <p>{d.text}</p>
      </div>
    </div>
  ));

  return (
    <>
      <div className={styles.wrap} id="about">
        <h1 className={styles.title}>{t("title_about")} </h1>
        <div className={styles.block}>{dataMap}</div>
      </div>
      <Photo />
      <Count />
      <MyMap />
    </>
  );
};

export default About;
