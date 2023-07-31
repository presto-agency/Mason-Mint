import { FC, useState, useRef, useCallback } from 'react'
import classNames from 'classnames'
import { ProductTestProps } from '@/utils/types'
import { toLoverCaseAndSpacesToHyphen } from '@/utils/string/toLoverCaseAndSpacesToHyphen'
import { motion } from 'framer-motion'

import styles from './DesignsDetailThumbnail.module.scss'

type DesignsDetailThumbnailProps = {
  product: ProductTestProps | null
  className?: string
}
const DesignsDetailThumbnail: FC<DesignsDetailThumbnailProps> = ({
  product,
  className,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [activeSide, setActiveSide] = useState<'obverse' | 'reverse'>('obverse')
  const categorySlug = product
    ? toLoverCaseAndSpacesToHyphen(product.category?.name as string)
    : ''

  const handleFlip = useCallback((valueToSet: 'obverse' | 'reverse') => {
    setActiveSide((prev) => {
      if (prev !== valueToSet) {
        if (audioRef.current) audioRef.current.play()
      }
      return valueToSet
    })
  }, [])

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
                src={product.mainImages.obverse || ''}
                alt={product.ProductName}
              />
            </div>
            <div
              className={classNames(styles['image__item_side'], styles['back'])}
            >
              <img
                src={product.mainImages.reverse || ''}
                alt={product.ProductName}
              />
            </div>
          </motion.div>
        )}
      </div>
      <div className={styles['thumbs']}>
        {product?.mainImages && (
          <>
            <div
              className={styles['thumbs__item']}
              onClick={() => handleFlip('obverse')}
            >
              <img
                src={product.mainImages.obverse || ''}
                alt={product.ProductName}
              />
            </div>
            <div
              className={styles['thumbs__item']}
              onClick={() => handleFlip('reverse')}
            >
              <img
                src={product.mainImages.reverse || ''}
                alt={product.ProductName}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default DesignsDetailThumbnail
