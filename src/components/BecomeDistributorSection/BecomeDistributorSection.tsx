import styles from './BecomeDistributorSection.module.scss'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import Container from '@/app/layouts/Container'
import VideoComponent from '@/ui/VideoComponent/VideoComponent'

export const BecomeDistributorSection = () => {
  return (
    <section className={styles['BecomeDistributorSection']}>
      <VideoComponent src="/video/CTA.mp4" />
      <Container>
        <div className={styles['BecomeDistributorSection__content']}>
          <h2 className="h2">Become An Authorized Distributor</h2>
          <p
            className={styles['BecomeDistributorSection__content_description']}
          >
            Our authorized dealer partners have access to our entire line of
            products at industry leading wholesale prices.
          </p>
          <ButtonPrimary
            className={styles['BecomeDistributorSection__content_button']}
            variant="blue"
          >
            JOIN NOW
          </ButtonPrimary>
        </div>
      </Container>
    </section>
  )
}
