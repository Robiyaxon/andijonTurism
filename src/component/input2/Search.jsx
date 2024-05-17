import React from 'react';
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import style from './Search.module.css';
const provinceData = [
  'Hududni tanlang! ',
  "Andijon viloyati",
  "Buxoro viloyati",
  "Fargʻona viloyati",
  "Xorazm viloyati",
  "Namangan viloyati",
  "Navoiy viloyati",
  "Qashqadaryo viloyati	",
  "Qoraqalpogʻiston Respublikasi",
  "Samarqand viloyati",
  "Sirdaryo viloyati",
  "Surxondaryo viloyati",
  "Toshkent viloyati",
  "Toshkent shahri"

];
const Search2 = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (value) => {
    // Redirect to the selected province's page
    navigate(`/home`);
  };
  // const handleChange = (value) => {
  //   // Redirect to the selected province's page
  //   navigate(`/province/${value}`);
  // };
  return (
    <div className={style.Search}>
      <Select
        className={style.Search_input}
        defaultValue={provinceData[0]}
        style={{ width: 120 }}
        options={provinceData.map((province) => ({ label: province, value: province }))}
        onChange={handleChange} // Call handleChange on option change
      />
    </div>
  );
};

export default Search2;
