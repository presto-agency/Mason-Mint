import styles from './ExploreDesignsSection.module.scss'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import classNames from 'classnames'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import Container from '@/app/layouts/Container'
import { SwiperSlide, Swiper, useSwiper } from 'swiper/react'
import { Controller, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { AnimatePresence, motion } from 'framer-motion'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import type SwiperCore from 'swiper'
import { slidesExploreDesigns } from '@/modules/Home/ui/ExploreDesignsSection/ExploreDesignsSectionContent'
import SliderArrow from '@/ui/SliderArrow/SliderArrow'

type SwiperButtonProps = {
  children?: ReactNode
  setRevertAnimation: Dispatch<SetStateAction<boolean>>
}

type SlideInner = {
  title: string
  subtitle: string
}

const SwiperButtonNext: FC<SwiperButtonProps> = ({ setRevertAnimation }) => {
  const swiper = useSwiper()

  const handleClick = () => {
    setRevertAnimation(true)
    setTimeout(() => {
      swiper.slideNext()
    }, 100)
  }

  return (
    <div
      className={classNames(styles['arrowDesign'], styles['arrowDesign__next'])}
      onClick={handleClick}
    >
      <SliderArrow type="prev" />
    </div>
  )
}

const SwiperButtonPrev: FC<SwiperButtonProps> = ({ setRevertAnimation }) => {
  const swiper = useSwiper()

  const handleClick = () => {
    setRevertAnimation(false)
    setTimeout(() => {
      swiper.slidePrev()
    }, 100)
  }

  return (
    <div
      className={classNames(styles['arrowDesign'], styles['arrowDesign__prev'])}
      onClick={handleClick}
    >
      <SliderArrow />
    </div>
  )
}

const SlideInner: FC<SlideInner> = ({ title, subtitle }) => {
  return (
    <>
      <h4 className={classNames('h4', styles['textSwiper__title'])}>{title}</h4>
      <p className={styles['textSwiper__description']}>{subtitle}</p>
      <ButtonPrimary variant="noStroked">VIEW CATALOG</ButtonPrimary>
    </>
  )
}

export const ExploreDesignsSection = () => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperCore | null>(
    null
  )
  const [revertAnimation, setRevertAnimation] = useState(true)
  const { width } = useWindowDimensions()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const motionPropsText = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.2, delay: 0.4, ease: [0.55, 0.61, 0, 1.04] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2, ease: [0.55, 0.61, 0, 1.04] },
      delay: 0.1,
    },
    transition: { duration: 0.1, ease: [0.55, 0.61, 0, 1.04] },
  }

  const motionProps = {
    initial: revertAnimation
      ? { rotate: 75, x: 200, opacity: 0 }
      : { rotate: -75, x: -200, opacity: 0 },
    animate: { rotate: 0, x: 0, opacity: 1 },
    exit: revertAnimation
      ? { rotate: -75, x: -200, opacity: 0 }
      : { rotate: 75, x: 200, opacity: 0 },
    transition: { duration: 1, delay: 0.1 },
  }

  const motionPropsForBackCoin = {
    ...motionProps,
    transition: { ...motionProps.transition, delay: 0 },
  }

  return (
    <section className={styles['ExploreDesignsSection']}>
      <Container>
        <div className={styles['ExploreDesignsSection__content']}>
          <div className={styles['ExploreDesignsSection__content_description']}>
            <h2 className={classNames('h2', styles['title'])}>
              <AnimatedText title withBlueDot>
                Explore Our Designs
              </AnimatedText>
            </h2>
            {isClient && width > 767 ? (
              <>
                <Swiper
                  style={{ overflow: 'visible' }}
                  className={styles['sliderText']}
                  modules={[Controller]}
                  onSwiper={setControlledSwiper}
                  loop={true}
                  slidesPerView={1}
                  allowTouchMove={false}
                  direction={'vertical'}
                >
                  {slidesExploreDesigns.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      {({ isActive }) => (
                        <AnimatePresence>
                          {isActive && (
                            <motion.div {...motionPropsText}>
                              <SlideInner
                                title={slide.title}
                                subtitle={slide.subtitle}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            ) : null}
          </div>
          <div className={styles['ExploreDesignsSection__content_sliderCoin']}>
            <Swiper
              style={{ overflow: 'visible' }}
              className={styles['sliderCoin']}
              modules={[Controller, EffectFade]}
              speed={1000}
              effect={'fade'}
              allowTouchMove={false}
              loop={true}
              controller={{ control: controlledSwiper }}
              slidesPerView={1}
            >
              {slidesExploreDesigns.map((slide) => (
                <SwiperSlide
                  className={styles['sliderCoin__slide']}
                  key={slide.id}
                >
                  {({ isActive }) => (
                    <AnimatePresence>
                      {isActive && (
                        <>
                          <div className={styles['coinsContainer']}>
                            <motion.div
                              className={
                                styles['sliderCoin__slide_containerBack']
                              }
                              {...motionPropsForBackCoin}
                            >
                              <BackgroundImage
                                className={styles['coinBack']}
                                src={slide.url.back}
                                alt="coin back"
                                quality={100}
                              />
                            </motion.div>
                            <motion.div
                              className={
                                styles['sliderCoin__slide_containerFront']
                              }
                              {...motionProps}
                            >
                              <BackgroundImage
                                className={styles['coinFront']}
                                src={slide.url.front}
                                alt="coin front"
                                quality={100}
                              />
                            </motion.div>
                          </div>
                          {isClient && width <= 767 ? (
                            <SlideInner
                              title={slide.title}
                              subtitle={slide.subtitle}
                            />
                          ) : null}
                        </>
                      )}
                    </AnimatePresence>
                  )}
                </SwiperSlide>
              ))}
              <SwiperButtonPrev setRevertAnimation={setRevertAnimation} />
              <SwiperButtonNext setRevertAnimation={setRevertAnimation} />
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  )
}
