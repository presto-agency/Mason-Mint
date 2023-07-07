import React, { FC, useEffect, useState } from 'react'
import Container from '@/app/layouts/Container'
import { ProductProps, CategoryProps } from '@/utils/types'

interface DesignBodyProps {
  products: ProductProps[]
  categories: CategoryProps[]
}

export const DesignBody: FC<DesignBodyProps> = ({ products, categories }) => {
  return (
    <div style={{ padding: '150px 0' }}>
      <Container>
        <div>
          <h2>Search:</h2>
          <label>
            <input type="search" />
            {' search'}
          </label>
          <h2>Categories:</h2>
          {categories.map((category) => (
            <label key={category.id}>
              <input type="checkbox" />
              {category.name}
            </label>
          ))}
        </div>
        <table>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{product.ProductName}</td>
                <td>{product.category?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  )
}
