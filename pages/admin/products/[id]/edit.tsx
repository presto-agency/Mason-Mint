import { NextApiRequest } from 'next'
import { PageLayout } from '@/app/layouts/PageLayout'
import { ProductEdit } from '@/modules/Admin'
import ProductModel from '../../../../models/Product'
import CategoryModel from '../../../../models/Category'
import db from '@/utils/db'
import { CategoryProps } from '@/utils/types'

export default function ProductEditPage({
  product,
  categories,
}: {
  product: string
  categories: string
}) {
  return (
    <PageLayout>
      <ProductEdit
        product={JSON.parse(product)}
        categories={JSON.parse(categories)}
      />
    </PageLayout>
  )
}

export const getServerSideProps = async (req: NextApiRequest) => {
  const { query } = req
  await db.connect()
  const product = await ProductModel.findOne({ id: query.id })
  const categories = await CategoryModel.find()
  await db.disconnect()
  return {
    props: {
      product: JSON.stringify(db.convertDocToObj(product)),
      categories: JSON.stringify(categories.map(db.convertDocToObj)),
    },
  }
}
