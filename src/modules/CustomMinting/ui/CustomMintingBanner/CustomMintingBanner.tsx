import { FC, useEffect, useState } from 'react'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { motion } from 'framer-motion'

import styles from './CustomMintingBanner.module.scss'
import AnimateScaleBg from '@/ui/AnimateScaleBG/AnimateScaleBG'
import useWindowDimensions from '@/hooks/useWindowDimensions'

const images = [
  '/images/custom-minting/hero-banner.jpg',
  '/images/home/customDesign/slide_1.jpg',
  '/images/home/customDesign/slide_2.jpg',
  '/images/home/customDesign/slide_3.jpg',
  '/images/home/customDesign/slide_4.jpg',
  '/images/home/customDesign/slide_5.jpg',
]

const CustomMintingBanner: FC<{ className?: string }> = ({ className }) => {
  const { width } = useWindowDimensions()
  const [loaded, setLoaded] = useState<boolean>(false)
  useEffect(() => {
    width > 767 && setLoaded(true)
  }, [width])

  return (
    <div className={classNames(styles['banner'], className)}>
      <motion.div
        className={styles['banner__overflow']}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={loaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        {width > 767 ? (
          <AnimateScaleBg images={images} />
        ) : (
          <BackgroundImage
            src="/images/custom-minting/hero-banner.jpg"
            alt="Let Us Make Your Vision a Reality."
            className={styles['banner__item']}
            parallax
            parallaxValues={[-150, 150]}
            onLoadingComplete={() => setLoaded(true)}
          />
        )}
      </motion.div>
    </div>
  )
}

export default CustomMintingBanner
