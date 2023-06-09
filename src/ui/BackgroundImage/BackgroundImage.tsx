import { FC, ReactNode, useRef } from 'react'
import classNames from 'classnames'
import Image, { ImageProps } from 'next/image'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'

import styles from './BackgroundImage.module.scss'

type BackgroundImageProps = {
  className?: string
  children?: ReactNode
  parallax?: boolean
  parallaxValues?: [number, number]
} & ImageProps

export const BackgroundImage: FC<BackgroundImageProps> = ({
  src,
  alt,
  quality = 75,
  className,
  children,
  parallax = false,
  parallaxValues = [-50, 50],
  ...props
}) => {
  const useParallax = (value: MotionValue<number>) => {
    return useTransform(value, [0, 1], parallaxValues)
  }
  const refTarget = useRef(null)
  const { scrollYProgress } = useScroll({
    target: refTarget,
    offset: ['start end', 'end start'],
  })
  const y = useParallax(scrollYProgress)

  const getLargestAbsoluteValue = (array: [number, number]) => {
    let largestAbsoluteValue = 0

    array.forEach((num) => {
      const absoluteValue = Math.abs(num)

      if (absoluteValue > largestAbsoluteValue) {
        largestAbsoluteValue = absoluteValue
      }
    })

    return largestAbsoluteValue
  }

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

  const parallaxPictureSize = (value: number) =>
    `calc(100% + (${value * 2}rem))`

  const landslide = (value: number) => `-${value}rem`

  return (
    <div className={classNames(styles['BackgroundImage'], className)}>
      <div className={styles['BackgroundImage__container']}>
        {parallax ? (
          <motion.div
            className={styles['BackgroundImage__container_animatedWrapper']}
            style={{
              y,
              width: parallaxPictureSize(
                getLargestAbsoluteValue(parallaxValues)
              ),
              height: parallaxPictureSize(
                getLargestAbsoluteValue(parallaxValues)
              ),
              top: landslide(getLargestAbsoluteValue(parallaxValues)),
              left: landslide(getLargestAbsoluteValue(parallaxValues)),
            }}
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
