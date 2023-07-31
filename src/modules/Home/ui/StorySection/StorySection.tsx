import { FC } from 'react'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import ParallaxSection from '@/ui/ParallaxSection/ParallaxSection'
import Container from '@/app/layouts/Container'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'

import styles from './StorySection.module.scss'

const StorySection: FC = () => {
  return (
    <section className={styles['story']}>
      <Container>
        <div className={styles['story__content']}>
          <div className={styles['story__content_left']}>
            <h3 className="h3">
              <AnimatedText title>
                Mason Mint was born from the idea of producing world-class
                custom minted sulver products
              </AnimatedText>
            </h3>
            <p style={{ color: 'var(--gray-800)' }}>
              <AnimatedText>
                Mason Mint was born from the idea of producing world-class
                custom minted silver products. Our motto &quot;Excellence In
                Minting&quot; are words that we live by.
              </AnimatedText>
            </p>
            <BackgroundImage
              src="/images/home/home_story_1.png"
              className={styles['photoContainer']}
              alt="Coin photo"
              description="welcome to masonmint"
              parallax
              parallaxValues={[-100, 100]}
            />
          </div>
          <ParallaxSection
            className={styles['story__content_right']}
            parallaxValues={[0, 300]}
          >
            <BackgroundImage
              src="/images/home/home_story_2.png"
              className={styles['photoContainer']}
              quality={100}
              alt="Coin photo"
              parallax
              parallaxValues={[-100, 100]}
            />
            <div className={styles['text']}>
              <h4 className="h4">
                <AnimatedText title>
                  Mason Mint was born from the idea of producing world-class
                  custom minted sulver products
                </AnimatedText>
              </h4>
              <p style={{ color: 'var(--gray-800)' }}>
                <AnimatedText>
                  Our motto &quot;Excellence In Minting&quot; are words that we
                  live by. Our high standards for quality and design is what
                  separates us from everyone else. We look forward to supplying
                  both the investor and collector silver market with superior
                  products that are sure to impress.
                </AnimatedText>
              </p>
            </div>
            <AnimatedElement className={styles['buttonContainer']} delay={0.2}>
              <ButtonPrimary
                className={styles['buttonContainer__button']}
                variant="transparent"
              >
                Our story
              </ButtonPrimary>
            </AnimatedElement>
          </ParallaxSection>
        </div>
      </Container>
    </section>
  )
}

export default StorySection
