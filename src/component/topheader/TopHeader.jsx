import React, { useState } from "react";
import style from "./TopHeader.module.css";
import i18n from "../../i18n";

const TopHeader = () => {
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);

  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div className={style.Wrapper}>
  
      <div className={style.right_place}>
        <div className={style.select}>
          <select name="lang" value={lang} onChange={handleChange}>
            <option value="uz">Uzb</option>
            <option value="en">Eng</option>
            <option value="krill">Krill</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
