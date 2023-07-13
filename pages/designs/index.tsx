import React, { FC } from 'react'
import { PageLayout } from '@/app/layouts/PageLayout'
import { DesignBody } from '@/modules/Designs'
import db from '@/utils/db'
import CategoryModel from '../../models/Category'
import { CategoryProps } from '@/utils/types'

interface DesignsProps {
  categories: CategoryProps[]
}

const Index: FC<DesignsProps> = ({ categories }) => {
  return (
    <PageLayout>
      <DesignBody categories={categories} />
    </PageLayout>
  )
}

export const getServerSideProps = async () => {
  await db.connect()

  const categories = await CategoryModel.find()

  await db.disconnect()

  return {
    props: {
      categories: JSON.parse(
        JSON.stringify(categories.map(db.convertDocToObj))
      ),
    },
  }
}

export default Index
