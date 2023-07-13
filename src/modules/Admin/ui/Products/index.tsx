import { FC } from 'react'
import Container from '@/app/layouts/Container'
import { ProductProps } from '@/utils/types'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import routes from '@/utils/routes'

import styles from '@/modules/Admin/Admin.module.scss'

const AdminProducts: FC<{ products: ProductProps[] }> = ({ products }) => {
  return (
    <main className={styles['admin']}>
      <Container>
        <div className={styles['admin__table_header']}>
          <h3 className="h3">Products</h3>
          <ButtonPrimary variant="white" size="small">
            Create project
          </ButtonPrimary>
        </div>
        <table className={styles['admin__table']}>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>
                    {/*{product.Images?.length ? (*/}
                    {/*  <img*/}
                    {/*    src={product.Images[0].ImageUrl || ''}*/}
                    {/*    alt="Product"*/}
                    {/*    width={100}*/}
                    {/*    height={100}*/}
                    {/*  />*/}
                    {/*) : null}*/}
                  </td>
                  <td>{product.ProductName}</td>
                  <td>{product.category?.name}</td>
                  <td>
                    <div className={styles['admin__table_actions']}>
                      <ButtonPrimary
                        className={styles['admin__button']}
                        arrows={false}
                        variant="blue"
                        size="small"
                        href={`${routes.private.products}/${product.id}/edit`}
                      >
                        Edit
                      </ButtonPrimary>
                      <ButtonPrimary
                        className={styles['admin__button']}
                        arrows={false}
                        size="small"
                      >
                        Remove
                      </ButtonPrimary>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Container>
    </main>
  )
}

export default AdminProducts
