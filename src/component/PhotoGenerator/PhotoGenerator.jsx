import React, { useState, useRef } from 'react';
import { Button, Upload, Select, message } from 'antd';
import { UploadOutlined, DownloadOutlined } from '@ant-design/icons';
import html2canvas from 'html2canvas'; // Rasmni yuklab olish uchun
import style from './PhotoGenerator.module.css';

// Import barcha fon rasmlari
import regBg from '../../acsserts/andijan.png';
import bukhBg from '../../acsserts/orqafon2.jpg';
import khivaBg from '../../acsserts/or';
// ... boshqa fon rasmlarini ham shu yerga import qiling

const { Option } = Select;

// Tarixiy joylar va ularning fon rasmlari
const historicalLocations = [
    { id: 'none', name: 'Joyni tanlang!', bg: null },
    { id: 'registan', name: 'Registon, Samarqand', bg: regBg },
    { id: 'poi-kalyan', name: 'Poi Kalon, Buxoro', bg: bukhBg },
    { id: 'ichan-qala', name: 'Ichan-qal\'a, Xiva', bg: khivaBg },
    // ... boshqa joylarni shu yerga qo'shing
    // Har bir joy uchun o'ziga xos rasm bo'lishi kerak
];

const PhotoGenerator = () => {
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
    const [selectedBackground, setSelectedBackground] = useState(null);
    const generatedImageRef = useRef(null);

    // Rasm yuklash uchun Ant Design propslari
    const uploadProps = {
        name: 'file',
        multiple: false,
        beforeUpload: (file) => {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isJpgOrPng) {
                message.error('Siz faqat JPG/PNG fayllarini yuklashingiz mumkin!');
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                message.error('Rasm hajmi 2MB dan oshmasligi kerak!');
            }
            if (isJpgOrPng && isLt2M) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (e) => {
                    setUploadedImageUrl(e.target.result);
                };
            }
            return false; // Yuklashni avtomatik ravishda to'xtatish
        },
        showUploadList: false,
    };

    // Fon rasmini tanlash
    const handleBackgroundChange = (value) => {
        const selectedLoc = historicalLocations.find(loc => loc.id === value);
        setSelectedBackground(selectedLoc ? selectedLoc.bg : null);
    };

    // Generatsiya qilingan rasmni yuklab olish
    const handleDownload = () => {
        if (generatedImageRef.current) {
            html2canvas(generatedImageRef.current, {
                useCORS: true, // Agar rasmlar boshqa domendan yuklansa
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = 'mening_sayyohlik_rasmim.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
                message.success('Rasm muvaffaqiyatli yuklab olindi!');
            }).catch(err => {
                message.error('Rasmni yuklab olishda xatolik yuz berdi!');
                console.error("Error generating image:", err);
            });
        } else {
            message.warning('Avval rasm yarating!');
        }
    };

    return (
        <div className={style.GeneratorContainer}>
            <h1 className={style.Title}>Sizning tarixiy sayohat rasmingiz!</h1>
            <p className={style.Subtitle}>Rasmingizni yuklang va orqa fonga O'zbekistonning mashhur obidalarini joylashtiring.</p>

            <div className={style.Controls}>
                <Upload {...uploadProps}>
                    <Button icon={<UploadOutlined />} size="large">Rasmni yuklash</Button>
                </Upload>
                <Select
                    placeholder="Tarixiy joyni tanlang"
                    className={style.BackgroundSelect}
                    onChange={handleBackgroundChange}
                    value={selectedBackground ? historicalLocations.find(loc => loc.bg === selectedBackground)?.id : 'none'}
                    size="large"
                >
                    {historicalLocations.map(loc => (
                        <Option key={loc.id} value={loc.id}>
                            {loc.name}
                        </Option>
                    ))}
                </Select>
            </div>

            {uploadedImageUrl && selectedBackground && (
                <div className={style.GeneratedImageBoxWrapper}>
                    <div ref={generatedImageRef} className={style.GeneratedImageBox}>
                        <img src={selectedBackground} alt="Tarixiy fon" className={style.BackgroundImage} />
                        <img src={uploadedImageUrl} alt="Yuklangan rasm" className={style.UploadedImage} />
                    </div>
                    <Button
                        type="primary"
                        icon={<DownloadOutlined />}
                        onClick={handleDownload}
                        className={style.DownloadButton}
                        size="large"
                    >
                        Rasmni yuklab olish
                    </Button>
                </div>
            )}

            {!uploadedImageUrl && !selectedBackground && (
                <div className={style.Placeholder}>
                    <p>Rasmingizni yuklang va fonni tanlang.</p>
                </div>
            )}
        </div>
    );
};

export default PhotoGenerator;