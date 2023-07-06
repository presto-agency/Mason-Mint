import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import styles from './StorySection.module.scss'
import { FC } from 'react'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import ParallaxSection from '@/ui/ParallaxSection/ParallaxSection'
import Container from '@/app/layouts/Container'

export const StorySection: FC = () => {
  return (
    <section className={styles['story']}>
      <Container>
        <div className={styles['story__content']}>
          <div className={styles['story__content_left']}>
            <h3>
              Mason Mint was born from the idea of producing world-class custom
              minted sulver products
            </h3>
            <p style={{ color: 'var(--gray-800)' }}>
              Mason Mint was born from the idea of producing world-class custom
              minted silver products. Our motto &quot;Excellence In
              Minting&quot; are words that we live by.
            </p>
            <BackgroundImage
              src="/images/home/home_story_1.png"
              className={styles['photoContainer']}
              alt="Coin photo"
              parallax={true}
            />
          </div>
          <ParallaxSection className={styles['story__content_right']}>
            <BackgroundImage
              src="/images/home/home_story_2.png"
              className={styles['photoContainer']}
              quality={100}
              alt="Coin photo"
            />
            <div className={styles['text']}>
              <h4>
                Mason Mint was born from the idea of producing world-class
                custom minted sulver products
              </h4>
              <p style={{ color: 'var(--gray-800)' }}>
                Our motto &quot;Excellence In Minting&quot; are words that we
                live by. Our high standards for quality and design is what
                separates us from everyone else. We look forward to supplying
                both the investor and collector silver market with superior
                products that are sure to impress.
              </p>
            </div>
            <ButtonPrimary variant="transparent">OUR STORY</ButtonPrimary>
          </ParallaxSection>
        </div>
      </Container>
    </section>
  )
}
