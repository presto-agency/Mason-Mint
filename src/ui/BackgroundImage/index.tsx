import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import Image, { ImageProps } from 'next/image'
import styles from './BackgroundImage.module.scss'

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
  return (
    <div className={classNames(styles.BackgroundImageContainer, className)}>
      <Image
        src={src}
        alt={alt}
        fill={true}
        sizes="100%"
        quality={quality}
        {...props}
      />
      {children && <div className={styles.content}>{children}</div>}
    </div>
  )
}
