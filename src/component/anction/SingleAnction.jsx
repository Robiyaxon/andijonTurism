import React, { useState } from 'react';
import { Button, Modal, Input, DatePicker, InputNumber, message } from 'antd';
import { MyMap } from "./map/Map";
import AnctionHeader from "./AnctionHeader";
import style from "./NewsSingle.module.css";
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import { NavLink } from 'react-router-dom';

const { RangePicker } = DatePicker;

const onChange = (value) => {
  console.log('changed', value);
};

const NewsSingle = ({ title, text, img1, img2, img3, map1, map2, main_pic, route, route_path, url_image, bron }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Bron muvaffaqiyatli yakunlandi!',
        duration: 2,
      });
    }, 500);
  };

  return (
    <div className={style.action}>
      <Modal title="Bron qilish" open={isModalOpen} onOk={handleOk}>
        {contextHolder}
        <Input placeholder="Ism" className={style.inputs} />
        <Input placeholder="Familya" className={style.inputs} />
        <RangePicker className={style.inputs} />
        <InputNumber min={1} max={10} defaultValue={0} className={style.inputs} onChange={onChange} />
      </Modal>

      <div>
        <AnctionHeader
          title={title}
          main_pic={main_pic}
          route={route}
          route_path={route_path}
        />

        <div className={style.Header}>
          <h1>{title}</h1>
          <p>{text}</p>
          <div className={style.IMG}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
        </div>
        <h2 className={style.facilityTitle}>Facilities</h2>
        <div className={style.facilities}>
          <NavLink to="/home/restaurant" className={style.facilityButton}>
            <i className="fas fa-utensils"></i> Nearby Restaurants
          </NavLink>
          <NavLink to="/home/hotel" className={style.facilityButton}>
            <i className="fas fa-hotel"></i> Hotels
          </NavLink>
          <NavLink to="/home/clothing-store" className={style.facilityButton}>
            <i className="fas fa-shopping-basket"></i> Markets
          </NavLink>
          <NavLink to="/home/theatre/singletheatre" className={style.facilityButton}>
            <i className="fas fa-theater-masks"></i> Theaters
          </NavLink>
          <a href="https://www.google.com/maps/search/airport+near+bus+station" target="_blank" rel="noopener noreferrer" className={style.facilityButton}>
            <i className="fas fa-plane-departure"></i> Airports
          </a>

          <a href="https://www.google.com/maps/search/train+station+near+bus+station" target="_blank" rel="noopener noreferrer" className={style.facilityButton}>

            <i className="fas fa-train"></i> Train Stations

          </a>
        </div>
        {bron === true && (
          <div className={style.for_booking}>
            <Button className={style.ClickButton} type="primary" onClick={showModal}>
              Buyurtma qilish
            </Button>
          </div>
        )}

        {url_image ? (
          <>
            <h1 className={style.tridi}>Joyning 3D maketi</h1>
            <ReactPhotoSphereViewer
              className={style.tridii}
              src={url_image}
              height={'80vh'}
              width={'100%'}
            />
            <MyMap title={"Joy xaritasi"} map1={map1} map2={map2} />
          </>
        ) : (
          <MyMap title={"Joy xaritasi"} map1={map1} map2={map2} />
        )}
      </div>
    </div>
  );
};
export default NewsSingle;