import { NextApiRequest } from 'next'
import { PageLayout } from '@/app/layouts/PageLayout'
import { ProductEdit } from '@/modules/Admin'
import CategoryModel from '../../../../models/Category'
import db from '@/utils/db'
import { CategoryProps, ProductProps } from '@/utils/types'
import { transformObjectsToJson } from '@/utils/json/transformObjectsToJson'
import ProductTestModel from '../../../../models/Product'

export default function ProductEditPage({
  product,
  categories,
}: {
  product: ProductProps
  categories: CategoryProps[]
}) {
  return (
    <PageLayout>
      <ProductEdit product={product} categories={categories} />
    </PageLayout>
  )
}

export const getServerSideProps = async (req: NextApiRequest) => {
  const { query } = req
  await db.connect()
  const product = await ProductTestModel.findOne({ id: query.id }).lean()
  const categories = await CategoryModel.find().lean()
  // await db.disconnect()
  return {
    props: {
      product: transformObjectsToJson(product),
      categories: transformObjectsToJson(categories),
    },
  }
}
