import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import Image, { ImageProps } from 'next/image'
import styles from './BackgroundImage.module.scss'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const sectionVariants2 = {
  hidden: {
    scale: 1.1,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 2,
    },
  },
}

type BackgroundImageProps = {
  className?: string
  children?: ReactNode
} & ImageProps

export const BackgroundImage: FC<BackgroundImageProps> = ({
  src,
  alt,
  quality = 75,
  className,
  children,
  ...props
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })
  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.div
        className={classNames(styles.BackgroundImageContainer, className)}
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={sectionVariants2}
      >
        <Image
          src={src}
          alt={alt}
          fill={true}
          sizes="100%"
          quality={quality}
          {...props}
        />
        {children && <div className={styles.content}>{children}</div>}
      </motion.div>
    </div>
  )
}
