import { FC } from 'react'
import { CategoryProps, ProductProps } from '@/utils/types'
import HeroInner from '@/ui/HeroInner/HeroInner'
import Container from '@/app/layouts/Container'
import ProductList from '@/modules/Designs/ui/ProductList/ProductList'

import styles from './DesignsContent.module.scss'

type DesignsProps = {
  categories: CategoryProps[]
  products: ProductProps[]
}

const DesignsContent: FC<DesignsProps> = ({ categories, products }) => {
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
          <div className="col-md-6">Filter field</div>
        </div>
        <ProductList products={products} categories={categories} />
      </Container>
    </main>
  )
}

export default DesignsContent
