import React from 'react'
import Container from '@/app/layouts/Container'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import classNames from 'classnames'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'

import styles from './SellSection.module.scss'
const SellSection = () => {
  return (
    <div className={styles['sellSection']}>
      <Container>
        <div className={styles['sellSection__content']}>
          <div className={styles['sellSection__content_left']}>
            <BackgroundImage
              src="/images/home/coin.png"
              className={styles['image']}
              quality={100}
              alt="Coin photo"
            />
          </div>
          <div className={styles['sellSection__content_right']}>
            <h6 className={classNames('h6', styles['subtitle'])}>
              <AnimatedText title>wholesale & distribution</AnimatedText>
            </h6>
            <h2 className={classNames('h3', styles['title'])}>
              <AnimatedText title>Sell Our Products.</AnimatedText>
            </h2>
            <p className={styles['description']}>
              <AnimatedText>
                We work exclusively with precious metal dealers both domestic
                and abroad to distribute our products. If you are interested in
                becoming an authorized distributor please fill the contact form.
              </AnimatedText>
            </p>
            <AnimatedElement delay={0.2}>
              <ButtonPrimary variant={'noStroked'} className={styles['button']}>
                Become a Distributor
              </ButtonPrimary>
            </AnimatedElement>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SellSection
