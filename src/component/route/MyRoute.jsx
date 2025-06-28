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


import park4 from "../../acsserts/bog1.jpg";
import park5 from "../../acsserts/bog3.jpg";
import park6 from "../../acsserts/bog56.jpg";

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
//hotel
import hotel1 from "../../acsserts/hotel1.jpg";
import hotel2 from "../../acsserts/hotel2.jpg";
import hotel3 from "../../acsserts/hotel3.jpg";

// New imports for restaurant and cafe images (replace with your actual image paths)
import restaurant1 from "../../acsserts/restaurant1.jpg";
import restaurant2 from "../../acsserts/restaurant2.jpg";
import cafe1 from "../../acsserts/cafe1.jpg";
import cafe2 from "../../acsserts/cafe2.jpg";
import choyxona1 from "../../acsserts/choyxona2.webp";
import choyxona2 from "../../acsserts/choyxona1.jpg";
import fastfood1 from "../../acsserts/fastfood1.jpg";
import fastfood2 from "../../acsserts/fastfood2.jpg";



//kiyim kechak


import clothingStore1 from "../../acsserts/clothing_store1.webp";
import clothingStore2 from "../../acsserts/clothing_store2.webp";
import souvenirStore1 from "../../acsserts/souvenir_store1.webp";
import souvenirStore2 from "../../acsserts/souvenir_store2.webp";
import flowerStore1 from "../../acsserts/flower_store1.webp";
import flowerStore2 from "../../acsserts/flower_store2.webp";
import electronicsStore1 from "../../acsserts/electronics_store1.webp";
import electronicsStore2 from "../../acsserts/electronics_store2.png";
import mobileStore1 from "../../acsserts/mobile_store1.jpg";
import mobileStore2 from "../../acsserts/mobile_store2.jpg";



//education
import higherEducation1 from "../../acsserts/higher_education1.jpg";
import higherEducation2 from "../../acsserts/higher_education2.jpg";
import library1 from "../../acsserts/library1.jpg";
import library2 from "../../acsserts/library2.jpg";
import learningCenter1 from "../../acsserts/learning_center1.webp";
import learningCenter2 from "../../acsserts/learning_center2.jpg";
import bookCafe1 from "../../acsserts/book_cafe1.webp";
import bookCafe2 from "../../acsserts/book_cafe2.jpg";



//kasalxonalar 

import hospital1 from "../../acsserts/hospital1.jpg";
import hospital2 from "../../acsserts/hospital2.jpg";
import pharmacy1 from "../../acsserts/pharmacy1.webp";
import pharmacy2 from "../../acsserts/pharmacy2.webp";



import Header from "../Header/Header";
import Anction from "../anction/Anction";
import NewsSingle from "../anction/SingleAnction";
import NoPage from "../NoPage";

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
      title: "Bog`ishamol",
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
  const map9= [
    {
      id: 1,
      img: hotel2,
      title: "Bog`ishamol mehmonxonasi",
      text2: "",
      text3: "lorem imsone 4556",
      path: "singlehotel",
    },
  ];

  // New data for Restaurants
  const map10 = [
    {
      id: 1,
      img: restaurant1,
      title: "Grand Osh Markazi",
      text2: "Andijon shahar, Istiqlol ko'chasi 10",
      text3: "O'zbek va Yevropa taomlari",
      path: "singlerestaurant",
    },
    {
      id: 2,
      img: restaurant2,
      title: "Sultan Restaurant",
      text2: "Andijon shahar, Bobur shoh ko'chasi 5",
      text3: "Turk va Osiyo taomlari",
      path: "singlerestaurant2",
    },
  ];

  // New data for Cafes
  const map11 = [
    {
      id: 1,
      img: cafe1,
      title: "Coffee House",
      text2: "Andijon shahar, Navoi shoh ko'chasi 22",
      text3: "Qahva va shirinliklar",
      path: "singlecafe",
    },
    {
      id: 2,
      img: cafe2,
      title: "Art Cafe",
      text2: "Andijon shahar, Furqat ko'chasi 15",
      text3: "San'at va qulay muhit",
      path: "singlecafe2",
    },
  ];

  // New data for Choyxona
  const map12 = [
    {
      id: 1,
      img: choyxona1,
      title: "Milliy Choyxona",
      text2: "Andijon shahar, Eski shahar ko'chasi",
      text3: "An'anaviy choyxona",
      path: "singlechoyxona",
    },
    {
      id: 2,
      img: choyxona2,
      title: "Sharq Choyxonasi",
      text2: "Andijon shahar, Bog'ishamol mavzesi",
      text3: "Osiyo choyxona",
      path: "singlechoyxona2",
    },
  ];

  // New data for Fast Food
  const map13 = [
    {
      id: 1,
      img: fastfood1,
      title: "Burger King",
      text2: "Andijon shahar, Markaziy dehqon bozori yonida",
      text3: "Tez tayyorlanadigan taomlar",
      path: "singlefastfood",
    },
    {
      id: 2,
      img: fastfood2,
      title: "KFC",
      text2: "Andijon shahar, O'zbekiston ko'chasi",
      text3: "Tovuq mahsulotlari",
      path: "singlefastfood2",
    },
  ];
 const map14 = [
    {
      id: 1,
      img: clothingStore1,
      title: "Fashion Butik",
      text2: "Andijon shahar, Buyuk Ipak Yo'li ko'chasi 1",
      text3: "Ayollar va erkaklar kiyimlari",
      path: "single-clothing-store",
    },
    {
      id: 2,
      img: clothingStore2,
      title: "Trend Kiyimlar Do'koni",
      text2: "Andijon shahar, Bobur shoh ko'chasi 20",
      text3: "Zamonaviy va sport kiyimlari",
      path: "single-clothing-store2",
    },
  ];

  const map15 = [
    {
      id: 1,
      img: souvenirStore1,
      title: "Sharq Suvenirlari",
      text2: "Andijon shahar, Eski Shahar bozori",
      text3: "Milliy suvenirlar va hunarmandchilik buyumlari",
      path: "single-souvenir-store",
    },
    {
      id: 2,
      img: souvenirStore2,
      title: "Uzbekistan Gifts",
      text2: "Andijon shahar, Mustaqillik ko'chasi 5",
      text3: "Esdalik sovg'alari va sayyohlik buyumlari",
      path: "single-souvenir-store2",
    },
  ];

  const map16 = [
    {
      id: 1,
      img: flowerStore1,
      title: "Lola Gul Do'koni",
      text2: "Andijon shahar, Navoiy shoh ko'chasi 30",
      text3: "Har xil turdagi gullar va guldastalar",
      path: "single-flower-store",
    },
    {
      id: 2,
      img: flowerStore2,
      title: "Binafsha Gul Salon",
      text2: "Andijon shahar, Abdurauf Fitrat ko'chasi 10",
      text3: "Tantana va marosimlar uchun gullar",
      path: "single-flower-store2",
    },
  ];

  const map17 = [
    {
      id: 1,
      img: electronicsStore1,
      title: "Texno Market",
      text2: "Andijon shahar, Amir Temur ko'chasi 45",
      text3: "Maishiy texnika va elektronika",
      path: "single-electronics-store",
    },
    {
      id: 2,
      img: electronicsStore2,
      title: "Electro World",
      text2: "Andijon shahar, Farg'ona shoh ko'chasi 7",
      text3: "Kompyuterlar va ofis jihozlari",
      path: "single-electronics-store2",
    },
  ];

  const map18 = [
    {
      id: 1,
      img: mobileStore1,
      title: "Mobile City",
      text2: "Andijon shahar, O'zbekiston ko'chasi 11",
      text3: "Smartfonlar va aksessuarlar",
      path: "single-mobile-store",
    },
    {
      id: 2,
      img: mobileStore2,
      title: "Telefon Dunyosi",
      text2: "Andijon shahar, G'uncha ko'chasi 3",
      text3: "Telefon ta'mirlash va ehtiyot qismlar",
      path: "single-mobile-store2",
    },
  ];
const map19 = [
    {
      id: 1,
      img: higherEducation1,
      title: "Andijon Davlat Universiteti",
      text2: "Andijon shahar, Universitet ko'chasi 1",
      text3: "Oliy ta'lim muassasasi",
      path: "single-higher-education",
    },
    {
      id: 2,
      img: higherEducation2,
      title: "Andijon Mashinasozlik Instituti",
      text2: "Andijon shahar, Bobur shoh ko'chasi 10",
      text3: "Texnik soha bo'yicha mutaxassislar tayyorlash",
      path: "single-higher-education2",
    },
  ];

  const map20 = [
    {
      id: 1,
      img: library1,
      title: "Andijon Viloyat Axborot Kutubxona Markazi",
      text2: "Andijon shahar, Navoiy shoh ko'chasi 5",
      text3: "Kitoblar va raqamli resurslar",
      path: "single-library",
    },
    {
      id: 2,
      img: library2,
      title: "Yoshlar Kutubxonasi",
      text2: "Andijon shahar, Mustaqillik ko'chasi 15",
      text3: "Yoshlar uchun zamonaviy kutubxona",
      path: "single-library2",
    },
  ];

  const map21 = [
    {
      id: 1,
      img: learningCenter1,
      title: "Cambridge Learning Centre",
      text2: "Andijon shahar, Furqat ko'chasi 22",
      text3: "Ingliz tili va SAT tayyorlash kurslari",
      path: "single-learning-center",
    },
    {
      id: 2,
      img: learningCenter2,
      title: "IT School Andijan",
      text2: "Andijon shahar, Buyuk Ipak Yo'li ko'chasi 30",
      text3: "Dasturlash va IT kurslari",
      path: "single-learning-center2",
    },
  ];

  const map22 = [
    {
      id: 1,
      img: bookCafe1,
      title: "Kitob Kafesi 'Hikmat'",
      text2: "Andijon shahar, Amir Temur ko'chasi 50",
      text3: "Kitobxonlik va qahva ixlosmandlari uchun joy",
      path: "single-book-cafe",
    },
    {
      id: 2,
      img: bookCafe2,
      title: "Reader's Cafe",
      text2: "Andijon shahar, Yoshlar ko'chasi 8",
      text3: "Kitoblar, kofe va tinch muhit",
      path: "single-book-cafe2",
    },
  ];
const map23 = [
    {
      id: 1,
      img: hospital1,
      title: "Andijon Viloyat Ko'p Tarmoqli Markaziy Shifoxonasi",
      text2: "Andijon shahar, Alisher Navoiy ko'chasi 101",
      text3: "Turli kasalliklarni davolash",
      path: "single-hospital",
    },
    {
      id: 2,
      img: hospital2,
      title: "Andijon Onkologiya Markazi",
      text2: "Andijon shahar, Ma'rifat ko'chasi 5",
      text3: "Onkologik kasalliklarni davolash",
      path: "single-hospital2",
    },
  ];

  const map24 = [
    {
      id: 1,
      img: pharmacy1,
      title: "Markaziy Dorixona",
      text2: "Andijon shahar, Bobur shoh ko'chasi 25",
      text3: "Dori vositalari va tibbiy buyumlar",
      path: "single-pharmacy",
    },
    {
      id: 2,
      img: pharmacy2,
      title: "Salomatlik Dorixonasi",
      text2: "Andijon shahar, Amir Temur ko'chasi 15",
      text3: "Keng turdagi dori vositalari",
      path: "single-pharmacy2",
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
            img2= {park4}
            img3= {park6}
            map1= {40.78386437}
            map2= {72.35164365}
            main_pic= {park4}
            route= "Bog'lar"
            url_image="https://scontent.ftas4-3.fna.fbcdn.net/v/t39.30808-6/435786602_122171733230027112_1140284694879207340_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XW7s2z1tlfAQ7kNvgHWy08Q&_nc_ht=scontent.ftas4-3.fna&oh=00_AYC24uZhm1XFoaSVWiMHYCYgriAqF_1wDapJ3he7W-DKbg&oe=66646A8F"
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
            bron={true}
            />
          }
        ></Route>

        <Route path="/disco" element={<Anction title={"Diskateka"} map={map7}  bron={true} />}></Route>
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
            bron={true}
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
            bron={true}
            />
          }
        ></Route>
        <Route path="/hotel" element={<Anction title={"Mehmonxona"} map={map9}  />}></Route>
        <Route
          path="/hotel/singlehotel"
          element={
            <NewsSingle  
            title= "Bog`ishamol mehmonxonasi"
            text= 'Bu ajoyib 5 yulduzli mehmonxona Andijon shahrining markaziy qismida joylashgan. "Bog‘ishamol Hotel" – zamonaviy mehmonxonaning sharqona mehmondo‘stligi bilan uyg‘unlashuvi. Mehmonxona xolli barcha kerakli uskunalar va katta chiroyli admin-bar bilan jihozlangan. Hovlida yoritiladigan musiqiy favvora bor. Mehmonxonada och ranglardagi 40 ta qulay xona mavjud: 12 ta bir o‘rinli, 23 ta ikki o‘rinli va 5 ta Lyuks klassli nomerlar ham ishlash, ham dam olish uchun jihozlangan. Chekmaydiganlar uchun alohida xonalar mavjud. Mehmonxonaning Biznes-markazi va simsiz Internet sizni Andijonda bo‘lib turgan paytingizda ofisingiz va oilangiz bilan bog‘lanishga imkoniyat beradi.

            Standard Single  bitta katta ikki kishilik karavotga ega bir o‘rinli nomer. Shuningdek, xonada ish stoli, mehmonlar burchagi, garderob yoki javon bor. Bir-biriga o‘tadigan nomerlar mavjud.
            
            Standard Twin – ikkita bir o‘rinli karavotga ega nomer. Shuningdek, ish stoli, mehmonlar burchagi, garderob yoki javon mavjud.'
               
            img1= {hotel2}
            img2= {hotel3}
            img3= {hotel1}
            map1= {40.78386437}
            map2= {72.35164365}
            main_pic= {hotel3}
            route= "Bog`ishamol mehmonxonasi"
            route_path= "mehmonxona"
            bron={true}
            />
          }/>
        
        {/* New routes for Restaurants */}
        <Route
          path="/restaurant"
          element={<Anction title={"Restoranlar"} map={map10} />}
        ></Route>
        <Route
          path="/restaurant/singlerestaurant"
          element={
            <NewsSingle
              title={"Grand Osh Markazi"}
              text={"Grand Osh Markazi Andijon shahrida joylashgan bo'lib, o'zbek va Yevropa taomlarining keng assortimentini taklif etadi. Bu yerda siz mazali palov, kabob va boshqa milliy taomlar hamda Yevropa oshxonasining eng yaxshi namunalardan bahramand bo'lishingiz mumkin. Restoran oilaviy tushliklar va do'stlar bilan uchrashuvlar uchun ajoyib joydir."}
              img1={restaurant1}
              img2={restaurant2}
              img3={restaurant1}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={restaurant1}
              route={"Restoranlar"}
              route_path={"restaurant"}
              bron={true}
            />
          }
        ></Route>
        <Route
          path="/restaurant/singlerestaurant2"
          element={
            <NewsSingle
              title={"Sultan Restaurant"}
              text={"Sultan Restaurant turk va osiyo taomlari bilan mashhur. Bu yerda siz turk kebabining barcha turlari, lahmacun va boshqa sharqona lazzatlar hamda osiyo oshxonasining noyob taomlarini topishingiz mumkin. Mehmonlar uchun qulay va shinam muhit yaratilgan."}
              img1={restaurant2}
              img2={restaurant1}
              img3={restaurant2}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={restaurant2}
              route={"Restoranlar"}
              route_path={"restaurant"}
              bron={true}
            />
          }
        ></Route>

        {/* New routes for Cafes */}
        <Route
          path="/cafe"
          element={<Anction title={"Kafelar"} map={map11} />}
        ></Route>
        <Route
          path="/cafe/singlecafe"
          element={
            <NewsSingle
              title={"Coffee House"}
              text={"Coffee House Andijon shahrining markazida joylashgan bo'lib, turli xil qahva ichimliklari, shirinliklar va yengil tamaddilar taklif etadi. Bu yerda siz do'stlaringiz bilan suhbatlashib, kitob o'qib yoki shunchaki dam olib, vaqtingizni maroqli o'tkazishingiz mumkin."}
              img1={cafe1}
              img2={cafe2}
              img3={cafe1}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={cafe1}
              route={"Kafelar"}
              route_path={"cafe"}
              bron={true}
            />
          }
        ></Route>
        <Route
          path="/cafe/singlecafe2"
          element={
            <NewsSingle
              title={"Art Cafe"}
              text={"Art Cafe o'zining noyob dizayni va san'at asarlari bilan ajralib turadi. Bu yerda siz mazali qahva va desertlardan bahramand bo'lishingiz, shuningdek, mahalliy rassomlarning asarlarini tomosha qilishingiz mumkin. Ijodiy muhitni sevuvchilar uchun ideal joy."}
              img1={cafe2}
              img2={cafe1}
              img3={cafe2}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={cafe2}
              route={"Kafelar"}
              route_path={"cafe"}
              bron={true}
            />
          }
        ></Route>

        {/* New routes for Choyxona */}
        <Route
          path="/choyxona"
          element={<Anction title={"Choyxonalar"} map={map12} />}
        ></Route>
        <Route
          path="/choyxona/singlechoyxona"
          element={
            <NewsSingle
              title={"Milliy Choyxona"}
              text={"Milliy Choyxona Andijonning eski shahar qismida joylashgan bo'lib, an'anaviy o'zbek choyxonasining ruhini aks ettiradi. Bu yerda siz shinam muhitda, milliy taomlar va shirinliklar bilan birga, issiq choy ichib dam olishingiz mumkin."}
              img1={choyxona1}
              img2={choyxona2}
              img3={choyxona1}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={choyxona1}
              route={"Choyxonalar"}
              route_path={"choyxona"}
              bron={true}
            />
          }
        ></Route>
        <Route
          path="/choyxona/singlechoyxona2"
          element={
            <NewsSingle
              title={"Sharq Choyxonasi"}
              text={"Sharq Choyxonasi zamonaviy qulayliklar bilan an'anaviy sharqona uslubni uyg'unlashtirgan. Keng assortimentdagi choylar, sharqona shirinliklar va yengil tamaddilar bilan birga, shinam joylar sizga yoqimli va xotirjam vaqt o'tkazish imkonini beradi."}
              img1={choyxona2}
              img2={choyxona1}
              img3={choyxona2}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={choyxona2}
              route={"Choyxonalar"}
              route_path={"choyxona"}
              bron={true}
            />
          }
        ></Route>

        {/* New routes for Fast Food */}
        <Route
          path="/fastfood"
          element={<Anction title={"Fast food"} map={map13} />}
        ></Route>
        <Route
          path="/fastfood/singlefastfood"
          element={
            <NewsSingle
              title={"Burger King"}
              text={"Burger King butun dunyoda mashhur bo'lgan tez tayyorlanadigan taomlar tarmog'i bo'lib, Andijonda ham o'z filialini ochgan. Bu yerda siz mazali burgerlar, fri kartoshkasi, salatlar va ichimliklar bilan tez va to'yimli ovqatlanishingiz mumkin."}
              img1={fastfood1}
              img2={fastfood2}
              img3={fastfood1}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={fastfood1}
              route={"Fast food"}
              route_path={"fastfood"}
              bron={true}
            />
          }
        ></Route>
        <Route
          path="/fastfood/singlefastfood2"
          element={
            <NewsSingle
              title={"KFC"}
              text={"KFC (Kentucky Fried Chicken) o'zining noyob retsepti bo'yicha tayyorlangan qarsildoq tovuq mahsulotlari bilan tanilgan. Andijondagi filiali ham xuddi shunday mazali tovuq go'shtidan tayyorlangan taomlarni, shuningdek, burgerlar, salatlar va desertlar taklif etadi."}
              img1={fastfood2}
              img2={fastfood1}
              img3={fastfood2}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={fastfood2}
              route={"Fast food"}
              route_path={"fastfood"}
              bron={true}
            />
          }
        ></Route>
 {/* Kiyim kechak do'konlari */}
        <Route
          path="/clothing-store"
          element={<Anction title={"Kiyim kechak do'konlari"} map={map14} />}
        ></Route>
        <Route
          path="/clothing-store/single-clothing-store"
          element={
            <NewsSingle
              title={"Fashion Butik"}
              text={
                "Fashion Butik Andijon shahrida eng so'nggi moda trendlariga mos keladigan ayollar va erkaklar kiyimlarini taklif etadi. Bu yerda siz yuqori sifatli, zamonaviy va qulay kiyimlarni topishingiz mumkin. Har bir fasl uchun yangi kolleksiyalar doimiy ravishda yangilanadi."
              }
              img1={clothingStore1}
              img2={clothingStore2}
              img3={clothingStore1}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={clothingStore1}
              route={"Kiyim kechak do'konlari"}
              route_path={"clothing-store"}
            />
          }
        ></Route>
        <Route
          path="/clothing-store/single-clothing-store2"
          element={
            <NewsSingle
              title={"Trend Kiyimlar Do'koni"}
              text={
                "Trend Kiyimlar Do'koni yoshlar va zamonaviy uslubni sevuvchilar uchun mo'ljallangan. Bu yerda siz sport kiyimlari, kundalik liboslar va barcha turdagi aksessuarlarni topishingiz mumkin. Do'kon qulay joylashuvga va do'stona xizmatga ega."
              }
              img1={clothingStore2}
              img2={clothingStore1}
              img3={clothingStore2}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={clothingStore2}
              route={"Kiyim kechak do'konlari"}
              route_path={"clothing-store"}
            />
          }
        ></Route>

        {/* Suvenir do'konlari */}
        <Route
          path="/souvenir-store"
          element={<Anction title={"Suvenir do'konlari"} map={map15} />}
        ></Route>
        <Route
          path="/souvenir-store/single-souvenir-store"
          element={
            <NewsSingle
              title={"Sharq Suvenirlari"}
              text={
                "Sharq Suvenirlari do'konida O'zbekistonning boy madaniyati va an'analarini aks ettiruvchi noyob suvenirlar va hunarmandchilik buyumlari mavjud. Bu yerda siz oilangiz va do'stlaringiz uchun o'zgacha sovg'alar topishingiz mumkin."
              }
              img1={souvenirStore1}
              img2={souvenirStore2}
              img3={souvenirStore1}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={souvenirStore1}
              route={"Suvenir do'konlari"}
              route_path={"souvenir-store"}
            />
          }
        ></Route>
        <Route
          path="/souvenir-store/single-souvenir-store2"
          element={
            <NewsSingle
              title={"Uzbekistan Gifts"}
              text={
                "Uzbekistan Gifts do'koni sayyohlar va mahalliy aholi uchun mo'ljallangan. Bu yerda siz turli xil esdalik sovg'alari, milliy liboslar va hunarmandchilik buyumlarini xarid qilishingiz mumkin. O'zbekistonning go'zal an'analarini o'zingiz bilan olib ketish uchun ajoyib joy."
              }
              img1={souvenirStore2}
              img2={souvenirStore1}
              img3={souvenirStore2}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={souvenirStore2}
              route={"Suvenir do'konlari"}
              route_path={"souvenir-store"}
            />
          }
        ></Route>

        {/* Gul do'konlari */}
        <Route
          path="/flower-store"
          element={<Anction title={"Gul do'konlari"} map={map16} />}
        ></Route>
        <Route
          path="/flower-store/single-flower-store"
          element={
            <NewsSingle
              title={"Lola Gul Do'koni"}
              text={
                "Lola Gul Do'koni har xil turdagi yangi uzilgan gullar va chiroyli guldastalar taklif etadi. Har qanday tadbir yoki bayram uchun mos keladigan gullarni bu yerdan topishingiz mumkin. Yetkazib berish xizmati ham mavjud."
              }
              img1={flowerStore1}
              img2={flowerStore2}
              img3={flowerStore1}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={flowerStore1}
              route={"Gul do'konlari"}
              route_path={"flower-store"}
            />
          }
        ></Route>
        <Route
          path="/flower-store/single-flower-store2"
          element={
            <NewsSingle
              title={"Binafsha Gul Salon"}
              text={
                "Binafsha Gul Salonida siz har qanday bayram va tantana uchun noyob guldastalar va kompozitsiyalarni buyurtma qilishingiz mumkin. Professionallar jamoasi sizning istaklaringizga ko'ra eng chiroyli gullarni tayyorlab beradi."
              }
              img1={flowerStore2}
              img2={flowerStore1}
              img3={flowerStore2}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={flowerStore2}
              route={"Gul do'konlari"}
              route_path={"flower-store"}
            />
          }
        ></Route>

        {/* Texnika do'konlari */}
        <Route
          path="/electronics-store"
          element={<Anction title={"Texnika do'konlari"} map={map17} />}
        ></Route>
        <Route
          path="/electronics-store/single-electronics-store"
          element={
            <NewsSingle
              title={"Texno Market"}
              text={
                "Texno Market eng yangi maishiy texnika va elektronika mahsulotlarini taklif etadi. Muzlatgichlar, kir yuvish mashinalari, televizorlar, kompyuterlar va boshqa ko'plab mahsulotlarni bu yerdan xarid qilishingiz mumkin. Sifat kafolatlangan."
              }
              img1={electronicsStore1}
              img2={electronicsStore2}
              img3={electronicsStore1}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={electronicsStore1}
              route={"Texnika do'konlari"}
              route_path={"electronics-store"}
            />
          }
        ></Route>
        <Route
          path="/electronics-store/single-electronics-store2"
          element={
            <NewsSingle
              title={"Electro World"}
              text={
                "Electro World - kompyuterlar, noutbuklar, smartfonlar va boshqa elektron qurilmalarning keng assortimentiga ega. Bu yerda siz eng yaxshi brendlar va yangi texnologiyalar bilan tanishishingiz mumkin. Malakali sotuvchilar sizga to'g'ri tanlov qilishga yordam beradi."
              }
              img1={electronicsStore2}
              img2={electronicsStore1}
              img3={electronicsStore2}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={electronicsStore2}
              route={"Texnika do'konlari"}
              route_path={"electronics-store"}
            />
          }
        ></Route>

        {/* Mobile do'konlari */}
        <Route
          path="/mobile-store"
          element={<Anction title={"Mobile do'konlari"} map={map18} />}
        ></Route>
        <Route
          path="/mobile-store/single-mobile-store"
          element={
            <NewsSingle
              title={"Mobile City"}
              text={
                "Mobile City Andijondagi eng yirik mobil telefonlar va aksessuarlar do'konlaridan biri. Bu yerda siz Samsung, iPhone, Xiaomi kabi dunyoning yetakchi brendlarining so'nggi modellarini, shuningdek, naushniklar, chexollar va boshqa aksessuarlarni topishingiz mumkin."
              }
              img1={mobileStore1}
              img2={mobileStore2}
              img3={mobileStore1}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={mobileStore1}
              route={"Mobile do'konlari"}
              route_path={"mobile-store"}
            />
          }
        ></Route>
        <Route
          path="/mobile-store/single-mobile-store2"
          element={
            <NewsSingle
              title={"Telefon Dunyosi"}
              text={
                "Telefon Dunyosi - bu nafaqat mobil telefonlar do'koni, balki professional ta'mirlash markazi ham. Bu yerda siz yangi telefon xarid qilishingiz, eski telefoningizni ta'mirlatishingiz yoki ehtiyot qismlar sotib olishingiz mumkin. Yuqori sifatli xizmat kafolatlangan."
              }
              img1={mobileStore2}
              img2={mobileStore1}
              img3={mobileStore2}
              map1={40.78386437}
              map2={72.35164365}
              main_pic={mobileStore2}
              route={"Mobile do'konlari"}
              route_path={"mobile-store"}
            />
          }
        ></Route>
     <Route
          path="/higher-education"
          element={<Anction title={"Oliy ta'lim muassasalari"} map={map19} />}
        ></Route>
        <Route
          path="/higher-education/single-higher-education"
          element={
            <NewsSingle
              title={"Andijon Davlat Universiteti"}
              text={
                "Andijon Davlat Universiteti — O'zbekistondagi yetakchi oliy ta'lim muassasalaridan biri bo'lib, turli xil yo'nalishlarda mutaxassislar tayyorlaydi. Universitet zamonaviy o'quv dasturlari va tajribali professor-o'qituvchilarga ega."
              }
              img1={higherEducation1}
              img2={higherEducation2}
              img3={higherEducation1}
              map1={40.78386437} // Bu yerga Andijon DU koordinatalarini qo'ying
              map2={72.35164365} // Bu yerga Andijon DU koordinatalarini qo'ying
              main_pic={higherEducation1}
              route={"Oliy ta'lim"}
              route_path={"higher-education"}
            />
          }
        ></Route>
        <Route
          path="/higher-education/single-higher-education2"
          element={
            <NewsSingle
              title={"Andijon Mashinasozlik Instituti"}
              text={
                "Andijon Mashinasozlik Instituti sanoat va texnologiya sohalarida yuqori malakali muhandislarni tayyorlaydi. Institut zamonaviy laboratoriyalar va amaliyotlar bilan jihozlangan bo'lib, talabalarga chuqur bilim va ko'nikmalar beradi."
              }
              img1={higherEducation2}
              img2={higherEducation1}
              img3={higherEducation2}
              map1={40.78386437} // Bu yerga Andijon MI koordinatalarini qo'ying
              map2={72.35164365} // Bu yerga Andijon MI koordinatalarini qo'ying
              main_pic={higherEducation2}
              route={"Oliy ta'lim"}
              route_path={"higher-education"}
            />
          }
        ></Route>

        {/* Kutubxonalar */}
        <Route
          path="/library"
          element={<Anction title={"Kutubxonalar"} map={map20} />}
        ></Route>
        <Route
          path="/library/single-library"
          element={
            <NewsSingle
              title={"Andijon Viloyat Axborot Kutubxona Markazi"}
              text={
                "Andijon Viloyat Axborot Kutubxona Markazi keng qamrovli kitob fondi, davriy nashrlar va raqamli resurslar bilan xizmat ko'rsatadi. Bu yerda siz turli janrdagi kitoblarni topishingiz, o'quv zallaridan foydalanishingiz va ilmiy tadqiqotlar olib borishingiz mumkin."
              }
              img1={library1}
              img2={library2}
              img3={library1}
              map1={40.78386437} // Bu yerga Kutubxona koordinatalarini qo'ying
              map2={72.35164365} // Bu yerga Kutubxona koordinatalarini qo'ying
              main_pic={library1}
              route={"Kutubxonalar"}
              route_path={"library"}
            />
          }
        ></Route>
        <Route
          path="/library/single-library2"
          element={
            <NewsSingle
              title={"Yoshlar Kutubxonasi"}
              text={
                "Yoshlar Kutubxonasi zamonaviy dizayn va yoshlarga mos muhitga ega. Bu yerda siz badiiy adabiyot, ilmiy kitoblar va o'quv qo'llanmalarini topishingiz mumkin. Shuningdek, turli tadbirlar va kitobxonlik kechalari o'tkaziladi."
              }
              img1={library2}
              img2={library1}
              img3={library2}
              map1={40.78386437} // Bu yerga Kutubxona koordinatalarini qo'ying
              map2={72.35164365} // Bu yerga Kutubxona koordinatalarini qo'ying
              main_pic={library2}
              route={"Kutubxonalar"}
              route_path={"library"}
            />
          }
        ></Route>

        {/* O'quv markazlari */}
        <Route
          path="/learning-centers"
          element={<Anction title={"O'quv markazlari"} map={map21} />}
        ></Route>
        <Route
          path="/learning-centers/single-learning-center"
          element={
            <NewsSingle
              title={"Cambridge Learning Centre"}
              text={
                "Cambridge Learning Centre ingliz tili va xalqaro imtihonlarga tayyorlash bo'yicha yuqori sifatli kurslarni taklif etadi. Tajribali o'qituvchilar va zamonaviy o'qitish metodologiyasi bilan samarali natijalarga erishishingiz mumkin."
              }
              img1={learningCenter1}
              img2={learningCenter2}
              img3={learningCenter1}
              map1={40.78386437} // Bu yerga O'quv markazi koordinatalarini qo'ying
              map2={72.35164365} // Bu yerga O'quv markazi koordinatalarini qo'ying
              main_pic={learningCenter1}
              route={"O'quv markazlari"}
              route_path={"learning-centers"}
            />
          }
        ></Route>
        <Route
          path="/learning-centers/single-learning-center2"
          element={
            <NewsSingle
              title={"IT School Andijan"}
              text={
                "IT School Andijan dasturlash, veb-dizayn va boshqa IT sohalarida amaliy ko'nikmalar beruvchi o'quv markazidir. Bu yerda siz zamonaviy texnologiyalarni o'rganishingiz va IT sohasida mutaxassis bo'lishingiz mumkin."
              }
              img1={learningCenter2}
              img2={learningCenter1}
              img3={learningCenter2}
              map1={40.78386437} // Bu yerga O'quv markazi koordinatalarini qo'ying
              map2={72.35164365} // Bu yerga O'quv markazi koordinatalarini qo'ying
              main_pic={learningCenter2}
              route={"O'quv markazlari"}
              route_path={"learning-centers"}
            />
          }
        ></Route>

        {/* Book kafelar */}
        <Route
          path="/book-cafe"
          element={<Anction title={"Book kafelar"} map={map22} />}
        ></Route>
        <Route
          path="/book-cafe/single-book-cafe"
          element={
            <NewsSingle
              title={"Kitob Kafesi 'Hikmat'"}
              text={
                "Kitob Kafesi 'Hikmat' - bu kitobxonlikni sevuvchilar uchun qulay va shinam joy. Bu yerda siz turli janrdagi kitoblarni o'qishingiz, mazali qahva ichishingiz va do'stlaringiz bilan suhbatlashishingiz mumkin. Ijodiy muhit va tinchlikni qadrlaydiganlar uchun ideal."
              }
              img1={bookCafe1}
              img2={bookCafe2}
              img3={bookCafe1}
              map1={40.78386437} // Bu yerga Book kafe koordinatalarini qo'ying
              map2={72.35164365} // Bu yerga Book kafe koordinatalarini qo'ying
              main_pic={bookCafe1}
              route={"Book kafelar"}
              route_path={"book-cafe"}
            />
          }
        ></Route>
        <Route
          path="/book-cafe/single-book-cafe2"
          element={
            <NewsSingle
              title={"Reader's Cafe"}
              text={
                "Reader's Cafe - bu sizning sevimli kitobingiz bilan birga bir finjon kofe ichib, dam olishingiz mumkin bo'lgan joy. Kutubxona va kafe funksiyalarini o'zida birlashtirgan bu maskan intellektual muhitni qadrlaydiganlar uchun ajoyib tanlovdir."
              }
              img1={bookCafe2}
              img2={bookCafe1}
              img3={bookCafe2}
              map1={40.78386437} // Bu yerga Book kafe koordinatalarini qo'ying
              map2={72.35164365} // Bu yerga Book kafe koordinatalarini qo'ying
              main_pic={bookCafe2}
              route={"Book kafelar"}
              route_path={"book-cafe"}
            />
          }
        ></Route>
 {/* Shifoxonalar */}
        <Route
          path="/hospitals"
          element={<Anction title={"Shifoxonalar"} map={map23} />}
        ></Route>
        <Route
          path="/hospitals/single-hospital"
          element={
            <NewsSingle
              title={"Andijon Viloyat Ko'p Tarmoqli Markaziy Shifoxonasi"}
              text={
                "Andijon Viloyat Ko'p Tarmoqli Markaziy Shifoxonasi zamonaviy tibbiy uskunalar va yuqori malakali mutaxassislar bilan jihozlangan bo'lib, keng qamrovli tibbiy xizmatlarni taqdim etadi. Bu yerda siz turli kasalliklar bo'yicha diagnostika va davolanish imkoniyatiga egasiz."
              }
              img1={hospital1}
              img2={hospital2}
              img3={hospital1}
              map1={40.78386437} // Bu yerga Shifoxona koordinatalarini qo'ying
              map2={72.35164365} // Bu yerga Shifoxona koordinatalarini qo'ying
              main_pic={hospital1}
              route={"Shifoxonalar"}
              route_path={"hospitals"}
            />
          }
        ></Route>
        <Route
          path="/hospitals/single-hospital2"
          element={
            <NewsSingle
              title={"Andijon Onkologiya Markazi"}
              text={
                "Andijon Onkologiya Markazi onkologik kasalliklarni davolash va profilaktikasi bo'yicha ixtisoslashgan tibbiyot muassasasidir. Markazda eng yangi texnologiyalar va tajribali shifokorlar yordamida bemorlarga yuqori sifatli xizmat ko'rsatiladi."
              }
              img1={hospital2}
              img2={hospital1}
              img3={hospital2}
              map1={40.78386437} // Bu yerga Onkologiya markazi koordinatalarini qo'ying
              map2={72.35164365} // Bu yerga Onkologiya markazi koordinatalarini qo'ying
              main_pic={hospital2}
              route={"Shifoxonalar"}
              route_path={"hospitals"}
            />
          }
        ></Route>

        {/* Dorixonalar */}
        <Route
          path="/pharmacies"
          element={<Anction title={"Dorixonalar"} map={map24} />}
        ></Route>
        <Route
          path="/pharmacies/single-pharmacy"
          element={
            <NewsSingle
              title={"Markaziy Dorixona"}
              text={
                "Markaziy Dorixona keng turdagi dori vositalari, tibbiy buyumlar va parvarishlash mahsulotlarini taklif etadi. Malakali farmatsevtlar sizga kerakli maslahatlarni berishadi va to'g'ri tanlov qilishda yordam berishadi."
              }
              img1={pharmacy1}
              img2={pharmacy2}
              img3={pharmacy1}
              map1={40.78386437} // Bu yerga Dorixona koordinatalarini qo'ying
              map2={72.35164365} // Bu yerga Dorixona koordinatalarini qo'ying
              main_pic={pharmacy1}
              route={"Dorixonalar"}
              route_path={"pharmacies"}
            />
          }
        ></Route>
        <Route
          path="/pharmacies/single-pharmacy2"
          element={
            <NewsSingle
              title={"Salomatlik Dorixonasi"}
              text={
                "Salomatlik Dorixonasi sizning sog'lig'ingiz uchun ishonchli yordamchidir. Bu yerda siz turli xil dori vositalari, vitaminlar va biologik faol qo'shimchalarni topishingiz mumkin. Xizmat sifati va mijozlarga e'tibor birinchi o'rinda turadi."
              }
              img1={pharmacy2}
              img2={pharmacy1}
              img3={pharmacy2}
              map1={40.78386437} // Bu yerga Dorixona koordinatalarini qo'ying
              map2={72.35164365} // Bu yerga Dorixona koordinatalarini qo'ying
              main_pic={pharmacy2}
              route={"Dorixonalar"}
              route_path={"pharmacies"}
            />
          }
        ></Route>

    <Route path="/notpage" element={<NoPage/>}></Route>
      </Routes>
    </div>
  );
};

export default MyRoute;