import classNames from 'classnames'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Container from '@/app/layouts/Container'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
const VideoComponent = dynamic(
  () => import('@/ui/VideoComponent/VideoComponent'),
  { ssr: false }
)

import styles from './IntroSection.module.scss'
import routes from '@/utils/routes'
import ParallaxSection from '@/ui/ParallaxSection/ParallaxSection'

const IntroSection = () => {
  return (
    <section className={styles['intro']}>
      <ParallaxSection
        parallaxValues={[-300, 300]}
        className={styles['intro__video']}
      >
        <VideoComponent src="/video/hero_video_bg-compress.mp4" />
      </ParallaxSection>
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
              <Link
                href={`${routes.public.designs}/64b7f086ffe22650abb77f96/noah-s-ark-1-oz-silver-round-999-pure`}
              >
                <ButtonPrimary
                  className={styles['buttonContainer__button']}
                  variant="white"
                >
                  Learn more
                </ButtonPrimary>
              </Link>
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

export default IntroSection
