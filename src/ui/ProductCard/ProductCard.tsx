import { FC } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { ProductProps } from '@/utils/types'
import { toLoverCaseAndSpacesToHyphen } from '@/utils/string/toLoverCaseAndSpacesToHyphen'
import routes from '@/utils/routes'

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
                  src="/uploads/649eb251a7e3c76fd7827df6/1-oz-American-Revolution-Round-Antique-Obverse-Max.png"
                  alt="Alt"
                />
              </div>
              <div
                className={classNames(styles['product__side'], styles['back'])}
              >
                <img
                  src="/uploads/649eb251a7e3c76fd7827df6/1-oz-American-Revolution-Round-Antique-Reverse-Max.png"
                  alt="Alt"
                />
              </div>
            </>
          ) : (
            <div className={classNames(styles['product__side'])}>
              <img
                src="/uploads/649eb251a7e3c76fd7827df6/1-oz-American-Revolution-Round-Antique-Obverse-Max.png"
                alt="Alt"
              />
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
