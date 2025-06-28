import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './ProvinceDetail.module.css';

const provinceDetails = {
  "andijon": {
    name: "Andijon viloyati",
    description: "Andijon viloyati O'zbekistonning sharqiy qismida joylashgan bo'lib, Farg'ona vodiysining markazi hisoblanadi. Boy tarixi va madaniyati bilan mashhur.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Andijan_-_Uzbekistan.jpg/1024px-Andijan_-_Uzbekistan.jpg",
    attractions: ["Bobur bog'i", "Jome masjidi majmuasi", "Xonobod shahri"],
    recommendation: "Andijonning Bobur bog'ida sayr qilib, tarixiy muhitga sho'ng'ing va mahalliy taomlardan tatib ko'ring! Bu sizning safariingizning unutilmas qismi bo'ladi." // AI tavsiyasi
  },
  "buxoro": {
    name: "Buxoro viloyati",
    description: "Buxoro islom olamining markazlaridan biri, ming yillik tarixga ega qadimiy shahar. Ko'plab tarixiy obidalar va madrasalar bilan mashhur.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Po-i-Kalyan_complex_in_Bukhara.jpg/1024px-Po-i-Kalyan_complex_in_Bukhara.jpg",
    attractions: ["Poikalon majmuasi", "Somoniylar maqbarasi", "Chor Minor"],
    recommendation: "Buxoroning qadimiy ko'chalarida sayr qilib, Poikalon majmuasining ulug'vorligini his qiling. Kechki payt choyxonalarda dam olishni unutmang!" // AI tavsiyasi
  },
  "fargona": {
    name: "Farg'ona viloyati",
    description: "Farg'ona viloyati O'zbekistonning eng go'zal va unumdor hududlaridan biri bo'lib, ipakchilik va kulolchilik san'atlari bilan tanilgan.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Ferghana_Valley_%28landscape%29.jpg/1024px-Ferghana_Valley_%28landscape%29.jpg",
    attractions: ["Qo'qon xonligi saroyi", "Rishton kulolchilik markazi", "Marg'ilon"],
    recommendation: "Rishtonning mashhur kulolchilik ustaxonalariga tashrif buyurib, o'zbek hunarmandchiligining sir-asrorlarini o'rganing. Eshon-guzar bozori ham diqqatga sazovor!" // AI tavsiyasi
  },
  "xorazm": {
    name: "Xorazm viloyati",
    description: "Xorazm qadimiy sivilizatsiyalar beshigi, O'rta Osiyoning eng qadimiy hududlaridan biri. Xivaning ichki shahri - Ichan-qal'a UNESKO ro'yxatiga kiritilgan.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Khiva_Uzbekistan.jpg/1024px-Khiva_Uzbekistan.jpg",
    attractions: ["Ichan-qal'a (Xiva)", "Dishon-qal'a", "Urganch shahri"],
    recommendation: "Xiva Ichan-qal'ani albatta ziyorat qiling. Kechki payt yorug'liklar ostida uning go'zalligi sizni hayratga soladi!" // AI tavsiyasi
  },
  "namangan": {
    name: "Namangan viloyati",
    description: "Namangan O'zbekistonning shimoliy Farg'ona vodiysida joylashgan bo'lib, bog'lar, mevalar va gullar shahri sifatida tanilgan.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Namangan_view.jpg/1024px-Namangan_view.jpg",
    attractions: ["Mulla Bozor Okhund masjidi", "Axsikent", "Namangan madaniyat bog'i"],
    recommendation: "Namangan gullar shahrida sayr qiling va mahalliy mevalardan tatib ko'ring. Mahalliy bozorlardagi rang-baranglik sizni o'ziga rom etadi." // AI tavsiyasi
  },
  "navoiy": {
    name: "Navoiy viloyati",
    description: "Navoiy viloyati O'zbekistonning markaziy qismida joylashgan, boy mineral resurslarga ega va cho'l tabiati bilan ajralib turadi.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Navoiy_shahri.jpg/1024px-Navoiy_shahri.jpg",
    attractions: ["Sarmishsoy darasi (qoyatosh rasmlari)", "Nurata tog'lari", "Aydar-Arnasoy ko'llar tizimi"],
    recommendation: "Sarmishsoy darasidagi qadimiy qoyatosh rasmlarini ko'rishni tavsiya qilamiz. Bu hududning noyob tabiatini kashf eting!" // AI tavsiyasi
  },
  "qashqadaryo": {
    name: "Qashqadaryo viloyati",
    description: "Qashqadaryo janubiy O'zbekistonda joylashgan bo'lib, Amir Temurning vatani hisoblanadi. Shahrisabz shahri UNESKOning Butunjahon merosi ro'yxatiga kiritilgan.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ak-Saray_Palace%2C_Shahrisabz.jpg/1024px-Ak-Saray_Palace%2C_Shahrisabz.jpg",
    attractions: ["Shahrisabz (Ak-Saroy, Dorut Tilovat, Dorut Saodat)", "Kitob", "Qarshi shahri"],
    recommendation: "Amir Temurning vatani Shahrisabzga tashrif buyurib, Ak-Saroy saroyining ulug'vor qoldiqlarini va Dorut Tilovat majmuasini ko'ring. Bu joyda buyuk tarix nafas oladi!" // AI tavsiyasi
  },
  "qoraqalpogiston": {
    name: "Qoraqalpog'iston Respublikasi",
    description: "O'zbekistonning shimoli-g'arbiy qismida joylashgan avtonom respublika. Orol dengizi fojiasi va noyob madaniy merosi bilan ajralib turadi. Savitskiy nomidagi muzey dunyoga mashhur.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ship_graveyard_in_Moynaq_2011.jpg/1024px-Ship_graveyard_in_Moynaq_2011.jpg",
    attractions: ["Savitskiy san'at muzeyi (Nukus)", "Moynaqdagi kema qabristoni", "Ayaz-Qal'a"],
    recommendation: "Nukusdagi Savitskiy san'at muzeyini ziyorat qiling. Bu yerda siz Orol dengizi fojiasining noyob san'at kolleksiyasini kashf etasiz. Moynoqqa borish ham unutilmas taassurot qoldiradi." // AI tavsiyasi
  },
  "samarqand": {
    name: "Samarqand viloyati",
    description: "Samarqand Buyuk Ipak Yo'li markazida joylashgan eng qadimiy shaharlardan biri. Ulug'vor me'moriy yodgorliklar va boy tarixiy merosga ega.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Registan_Square%2C_Samarkand%2C_Uzbekistan.jpg/1024px-Registan_Square%2C_Samarkand%2C_Uzbekistan.jpg",
    attractions: ["Registonda joylashgan Sherdor, Tillaqori va Ulug'bek madrasalari", "Go'ri Amir maqbarasi", "Bibixonim masjidi", "Shoxi Zinda majmuasi"],
    recommendation: "Samarqandga tashrif buyurgan har bir sayyoh Registon maydonini ko'rishi shart! Kechki payt yorug'lik shoularini tomosha qilib, Sharq sehriga sho'ng'ing." // AI tavsiyasi
  },
  "sirdaryo": {
    name: "Sirdaryo viloyati",
    description: "Sirdaryo viloyati O'zbekistonning markaziy qismida joylashgan bo'lib, dehqonchilik va sanoat rivojlangan hudud hisoblanadi.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Gulistan%2C_Syrdarya_Region.jpg/1024px-Gulistan%2C_Syrdarya_Region.jpg",
    attractions: ["Guliston shahri", "Sirdaryo daryosi bo'yidagi dam olish maskanlari"],
    recommendation: "Sirdaryoning yashil maydonlarida dam oling va Guliston shahri bo'ylab sayr qiling. Mahalliy dehqon bozorlari ham qiziqarli!" // AI tavsiyasi
  },
  "surxondaryo": {
    name: "Surxondaryo viloyati",
    description: "Surxondaryo O'zbekistonning eng janubiy viloyati bo'lib, issiq iqlimi va tog'li relyefi bilan ajralib turadi. Ko'plab arxeologik yodgorliklar mavjud.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Termez_Minaret.jpg/1024px-Termez_Minaret.jpg",
    attractions: ["Termiz shahri", "Fayoztepa", "Kampirtepa", "Oltintepa"],
    recommendation: "Qadimiy Termiz shahrini ziyorat qiling va Fayoztepadagi Buddist me'morchiligining qoldiqlarini kashf eting. Issiq iqlimga moslashishni unutmang!" // AI tavsiyasi
  },
  "toshkent": { // Toshkent viloyati uchun
    name: "Toshkent viloyati",
    description: "Toshkent viloyati poytaxt Toshkentni o'rab turadi va tog'li hududlari bilan mashhur. Chimyon va Beldersoy kabi tog' kurortlari mavjud.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Charvak_reservoir_in_Tashkent_region.jpg/1024px-Charvak_reservoir_in_Tashkent_region.jpg",
    attractions: ["Chimyon tog'lari", "Chorvoq suv ombori", "Piskent", "Parkent"],
    recommendation: "Toshkent viloyatining go'zal tog'larida, xususan Chimyon va Chorvoqda dam oling. Qishda chang'i uchish, yozda toza havodan bahramand bo'lishingiz mumkin." // AI tavsiyasi
  },
  "toshkent-shahri": {
    name: "Toshkent shahri",
    description: "O'zbekiston poytaxti, Markaziy Osiyodagi eng yirik shaharlardan biri. Zamonaviy infratuzilma va boy madaniy merosni o'zida mujassam etgan.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Tashkent_panorama_%283%29.jpg/1024px-Tashkent_panorama_%283%29.jpg",
    attractions: ["Hazrati Imom majmuasi", "Minor masjidi", "Toshkent teleminori", "Amir Temur maydoni"],
    recommendation: "Toshkent shahri markazida Amir Temur maydonini ziyorat qiling va shaharning zamonaviy qiyofasi bilan tanishing. Kechki payt Mustaqillik maydonida sayr qilish ham yoqimli." // AI tavsiyasi
  }
};

const ProvinceDetail = () => {
  const { provinceId } = useParams();
  const [provinceInfo, setProvinceInfo] = useState(null);

  useEffect(() => {
    setProvinceInfo(provinceDetails[provinceId]);
  }, [provinceId]);

  if (!provinceInfo) {
    return <div className={style.DetailContainer}><p>Viloyat ma'lumotlari topilmadi.</p></div>;
  }

  return (
    <div className={style.DetailContainer}>
      <h1 className={style.DetailTitle}>{provinceInfo.name}</h1>
      <img src={provinceInfo.imageUrl} alt={provinceInfo.name} className={style.DetailImage} />
      <p className={style.DetailDescription}>{provinceInfo.description}</p>

      {/* AI tavsiyasi qismi */}
      {provinceInfo.recommendation && (
        <div className={style.RecommendationBox}>
          <h2 className={style.RecommendationTitle}>Bizning sun'iy intellektimizdan tavsiya:</h2>
          <p className={style.RecommendationText}>{provinceInfo.recommendation}</p>
        </div>
      )}

      <h2 className={style.DetailSubtitle}>Diqqatga sazovor joylar:</h2>
      <ul className={style.DetailAttractionsList}>
        {provinceInfo.attractions.map((attraction, index) => (
          <li key={index}>{attraction}</li>
        ))}
      </ul>
      <button onClick={() => window.history.back()} className={style.BackButton}>Orqaga</button>
    </div>
  );
};

export default ProvinceDetail;