import { FC, Fragment, useRef } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import Container from '@/app/layouts/Container'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import routes from '@/utils/routes'

import styles from './CustomDesignsSection.module.scss'

const images = [
  '/images/home/customDesign/slide_1.jpg',
  '/images/home/customDesign/slide_2.jpg',
  '/images/home/customDesign/slide_3.jpg',
  '/images/home/customDesign/slide_4.jpg',
  '/images/home/customDesign/slide_5.jpg',
]

const CustomDesignsSection: FC<{ className?: string }> = ({ className }) => {
  const options = {
    type: 'fade',
    autoWidth: false,
    perMove: 1,
    perPage: 1,
    pagination: false,
    arrows: false,
    updateOnMove: true,
    speed: 2000,
    easing: 'ease',
    autoplay: true,
    interval: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    rewind: true,
  }
  const { width } = useWindowDimensions()
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section
      ref={targetRef}
      className={classNames(styles['CustomDesignsSection'], className)}
    >
      {width > 767 ? (
        <motion.div
          className={styles['CustomDesignsSection__overlay']}
          style={{ y, opacity }}
        >
          <Splide
            className={classNames(
              styles['CustomDesignsSection__carousel'],
              'scale-carousel'
            )}
            options={options}
            hasTrack={false}
          >
            <SplideTrack
              className={styles['CustomDesignsSection__carousel_track']}
            >
              {images.length > 0
                ? images.map((image, index) => (
                    <Fragment key={index}>
                      <SplideSlide
                        className={
                          styles['CustomDesignsSection__carousel_slide']
                        }
                      >
                        <Image
                          src={image}
                          alt="Custom Minting Program"
                          fill={true}
                          className={
                            styles['CustomDesignsSection__carousel_image']
                          }
                        />
                      </SplideSlide>
                    </Fragment>
                  ))
                : null}
            </SplideTrack>
          </Splide>
        </motion.div>
      ) : (
        <div className={styles['CustomDesignsSection__mob']}>
          <BackgroundImage
            className={styles['CustomDesignsSection__mob_image']}
            src="/images/home/customDesign/slide_mob_1.jpg"
            alt="Custom Minting Program"
          />
        </div>
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
            <Link href={routes.public.customMinting}>
              <ButtonPrimary
                className={styles['CustomDesignsSection__content_button']}
              >
                Learn more
              </ButtonPrimary>
            </Link>
          </AnimatedElement>
        </div>
      </Container>
    </section>
  )
}

export default CustomDesignsSection
