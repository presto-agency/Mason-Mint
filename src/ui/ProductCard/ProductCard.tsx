import { FC } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { ProductProps } from '@/utils/types'
import { toLoverCaseAndSpacesToHyphen } from '@/utils/string/toLoverCaseAndSpacesToHyphen'
import routes from '@/utils/routes'
import { detectImages } from '@/utils/data/detectImages'

import styles from './ProductCard.module.scss'

type ProductCardProps = {
  data: ProductProps
  className?: string
  flip?: boolean
}

const ProductCard: FC<ProductCardProps> = ({
  data,
  className,
  flip = true,
}) => {
  const categorySlug = toLoverCaseAndSpacesToHyphen(
    data.category?.name as string
  )
  // @TODO detect images for display
  return (
    <Link
      href={`${routes.public.designs}/${data.id}/${data.slug}`}
      className={classNames(
        styles['product'],
        flip ? styles['enable-flip'] : '',
        className
      )}
    >
      <div
        className={styles['product__thumb']}
        style={{
          backgroundImage: `url(/images/category-shadows/${categorySlug}.svg)`,
        }}
      >
        <div className={styles['product__thumb_item']}>
          {flip ? (
            <>
              <div
                className={classNames(styles['product__side'], styles['front'])}
              >
                <img
                  src={detectImages(data.Images, 0)}
                  alt={data.ProductName}
                />
              </div>
              <div
                className={classNames(styles['product__side'], styles['back'])}
              >
                <img
                  src={detectImages(data.Images, 1)}
                  alt={data.ProductName}
                />
              </div>
            </>
          ) : (
            <div className={classNames(styles['product__side'])}>
              <img src={detectImages(data.Images, 0)} alt={data.ProductName} />
            </div>
          )}
        </div>
      </div>
      <div className={styles['product__content']}>
        <p className={styles['product__content_title']}>{data.ProductName}</p>
      </div>
    </Link>
  )
}

export default ProductCard
