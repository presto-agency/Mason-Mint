import { FC } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ProductProps } from '@/utils/types'
import Container from '@/app/layouts/Container'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import routes from '@/utils/routes'
import DesignsDetailDescription from '@/modules/DesignsDetail/ui/DesignsDetailDescription/DesignsDetailDescription'
import DesignsDetailThumbnail from '@/modules/DesignsDetail/ui/DesignsDetailThumbnail/DesignsDetailThumbnail'
const DesignsDetailGallery = dynamic(
  () =>
    import(
      '@/modules/DesignsDetail/ui/DesignsDetailGallery/DesignsDetailGallery'
    ),
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

type DesignsDetailProps = {
  product: ProductProps
  sameProducts: ProductProps[]
}

const DesignsDetailContent: FC<DesignsDetailProps> = ({
  product,
  sameProducts,
}) => {
  return (
    <main className={styles['detail']}>
      <Container>
        <div className="row">
          <div className="col-md-5">
            <Link href={routes.public.designs}>
              <ButtonPrimary backwardArrows variant="noStroked">
                Go to back
              </ButtonPrimary>
            </Link>
            <DesignsDetailThumbnail
              className={styles['detail__thumbnail']}
              product={product}
            />
          </div>
          <div className="col-md-5 offset-md-1">
            <DesignsDetailDescription
              className={styles['detail__description']}
              product={product}
            />
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
            titleTag="h2"
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
