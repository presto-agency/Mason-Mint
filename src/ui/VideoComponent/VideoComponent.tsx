import React, { FC, useEffect, useRef } from 'react'
import styles from '@/modules/Home/ui/IntroSection/IntroSection.module.scss'
import classNames from 'classnames'

type VideoComponent = {
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  src: string
}
const VideoComponent: FC<VideoComponent> = ({
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  src = '/video/hero_video_bg-compress.mp4',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.play().catch((error) => {
  //       console.log('Autoplay failed:', error)
  //     })
  //   }
  // }, [])
  return (
    <video
      className={classNames(styles['video'], className)}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
      // ref={videoRef}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default VideoComponent
