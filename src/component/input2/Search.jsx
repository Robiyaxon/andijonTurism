import React from 'react';
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import style from './Search.module.css'; // Correct import for CSS Modules

const provinceData = [
  'Hududni tanlang!', // Default placeholder
  "Andijon viloyati",
  "Buxoro viloyati",
  "Fargʻona viloyati",
  "Xorazm viloyati",
  "Namangan viloyati",
  "Navoiy viloyati",
  "Qashqadaryo viloyati",
  "Qoraqalpogʻiston Respublikasi",
  "Samarqand viloyati",
  "Sirdaryo viloyati",
  "Surxondaryo viloyati",
  "Toshkent viloyati",
  "Toshkent shahri"
];

const Search2 = () => {
  const navigate = useNavigate();

  const handleChange = (value) => {
    // IMPORTANT: Revisit your routing strategy here.
    // Agar har bir viloyat uchun alohida sahifaga yo'naltirmoqchi bo'lsangiz:
    // const slug = value.toLowerCase().replace(/ʻ|ʼ/g, '').replace(/\s+/g, '-').replace(/-viloyati|-respublikasi|-shahri/g, '');
    // if (slug && slug !== 'hududni-tanlang!') {
    //   navigate(`/province/${slug}`);
    // } else {
    //   navigate(`/home`); // Agar tanlanmagan bo'lsa yoki default qiymat bo'lsa
    // }

    // Hozircha sizning asl kodingizdagidek qoldirilgan:
    navigate(`/home`);
  };

  return (
    <div className={style.SearchContainer}> {/* Apply module class */}
      <div className={style.ContentWrapper}> {/* Apply module class */}
        <h1 className={style.Title}>Discover Uzbekistan: Your Adventure Awaits</h1> {/* Apply module class */}
        <Select
          className={style.RegionSelect} // Apply module class
          defaultValue={provinceData[0]}
          style={{ minWidth: 350 }}
          options={provinceData.map((province) => ({ label: province, value: province }))}
          onChange={handleChange}
          size="large"
          placeholder="Hududni tanlang!"
        />
      </div>
    </div>
  );
};

export default Search2;