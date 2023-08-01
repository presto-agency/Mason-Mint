import { AdminProducts } from '@/modules/Admin'
import db from '@/utils/db'
import { transformObjectsToJson } from '@/utils/json/transformObjectsToJson'
import { ProductProps } from '@/utils/types'
import ProductModel from '../../../models/Product'

type ProductsPageProps = {
  products: ProductProps[]
}

export default function ProductsPage({ products }: ProductsPageProps) {
  return <AdminProducts products={products} />
}

export const getServerSideProps = async () => {
  await db.connect()
  const products = await ProductModel.find().lean()
  // await db.disconnect()
  return {
    props: {
      products: transformObjectsToJson(products),
    },
  }
}
