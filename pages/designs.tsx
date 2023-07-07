import React from 'react'
import db from '@/utils/db'
import ProductModel from '../models/Product'
import CategoryModel from '../models/Category'
import { PageLayout } from '@/app/layouts/PageLayout'
import { DesignBody } from '@/modules/Designs'
import { ProductProps, CategoryProps } from '@/utils/types'

interface DesignsProps {
  products: ProductProps[]
  categories: CategoryProps[]
}

const Designs: React.FC<DesignsProps> = ({ products, categories }) => {
  return (
    <PageLayout>
      <DesignBody products={products} categories={categories} />
    </PageLayout>
  )
}

export const getServerSideProps = async () => {
  await db.connect()

  const products = await ProductModel.find()
  const categories = await CategoryModel.find()

  await db.disconnect()

  return {
    props: {
      products: JSON.parse(JSON.stringify(products.map(db.convertDocToObj))),
      categories: JSON.parse(
        JSON.stringify(categories.map(db.convertDocToObj))
      ),
    },
  }
}

export default Designs
