import React, { FC, Fragment, useMemo } from 'react'
import { CategoryProps, ProductProps } from '@/utils/types'
import ProductCarousel from '@/ui/ProductCarousel/ProductCarousel'

import styles from './ProductList.module.scss'

type DesignsProps = {
  categories: CategoryProps[]
  products: ProductProps[]
}

const ProductList: FC<DesignsProps> = ({ categories, products }) => {
  const filteredCategories = useMemo(() => {
    return categories.map((category) => {
      const productsByCategory = products.filter(
        (product) => product.category?.id === category.id
      )
      return { ...category, products: productsByCategory }
    })
  }, [products, categories])

  return (
    <div className={styles['list']}>
      {filteredCategories.map((category, index) => {
        return (
          <Fragment key={index}>
            <ProductCarousel title={category.name} data={category.products} />
          </Fragment>
        )
      })}
    </div>
  )
}

export default ProductList
