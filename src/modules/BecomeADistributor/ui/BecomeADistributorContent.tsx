import Container from '@/app/layouts/Container'
import BecomeADistributorForm from '@/modules/BecomeADistributor/ui/BecomeADistributorForm/BecomeADistributorForm'

import styles from './BecomeADistributorContent.module.scss'

export const BecomeADistributorContent = () => {
  return (
    <main className={styles['becomeADistributorContent']}>
      <div>Hero</div>
      <Container>
        <div className="row">
          <div className="col-md-6 order-md-2">
            <BecomeADistributorForm />
          </div>
          <div className="col-md-5 order-md-1">Description + image</div>
        </div>
      </Container>
    </main>
  )
}
