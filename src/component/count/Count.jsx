import React, { memo } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import CountUp from 'react-countup'

import styles from './Count.module.css'

export const Count = memo(() => {
  return (
    <div className={styles.wrap} id='abacus'>
        <div className={styles.counter_body}>
          <div className={styles.counter_block}>
            <CountUp start={1} end={15} duration={0.7}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1>Tarixiy obidalar</h1>
          </div>
          <div className={styles.counter_block}>
            <CountUp start={0} end={20} duration={0.7}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1>Ko`ngil ochar bog`lar</h1>
          </div>
          <div className={styles.counter_block}>
            <CountUp start={1} end={16} duration={0.7}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1>Qadimiy qadamjolar</h1>
          </div>
          <div className={styles.counter_block}>
            <CountUp start={1} end={100} duration={0.7}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <h1>Universitetlar</h1>
          </div>
        </div>
    </div>
  )
})