import { FC, useCallback, useMemo, useState } from 'react'
import { CategoryProps, ProductProps } from '@/utils/types'
import HeroInner from '@/ui/HeroInner/HeroInner'
import Container from '@/app/layouts/Container'
import ProductList from '@/modules/Designs/ui/ProductList/ProductList'

import styles from './DesignsContent.module.scss'
import ProductFilter from '@/modules/Designs/ui/ProductFilter/ProductFilter'

type DesignsProps = {
  categories: CategoryProps[]
  products: ProductProps[]
}

const DesignsContent: FC<DesignsProps> = ({ categories, products }) => {
  const [filteredCategories, setFilteredCategories] = useState(categories)

  const handleFilterChange = useCallback(
    (c: CategoryProps[]) => {
      setFilteredCategories(c)
    },
    [setFilteredCategories]
  )

  return (
    <main className={styles['designsContent']}>
      <HeroInner
        title="Bring the stories of our world into your home"
        subtitle="Browse by categories"
        description="We look forward to supplying both the investor and collector silver market with superior products that are sure to impress."
        theme="gray"
      />
      <Container>
        <div className="row">
          <div className="col-md-6">Search filed</div>
          <div className="col-md-6">
            <ProductFilter
              onChange={handleFilterChange}
              categories={categories}
            />
          </div>
        </div>
        <ProductList
          products={products}
          categories={filteredCategories}
          initialCategories={categories}
        />
      </Container>
    </main>
  )
}

export default DesignsContent
