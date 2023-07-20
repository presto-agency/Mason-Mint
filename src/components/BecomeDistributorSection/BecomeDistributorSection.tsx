import styles from './BecomeDistributorSection.module.scss'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import Container from '@/app/layouts/Container'
import VideoComponent from '@/ui/VideoComponent/VideoComponent'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'

const BecomeDistributorSection = () => {
  return (
    <section className={styles['BecomeDistributorSection']}>
      <Container size={'xl'}>
        <div className={styles['BecomeDistributorSection__content']}>
          <VideoComponent src="/video/CTA.mp4" />
          <h2 className="h2">
            <AnimatedText title>Become An Authorized Distributor</AnimatedText>
          </h2>
          <p
            className={styles['BecomeDistributorSection__content_description']}
          >
            <AnimatedText>
              Our authorized dealer partners have access to our entire line of
              products at industry leading wholesale prices.
            </AnimatedText>
          </p>
          <AnimatedElement className={styles['buttonContainer']} delay={0.2}>
            <ButtonPrimary
              className={styles['buttonContainer__button']}
              variant="blue"
            >
              JOIN NOW
            </ButtonPrimary>
          </AnimatedElement>
        </div>
      </Container>
    </section>
  )
}

export default BecomeDistributorSection
