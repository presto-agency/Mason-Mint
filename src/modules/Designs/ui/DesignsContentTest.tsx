import { FC, useCallback, useState } from 'react'
import { CategoryProps, ProductTestProps } from '@/utils/types'

import Container from '@/app/layouts/Container'
import BecomeDistributorSection from '@/components/BecomeDistributorSection/BecomeDistributorSection'
import HeroInner from '@/ui/HeroInner/HeroInner'

import ProductListTest from './ProductList/ProductListTest'
import ProductFilter from './ProductFilter/ProductFilter'
import ProductSearch from './ProductSearch/ProductSearch'

import styles from './DesignsContent.module.scss'

type DesignsContentTestProps = {
  categories: CategoryProps[]
  products: ProductTestProps[]
}

const DesignsContentTest: FC<DesignsContentTestProps> = ({
  categories,
  products,
}) => {
  const [filteredCategories, setFilteredCategories] =
    useState<CategoryProps[]>(categories)
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleFilterChange = useCallback((c: CategoryProps[]) => {
    setFilteredCategories(c)
  }, [])

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query)
  }, [])

  const filterProductsBySearch = (
    products: ProductTestProps[],
    query: string
  ) => {
    return products.filter((product: ProductTestProps) =>
      product.ProductName.toLowerCase().includes(query.toLowerCase())
    )
  }

  const filteredProducts = searchQuery
    ? filterProductsBySearch(products, searchQuery)
    : products

  return (
    <main className={styles['designsContent']}>
      <HeroInner
        title="Bring the stories of our world into your home"
        subtitle="Browse by categories"
        description="We look forward to supplying both the investor and collector silver market with superior products that are sure to impress."
        theme="gray"
      />
      <div className={styles['designsContent__body']}>
        <Container>
          <div className="row">
            <div className="col-md-6">
              <ProductSearch
                className={styles['designsContent__search']}
                onValues={handleSearchChange}
              />
            </div>
            <div className="col-md-6">
              <ProductFilter
                onChange={handleFilterChange}
                categories={categories}
              />
            </div>
          </div>
          {filteredProducts.length > 0 ? (
            <ProductListTest
              products={filteredProducts}
              categories={filteredCategories}
              initialCategories={categories}
            />
          ) : (
            <div className={styles['designsContent__empty']}>
              <p className="h5">List is empty</p>
            </div>
          )}
        </Container>
        <BecomeDistributorSection />
      </div>
    </main>
  )
}

export default DesignsContentTest
