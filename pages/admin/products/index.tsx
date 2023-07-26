import { PageLayout } from '@/app/layouts/PageLayout'
import { AdminProductsTest } from '@/modules/Admin'
import db from '@/utils/db'
// import ProductModel from '../../../models/Product'
import { ProductTestProps } from '@/utils/types'
import { transformObjectsToJson } from '@/utils/json/transformObjectsToJson'
import ProductTestModel from '../../../models/ProductTest'

type ProductsPageProps = {
  products: ProductTestProps[]
}

export default function ProductsPage({ products }: ProductsPageProps) {
  return (
    <PageLayout>
      <AdminProductsTest products={products} />
    </PageLayout>
  )
}

export const getServerSideProps = async () => {
  await db.connect()
  const products = await ProductTestModel.find().lean()
  await db.disconnect()
  return {
    props: {
      products: transformObjectsToJson(products),
    },
  }
}
