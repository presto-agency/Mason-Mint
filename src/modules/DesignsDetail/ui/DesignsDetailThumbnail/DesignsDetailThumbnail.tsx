import { FC, useState, useRef, useCallback } from 'react'
import classNames from 'classnames'
import { ProductProps } from '@/utils/types'
import { toLoverCaseAndSpacesToHyphen } from '@/utils/string/toLoverCaseAndSpacesToHyphen'
import { detectImage, detectImages } from '@/utils/data/detectImages'
import { motion } from 'framer-motion'

import styles from './DesignsDetailThumbnail.module.scss'

type DesignsDetailThumbnailProps = {
  product: ProductProps | null
  className?: string
}

const DesignsDetailThumbnail: FC<DesignsDetailThumbnailProps> = ({
  product,
  className,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [activeSide, setActiveSide] = useState<number>(0)
  const categorySlug = product
    ? toLoverCaseAndSpacesToHyphen(product.category?.name as string)
    : ''

  const handleFlip = useCallback(
    (index: number) => {
      if (index !== activeSide) {
        setActiveSide(index)
        if (audioRef.current) audioRef.current.play()
      }
    },
    [setActiveSide, activeSide]
  )

  return (
    <div className={className}>
      <audio
        src="/sounds/coin-rotate-2.mp3"
        ref={audioRef}
        className={styles['image__sound']}
      />
      <div
        className={classNames(
          styles['image'],
          styles[`active-side-${activeSide}`]
        )}
        style={{
          backgroundImage: `url(/images/category-shadows/${categorySlug}.svg)`,
        }}
      >
        {product && (
          <motion.div
            className={styles['image__item']}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={classNames(
                styles['image__item_side'],
                styles['front']
              )}
            >
              <img
                src={detectImages(product.Images, 0)}
                alt={product.ProductName}
              />
            </div>
            <div
              className={classNames(styles['image__item_side'], styles['back'])}
            >
              <img
                src={detectImages(product.Images, 1)}
                alt={product.ProductName}
              />
            </div>
          </motion.div>
        )}
      </div>
      <div className={styles['thumbs']}>
        {product &&
          product.Images?.length &&
          product.Images.slice(0, 2).map((p, index) => {
            return (
              <div
                key={index}
                className={styles['thumbs__item']}
                onClick={() => handleFlip(index)}
              >
                <img src={detectImage(p, index)} alt={product.ProductName} />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default DesignsDetailThumbnail
