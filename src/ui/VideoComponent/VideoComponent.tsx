import React, { FC } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'

import styles from './VideoComponent.module.scss'

type VideoComponent = {
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  src: string
  poster?: string
}
const VideoComponent: FC<VideoComponent> = ({
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  src = '/video/hero_video_bg-compress.mp4',
  poster,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className={styles['video']}
    >
      <video
        className={classNames(styles['video__item'], className)}
        playsInline
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
    </motion.div>
  )
}

export default VideoComponent
