import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import dynamic from 'next/dynamic'
import { AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'
import { useQuery } from 'react-query'
import classNames from 'classnames'

import HeroInner from '@/ui/HeroInner/HeroInner'
import ProductSearch from './ProductSearch/ProductSearch'
import ProductFilters from './ProductFilters/ProductFilters'
import ProductList from './ProductList/ProductList'
import { ScrollTopButton } from './ScrollTopButton/ScrollTopButton'
import ListTitle from './ListTitle/ListTitle'

import { ProductsFilter, getProducts } from '../api/products'
import { CategoryProps, ProductProps } from '@/utils/types'
import { useLenis } from '@studio-freight/react-lenis'
import { ProducsSectionContext } from '../lib/ProductListContext'
import _ from 'lodash'
import { useWindowSize } from 'usehooks-ts'
import BackgroundOverlay from './BackgroundOverlay/BackgroundOverlay'
import { breakpointMob } from '@/utils/variables'

import styles from './DesignsContent.module.scss'

const BecomeDistributorSection = dynamic(
  () =>
    import('@/components/BecomeDistributorSection/BecomeDistributorSection'),
  { ssr: false }
)

type DesignsContentProps = {
  categories: CategoryProps[]
  products: ProductProps[]
}

type NewCategoryProps = {
  name?: string
  id?: string
  category?: CategoryProps
  products?: { id: string; name: string }[]
}

const DesignsContent: FC<DesignsContentProps> = ({ categories, products }) => {
  const { width } = useWindowSize()
  const [filters, setFilters] = useState<ProductsFilter>({
    search: '',
  })
  const [showMobileFilter, setShowMobileFilter] = useState(false)
  const [updatedCategories, setUpdatedCategories] = useState<
    NewCategoryProps[]
  >([])
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false)

  const [direction, setDirection] = useState<'up' | 'down'>('down')
  const mods = {
    [styles['headerShown']]: direction === 'up',
  }

  const [categoryIntersecting, setCategoryIntersecting] = useState<string>(
    categories[0].id!
  )
  const throttledSetCategoryIntersecting = useCallback(
    _.debounce((nextValue) => {
      return setCategoryIntersecting(nextValue)
    }, 50),
    []
  )

  const currentCategory = useMemo(() => {
    if (categoryIntersecting) {
      const selectedCategoryIndex =
        categories.findIndex((item) => item.id === categoryIntersecting) || 0

      return selectedCategoryIndex
    } else {
      return 0
    }
  }, [categoryIntersecting, categories])

  const { data, isFetching } = useQuery<ProductProps[]>(
    ['getProducts', filters],
    () => getProducts(filters),
    {
      initialData: [...products],
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  )

  useEffect(() => {
    if (data) {
      const uniqueCategoriesWithProducts = data.reduce(
        (accumulator: Record<string, NewCategoryProps>, currentObj) => {
          const categoryName = currentObj.category?.name
          if (categoryName) {
            if (!accumulator[categoryName]) {
              accumulator[categoryName] = {
                id: currentObj.category?.id,
                name: currentObj.category?.name,
                category: currentObj.category,
                products: [{ id: currentObj.id, name: currentObj.ProductName }],
              }
            } else {
              accumulator[categoryName].products?.push({
                id: currentObj.id,
                name: currentObj.ProductName,
              })
            }
          }

          return accumulator
        },
        {}
      )

      const sortedUpdatedCategories = Object.values(
        uniqueCategoriesWithProducts
      ).sort((a, b) => (a.name || '').localeCompare(b.name || ''))

      setUpdatedCategories([...sortedUpdatedCategories])
    }
  }, [data])

  const pageRef = useRef<HTMLElement | null>(null)
  const productSectionRef = useRef<HTMLElement | null>(null)
  const lenis = useLenis()

  const scroll = useScroll({ target: pageRef })
  useMotionValueEvent(scroll.scrollY, 'change', (l) => {
    if (l > 1100) {
      setShowScrollToTopButton(true)
    }
    if (l <= 1100) {
      setShowScrollToTopButton(false)
    }

    if (l > scroll.scrollY.getPrevious()) {
      setDirection('down')
    } else {
      setDirection('up')
    }
  })

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    if (width > breakpointMob) {
      setShowMobileFilter(false)
    }
  }, [width])

  useEffect(() => {
    if (filters.search) {
      throttledSetCategoryIntersecting(undefined)
    } else {
      throttledSetCategoryIntersecting(categories[0].id)
    }
  }, [filters.search])

  const scrollTop = useCallback(() => {
    return new Promise<void>((resolve) => {
      if (lenis) {
        lenis.stop()

        const targetOffsetTop = productSectionRef.current?.offsetTop || 0
        window.scrollTo({
          top: targetOffsetTop,
          behavior: 'smooth',
        })

        const checkScrollEnd = () => {
          const nearEnd = Math.abs(window.scrollY - targetOffsetTop) < 5
          if (nearEnd) {
            resolve()
            lenis.start()
          } else {
            requestAnimationFrame(checkScrollEnd)
          }
        }

        requestAnimationFrame(checkScrollEnd)
      } else {
        resolve()
      }
    })
  }, [lenis])

  const toggleMobileFilters = useCallback(() => {
    if (width >= breakpointMob) {
      return false
    }
    setShowMobileFilter((prev) => !prev)
  }, [width])

  const contextValues = useMemo(() => {
    return {
      filters: filters,
      setFilters: setFilters,
      activeSection: categoryIntersecting,
      setActiveSection: throttledSetCategoryIntersecting,
      scrollTop,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    filters,
    setFilters,
    categoryIntersecting,
    throttledSetCategoryIntersecting,
  ])

  return (
    <main className={styles['DesignsContent']} ref={pageRef}>
      <HeroInner
        title="Dreams in silver, brought alive"
        subtitle="browse by categories"
        description="We are thrilled to provide both investors and collectors with the best designs in the silver bullion industry."
        theme="gray"
        withBlueDot
        columns={10}
      />
      <ProducsSectionContext.Provider value={contextValues}>
        <section className={styles['productsSection']} ref={productSectionRef}>
          <div className={classNames(styles['left'], mods)}>
            <ProductSearch className={classNames(styles['search'], mods)} />
            <ProductFilters
              className={styles['filters']}
              categories={updatedCategories}
              productsCount={products.length}
            />
          </div>
          <div className={styles['right']}>
            <div
              className={classNames(styles['stickyHeader'], mods)}
              onClick={toggleMobileFilters}
            >
              <div className={styles['stickyHeader__inner']}>
                <ListTitle
                  className={styles['title']}
                  products={data}
                  fetching={isFetching}
                  categories={updatedCategories}
                  currentCategoryIndex={currentCategory}
                  menuOpened={showMobileFilter}
                />
                {showMobileFilter && (
                  <ProductFilters
                    className={styles['filtersMobile']}
                    categories={updatedCategories}
                    productsCount={products.length}
                  />
                )}
              </div>
            </div>
            <ProductList
              className={styles['products']}
              products={data || []}
              loading={isFetching}
            />
            <BackgroundOverlay
              className={styles['overlay']}
              showMobileFilter={showMobileFilter}
            />
          </div>
        </section>
        <AnimatePresence mode="wait">
          {width < breakpointMob && showScrollToTopButton && (
            <ScrollTopButton />
          )}
        </AnimatePresence>
      </ProducsSectionContext.Provider>
      <BecomeDistributorSection />
    </main>
  )
}

export default DesignsContent
