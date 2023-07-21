import { FC } from 'react'
import { NextApiRequest } from 'next'
import { ProductProps } from '@/utils/types'
import db from '@/utils/db'
import ProductModel from '../../../models/Product'
import { PageLayout } from '@/app/layouts/PageLayout'
import { DesignsDetailContent } from '@/modules/DesignsDetail'
import { transformObjectsToJson } from '@/utils/json/transformObjectsToJson'

type ProductDetailProps = {
  product: ProductProps
  sameProducts: ProductProps[]
}

// @TODO detect with fetch data on client side

const Index: FC<ProductDetailProps> = ({ product, sameProducts }) => {
  return (
    <PageLayout>
      <DesignsDetailContent product={product} sameProducts={sameProducts} />
    </PageLayout>
  )
}

export const getServerSideProps = async (req: NextApiRequest) => {
  const { query } = req

  await db.connect()

  const product: ProductProps | null = await ProductModel.findOne({
    id: query.productId,
  }).lean()

  let sameProducts: ProductProps[] = []

  if (product && product.category && product.category.id) {
    sameProducts = (await ProductModel.find({
      ['category.id']: product.category.id,
    })
      .lean()
      .then((products) =>
        products.filter((p) => p.id !== query.productId)
      )) as ProductProps[]
  }

  await db.disconnect()

  return {
    props: {
      product: transformObjectsToJson(product),
      sameProducts: transformObjectsToJson(sameProducts),
    },
  }
}

export default Index
