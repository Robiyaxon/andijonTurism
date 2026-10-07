import React, { useState } from "react";
import {
  BankOutlined,
  TeamOutlined,
  AreaChartOutlined,
  PlusSquareOutlined,
  BookOutlined,
  CarOutlined,
  GiftOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";

import img from "../../acsserts/sidebar.webp";
import logo from "../../acsserts/andijan.png";

import TopHeader from "../topheader/TopHeader";
import MyRoute from "../route/MyRoute";

import style from "./Sidebar.module.css";
import { useTranslation } from "react-i18next";

const Saidbar = () => {
  const { t } = useTranslation();
  const { Header, Content, Sider } = Layout;
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem(t("obida"), "sub1", <BankOutlined />, [
      getItem(
        <NavLink to="/home/place">
          {t("obida")}
        </NavLink>,
        "3"
      ),
      getItem(<NavLink to="/home/action">{t("Qadmiy")}</NavLink>, "4"),
    ]),
    getItem(t("Resorts"), "sub2", <AreaChartOutlined />, [
      getItem(<NavLink to="/home/park">{t("bog")}</NavLink>, "3"),
      getItem(<NavLink to="/home/zoo">Hayvonot bog`i</NavLink>, "4"),
      getItem(
        <NavLink to="/home/karaoki">
          Karaoki bar
        </NavLink>,
        "5"
      ),
      getItem(
        <NavLink to="disco">
          Diskateka
        </NavLink>,
        "6"
      ),
      getItem(
        <NavLink to="/home/theatre">
          Teatr
        </NavLink>,
        "7"
      ),
    ]),
    getItem(
      <NavLink to="/home/hotel">{t("Mehmonxonalar")}</NavLink>,
      "6",
      <BankOutlined />
    ),
    getItem(t("food"), "sub3", <TeamOutlined />, [
      getItem(<NavLink to="/home/restaurant">Restoran</NavLink>, "7"),
      getItem(<NavLink to="/home/cafe">Kafe</NavLink>, "8"),
      getItem(<NavLink to="/home/choyxona">Choyxona</NavLink>, "10"),
      getItem(<NavLink to="/home/fastfood">Fast food</NavLink>, "11"),
    ]),
    getItem(t("shop"), "sub4", <GiftOutlined />, [
      getItem(<NavLink to="/home/clothing-store">Kiyim kechak do`kon</NavLink>, "12"),
      getItem(<NavLink to="/home/souvenir-store">Suviner do`kon</NavLink>, "13"),
      getItem(<NavLink to="/home/flower-store">Gul do`kon</NavLink>, "14"),
      getItem(<NavLink to="/home/electronics-store">Texnika do`kon</NavLink>, "15"),
      getItem(<NavLink to="/home/mobile-store">Mobile do`kon</NavLink>, "16"),
    ]),
    getItem(t("Talim"), "sub5", <BookOutlined />, [
      getItem(<NavLink to="/home/higher-education">Oliy ta'lim</NavLink>, "17"),
      getItem(<NavLink to="/home/library">Kutubxona</NavLink>, "18"),
      getItem(<NavLink to="/home/learning-centers">O`quv markazlari</NavLink>, "19"),
      getItem(<NavLink to="/home/book-cafe">Book kafe</NavLink>, "20"),
    ]),
    getItem(t("Транспорт"), "sub6", <CarOutlined />, [
      // <a href="http://" target="_blank" rel="noopener noreferrer"></a>
      getItem(
        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          to="https://www.flightradar24.com/data/airports/azn"
        >
          Aeraport
        </NavLink>,
        "21"
      ),
      getItem(
        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          to="https://rasp.yandex.uz/station/9620584/"
        >
          Poyezd vakzal
        </NavLink>,
        "22"
      ),
      getItem(
        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          to="https://www.goldenpages.uz/uz/company/?Id=11602"
        >
          Avto vakzal
        </NavLink>,
        "23"
      ),
      getItem(
        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          to="https://www.google.com/localservices/prolist?g2lbs=ANTchaP16cWzOxMleEto5N2bhLje_8iwKXZnY2eQJMzJSrvpi9LFQpU6Mda8ipEBdhTWzoQ_WQ0JVlfrWrcP4pWOToLMZNFZHQPoYS9ps_6JTc9YQ4xp9Q4%3D&hl=en-UZ&gl=uz&ssta=1&q=andijon%20taxi&oq=andijon%20taxi&slp=MgA6HENoTUkwUFBnODZpYWdnTVYycEdEQngzRmt3Vm1SAggCYACSAc8BCg0vZy8xMWoyNG01cmY0Cg0vZy8xMWZrczJiN3o1Cg0vZy8xMWNyeHl2bjExCg0vZy8xMWNkZHZyZzQwCg0vZy8xMWRmMDRwcnY0Cg0vZy8xMW1faF82MjI0Cg0vZy8xMXkxaHYxNV9tCg0vZy8xMXAwemJnZ2p2Cg0vZy8xMXYzanRxNncxCg0vZy8xMXY0cmZkaDloCg0vZy8xMWwybG1rdjM4Cg0vZy8xMXNiOG5zM3QyCg0vZy8xMWptdF9zY2sxEgQSAggBEgQKAggBmgEGCgIXGRAA&src=2&serdesk=1&sa=X&ved=2ahUKEwiB4drzqJqCAxXDR_EDHZdQAdsQjGp6BAgUEAE&scp=ChFnY2lkOnRheGlfc2VydmljZRJJEhIJ79QTax2QvDgRrN9zeaq8RfwaEgk39neaH-y8OBEPuzPwls19diIHQW5kaWphbioUDe99PxgV7YcLKx3oYV0YJV-sKiswABoEdGF4aSIMYW5kaWpvbiB0YXhpKgxUYXhpIHNlcnZpY2U%3D"
        >
          Taxi
        </NavLink>,
        "24"
      ),
      getItem(
        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          to="https://uz.yellowpages.uz/rubrika/yoqilgi-quyish-shoxobchalari/andijon"
        >
          Yoqilg`i quyish shahobchalari
        </NavLink>,
        "25"
      ),
    ]),
    getItem(t("Medicine"), "sub7", <PlusSquareOutlined />, [
      getItem(<NavLink to="/home/hospitals">Shifoxona</NavLink>, "23"),
      getItem(<NavLink to="/home/pharmacies">Dorixona</NavLink>, "24"),
    ]),
  ];

  const rootSubmenuKeys = ["sub1", "sub2", "sub4", "sub5", "sub6", "sub7"];
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        className="sidebarR"
        style={{
          background: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backdropFilter: "blur(4px)",
          backgroundColor: "rgba(0, 7, 34, 0.79)",
          zIndex: 10,
          position: "fixed",
          bottom: 0,
          top: 0,
          paddingBottom: "2rem",
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className={style.Sidebar}>
          <NavLink to="/home">
            {" "}
            <img src={logo} alt="" className={style.imgLogo} />
          </NavLink>
        </div>
        <div className="demo-logo-vertical" />

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            // backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "#07193a",
          }}
        >
          <TopHeader />
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <MyRoute />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Saidbar;