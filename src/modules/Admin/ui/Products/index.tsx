import { FC, useEffect } from 'react'
import Image from 'next/image'
import Container from '@/app/layouts/Container'
import { ProductProps } from '@/utils/types'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import routes from '@/utils/routes'

import styles from '@/modules/Admin/Admin.module.scss'
import { s3Client } from '@/utils/s3Client'
import { ListObjectsCommand } from '@aws-sdk/client-s3'

const AdminProducts: FC<{ products: ProductProps[] }> = ({ products }) => {
  // https://github.com/markngogc/MMDev.git
  const bucketParams = { Bucket: 'mason-mint-products-dev' }

  const fetch = async () => {
    try {
      const data = await s3Client.send(new ListObjectsCommand(bucketParams))
      console.log('Success - ', data)
    } catch (error) {
      console.log('Error, s3Client - ', error)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <main className={styles['admin']}>
      <Container>
        <div className={styles['admin__table_header']}>
          <h3 className="h3">Products</h3>
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
                    {product.mainImages?.obverse ? (
                      <Image
                        src={product.mainImages.obverse}
                        alt={product.ProductName}
                        width={100}
                        height={100}
                        style={{ marginRight: '10rem', objectFit: 'contain' }}
                      />
                    ) : null}
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
