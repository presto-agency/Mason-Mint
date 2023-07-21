import React, { FC, useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

import styles from './AnimateScaleBG.module.scss'

const motionProps = {
  initial: { scale: 1.1, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 3 } },
  exit: { opacity: 0, transition: { duration: 3 } },
}

const AnimateScaleBg: FC<{ pictures: string[] }> = ({ pictures }) => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPictureIndex((prevIndex) => (prevIndex + 1) % pictures.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [pictures])

  return (
    <div className={styles['AnimateScaleBG']}>
      {pictures.map((picture, index) => (
        <AnimatePresence key={index}>
          {index === currentPictureIndex && (
            <motion.div
              className={styles['AnimateScaleBG__container']}
              {...motionProps}
            >
              <Image
                className={styles['AnimateScaleBG__container_picture']}
                src={picture}
                alt="coin picture"
                fill={true}
                sizes="100%"
              />
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </div>
  )
}

export default AnimateScaleBg
