import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import Banner from './assets/images/WWI-Obverse-Hero-Max.jpg'

const AnimatedText = dynamic(() => import('@/ui/AnimatedText/AnimatedText'), {
  ssr: false,
})

import styles from './BecomeADistributorBody.module.scss'

const BecomeADistributorBody: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={classNames(styles['distributorBody'], className)}>
      <p className={styles['distributorBody__description']}>
        <AnimatedText>
          To become a dealer, please fill out the form. Dealers will be required
          to produce a reseller certificate.
        </AnimatedText>
      </p>
      <div className={styles['distributorBody__image']}>
        {/*<p className={styles['distributorBody__image_title']}>*/}
        {/*  Become A Distributor*/}
        {/*</p>*/}
        <BackgroundImage
          src={Banner.src}
          alt="Banner"
          parallax
          parallaxValues={[-50, 50]}
          className={styles['distributorBody__image_item']}
        />
      </div>
    </div>
  )
}

export default BecomeADistributorBody
