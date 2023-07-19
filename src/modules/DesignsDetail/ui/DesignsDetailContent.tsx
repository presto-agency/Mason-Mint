import { FC } from 'react'
import Link from 'next/link'
import { ProductProps } from '@/utils/types'
import Container from '@/app/layouts/Container'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import routes from '@/utils/routes'

import styles from './DesignsDetailContent.module.scss'

type DesignsDetailProps = {
  product: ProductProps | null
}

const DesignsDetailContent: FC<DesignsDetailProps> = ({ product }) => {
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
          </div>
          <div className="col-md-5 offset-md-1">Description</div>
        </div>
      </Container>
    </main>
  )
}

export default DesignsDetailContent
