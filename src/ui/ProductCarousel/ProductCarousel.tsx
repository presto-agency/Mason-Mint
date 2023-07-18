import { FC, Fragment, useEffect, useState } from 'react'
import classNames from 'classnames'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { ProductProps } from '@/utils/types'
import ProductCard from '@/ui/ProductCard/ProductCard'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'

import styles from './ProductCarousel.module.scss'

type ProductCarouselProps = {
  data?: ProductProps[]
  className?: string
  title?: string
}

const ProductCarousel: FC<ProductCarouselProps> = ({
  data,
  className,
  title,
}) => {
  const [countOfActiveSlides, setCountOfActiveSlides] = useState<number>(4)
  const [gap, setGap] = useState<number>(32)
  const hasArrows = data?.length ? data.length > countOfActiveSlides : false

  useEffect(() => {
    if (window && window.innerWidth <= 767) {
      setCountOfActiveSlides(2)
      setGap(24)
    }
  }, [])

  const options = {
    type: 'slide',
    autoWidth: true,
    perMove: 1,
    perPage: countOfActiveSlides,
    gap: `${gap}rem`,
    pagination: false,
    arrows: hasArrows,
    updateOnMove: true,
    speed: 1000,
    easing: 'ease',
    classes: {
      arrows: styles['carousel__arrows'],
      arrow: styles['carousel__arrow'],
      prev: styles['carousel__arrow_prev'],
      next: styles['carousel__arrow_next'],
    },
  }

  return (
    <div className={classNames(styles['carousel'], className)}>
      <div className="row">
        <div className="col-md-3 order-md-2">
          <p className={styles['carousel__label']}>
            <AnimatedText>{`${data?.length} results`}</AnimatedText>
          </p>
        </div>
        <div className="col-md-9 order-md-1">
          <p className={classNames(styles['carousel__title'], 'h3')}>
            <AnimatedText withBlueDot>{`${title}`}</AnimatedText>
          </p>
        </div>
      </div>
      {data?.length ? (
        <Splide
          options={options}
          hasTrack={false}
          className={styles['carousel__item']}
        >
          <SplideTrack className={styles['carousel__track']}>
            {data?.map((product, index) => (
              <Fragment key={index}>
                <SplideSlide className={styles['carousel__slide']}>
                  <ProductCard data={product} />
                </SplideSlide>
              </Fragment>
            ))}
          </SplideTrack>
        </Splide>
      ) : null}
    </div>
  )
}

export default ProductCarousel
