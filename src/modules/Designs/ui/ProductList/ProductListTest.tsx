import React, { FC, Fragment, useMemo } from 'react'
import { CategoryProps, ProductTestProps } from '@/utils/types'

import ProductCarouselTest from '@/ui/ProductCarousel/ProductCarouselTest'
import styles from './ProductList.module.scss'

type ProductListTestProps = {
  initialCategories: CategoryProps[]
  categories: CategoryProps[]
  products: ProductTestProps[]
}

const ProductListTest: FC<ProductListTestProps> = ({
  categories,
  products,
  initialCategories,
}) => {
  const filteredCategories = useMemo(() => {
    return categories
      .sort(
        (a, b) => initialCategories.indexOf(a) - initialCategories.indexOf(b)
      )
      .map((category) => {
        const productsByCategory = products.filter(
          (product) => product.category?.id === category.id
        )
        return { ...category, products: productsByCategory }
      })
  }, [products, categories, initialCategories])

  return (
    <div className={styles['list']}>
      {filteredCategories.map((category, index) => {
        return (
          <Fragment key={index}>
            {category.products.length ? (
              <ProductCarouselTest
                title={category.name}
                data={category.products}
              />
            ) : null}
          </Fragment>
        )
      })}
    </div>
  )
}

export default ProductListTest
