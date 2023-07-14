import { FC, Fragment } from 'react'
import classNames from 'classnames'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { ProductProps } from '@/utils/types'
import ProductCard from '@/ui/ProductCard/ProductCard'
import ArrowSelect from '@/ui/Icons/ArrowSelect'
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
  const countOfActiveSlides = 4
  const hasArrows = data?.length ? data.length > countOfActiveSlides : false
  const options = {
    type: 'slide',
    autoWidth: true,
    perMove: 1,
    perPage: countOfActiveSlides,
    gap: '32rem',
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
          <p className={styles['carousel__label']}>{data?.length} results</p>
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
          {/*{hasArrows ? (*/}
          {/*  <div*/}
          {/*    className={classNames(*/}
          {/*      styles['carousel__arrows'],*/}
          {/*      'splide__arrows'*/}
          {/*    )}*/}
          {/*  >*/}
          {/*    <button*/}
          {/*      className={classNames(*/}
          {/*        styles['carousel__arrow'],*/}
          {/*        styles['carousel__arrow_prev'],*/}
          {/*        'splide__arrow splide__arrow--prev'*/}
          {/*      )}*/}
          {/*    >*/}
          {/*      <ArrowSelect*/}
          {/*        className={classNames(*/}
          {/*          styles['carousel__arrow_icon'],*/}
          {/*          styles['prev'],*/}
          {/*          styles['__1']*/}
          {/*        )}*/}
          {/*      />*/}
          {/*      <ArrowSelect*/}
          {/*        className={classNames(*/}
          {/*          styles['carousel__arrow_icon'],*/}
          {/*          styles['prev'],*/}
          {/*          styles['__2']*/}
          {/*        )}*/}
          {/*      />*/}
          {/*    </button>*/}
          {/*    <button*/}
          {/*      className={classNames(*/}
          {/*        styles['carousel__arrow'],*/}
          {/*        styles['carousel__arrow_next'],*/}
          {/*        'splide__arrow splide__arrow--next'*/}
          {/*      )}*/}
          {/*    >*/}
          {/*      <ArrowSelect*/}
          {/*        className={classNames(*/}
          {/*          styles['carousel__arrow_icon'],*/}
          {/*          styles['next'],*/}
          {/*          styles['__1']*/}
          {/*        )}*/}
          {/*      />*/}
          {/*      <ArrowSelect*/}
          {/*        className={classNames(*/}
          {/*          styles['carousel__arrow_icon'],*/}
          {/*          styles['next'],*/}
          {/*          styles['__2']*/}
          {/*        )}*/}
          {/*      />*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*) : null}*/}
        </Splide>
      ) : null}
    </div>
  )
}

export default ProductCarousel
