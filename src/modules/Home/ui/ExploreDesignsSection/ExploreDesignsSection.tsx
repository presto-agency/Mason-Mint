import styles from './ExploreDesignsSection.module.scss'
import { BlueDot } from '@/ui/BlueDot'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'

export const ExploreDesignsSection = () => {
  return (
    <section className={styles.ExploreDesignsSection}>
      <div className={styles.left}>
        <h2>
          Explore Our Designs
          <BlueDot />
        </h2>
        <div className={styles.text}>
          <h4>Classic design rounds</h4>
          <p>
            We look forward to supplying both the investor and collector silver
            market with superior products that are sure to impress.
          </p>
        </div>
        <ButtonPrimary variant="noStroked">VIEW CATALOG</ButtonPrimary>
      </div>
    </section>
  )
}
