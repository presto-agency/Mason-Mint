import React, { FC } from 'react'
import { GetStaticProps } from 'next'

import { PageLayout } from '@/app/layouts/PageLayout'
import { DesignsContentTest } from '@/modules/Designs'

import db from '@/utils/db'
import { CategoryProps, ProductProps, ProductTestProps } from '@/utils/types'
import { transformObjectsToJson } from '@/utils/json/transformObjectsToJson'

import CategoryModel from '../../models/Category'
import ProductTestModel from '../../models/ProductTest'

type DesignsProps = {
  categories: CategoryProps[]
  products: ProductTestProps[]
}

const Index: FC<DesignsProps> = ({ categories, products }) => {
  return (
    <PageLayout>
      <DesignsContentTest products={products} categories={categories} />
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
