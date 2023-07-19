import { FC } from 'react'
import { NextApiRequest } from 'next'
import { ProductProps } from '@/utils/types'
import db from '@/utils/db'
import ProductModel from '../../../models/Product'
import { PageLayout } from '@/app/layouts/PageLayout'
import { DesignsDetailContent } from '@/modules/DesignsDetail'

type ProductDetailProps = {
  product: ProductProps | null
}

const Index: FC<ProductDetailProps> = ({ product }) => {
  return (
    <PageLayout>
      <DesignsDetailContent product={product} />
    </PageLayout>
  )
}

export const getServerSideProps = async (req: NextApiRequest) => {
  const { query } = req
  await db.connect()
  const product = await ProductModel.findOne({ id: query.productId }).lean()
  await db.disconnect()
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  }
}

export default Index
