import { FC, useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import loaderJson from './assets/Loader.json'

import styles from './MainPreloader.module.scss'
import classNames from 'classnames'
// import { Store } from '@/utils/Store'

const variant = {
  initial: {
    opacity: 0,
    scale: 1,
    y: 0,
    x: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    scale: 0.9,
    y: '5%',
    x: '5%',
    transition: {
      duration: 2,
    },
  },
}

interface MainPreloaderProps {
  progress: number
}

const MainPreloader: FC<MainPreloaderProps> = ({ progress }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(true)
  // const store = useContext(Store)

  // const isPreloadFinished = () => {
  //   store?.dispatch({ type: 'IS_PRELOAD_FINISHED' })
  //   console.log('finished', store?.state.isPreloadFinished)
  // }

  return (
    <motion.div
      className={styles['preloader']}
      initial="initial"
      exit="exit"
      animate="animate"
      variants={variant}
      // onAnimationComplete={isPreloadFinished}
    >
      <div className={styles['preloader__label']}>
        <span>Please wait</span>
        <span>we make money</span>
      </div>
      <motion.div
        className={styles['preloader__thumb']}
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Lottie
          className={styles['preloader__thumb_item']}
          animationData={loaderJson}
          autoplay={true}
          onLoadedImages={() => setIsLoaded(true)}
        />
      </motion.div>
      <p className={styles['preloader__title']}>
        Page is rolling
        <span className={styles['preloader__title_dot']}>.</span>
        <span className={styles['preloader__title_dot']}>.</span>
        <span className={styles['preloader__title_dot']}>.</span>
      </p>
      <div
        className={classNames(
          styles['preloader__percent'],
          styles[`__${progress}`]
        )}
      >
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
          <div className={styles['preloader__number']}>0</div>
        </div>
        %
      </div>
    </motion.div>
  )
}

export default MainPreloader
