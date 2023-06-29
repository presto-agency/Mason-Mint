import { FC, ReactNode, useRef } from 'react'
import classNames from 'classnames'
import Image, { ImageProps } from 'next/image'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'

import styles from './BackgroundImage.module.scss'

type BackgroundImageProps = {
  className?: string
  children?: ReactNode
  parallax?: boolean
  transformValue?: number[]
} & ImageProps

export const BackgroundImage: FC<BackgroundImageProps> = ({
  src,
  alt,
  quality = 75,
  className,
  children,
  parallax = false,
  transformValue = [-50, 50],
  ...props
}) => {
  const useParallax = (value: MotionValue<number>) => {
    return useTransform(value, [0, 1], transformValue)
  }
  const refTarget = useRef(null)
  const { scrollYProgress } = useScroll({
    target: refTarget,
    offset: ['start end', 'end start'],
  })
  const y = useParallax(scrollYProgress)

  const ImageComponent = (
    <Image
      src={src}
      ref={refTarget}
      alt={alt}
      fill={true}
      sizes="100%"
      quality={quality}
      {...props}
    />
  )

  return (
    <div className={classNames(styles['BackgroundImage'], className)}>
      <div className={styles['BackgroundImage__container']}>
        {parallax ? (
          <motion.div
            className={styles['BackgroundImage__container_animatedWrapper']}
            style={{ y }}
          >
            {ImageComponent}
          </motion.div>
        ) : (
          <div className={styles['BackgroundImage__container_animatedWrapper']}>
            {ImageComponent}
          </div>
        )}
      </div>
      {children && <div className={styles.content}>{children}</div>}
    </div>
  )
}
