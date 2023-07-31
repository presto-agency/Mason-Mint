import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import { motion } from 'framer-motion'

import routes from '@/utils/routes'
import { ProductTestProps } from '@/utils/types'

import Container from '@/app/layouts/Container'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'

import DesignsDetailDescription from './DesignsDetailDescription/DesignsDetailDescription'
import DesignsDetailThumbnail from './DesignsDetailThumbnail/DesignsDetailThumbnail'

const DesignsDetailGallery = dynamic(
  () => import('./DesignsDetailGallery/DesignsDetailGallery'),
  { ssr: false }
)
const BecomeDistributorSection = dynamic(
  () =>
    import('@/components/BecomeDistributorSection/BecomeDistributorSection'),
  { ssr: false }
)
const ProductCarousel = dynamic(
  () => import('@/ui/ProductCarousel/ProductCarousel'),
  { ssr: false }
)

import styles from './DesignsDetailContent.module.scss'

const DesignsDetailContent = () => {
  const {
    query: { productId },
  } = useRouter()
  const [product, setProduct] = useState<ProductTestProps | null>(null)
  const [sameProducts, setSameProducts] = useState<ProductTestProps[]>([])

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/producttest/${productId}`)
        setProduct(res.data.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProduct()
  }, [productId])

  useEffect(() => {
    const fetchSameProducts = async () => {
      if (product) {
        try {
          const res = await axios.get(
            `/api/producttest?category=${product?.category?.id}`
          )
          setSameProducts(
            res.data.data.filter((p: ProductTestProps) => p.id !== productId)
          )
        } catch (error) {
          console.log(error)
        }
      }
    }

    fetchSameProducts()
  }, [product])

  return (
    <main className={styles['detail']}>
      <Container>
        <div className="row">
          <div className="col-md-5">
            <motion.div
              className={styles['detail__nav']}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'spring', duration: 1, bounce: 0 }}
            >
              <Link href={routes.public.designs}>
                <ButtonPrimary backwardArrows variant="noStroked">
                  Go to back
                </ButtonPrimary>
              </Link>
            </motion.div>
            <DesignsDetailThumbnail
              className={styles['detail__thumbnail']}
              product={product}
            />
          </div>
          <div className="col-md-5 offset-md-1">
            {product && (
              <DesignsDetailDescription
                className={styles['detail__description']}
                product={product}
              />
            )}
          </div>
        </div>
        <DesignsDetailGallery
          className={styles['detail__gallery']}
          product={product}
        />
        {sameProducts.length > 0 && (
          <ProductCarousel
            className={styles['detail__carousel']}
            title="Сoins from this category."
            titleWithBlueDot={false}
            subtitle="Patriot series"
            data={sameProducts}
            showResults={false}
          />
        )}
      </Container>
      <BecomeDistributorSection />
    </main>
  )
}

export default DesignsDetailContent
