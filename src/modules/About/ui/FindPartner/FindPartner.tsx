import React, { FC } from 'react'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'

import styles from './FindPartner.module.scss'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'

const FindPartner: FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={classNames(styles['FindPartner'], className)}>
      <div className={styles['FindPartner__image']}>
        <BackgroundImage
          className={styles['image']}
          parallax
          cover
          src="/images/about/innerAbout.jpg"
          alt="image"
        />
      </div>
      <Container className={styles['container']}>
        <div className={styles['FindPartner__content']}>
          <div className={styles['FindPartner__content_description']}>
            <h4 className={classNames('h4', styles['title'])}>
              <AnimatedText>
                We’ve built our business on long-term relationship with the
                world’s largest mining companies
              </AnimatedText>
            </h4>
            <p className={styles['subtitle']}>
              <AnimatedText>
                Providing our partners with reliable and efficient results
                supported by the resources of a publicly listed, global company.
              </AnimatedText>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FindPartner
