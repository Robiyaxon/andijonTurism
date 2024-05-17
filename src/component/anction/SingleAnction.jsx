import React, { useState } from 'react';
import { Button, Modal,Input  } from 'antd';
import { MyMap } from "./map/Map";
import AnctionHeader from "./AnctionHeader";
import style from "./NewsSingle.module.css";
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import { DatePicker } from 'antd';
import { InputNumber,message } from 'antd';

const { RangePicker } = DatePicker;
const onChange = (value) => {
  console.log('changed', value);
};
const NewsSingle = ({ title, text,  img1, img2, img3, map1, map2, main_pic, route, route_path, url_image,bron }) => {
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
    },500);
  };

  return (
    <div className={style.action}>
        <Modal title="Bron qilish" open={isModalOpen} onOk={handleOk} >
        {contextHolder}
        <Input placeholder="Ism" className={style.inputs} />
        <Input placeholder="Familya"  className={style.inputs} />
        <RangePicker className={style.inputs}  />
        <InputNumber min={1} max={10} defaultValue={0} className={style.inputs} onChange={onChange}/>
      </Modal> 
      <div >
        <AnctionHeader
          title={title}
          main_pic={main_pic}
          route={route}
          route_path={route_path}
        />
        <div className={style.Header}>
          <h1>{title}</h1>
          <p>
            {text}
          </p>
          <div className={style.IMG}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
        </div>
        {
          bron===true?
          <div className={style.for_booking}>
          <Button className={style.ClickButton} type="primary" onClick={showModal}>
       Buyurtma qilish
      </Button> 
        </div>:<></>
        }
       
    
        {
          url_image ? (
            <>
              <h1 className={style.tridi}>Joyning 3D maketi</h1>
              <ReactPhotoSphereViewer
              className={style.tridii}
              src={url_image}
              height={'80vh'}
              width={'100%'}
            ></ReactPhotoSphereViewer>
            <MyMap title={"Joy xaritasi"} map1={map1} map2={map2} />

            </>
          
          ) : (
            <MyMap title={"Joy xaritasi"} map1={map1} map2={map2} />
          )
        }
     
      </div>

    </div>
  );
};

export default NewsSingle;