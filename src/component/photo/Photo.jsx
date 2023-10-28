import React from 'react'

import i1 from '../../acsserts/1.jpg'
import i2 from '../../acsserts/2.jpg'
import i3 from '../../acsserts/3.webp'
import i4 from '../../acsserts/4.jpg'
import i5 from '../../acsserts/5.jpg'
import i6 from '../../acsserts/7.jpg'
import i7 from '../../acsserts/8.jpg'
import i8 from '../../acsserts/ziyoratgoh.jpg'
import i9 from '../../acsserts/bog.jpg'
import i10 from '../../acsserts/99.jpg'
import { Image } from 'antd'

import styles from './Photo.module.css'

const Photo = () => {
  return (
    <div id="photo" className={styles.wrap}>
      <h1>Фото Галерея</h1>
      <div className={styles.main}>
        <Image className={styles.i1} src={i1} alt="" />
        <div className={styles.i1_block}>
          <Image className={styles.i2} src={i2} alt="" />
          <Image className={styles.i3} src={i3} alt="" />
        </div>
        <Image className={styles.i4} src={i4} alt="" />
        <Image className={styles.i5} src={i5} alt="" />

        <div className={styles.i3_block}>
          <Image className={styles.i7} src={i7} alt="" />
          <Image className={styles.i8} src={i8} alt="" />
        </div>
        <Image className={styles.i9} src={i9} alt="" />
        <Image className={styles.i10} src={i10} alt="" />
        <Image className={styles.i6} src={i6} alt="" />
      </div>
    </div>
  )
}

export default Photo