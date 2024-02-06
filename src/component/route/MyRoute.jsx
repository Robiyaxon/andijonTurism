import React from "react";
import { Routes, Route } from "react-router-dom";

import zoopark from "../../acsserts/zoopark.jpg";
import park from "../../acsserts/navoiy.jpg";
import park2 from "../../acsserts/park.jpg";

import img2 from "../../acsserts/jome2.jpg";
import img3 from "../../acsserts/jome3.jpg";
import main_jome from "../../acsserts/jome.jpg";

// import img from "../../acsserts/jome.jpg";
import mingqala3 from "../../acsserts/mingqala3.jpg";
import ming_img2 from "../../acsserts/mingtepa2.jpg";
import main_qala from "../../acsserts/mingqala.jpg";

import main_qutayba from "../../acsserts/qutayba.jpg";
import qutayba1 from "../../acsserts/qutayba1.jpg";
import qutayba2 from "../../acsserts/qutayba2.jpg";
import qutayba3 from "../../acsserts/qutayba3.jpg";

import main_park from "../../acsserts/park_main.jpg";
import park1 from "../../acsserts/park1.webp";
import park_2 from "../../acsserts/park2.jpg";
import park3 from "../../acsserts/park3.jpg";

import main_zoo from "../../acsserts/main_zoo.webp";
import zoo1 from "../../acsserts/zoo1.jpg";
import zoo2 from "../../acsserts/zoo2.jpg";
import zoo3 from "../../acsserts/zoo3.jpg";

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
      path: "singlepark",
    },
  ];
  const map2 = [
    {
      id: 1,
      img: zoopark,
      title: "Bog'ishamol hayvonot bog'i",
      text2: "Bog'ishamol",
      text3: "lorem imsone 4556",
      path: "singlezoo",
    },
  ];
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route
          path="/action"
          element={<Anction title={"Qadimiy obidalar"} path={"singleaction"} />}
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
              img1={main_jome}
              img2={img2}
              img3={img3}
              map1={40.78791552216897}
              map2={72.3459619671118}
              main_pic={main_jome}
              route={"Obidalar"}
              route_path={"action"}
            />
          }
        ></Route>
        <Route
          path="/action/singleaction1"
          element={
            <NewsSingle
              title={"Mingtepa manzilgohi"}
              text={
                "Qadimiy shahar xarobalari Andijon viloyatining Andijon shahridan 38 km. uzoqlikdagi Marhamat tumanida joylashgan. Bular qadimgi Ershi shahrining xarobalari bo‘lib, miloddan avvalgi V-IV-asrlardan eramizning IV asrgacha mavjud bo‘lgan Dovon davlatining poytaxti bo‘lib xizmat qilgan. Ershi keyinchalik Mingtepa nomini olgan. Qachonlardir Buyuk Ipak yo‘li ushbu savdo shahri orqali o‘tgan. "
              }
              text_2={
                "Qadimgi Dovon poytaxti xitoy yozma manbalarida eslab o‘tilgan, bu yerda hunarmandchilik va dehqonchilik rivojlangan va aynan shu yerda mashhur “samoviy otlar” Xitoy imperatorining saroyi uchun olib ketilgan, hatto bu haqda Iskandar Zulqarnaynning o‘zi orzu qilgan."
              }
              img1={main_qala}
              img2={ming_img2}
              img3={mingqala3}
              map1={41.2814790790578}
              map2={69.3371495786628}
              main_pic={mingqala3}
              route={"Obidalar"}
              route_path={"action"}
            />
          }
        ></Route>
        <Route
          path="/action/singleaction2"
          element={
            <NewsSingle
              title={"Qutayba ibn muslim maqbarasi"}
              text={
                "Qadimiy shahar xarobalari Andijon viloyatining Andijon shahridan 38 km. uzoqlikdagi Marhamat tumanida joylashgan. Bular qadimgi Ershi shahrining xarobalari bo‘lib, miloddan avvalgi V-IV-asrlardan eramizning IV asrgacha mavjud bo‘lgan Dovon davlatining poytaxti bo‘lib xizmat qilgan. Ershi keyinchalik Mingtepa nomini olgan. Qachonlardir Buyuk Ipak yo‘li ushbu savdo shahri orqali o‘tgan. "
              }
              text_2={
                "Qadimgi Dovon poytaxti xitoy yozma manbalarida eslab o‘tilgan, bu yerda hunarmandchilik va dehqonchilik rivojlangan va aynan shu yerda mashhur “samoviy otlar” Xitoy imperatorining saroyi uchun olib ketilgan, hatto bu haqda Iskandar Zulqarnaynning o‘zi orzu qilgan."
              }
              img1={qutayba1}
              img2={qutayba2}
              img3={qutayba3}
              map1={40.730507841225574}
              map2={72.6097728342902}
              main_pic={main_qutayba}
              route={"Obidalar"}
              route_path={"action"}
            />
          }
        ></Route>
        <Route
          path="/action/singleaction3"
          element={
            <NewsSingle
              title={"Qutayba  ibn Muslim maqbarasi"}
              text={
                "Andijon viloyati O‘zbekistonning eng qadimiy va betakror viloyatlaridan biridir. Ko‘p asrlar davomida bu hudud o‘zining qadimiy ziyoratgohlari bilan mashhur. Bular orasida islom dinini Oʻrta Osiyo hududiga birinchi olib kirgan arab sarkardasi Qutayba ibn Muslim maqbarasi munosib oʻrin egallaydi."
              }
              text_2={
                "Andijon viloyatidagi Jalaquduq tumanidagi “Qilichmozor” mahallasida bir tabarruk maskan boʻlib, u Qutayba ibn Muslim nomi bilan uzviy bogʻliqdir. Bu joy bilan bog‘liq ko‘plab afsonalar xalq orasida avloddan avlodga o‘tib kelmoqda. Ming yillar muqaddam bu hududdan arab qo‘mondoni o‘tgan bo‘lib, Qutayba ibn Muslim tegib o‘tgan qadimgi daraxt o‘smoqda deya ishonishadi. Afsonaga ko‘ra, qadimiy qarag‘ayning tanasidan tomayotgan sharbat odamga kuch-quvvat va sog‘liq baxsh etadi."
              }
              img1={main_qala}
              img2={ming_img2}
              img3={mingqala3}
              map1={41.2814790790578}
              map2={69.3371495786628}
              main_pic={main_jome}
              route={"Obidalar"}
              route_path={"action"}
            />
          }
        ></Route>
        <Route
          path="/park"
          element={<Anction title={"Istirohat bog'i"} map={map1} />}
        ></Route>
        <Route
          path="/park/singlepark"
          element={
            <NewsSingle
              title={"'Alisher Navoiy' nomidagi istirohat bog'i"}
              text={
                "Andijonliklarga hos shijoat, mardlik timsoli sifatida 1933 yili shahar ustalar tomonidan mehnatkashlarga sovg’a tariqasida bunyod etilgan. Andijon yoshlari va mehmonlarning sevimli dam olish maskani – Alisher Navoiy nomidagi madaniyat va istiroxat bog’i ichida joylashgan. 2000 yilda qayta ta’mirlashgan. Unga uyg’unlashtirilib “Amfiteatr” da bayram tantanalari va boshqa ko’ngilochar tadbirlar o’tkaziladi."
              }
              text_2={
                "Andijonliklarga hos shijoat, mardlik timsoli sifatida 1933 yili shahar ustalar tomonidan mehnatkashlarga sovg’a tariqasida bunyod etilgan. Andijon yoshlari va mehmonlarning sevimli dam olish maskani – Alisher Navoiy nomidagi madaniyat va istiroxat bog’i ichida joylashgan. 2000 yilda qayta ta’mirlashgan. Unga uyg’unlashtirilib “Amfiteatr” da bayram tantanalari va boshqa ko’ngilochar tadbirlar o’tkaziladi."
              }
              img1={park1}
              img2={park_2}
              img3={park3}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={main_park}
              route={"Bog'lar"}
              route_path={"park"}
            />
          }
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
              img2={park2}
              img3={park}
              map1={40.78791552216897}
              map2={72.3459619671118}
              main_pic={main_jome}
              route={"Istirohat bo'gi"}
              route_path={"park"}
            />
          }
        ></Route>

        <Route
          path="/zoo"
          element={<Anction title={"Hayvonot bog'i"} map={map2} />}
        ></Route>
        <Route
          path="/zoo/singlezoo"
          element={
            <NewsSingle
              title={"Bog'ishamol hayvonot bog'i"}
              text={
                "Andijon shahrining Bog‘ishamol dahasida “Xon” mas’uliyati cheklangan jamiyat tomonidan besh gektar maydonda bunyod etilgan hayvonot bog‘i foydalanishga topshirildi. Bu haqda “Daryo” muxbiri xabar bermoqda."
              }
              text_2={
                "Uch yil mobaynida 12 milliard so‘mdan ortiq jamiyat raisi Muxtorjon Halilovning hamda bankdan olingan kredit mablag‘lari hisobiga katta hajmdagi qurilish va bunyodkorlik ishlari amalga oshirilgan."
              }
              img1={zoo1}
              img2={zoo2}
              img3={zoo3}
              map1={40.716711}
              map2={72.445263}
              main_pic={main_zoo}
              route={"Hayvonot bog'lari"}
              route_path={"zoo"}
            />
          }
        ></Route>
        <Route path="/disco" element={<Anction title={"Diskateka"} />}></Route>
        <Route path="/theatre" element={<Anction title={"Teart"} />}></Route>
      </Routes>
    </div>
  );
};

export default MyRoute;
