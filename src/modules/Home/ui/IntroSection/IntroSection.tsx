import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import VideoComponent from '@/ui/VideoComponent/VideoComponent'

import styles from './IntroSection.module.scss'

export const IntroSection = () => {
  return (
    <section className={styles['intro']}>
      <VideoComponent src="/video/hero_video_bg-compress.mp4" />
      <Container>
        <div className={styles['intro__content']}>
          <div className={styles['intro__content_top']}>
            <h1 className={classNames('h1', styles['title'])}>
              <AnimatedText title withBlueDot>
                Excellence in minting
              </AnimatedText>
            </h1>
            <div className={styles['description']}>
              <AnimatedElement delay={0.2} reverse>
                welcome
              </AnimatedElement>
            </div>
          </div>
          <div className={styles['intro__content_bottom']}>
            <AnimatedElement className={styles['buttonContainer']} delay={0.2}>
              <ButtonPrimary
                className={styles['buttonContainer__button']}
                variant="white"
              >
                LEARN MORE
              </ButtonPrimary>
            </AnimatedElement>
            <div className={styles['subtitle']}>
              <AnimatedElement delay={0.2}>
                Mason Mint&apos;s fantastic design for the 1 oz Noahs Ark Silver
                Round celebrates the Biblical patriarch and his work
              </AnimatedElement>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
