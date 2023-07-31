import { FC, useState } from 'react'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { motion } from 'framer-motion'

import styles from './CustomMintingBanner.module.scss'

const CustomMintingBanner: FC<{ className?: string }> = ({ className }) => {
  const [loaded, setLoaded] = useState<boolean>(false)

  return (
    <div className={classNames(styles['banner'], className)}>
      <motion.div
        className={styles['banner__overflow']}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={loaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <BackgroundImage
          src="/images/custom-minting/hero-banner.jpg"
          alt="Let Us Make Your Vision a Reality."
          className={styles['banner__item']}
          parallax
          parallaxValues={[-150, 150]}
          onLoadingComplete={() => setLoaded(true)}
        />
      </motion.div>
    </div>
  )
}

export default CustomMintingBanner
