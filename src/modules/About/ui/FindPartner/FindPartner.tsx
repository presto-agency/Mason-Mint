import React, { FC } from 'react'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import AnimateScaleBg from '@/ui/AnimateScaleBG/AnimateScaleBG'
import useWindowDimensions from '@/hooks/useWindowDimensions'

import styles from './FindPartner.module.scss'

const images = [
  '/images/about/innerAbout.jpg',
  '/images/home/customDesign/slide_1.jpg',
  '/images/home/customDesign/slide_2.jpg',
  '/images/home/customDesign/slide_3.jpg',
  '/images/home/customDesign/slide_4.jpg',
  '/images/home/customDesign/slide_5.jpg',
]

const FindPartner: FC<{ className?: string }> = ({ className }) => {
  const { width } = useWindowDimensions()

  return (
    <section className={classNames(styles['FindPartner'], className)}>
      <AnimatedElement delay={0.2} className={styles['FindPartner__image']}>
        {width > 767 ? (
          <AnimateScaleBg images={images} />
        ) : (
          <BackgroundImage
            className={styles['image']}
            parallax
            cover
            src="/images/about/innerAbout.jpg"
            alt="image"
          />
        )}
      </AnimatedElement>
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
