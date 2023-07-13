import { FC, Fragment } from 'react'
import classNames from 'classnames'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { ProductProps } from '@/utils/types'
import ProductCard from '@/ui/ProductCard/ProductCard'

import styles from './ProductCarousel.module.scss'
import ArrowSelect from '@/ui/Icons/ArrowSelect'

type ProductCarouselProps = {
  data: ProductProps[]
  className?: string
}

const ProductCarousel: FC<ProductCarouselProps> = ({ data, className }) => {
  const options = {
    type: 'slide',
    autoWidth: true,
    perMove: 1,
    perPage: 4,
    gap: '32rem',
    pagination: false,
    arrows: true,
    updateOnMove: true,
  }

  return (
    <div className={classNames(styles['carousel'], className)}>
      <p className={classNames(styles['carousel__title'], 'h3')}>
        Classic design rounds.
      </p>
      <Splide
        options={options}
        hasTrack={false}
        className={styles['carousel__item']}
      >
        <SplideTrack className={styles['carousel__track']}>
          {data.map((product, index) => (
            <Fragment key={index}>
              <SplideSlide className={styles['carousel__slide']}>
                <ProductCard data={product} />
              </SplideSlide>
            </Fragment>
          ))}
        </SplideTrack>
        <div
          className={classNames(styles['carousel__arrows'], 'splide__arrows')}
        >
          <button
            className={classNames(
              styles['carousel__arrow'],
              styles['carousel__arrow_prev'],
              'splide__arrow splide__arrow--prev'
            )}
          >
            <ArrowSelect
              className={classNames(
                styles['carousel__arrow_icon'],
                styles['prev'],
                styles['__1']
              )}
            />
            <ArrowSelect
              className={classNames(
                styles['carousel__arrow_icon'],
                styles['prev'],
                styles['__2']
              )}
            />
          </button>
          <button
            className={classNames(
              styles['carousel__arrow'],
              styles['carousel__arrow_next'],
              'splide__arrow splide__arrow--next'
            )}
          >
            <ArrowSelect
              className={classNames(
                styles['carousel__arrow_icon'],
                styles['next'],
                styles['__1']
              )}
            />
            <ArrowSelect
              className={classNames(
                styles['carousel__arrow_icon'],
                styles['next'],
                styles['__2']
              )}
            />
          </button>
        </div>
      </Splide>
    </div>
  )
}

export default ProductCarousel
