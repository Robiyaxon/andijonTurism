import React from "react";
import main_park from "../../acsserts/bog1.jpg";
import park1 from "../../acsserts/bog`3.webp";
import park_2 from "../../acsserts/bog3.jpg";
import park3 from "../../acsserts/bog1.jpg";
import { MyMap } from "./map/Map";
import AnctionHeader from "./AnctionHeader";
import style from "./NewsSingle.module.css";
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

const NewsSingle = ({ title, text, text_2, img1, img2, img3, map1, map2, main_pic, route, route_path, url_image }) => {
  return (
    <div className={style.action}>
      <div >
        <AnctionHeader
          title={title}
          main_pic={main_pic}
          route={route}
          route_path={route_path}
        />
        <div className={style.Header}>
          <h1>{title}</h1>
          <p>
            {text}
          </p>
          <div className={style.IMG}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
        </div>
      
        {
          url_image ? (
            <>
              <h1 className={style.tridi}>Joyning 3D maketi</h1>
              <ReactPhotoSphereViewer
              className={style.tridii}
              src={url_image}
              height={'80vh'}
              width={'100%'}
            ></ReactPhotoSphereViewer>
            <MyMap title={"Joy xaritasi"} map1={map1} map2={map2} />

            </>
          
          ) : (
            <MyMap title={"Joy xaritasi"} map1={map1} map2={map2} />
          )
        }
      </div>

    </div>
  );
};

export default NewsSingle;