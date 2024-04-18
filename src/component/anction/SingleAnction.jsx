import React from "react";
import main_park from "../../acsserts/bog1.jpg";
import park1 from "../../acsserts/bog`3.webp";
import park_2 from "../../acsserts/bog3.jpg";
import park3 from "../../acsserts/bog1.jpg";
import { MyMap } from "./map/Map";
import AnctionHeader from "./AnctionHeader";
import style from "./NewsSingle.module.css";
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

const NewsSingle = () => {
  const mapData = [
    {
      title: "Bog`ishamol",
      text: `
      
Andijon viloyati, Bog'ishamol tumani, Bog'ishamol tabiati boyicha mahalliy istirohat bog'i ko'p yillar mobaynida mamlakatimiz fuqarolarini o'zlarining o'zaro do'stlariga muloqotlashish, o'tkazishlari va dam olgan joylardan dam olgan joylar vaqtlaridan yotkazgan qadimiy va jismoniy madaniy marosimlarini aniqlashlari uchun joylashgan joydir.
Bog'ishamol tabiati boyicha istirohat bog'i haqida bir qancha umumiy ma'lumotlar:
Bog'ishamol, Andijon viloyati manzilida joylashgan va uning turli xil tabiiy yodgorliklari va madaniy meroslariga ega bo'lgan joydir.
Istirohat bog'ida tarkibiy tuzilmalardan foydalanib, mamlakatning milliy madaniyatining eng asosiy qismlarini namoyish etish maqsadida ko'plab tadbirlar o'tkaziladi.
Mahalliy madaniyatni, san'atni, muzokaralarini va turizmni rivojlantirish bo'yicha tadbirlar va festival, bayramlar o'tkaziladi.
Bog'ishamol tabiati boyicha istirohat bog'i, shahar fuqarolariga va turistlarga tabiatning zo'r mukofotlarini taqdim etadi, shuningdek, yaxshi dam olish va xavfsiz joylashish imkoniyatlarini ham taklif qiladi.
      `,
      img1: park1,
      img2: park_2,
      img3: park3,
      map1: 40.78386437,
      map2: 72.35164365,
      main_pic: main_park,
      route: "Bog'lar",
      route_path: "park",
    }
  ];

  const mapComponents = mapData.map((data, index) => (
    <div key={index}>
      <AnctionHeader
        title={data.title}
        main_pic={data.main_pic}
        route={data.route}
        route_path={data.route_path}
      />
      <div className={style.Header}>
        <h1>{data.title}</h1>
        <p>
          {data.text}
        </p>
        <div className={style.IMG}>
          <img src={data.img1} alt="" />
          <img src={data.img2} alt="" />
          <img src={data.img3} alt="" />
        </div>
      </div>
      <h1 className={style.tridi}>Joyning 3D maketi</h1>
      <ReactPhotoSphereViewer className={style.tridii} src="https://scontent.fura3-1.fna.fbcdn.net/v/t39.30808-6/435786602_122171733230027112_1140284694879207340_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lbQinOsag9MAb6HAA2_&_nc_ht=scontent.fura3-1.fna&oh=00_AfDqJLGpGHSpkDYtL0_SzR7KUSkMpwmEjw5UzgwvaWQ_Dg&oe=6626AC4F" height={'80vh'} width={"100%"}></ReactPhotoSphereViewer>
      <MyMap title={data.title} map1={data.map1} map2={data.map2} />
    </div>
  ));

  return (
    <div className={style.action}>
      {mapComponents}
    
    </div>
  );
};

export default NewsSingle;