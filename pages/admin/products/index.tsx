import { PageLayout } from '@/app/layouts/PageLayout'
import { AdminProducts } from '@/modules/Admin'
import db from '@/utils/db'
import ProductModel from '../../../models/Product'

export default function ProductsPage({ products }: { products: string }) {
  return (
    <PageLayout>
      <AdminProducts products={JSON.parse(products)} />
    </PageLayout>
  )
}

export const getServerSideProps = async () => {
  await db.connect()
  const products = await ProductModel.find()
  await db.disconnect()
  return {
    props: {
      products: JSON.stringify(products.map(db.convertDocToObj)),
    },
  }
}
