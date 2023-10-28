import React from "react";
import video from "../../acsserts/andijon2.mp4";
import styles from "./Home.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.main}>
        <video src={video} autoPlay loop muted />
        <div className={styles.text_content}>
          <h1 className={styles.title}>
            <svg viewBox="0 0 1320 70">
              <text x="50%" y="80%" dy="0" textAnchor="middle">
                Andijonga hush kelibsiz
              </text>
            </svg>
          </h1>
        </div>
      </div>
    </>
  );
};
export default Header;
