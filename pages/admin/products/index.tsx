import { PageLayout } from '@/app/layouts/PageLayout'
import { AdminProducts } from '@/modules/Admin'
import db from '@/utils/db'
// import ProductModel from '../../../models/ProductOld'
import { ProductProps } from '@/utils/types'
import { transformObjectsToJson } from '@/utils/json/transformObjectsToJson'
import ProductTestModel from '../../../models/Product'

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
  const products = await ProductTestModel.find().lean()
  // await db.disconnect()
  return {
    props: {
      products: transformObjectsToJson(products),
    },
  }
}
