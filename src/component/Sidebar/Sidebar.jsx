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
  getItem("Tarixiy obidalar", "sub1", <BankOutlined />, [
    getItem(<NavLink to="/home/action">Qadimiy Obidalar</NavLink>, "3"),
    getItem(<NavLink to="/home/action">Qadimiy qadamjolar</NavLink>, "4"),
  ]),
  getItem("Dam olish maskanlari", "sub2", <AreaChartOutlined />, [
    getItem(<NavLink to="/home/park">Istirohat bog`i</NavLink>, "3"),
    getItem(<NavLink to="/home/zoo">Hayvonot bog`i</NavLink>, "4"),
    getItem(<NavLink to="/home/karaoke">Karaoki bar</NavLink>, "5"),
    getItem(<NavLink to="/home/disco">Diskateka</NavLink>, "6"),
    getItem(<NavLink to="/home/theatre">Teatr</NavLink>, "7"),
  ]),
  getItem(
    <NavLink to="/home/notpage">Mehmonxonalar</NavLink>,
    "6",
    <BankOutlined />
  ),
  getItem("Ovqatlanish joylari", "sub3", <TeamOutlined />, [
    getItem(<NavLink to="/home/notpage">Restoran</NavLink>, "7"),
    getItem(<NavLink to="/home/notpage">Kafe</NavLink>, "8"),
    getItem(
      <NavLink to="/home/notpage">Umumiy ovqatlanish joylari</NavLink>,
      "9"
    ),
    getItem(<NavLink to="/home/notpage">Choyxona</NavLink>, "10"),
    getItem(<NavLink to="/home/notpage">Fast food</NavLink>, "11"),
  ]),
  getItem("Savdo sotiq komplekslar1", "sub4", <GiftOutlined />, [
    getItem(<NavLink to="/home/notpage">Kiyim kechak do`kon</NavLink>, "12"),
    getItem(<NavLink to="/home/notpage">Suviner do`kon</NavLink>, "13"),
    getItem(<NavLink to="/home/notpage">Gul do`kon</NavLink>, "14"),
    getItem(<NavLink to="/home/notpage">Texnika do`kon</NavLink>, "15"),
    getItem(<NavLink to="/home/notpage">Mobile do`kon</NavLink>, "16"),
  ]),
  getItem("Ta`lim", "sub5", <BookOutlined />, [
    getItem(<NavLink to="/home/notpage">Oliy talim</NavLink>, "17"),
    getItem(<NavLink to="/home/notpage">Kutubxona</NavLink>, "18"),
    getItem(<NavLink to="/home/notpage">o`quv markazlari</NavLink>, "19"),
    getItem(<NavLink to="/home/notpage">Book kafe</NavLink>, "20"),
  ]),
  getItem("Transport", "sub6", <CarOutlined />, [
    getItem(<NavLink to="/home/notpage">Aeraport</NavLink>, "21"),
    getItem(<NavLink to="/home/notpage">Poyezd vakzal</NavLink>, "22"),
    getItem(<NavLink to="/home/notpage">Avto vakzal</NavLink>, "23"),
    getItem(<NavLink to="/home/notpage">Taxi</NavLink>, "24"),
    getItem(
      <NavLink to="/notpage">Yoqilg`i quyish shahobchalari</NavLink>,
      "25"
    ),
  ]),
  getItem("Tibbiyot", "sub7", <PlusSquareOutlined />, [
    getItem(<NavLink to="/home/notpage">Shifohona</NavLink>, "23"),
    getItem(<NavLink to="/home/notpage">Dorixona</NavLink>, "24"),
  ]),
];

const rootSubmenuKeys = ["sub1", "sub2", "sub4", "sub5", "sub6", "sub7"];

const Saidbar = () => {
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
