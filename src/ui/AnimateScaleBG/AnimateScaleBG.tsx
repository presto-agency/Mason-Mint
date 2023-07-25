import React, { FC, useEffect, useRef, useState } from 'react'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'

import styles from './AnimateScaleBG.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { motion, useInView } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/effect-fade'
import type SwiperCore from 'swiper'

const motionProps = {
  animate: { scale: 1, transition: { duration: 7 } },
  initial: { scale: 1.1 },
  exit: { scale: 1.1, transition: { delay: 8 } },
}

const AnimateScaleBg: FC<{ pictures: string[] }> = ({ pictures }) => {
  const ref = useRef<null>(null)
  const swiperRef = useRef<SwiperCore>()
  const isInView = useInView(ref, { once: true })
  const onInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper
  }

  useEffect(() => {
    if (isInView && swiperRef) {
      setTimeout(() => {
        swiperRef.current?.autoplay.start()
      }, 8000)
    }
  }, [isInView])

  return (
    <Swiper
      ref={ref}
      style={{ position: 'absolute' }}
      className={styles['AnimateScaleBG']}
      speed={8000}
      loop
      allowTouchMove={false}
      modules={[Autoplay, EffectFade]}
      effect={'fade'}
      onInit={onInit}
    >
      {pictures.map((picture, index) => (
        <SwiperSlide
          key={index}
          className={styles['AnimateScaleBG__container']}
        >
          {({ isActive }) => (
            <motion.div
              style={{ height: '100%' }}
              initial="initial"
              variants={motionProps}
              animate={isInView && isActive ? 'animate' : 'exit'}
            >
              <BackgroundImage
                className={styles['AnimateScaleBG__container_picture']}
                src={picture}
                cover
                parallax={true}
                alt="coin picture"
                fill={true}
                sizes="100%"
              />
            </motion.div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default AnimateScaleBg
