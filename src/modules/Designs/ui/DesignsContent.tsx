import { FC, useCallback, useContext, useEffect, useState } from 'react'
import { CategoryProps, ProductProps } from '@/utils/types'
import HeroInner from '@/ui/HeroInner/HeroInner'
import Container from '@/app/layouts/Container'
import ProductList from '@/modules/Designs/ui/ProductList/ProductList'
import ProductFilter from '@/modules/Designs/ui/ProductFilter/ProductFilter'
import ProductSearch from '@/modules/Designs/ui/ProductSearch/ProductSearch'
import BecomeDistributorSection from '@/components/BecomeDistributorSection/BecomeDistributorSection'
import { Store } from '@/utils/Store'

import styles from './DesignsContent.module.scss'

type DesignsProps = {
  categories: CategoryProps[]
  products: ProductProps[]
}

const DesignsContent: FC<DesignsProps> = ({ categories, products }) => {
  const store = useContext(Store)

  const [filteredCategories, setFilteredCategories] =
    useState<CategoryProps[]>(categories)
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    if (store?.dispatch && store?.state.products.length <= 0) {
      store?.dispatch({ type: 'ADD_PRODUCTS', payload: products })
    }
  }, [])

  const handleFilterChange = useCallback((c: CategoryProps[]) => {
    setFilteredCategories(c)
  }, [])

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query)
  }, [])

  const filterProductsBySearch = (products: ProductProps[], query: string) => {
    return products.filter((product: ProductProps) =>
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
            <ProductList
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

export default DesignsContent
