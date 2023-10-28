import React from "react";
import { Input } from "antd";
import style from "./Search.module.css";
import { useNavigate } from "react-router-dom";
const { Search } = Input;
const Search2 = () => {
  const navigate = useNavigate();

  const onSearch = () => {
    navigate("/home");
  };
  return (
    <div className={style.Search}>
      <Search
        placeholder="Andijon hududini kirgizing!"
        onSearch={onSearch}
        enterButton
        style={{
          width: 404,
        }}
      />
    </div>
  );
};
export default Search2;
