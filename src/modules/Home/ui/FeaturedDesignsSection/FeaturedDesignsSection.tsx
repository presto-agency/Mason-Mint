import { FC, useEffect, useState } from 'react'
import classNames from 'classnames'
import axios from 'axios'
import Link from 'next/link'
import ProductCarousel from '@/ui/ProductCarousel/ProductCarousel'
import Container from '@/app/layouts/Container'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import { ProductTestProps } from '@/utils/types'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import routes from '@/utils/routes'

import styles from './FeaturedDesignsSection.module.scss'

const FeaturedDesignsSection: FC<{ className?: string }> = ({ className }) => {
  const [products, setProducts] = useState<ProductTestProps[]>([])

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `/api/producttest?category=64b7f098ffe22650abb78018`
        )
        setProducts(res.data.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProduct()
  }, [])

  return (
    <section className={classNames(styles['featureDesigns'], className)}>
      <Container>
        <div className="row">
          <div className="col-md-6">
            <p className={styles['featureDesigns__subtitle']}>
              <AnimatedText>Our designs</AnimatedText>
            </p>
            <p className={classNames(styles['featureDesigns__title'], 'h2')}>
              <AnimatedText title withBlueDot>
                Featured Designs
              </AnimatedText>
            </p>
          </div>
          <div className="col-md-6">
            <div className={styles['featureDesigns__actions']}>
              <AnimatedElement delay={0}>
                <Link href={routes.public.designs}>
                  <ButtonPrimary variant="transparent">View all</ButtonPrimary>
                </Link>
              </AnimatedElement>
            </div>
          </div>
        </div>
        {products.length > 0 ? (
          <ProductCarousel data={products} showResults={false} />
        ) : null}
      </Container>
    </section>
  )
}

export default FeaturedDesignsSection
