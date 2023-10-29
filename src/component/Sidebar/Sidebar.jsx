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
    getItem(<NavLink to="https://www.google.com/search?q=qadimiy+obidalar+andijon+&sca_esv=577545666&biw=1348&bih=629&tbm=lcl&sxsrf=AM9HkKkcTtukDabjMdiczEs4Tf5CMuhXvQ%3A1698557118364&ei=vuw9ZeXkFZaQxc8PnriNwAg&ved=0ahUKEwjlu66twpqCAxUWSPEDHR5cA4gQ4dUDCAk&uact=5&oq=qadimiy+obidalar+andijon+&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIhlxYWRpbWl5IG9iaWRhbGFyIGFuZGlqb24gMgUQIRigATIFECEYoAEyBRAhGKABSIxVUMgJWJtPcAd4AJABApgBrwigAYBBqgERMC4xNS4xMC4xLjIuMi4wLjG4AQPIAQD4AQHCAgQQIxgnwgIGEAAYFhgewgIIEAAYigUYkQLCAgUQABiABMICBxAAGIAEGArCAggQABjLARiABMICChAAGMsBGIAEGArCAggQABgWGB4YCogGAQ&sclient=gws-wiz-local#rlfi=hd:;si:;mv:[[40.819013600000005,72.4814203],[40.75074,72.27256109999999]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2">Qadimiy Obidalar</NavLink>, "3"),
    getItem(<NavLink to="/home/action">Qadimiy qadamjolar</NavLink>, "4"),
  ]),
  getItem("Dam olish maskanlari", "sub2", <AreaChartOutlined />, [
    getItem(<NavLink to="/home/park">Istirohat bog`i</NavLink>, "3"),
    getItem(<NavLink to="/home/zoo">Hayvonot bog`i</NavLink>, "4"),
    getItem(<NavLink to="https://www.google.com/search?sca_esv=577545666&hl=en&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=AM9HkKlXAweQg9B077YvwKnIOys3sak5ZA:1698556594953&q=karaoke+bar+andijon+haqida&rflfq=1&num=10&sa=X&ved=2ahUKEwjkieSzwJqCAxXZQ_EDHSfrBIAQjGp6BAg8EAE&biw=1348&bih=629&dpr=1.42#rlfi=hd:;si:;mv:[[40.7605308,72.36356719999999],[40.7510234,72.3531088]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:9">Karaoki bar</NavLink>, "5"),
    getItem(<NavLink to="https://www.google.com/search?q=diskateka+andijon&sca_esv=577545666&hl=en&biw=1348&bih=629&tbm=lcl&sxsrf=AM9HkKl3SAM4SZQG9ucwfw9_84j60HQ5fA%3A1698556896018&ei=4Os9ZbJh_o3Fzw_FjrDADQ&ved=0ahUKEwiy0avDwZqCAxX-RvEDHUUHDNgQ4dUDCAk&uact=5&oq=diskateka+andijon&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIhFkaXNrYXRla2EgYW5kaWpvbjIIEAAYCBgeGA1I0SZQkw9YvyRwAHgAkAEAmAHjBqABiyuqAQ4wLjExLjIuMS4wLjEuM7gBA8gBAPgBAcICBBAjGCfCAggQABiKBRiRAsICBRAAGIAEwgIHEAAYigUYQ8ICChAAGIAEGBQYhwLCAgcQABiABBgKwgIIEAAYywEYgATCAgoQABjLARiABBgKwgIHECMYsQIYJ8ICBxAAGA0YgATCAgkQABgNGIAEGArCAgYQABgeGA3CAggQABgeGA0YD8ICBhAAGBYYHsICCBAAGBYYHhgKiAYB&sclient=gws-wiz-local#rlfi=hd:;si:;mv:[[40.8195664,72.36286799999999],[40.7476817,72.2792716]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:1">Diskateka</NavLink>, "6"),
    getItem(<NavLink to="https://www.google.com/search?sca_esv=577545666&tbs=lf:1,lf_ui:1&tbm=lcl&sxsrf=AM9HkKmm79vfjRstgp6QeWk28BPNnz0ObQ:1698557012428&q=Teatr+andijon&rflfq=1&num=10&sa=X&ved=2ahUKEwjg0ez6wZqCAxVjR_EDHV0eDp8QjGp6BAgPEAE&biw=1348&bih=629&dpr=1.42#rlfi=hd:;si:;mv:[[40.785147099999996,72.3580844],[40.741694599999995,72.3458971]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:1">Teatr</NavLink>, "7"),
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
    // <a href="http://" target="_blank" rel="noopener noreferrer"></a>
    getItem(<NavLink target="_blank"  rel="noopener noreferrer" to="https://www.flightradar24.com/data/airports/azn">Aeraport</NavLink>, "21"),
    getItem(<NavLink target="_blank"  rel="noopener noreferrer" to="https://rasp.yandex.uz/station/9620584/">Poyezd vakzal</NavLink>, "22"),
    getItem(<NavLink target="_blank"  rel="noopener noreferrer" to="https://www.goldenpages.uz/uz/company/?Id=11602">Avto vakzal</NavLink>, "23"),
    getItem(<NavLink target="_blank"  rel="noopener noreferrer" to="https://www.google.com/localservices/prolist?g2lbs=ANTchaP16cWzOxMleEto5N2bhLje_8iwKXZnY2eQJMzJSrvpi9LFQpU6Mda8ipEBdhTWzoQ_WQ0JVlfrWrcP4pWOToLMZNFZHQPoYS9ps_6JTc9YQ4xp9Q4%3D&hl=en-UZ&gl=uz&ssta=1&q=andijon%20taxi&oq=andijon%20taxi&slp=MgA6HENoTUkwUFBnODZpYWdnTVYycEdEQngzRmt3Vm1SAggCYACSAc8BCg0vZy8xMWoyNG01cmY0Cg0vZy8xMWZrczJiN3o1Cg0vZy8xMWNyeHl2bjExCg0vZy8xMXNkZHZyZzQwCg0vZy8xMWRmMDRwcnY0Cg0vZy8xMW1faF82MjI0Cg0vZy8xMXkxaHYxNV9tCg0vZy8xMXAwemJnZ2p2Cg0vZy8xMXYzanRxNncxCg0vZy8xMXY0cmZkaDloCg0vZy8xMWwybG1rdjM4Cg0vZy8xMXNiOG5zM3QyCg0vZy8xMWptdF9zY2sxEgQSAggBEgQKAggBmgEGCgIXGRAA&src=2&serdesk=1&sa=X&ved=2ahUKEwiB4drzqJqCAxXDR_EDHZdQAdsQjGp6BAgUEAE&scp=ChFnY2lkOnRheGlfc2VydmljZRJJEhIJ79QTax2QvDgRrN9zeaq8RfwaEgk39neaH-y8OBEPuzPwls19diIHQW5kaWphbioUDe99PxgV7YcLKx3oYV0YJV-sKiswABoEdGF4aSIMYW5kaWpvbiB0YXhpKgxUYXhpIHNlcnZpY2U%3D">Taxi</NavLink>, "24"),
    getItem(
      <NavLink target="_blank"  rel="noopener noreferrer" to="https://uz.yellowpages.uz/rubrika/yoqilgi-quyish-shoxobchalari/andijon">Yoqilg`i quyish shahobchalari</NavLink>,
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
