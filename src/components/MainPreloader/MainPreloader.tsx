import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import loaderJson from './assets/Loader.json'

import styles from './MainPreloader.module.scss'

const MainPreloader = () => {
  // const [isLoaded, setIsLoaded] = useState<boolean>(true)

  const single = {}
  const tenths = {}
  const hunfredths = {}

  return (
    <motion.div
      className={styles['preloader']}
      exit={{ opacity: 0 }}
      transition={{ type: 'linear', duration: 1 }}
    >
      <div className={styles['preloader__label']}>
        <span>Please wait</span>
        <span>we make money</span>
      </div>
      {/*<motion.div*/}
      {/*  className={styles['preloader__thumb']}*/}
      {/*  initial={{ opacity: 0 }}*/}
      {/*  animate={isLoaded ? { opacity: 1 } : {}}*/}
      {/*  exit={{ opacity: 0 }}*/}
      {/*  transition={{ duration: 0.5 }}*/}
      {/*>*/}
      {/*  <Lottie*/}
      {/*    className={styles['preloader__thumb_item']}*/}
      {/*    animationData={loaderJson}*/}
      {/*    autoplay={true}*/}
      {/*    onLoadedImages={() => setIsLoaded(true)}*/}
      {/*  />*/}
      {/*</motion.div>*/}
      <p className={styles['preloader__title']}>Page is rolling...</p>
      <div className={styles['preloader__percent']}>
        <div className={styles['preloader__percent_item']}>
          <div className={styles['preloader__number']}>1</div>
        </div>
        <div className={styles['preloader__percent_item']}>
          <div className={styles['preloader__number']}>0</div>
          <div className={styles['preloader__number']}>7</div>
          <div className={styles['preloader__number']}>3</div>
        </div>
        <div className={styles['preloader__percent_item']}>
          <div className={styles['preloader__number']}>0</div>
          <div className={styles['preloader__number']}>0</div>
          <div className={styles['preloader__number']}>0</div>
        </div>
        %
      </div>
    </motion.div>
  )
}

export default MainPreloader
