import React, { FC, useEffect, useState } from 'react'
import Container from '@/app/layouts/Container'
import { ProductProps, CategoryProps } from '@/utils/types'
import axios from 'axios'

export const DesignBody: FC = () => {
  const [products, setProducts] = useState<ProductProps[]>([])
  const [categories, setCategories] = useState<CategoryProps[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    '649d9cca1a2f216bdc54e33a',
  ])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseProducts = await axios.get('/api/products', {
          params: {
            category: selectedCategories.join(','),
            search: searchTerm,
          },
        })
        const responseCategories = await axios.get('/api/categories')

        setProducts(responseProducts.data.data)
        setCategories(responseCategories.data.data)
        console.log('products', responseProducts.data.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [selectedCategories, searchTerm])

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

  // const filteredProducts = products.filter((product) => {
  //   const matchedCategory =
  //     selectedCategories.length === 0 ||
  //     selectedCategories.includes(product.category?.id || '')
  //   const matchedSearchTerm =
  //     searchTerm === '' ||
  //     product.ProductName.toLowerCase().includes(searchTerm.toLowerCase())
  //   return matchedCategory && matchedSearchTerm
  // })

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
