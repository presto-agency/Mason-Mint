import { ButtonPrimary } from '@/ui/Button'
import styles from './BecomeDistributorSection.module.scss'

export const BecomeDistributorSection = () => {
  return (
    <section className={styles.BecomeDistributorSection}>
      <h2>Become An Authorized Distributor</h2>
      <p>
        Our authorized dealer partners have access to our entire line of
        products at industry leading wholesale prices.
      </p>
      <ButtonPrimary variant="blue">JOIN NOW</ButtonPrimary>
    </section>
  )
}
