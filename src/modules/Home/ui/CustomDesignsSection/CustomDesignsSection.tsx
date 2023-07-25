import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import Container from '@/app/layouts/Container'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import classNames from 'classnames'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import AnimateScaleBg from '@/ui/AnimateScaleBG/AnimateScaleBG'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { useEffect, useState } from 'react'

import styles from './CustomDesignsSection.module.scss'

const urlPicturesSlides = [
  '/images/home/customDesign/slide.jpg',
  '/images/home/customDesign/slide_1.jpg',
  '/images/home/customDesign/slide_2.jpg',
  '/images/home/customDesign/slide_3.jpg',
  '/images/home/customDesign/slide_4.jpg',
]

export const CustomDesignsSection = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  const { width } = useWindowDimensions()

  return (
    <section className={styles['CustomDesignsSection']}>
      {isClient && width > 767 && (
        <AnimateScaleBg pictures={urlPicturesSlides} />
      )}
      <Container>
        <div className={styles['CustomDesignsSection__content']}>
          <h6
            className={classNames(
              'h6',
              styles['CustomDesignsSection__content_subtitle']
            )}
          >
            <AnimatedText title>custom design</AnimatedText>
          </h6>
          <h2
            className={classNames(
              'h2',
              styles['CustomDesignsSection__content_title']
            )}
          >
            <AnimatedText title withBlueDot>
              Custom Minting Program
            </AnimatedText>
          </h2>
          <p className={styles['CustomDesignsSection__content_description']}>
            <AnimatedText>
              Minted to the same standard of excellence for which The Mason Mint
              is renowned, custom orders make a lasting memory for any occasion.
            </AnimatedText>
          </p>
          <AnimatedElement delay={0.2}>
            <ButtonPrimary
              className={styles['CustomDesignsSection__content_button']}
            >
              LEARN MORE
            </ButtonPrimary>
          </AnimatedElement>
        </div>
      </Container>
    </section>
  )
}
