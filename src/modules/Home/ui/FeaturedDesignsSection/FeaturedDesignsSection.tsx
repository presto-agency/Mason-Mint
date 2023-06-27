import { BlueDot } from '@/ui/BlueDot'
import styles from './FeaturedDesignsSection.module.scss'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'

export const FeaturedDesignsSection = () => {
  return (
    <section className={styles.FeaturedDesignsSection}>
      <h6>our designs</h6>
      <div className={styles.title}>
        <h2>
          Featured Designs
          <BlueDot />
        </h2>
        <ButtonPrimary variant="transparent">VIEW ALL</ButtonPrimary>
      </div>
      <div className={styles.slider}></div>
    </section>
  )
}
