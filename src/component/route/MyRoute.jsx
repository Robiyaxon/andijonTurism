import React from "react";
import { Routes, Route } from "react-router-dom";

import zoopark from "../../acsserts/zoopark.jpg";
import park from "../../acsserts/navoiy.jpg";
// import park2 from "../../acsserts/park.jpg";

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
import park3 from "../../acsserts/park3.jpg";


import park4 from "../../acsserts/bog1.jpg";
import park5 from "../../acsserts/bog3.jpg";

import main_zoo from "../../acsserts/main_zoo.webp";
import zoo1 from "../../acsserts/zoo1.jpg";
import zoo2 from "../../acsserts/zoo2.jpg";
import zoo3 from "../../acsserts/zoo3.jpg";


//karaoki
import karaoki1 from "../../acsserts/karaoke1.jpg";
import karaoke2 from "../../acsserts/karaoke2.webp";
import karaoke3 from "../../acsserts/karaoke3.png";
import karoake from "../../acsserts/karoake.jpg";
//teatri
import teatri1 from "../../acsserts/teatri1.jpg";
import teatri2 from "../../acsserts/teatri2.jpg";
import teatri3 from "../../acsserts/teatri3.jpg";

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
      single: {
       
      }},
    {
      id: 2,
      img: park4,
      title: "'Alisher Navoi' bog'i",
      text2: "Eski shahar",
      text3: "lorem imsone 4556",
      path: "singlepark2"
    }
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
  const map3 = [
    {
      id: 1,
      img: main_jome,
      title: "Jome masjidi",
      text2: "Jome masjidi",
      text3: "lorem imsone 4556",
      path: "singleaction",
    },
  ];
  const map4 = [
    {
      id: 1,
      img: main_qala,
      title: "Ming tepa",
      text2: "Ming tepa",
      text3: "lorem imsone 4556",
      path: "singleaction1",
    },
    {
      id:2,
      img: qutayba1,
      title: "Qutayba ibn muslim maqbarasi",
      text2: "Qutayba ibn muslim maqbarasi",
      text3: "lorem imsone 4556",
      path: "singleaction2",
    },
  ];
  const map6 = [
    {
      id: 1,
      img: karaoki1,
      title: "Akzar Karaoki bar",
      text2: "Akzar Karaoki bar",
      text3: "lorem imsone 4556",
      path: "singlekaraoki",
    },
  ];
  const map7 = [
    {
      id: 1,
      img: karaoke3,
      title: "Restobar Diskoteka",
      text2: "Restobar Diskoteka",
      text3: "lorem imsone 4556",
      path: "singledisco",
    },
  ];
  const map8 = [
    {
      id: 1,
      img: teatri1,
      title: "Andijon teatri",
      text2: "",
      text3: "lorem imsone 4556",
      path: "singletheatre",
    },
  ];
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route
          path="/place"
          element={<Anction title="Tarixiy obidalar" path={"singleaction"} map={map3} />}
        ></Route>
        <Route
          path="/place/singleaction"
          element={
            <NewsSingle
            title={"Jome masjidi"}
            text={
              "Jome masjid — shahar markazidagi yoki nisbatan katta hududdagi asosiy va eng katta bosh masjid. Jamoa uchun zarur turli xabarlar eʼlon qilinadigan, haftalik juma, xayit namozlari jamoa boʻlib oʻqiladigan maxsus bino. Shahar tashqarisida musallo, namozgox. Juma masjid, guzar (mahalla) masjidlariga nisbatan uning tuzilishi salobatli. Oʻrta Osiyoda J. m.ning umumiy tarxi murabba yoki toʻgʻri toʻrtburchakli xonaqox boʻlib, bir (old yoki yon) tomoni, ikki (jan. va sharqiy yoki shim. va sharqiy) yoki uch tomoni ayvon bilan oʻralgan. Xonaqoh tomi gumbazli yoki toʻsinli. Ayvon va xonaqox kattaligi toʻsinlar soni va qatori bilan belgilangan, baʼzan xonaqoh 1, 2, 4 gumbazli, ayvonlar atrofi qator ustunli, burchakda azon aytishga muljallangan mezana va hovli oʻrtasida hovuz boʻlgan. Buxoroda birinchi J. m. 713 y. Qutayba ibn Muslim tomonidan ishga tushirilgan. Ushbu masjid uchun mahalliy majusiylar ibodatxonasi moslashtirilgan. 14—15-asrlarda J. m. qurilishiga davrning mashhur meʼmor va muxandislari safarbar qilingan (qarang Al-masjid al-Aqso, Al-masjid al-Harom, Masjidi kalon, Bibixonim jome masjidi, Dehli jome masjidi).[1] "
            }
            img1={img2}
            img2={main_jome}
            img3={img3}
            map1={41.2814790790578}
            map2={69.3371495786628}
            main_pic={main_jome}
            route={"Obidalar"}
            route_path={"action"}
            />
          }
        ></Route>
        <Route
          path="/action"
          element={<Anction title={"Qadimiy obidalar"} path={"singleaction"} map={map4} />}
        ></Route>
        <Route
          path="/action/singleaction1"
          element={
            <NewsSingle
              title={"Mingtepa manzilgohi"}
              text={
                "Qadimiy shahar xarobalari Andijon viloyatining Andijon shahridan 38 km. uzoqlikdagi Marhamat tumanida joylashgan. Bular qadimgi Ershi shahrining xarobalari bo‘lib, miloddan avvalgi V-IV-asrlardan eramizning IV asrgacha mavjud bo‘lgan Dovon davlatining poytaxti bo‘lib xizmat qilgan. Ershi keyinchalik Mingtepa nomini olgan. Qachonlardir Buyuk Ipak yo‘li ushbu savdo shahri orqali o‘tgan. "
              }
              img1={main_qala}
              img2={ming_img2}
              img3={mingqala3}
              map1={41.2814790790578}
              map2={69.3371495786628}
              main_pic={mingqala3}
              route={"Obidalar"}
              route_path={"action"}
              map={map1}
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
              img1={qutayba1}
              img2={qutayba2}
              img3={qutayba3}
              map1={40.730507841225574}
              map2={72.6097728342902}
              main_pic={main_qutayba}
              route={"Obidalar"}
              route_path={"action"}
              map={map1}
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
            title={"Alisher Navoiy"}
            text={
              `Alisher Navoiy istirohat bogʻi — Oʻzbekistonning Andijon shahrida joylashgan muhim sayyohlik va tarixiy obida. Bu maskan atoqli o‘zbek shoiri, yozuvchisi va mutafakkiri Alisher Navoiy xotirasiga qurilgan.
              Istirohat bogʻi Alisher Navoiy yashagan davr meʼmoriy uslublarini oʻzida aks ettirgan majmuadir. Bu yerda Navoiy asarlaridan iqtiboslar, uning haykallari va u haqida maʼlumot beruvchi pannolar keltirilgan. Tashrif buyuruvchilar Navoiyning hayoti, ijodi va ta’siri haqida ko‘proq ma’lumot olishlari mumkin.         
              Andijon Markaziy Osiyodagi eng qadimiy shaharlardan biri sifatida tanilgan va boy tarix va madaniyatga ega. Alisher Navoiy istirohat bog'i shaharning tarixiy merosiga katta hissa qo'shadi va tashrif buyuruvchilarga Navoiyning ahamiyati va madaniy ta'sirini yaqindan his qilish imkoniyatini beradi.`
            }
            img1={park4}
            img2={park}
            img3={park1}
            map1={41.2814790790578}
            map2={69.3371495786628}
            main_pic={main_park}
            route={"Obidalar"}
            route_path={"action"}
            />
          }
        ></Route>
        <Route
          path="/park/singlepark2"
          element={
            <NewsSingle  
            title= "Bog`ishamol"
            text= "Andijon viloyati, Bog`ishamol tumani, Bog'ishamol tabiati boyicha mahalliy istirohat bog\`i ko'p yillar mobaynida mamlakatimiz fuqarolarini o'zlarining o'zaro do'stlariga muloqotlashish, o'tkazishlari va dam olgan joylardan dam olgan joylar vaqtlaridan yotkazgan qadimiy va jismoniy madaniy marosimlarini aniqlashlari uchun joylashgan joydir. Bog'ishamol tabiati boyicha istirohat bog'i haqida bir qancha umumiy ma'lumotlar: Bog'ishamol, Andijon viloyati manzilida joylashgan va uning turli xil tabiiy yodgorliklari va madaniy meroslariga ega bo'lgan joydir. Istirohat bog'ida tarkibiy tuzilmalardan foydalanib, mamlakatning milliy madaniyatining eng asosiy qismlarini namoyish etish maqsadida ko'plab tadbirlar o'tkaziladi. Mahalliy madaniyatni, san'atni, muzokaralarini va turizmni rivojlantirish bo'yicha tadbirlar va festival, bayramlar o'tkaziladi. Bog'ishamol tabiati boyicha istirohat bog'i, shahar fuqarolariga va turistlarga tabiatning zo'r mukofotlarini taqdim etadi, shuningdek, yaxshi dam olish va xavfsiz joylashish imkoniyatlarini ham taklif qiladi."    
            img1= {park5}
            img2= {park1}
            img3= {park3}
            map1= {40.78386437}
            map2= {72.35164365}
            main_pic= {park5}
            route= "Bog'lar"
            url_image="https://scontent.fura3-1.fna.fbcdn.net/v/t39.30808-6/435786602_122171733230027112_1140284694879207340_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=E8ZkxGYl1VAAb55cIHJ&_nc_ht=scontent.fura3-1.fna&oh=00_AfC72OO79dExQpA6z5Z3FjehMCy0PDwRc0nGJTTI5nPdLg&oe=662BF24F"
            route_path= "park"
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
              img1={zoo1}
              img2={zoo2}
              img3={zoo3}
              map1={40.716711}
              map2={72.445263}
              main_pic={main_zoo}
              route={"Hayvonot bog'lari"}
              route_path={"zoo"}
              map={map1}
            />
          }
        ></Route>
        <Route path="/karaoki" element={<Anction title={"Karaoki"} map={map6} />}></Route>
        <Route
          path="/karaoki/singlekaraoki"
          element={
            <NewsSingle  
            title= "Akzar Karaoki bar"
            text= "Qahvaxonakaraoke klubibilyard klubi "    
            img1= {karaoke2}
            img2= {karaoke3}
            img3= {karoake}
            map1= {40.78386437}
            map2= {72.35164365}
            main_pic= {karaoke3}
            route= "Akzar Karaoki bar"
            route_path= "karaoki"
            />
          }
        ></Route>

        <Route path="/disco" element={<Anction title={"Diskateka"} map={map7} />}></Route>
        <Route
          path="/disco/singledisco"
          element={
            <NewsSingle  
            title= "Restobar Diskoteka"
            text= "Qahvaxonakaraoke klubibilyard klubi "    
            img1= {karoake}
            img2= {karaoke2}
            img3= {karaoke2}
            map1= {40.78386437}
            map2= {72.35164365}
            main_pic= {karaoke3}
            route= "Akzar Karaoki bar"
            route_path= "karaoki"
            />
          }
        ></Route>

        <Route path="/theatre" element={<Anction title={"Teart"} map={map8} />}></Route>
        <Route
          path="/theatre/singletheatre"
          element={
            <NewsSingle  
            title= "Andijon teatri"
            text= "Andijon teatri, Yoʻldosh Oxunboboyev nomidagi Andijon viloyat musiqali drama va komediya teatri — toʻngʻich oʻzbek professional teatrlaridan. 1919-yil noyabr-dekabrida Hamza Hakimzoda Niyoziy boshchiligida „Yagona truppa“ nomi bilan rasman ish boshlagan. Truppaning tashkiliy, ijodiy takomilida T. Jalilov, A. Azimov (Otash), B. Fayziyev, Orifjon Toshmatov (Orif Garmon), M. Najmiddinov, Ishoqqori Karimov kabi sozanda, bastakor va hofizlar, shuningdek S. Ziyoev, M. Karimov, B. Mashrabiy, A. Isroilov, F. Boybekov singari ijodkorlar munosib hissa qoʻshganlar. 1924-yil teatr „Umid“ truppasi nomi bilan Andijon maorif boʻlimi ixtiyoriga olinadi. Truppaga A. Ismatov, Q. Oxunov, Hoji Zunnun kabi aktyorlar qoʻshiladi. Dastlab repertuar asosini maʼrifiy ruhdagi hajman katta boʻlmagan asarlar tashkil etilgan. Truppa safida sozanda va ovozli aktyorlarning borligi jamoaga sof drama qatori musiqali drama spektakllarini yaratish imkonini berdi. „Hind ixtilochilari“ (A. Fitrat), „Padarkush“ (M. Behbudiy), „Yorqinoy“ (Choʻlpon), „Fidoiy muhabbat“ (Sh. Rasulzoda), „Erk bolalari“, „Yetim va yetima“ (Gʻ. Zafariy), „Lolaxon“ (K. Yashin) kabi spektakllar musiqaviy ifodaga, xalq qoʻshiqlariga 506boyligi bilan tomoshabin eʼtiborini qozondi. Hamzaning „Zaharli hayot“, Uygʻurning „Turkiston tabibi“ kabi asarlari ham oʻrin oldi. Teatrga tajribali rejissyorlardan M. Tojizoda, Ali Ardobus, X. Qoriyev — Oʻgʻizlar taklif etidsi. 1920-yillar repertuaridan rus bosqinchiligiga qarshi ohang bilan sugʻorilgan baʼzi pesalarning uchrashi alohida eʼtiborga loyiq. K. Ramziyning „Vatan qahramoni“, zanjirband etilgan ona timsolida „olami Turon“ obrazini ifoda etuvchi „Ona Vatan“, Behbudiyning „Padarkush“ kabi asarlari shular jumlasidandir."    
            img1= {teatri1}
            img2= {teatri2}
            img3= {teatri3}
            map1= {40.78386437}
            map2= {72.35164365}
            main_pic= {teatri1}
            route= "Andijon teatri"
            route_path= "teatri"
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default MyRoute;
