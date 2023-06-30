import { useEffect, useState } from 'react'
import axios from 'axios'
import { PageLayout } from '@/app/layouts/PageLayout'
import { AdminProducts } from '@/modules/Admin'
// import db from '@/utils/db'
// import ProductModel from '../../../models/Product'

// export default function ProductsPage({ products }: { products: string }) {
export default function ProductsPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get(`${window.location.origin}/api/products`)
      .then((res) => setProducts(res.data.data))
  }, [])

  return (
    <PageLayout>
      <AdminProducts products={products} />
    </PageLayout>
  )
}

// export const getServerSideProps = async () => {
//   await db.connect()
//   const products = await ProductModel.find()
//   await db.disconnect()
//   return {
//     props: {
//       products: JSON.stringify(products.map(db.convertDocToObj)),
//     },
//   }
// }
