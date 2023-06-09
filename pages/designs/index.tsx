import React, { FC } from 'react'
import { GetStaticProps } from 'next'
import { PageLayout } from '@/app/layouts/PageLayout'
import db from '@/utils/db'
import CategoryModel from '../../models/Category'
import ProductModel from '../../models/Product'
import { CategoryProps, ProductProps } from '@/utils/types'
import { DesignsContent } from '@/modules/Designs'

type DesignsProps = {
  categories: CategoryProps[]
  products: ProductProps[]
}

const Index: FC<DesignsProps> = ({ categories, products }) => {
  return (
    <PageLayout>
      <DesignsContent products={products} categories={categories} />
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps<{
  categories: CategoryProps[]
  products: CategoryProps[]
}> = async () => {
  await db.connect()
  const categories = await CategoryModel.find()
  const products = await ProductModel.find()
  return {
    props: {
      categories: JSON.parse(
        JSON.stringify(categories.map(db.convertDocToObj))
      ),
      products: JSON.parse(JSON.stringify(products.map(db.convertDocToObj))),
    },
  }
}

export default Index
