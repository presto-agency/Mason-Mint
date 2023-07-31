import React, { FC } from 'react'
import { GetStaticProps } from 'next'

import { PageLayout } from '@/app/layouts/PageLayout'
import { DesignsContent } from '@/modules/Designs'

import db from '@/utils/db'
import { CategoryProps, ProductProps } from '@/utils/types'
import { transformObjectsToJson } from '@/utils/json/transformObjectsToJson'

import CategoryModel from '../../models/Category'
import ProductTestModel from '../../models/Product'

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
  products: ProductProps[]
}> = async () => {
  await db.connect()
  const categories = await CategoryModel.find().lean()
  const products = await ProductTestModel.find().lean()

  return {
    props: {
      categories: transformObjectsToJson(categories),
      products: transformObjectsToJson(products),
    },
  }
}

export default Index
