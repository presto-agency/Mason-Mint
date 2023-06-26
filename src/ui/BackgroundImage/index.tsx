import { FC, ReactNode, useRef } from 'react'
import classNames from 'classnames'
import Image, { ImageProps } from 'next/image'
import styles from './BackgroundImage.module.scss'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'

type BackgroundImageProps = {
  className?: string
  children?: ReactNode
  animated?: boolean
} & ImageProps

export const BackgroundImage: FC<BackgroundImageProps> = ({
  src,
  alt,
  quality = 75,
  className,
  children,
  animated = false,
  ...props
}) => {
  const useParallax = (value: MotionValue<number>) => {
    return useTransform(value, [0, 1], [-50, 50])
  }
  const refTarget = useRef(null)
  const { scrollYProgress } = useScroll({
    target: refTarget,
    offset: ['start end', 'end start'],
  })
  const y = useParallax(scrollYProgress)

  return (
    <div className={classNames(styles['BackgroundImage'], className)}>
      <div className={styles['BackgroundImage__container']}>
        {animated ? (
          <motion.div
            className={styles['BackgroundImage__container_animatedWrapper']}
            style={{ y }}
          >
            <Image
              src={src}
              ref={refTarget}
              alt={alt}
              fill={true}
              sizes="100%"
              quality={quality}
              {...props}
            />
          </motion.div>
        ) : (
          <div className={styles['BackgroundImage__container_animatedWrapper']}>
            <Image
              src={src}
              ref={refTarget}
              alt={alt}
              fill={true}
              sizes="100%"
              quality={quality}
              {...props}
            />
          </div>
        )}
      </div>
      {children && <div className={styles.content}>{children}</div>}
    </div>
  )
}
