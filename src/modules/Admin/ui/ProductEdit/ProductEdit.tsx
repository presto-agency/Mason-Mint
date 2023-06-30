import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import ProductForm from '@/ui/ProductForm/ProductForm'
import Container from '@/app/layouts/Container'
import { CategoryProps, ProductProps } from '@/utils/types'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import routes from '@/utils/routes'

import styles from '@/modules/Admin/Admin.module.scss'

export const ProductEdit: FC<{
  product: ProductProps
  categories: CategoryProps[]
}> = ({ product, categories }) => {
  const { query } = useRouter()
  const [productState, setProductState] = useState(product)

  const handleEdit = async (data: ProductProps) => {
    await axios
      .put(`${window.location.origin}/api/products/${query.id}/edit`, data)
      .then((res) => setProductState(res.data.data))
  }

  return (
    <main className={styles['admin']}>
      <Container>
        <ButtonPrimary
          arrows={false}
          size="small"
          href={routes.private.products}
        >
          Back to list
        </ButtonPrimary>
        <ProductForm
          product={productState}
          categories={categories}
          onValues={handleEdit}
        />
      </Container>
    </main>
  )
}
