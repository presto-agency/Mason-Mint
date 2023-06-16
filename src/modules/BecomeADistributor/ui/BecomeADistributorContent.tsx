import Container from '@/app/layouts/Container'
import BecomeADistributorForm from '@/modules/BecomeADistributor/ui/BecomeADistributorForm/BecomeADistributorForm'

import styles from './BecomeADistributorContent.module.scss'
import BecomeADistributorBody from '@/modules/BecomeADistributor/ui/BecomeADistributorBody/BecomeADistributorBody'

export const BecomeADistributorContent = () => {
  return (
    <main className={styles['becomeADistributorContent']}>
      <div>Hero</div>
      <div className={styles['becomeADistributorContent__content']}>
        <Container>
          <div className="row">
            <div className="col-md-6 order-md-2">
              <BecomeADistributorForm
                className={styles['becomeADistributorContent__content_form']}
              />
            </div>
            <div className="col-md-5 order-md-1">
              <BecomeADistributorBody
                className={styles['becomeADistributorContent__content_body']}
              />
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}
