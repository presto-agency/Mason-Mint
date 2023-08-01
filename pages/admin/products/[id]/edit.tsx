import { NextApiRequest } from 'next'
import { ProductEdit } from '@/modules/Admin'
import CategoryModel from '../../../../models/Category'
import db from '@/utils/db'
import { CategoryProps, ProductProps } from '@/utils/types'
import { transformObjectsToJson } from '@/utils/json/transformObjectsToJson'
import ProductModel from '../../../../models/Product'

export default function ProductEditPage({
  product,
  categories,
}: {
  product: ProductProps
  categories: CategoryProps[]
}) {
  return <ProductEdit product={product} categories={categories} />
}

export const getServerSideProps = async (req: NextApiRequest) => {
  const { query } = req
  await db.connect()
  const product = await ProductModel.findOne({ id: query.id }).lean()
  const categories = await CategoryModel.find().lean()
  // await db.disconnect()
  return {
    props: {
      product: transformObjectsToJson(product),
      categories: transformObjectsToJson(categories),
    },
  }
}
