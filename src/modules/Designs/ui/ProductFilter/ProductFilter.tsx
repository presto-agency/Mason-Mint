import { ChangeEvent, FC, useEffect, useState } from 'react'
import classNames from 'classnames'
import CheckIcon from '@/ui/Icons/Check'
import { CategoryProps } from '@/utils/types'

import styles from './ProductFilter.module.scss'

type ProductFilterProps = {
  className?: string
  categories: CategoryProps[]
  onChange: (categories: CategoryProps[]) => void
}

const ProductFilter: FC<ProductFilterProps> = ({
  className,
  categories,
  onChange,
}) => {
  const [selectedCategories, setSelectedCategories] =
    useState<CategoryProps[]>(categories)

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement>,
    category: CategoryProps
  ) => {
    if (e.target.checked) {
      await setSelectedCategories((prevState) => {
        return [...prevState, category]
      })
    } else {
      await setSelectedCategories(
        selectedCategories.filter((c) => c.id !== category.id)
      )
    }
  }

  useEffect(() => {
    categories !== selectedCategories && onChange(selectedCategories)
  }, [selectedCategories, onChange, categories])

  return (
    <div className={classNames(styles['filter'], className)}>
      {categories.map((category, index) => {
        return (
          <label className={styles['filter__option']} key={index}>
            <div className={styles['filter__checkbox']}>
              <input
                type="checkbox"
                className={styles['filter__checkbox_input']}
                checked={selectedCategories.includes(category)}
                onChange={(e) => handleChange(e, category)}
              />
              <div className={styles['filter__checkbox_icon']}>
                <CheckIcon className={styles['filter__checkbox_svg']} />
              </div>
            </div>
            <p className={styles['filter__option_title']}>
              {category.name}{' '}
              {category?.products ? (
                <span className={styles['filter__option_label']}>
                  ( {category.products.length} )
                </span>
              ) : null}
            </p>
          </label>
        )
      })}
    </div>
  )
}

export default ProductFilter
