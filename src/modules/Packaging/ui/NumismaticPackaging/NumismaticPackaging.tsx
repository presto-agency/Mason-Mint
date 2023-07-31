import React, { FC, Fragment, useEffect, useState } from 'react'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'

import styles from './NumismaticPackaging.module.scss'
import stylesSlider from '@/ui/ProductCarousel/ProductCarousel.module.scss'

const data = [
  {
    url: '/images/packaging/slide_1.png',
    id: 1,
  },
  {
    url: '/images/packaging/slide_2.png',
    id: 2,
  },
  {
    url: '/images/packaging/slide_3.png',
    id: 3,
  },
  {
    url: '/images/packaging/slide_4.png',
    id: 4,
  },
  {
    url: '/images/packaging/slide_1.png',
    id: 5,
  },
  {
    url: '/images/packaging/slide_2.png',
    id: 6,
  },
  {
    url: '/images/packaging/slide_3.png',
    id: 7,
  },
  {
    url: '/images/packaging/slide_4.png',
    id: 8,
  },
]

const NumismaticPackaging: FC<{ className?: string }> = ({ className }) => {
  const [countOfActiveSlides, setCountOfActiveSlides] = useState<number>(3)
  const hasArrows = data?.length ? data.length > countOfActiveSlides : false

  useEffect(() => {
    if (window && window.innerWidth <= 767) {
      setCountOfActiveSlides(2)
    }
  }, [])

  const options = {
    type: 'slide',
    autoWidth: true,
    perMove: 1,
    perPage: countOfActiveSlides,
    pagination: false,
    arrows: hasArrows,
    updateOnMove: true,
    speed: 1000,
    easing: 'ease',
    classes: {
      arrows: classNames(stylesSlider['carousel__arrows'], styles['arrows']),
      arrow: stylesSlider['carousel__arrow'],
      prev: stylesSlider['carousel__arrow_prev'],
      next: stylesSlider['carousel__arrow_next'],
    },
  }
  return (
    <section className={classNames(styles['NumismaticPackaging'], className)}>
      <Container>
        <div className={styles['NumismaticPackaging__content']}>
          <div className={styles['NumismaticPackaging__content_left']}>
            <h2 className={classNames('h2', styles['title'])}>
              <AnimatedText title>
                To find out more about our numismatic packaging offer or to
                discuss the possibility of creating innovative projects.
              </AnimatedText>
            </h2>
          </div>
          <div className={styles['NumismaticPackaging__content_right']}>
            <p className={styles['description']}>
              <AnimatedText>
                The starting point for the creation of any packaging is always
                the coin – it inspires the creative concepts for the narrative,
                and then the selection of the appropriate form and design.
              </AnimatedText>
            </p>
            <p className={styles['description']}>
              <AnimatedText>
                From concept, to prototype, to volume production.
              </AnimatedText>
            </p>
          </div>
        </div>
        <div className={styles['NumismaticPackaging__slider']}>
          <Splide
            options={options}
            hasTrack={false}
            className={stylesSlider['carousel__item']}
          >
            <SplideTrack className={stylesSlider['carousel__track']}>
              {data?.map((product, index) => (
                <Fragment key={index}>
                  <SplideSlide className={stylesSlider['slide']}>
                    <BackgroundImage
                      className={styles['image']}
                      contain
                      src={product.url}
                      alt="slide"
                    />
                  </SplideSlide>
                </Fragment>
              ))}
            </SplideTrack>
          </Splide>
        </div>
      </Container>
    </section>
  )
}

export default NumismaticPackaging
