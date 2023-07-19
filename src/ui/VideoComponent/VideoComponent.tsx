import React, { FC, useEffect, useRef } from 'react'
import styles from './VideoComponent.module.scss'
import classNames from 'classnames'

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
    <video
      className={classNames(styles['video'], className)}
      playsInline
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default VideoComponent
