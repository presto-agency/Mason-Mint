import { PageLayout } from '@/app/layouts/PageLayout'
import { AdminProducts } from '@/modules/Admin'
import db from '@/utils/db'
import ProductModel from '../../../models/Product'
import { ProductProps } from '@/utils/types'

type ProductsPageProps = {
  products: ProductProps[]
}

export default function ProductsPage({ products }: ProductsPageProps) {
  return (
    <PageLayout>
      <AdminProducts products={products} />
    </PageLayout>
  )
}

export const getServerSideProps = async () => {
  await db.connect()
  const products = await ProductModel.find().lean()
  await db.disconnect()
  return {
    props: {
      // products: JSON.parse(JSON.stringify(products)),
      products: products.map(db.convertDocToObj),
    },
  }
}
