import React, { FC, useEffect, useState } from 'react'
import Container from '@/app/layouts/Container'
import { CategoryProps, ProductProps } from '@/utils/types'
import axios from 'axios'
import { useDebounce } from 'usehooks-ts'
interface DesignsProps {
  categories: CategoryProps[]
}

export const DesignBody: FC<DesignsProps> = ({ categories }) => {
  const [products, setProducts] = useState<ProductProps[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    '649d9cca1a2f216bdc54e33a',
  ])
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  useEffect(() => {
    const fetchData = async () => {
      const responseProducts = await axios.get('/api/products', {
        params: {
          category: selectedCategories.join(','),
          search: debouncedSearchTerm,
        },
      })

      setProducts(responseProducts.data.data)
    }

    fetchData()
  }, [selectedCategories, debouncedSearchTerm])

  const handleCategoryChange = (categoryId: string) => {
    const updatedCategories = [...selectedCategories]
    const categoryIndex = updatedCategories.indexOf(categoryId)

    if (categoryIndex > -1) {
      updatedCategories.splice(categoryIndex, 1)
    } else {
      updatedCategories.push(categoryId)
    }

    setSelectedCategories(updatedCategories)
  }

  return (
    <div style={{ padding: '150px 0' }}>
      <Container>
        <div>
          <h2>Пошук:</h2>
          <label>
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="search"
            />
            {' Пошук'}
          </label>
          <h2>Категорії:</h2>
          {categories.map((category) => (
            <label key={category.id}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id || '')}
                onChange={() => handleCategoryChange(category.id || '')}
              />
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
