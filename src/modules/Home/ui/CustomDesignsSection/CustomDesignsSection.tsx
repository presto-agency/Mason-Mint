import { BlueDot } from '@/ui/BlueDot'
import styles from './CustomDesignsSection.module.scss'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'

export const CustomDesignsSection = () => {
  const backgroundImageStyles = {
    backgroundImage: 'url(/images/home/home_custom_1.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'left center',
  }

  return (
    <section
      className={styles.CustomDesignsSection}
      style={backgroundImageStyles}
    >
      <div className={styles.blackGradient}>
        <div className={styles.content}>
          <h6>custom design</h6>
          <h2>
            Custom Minting Program
            <BlueDot />
          </h2>
          <p>
            Minted to the same standard of excellence for which The Mason Mint
            is renowned, custom orders make a lasting memory for any occasion.
          </p>
          <ButtonPrimary>LEARN MORE</ButtonPrimary>
        </div>
      </div>
    </section>
  )
}
