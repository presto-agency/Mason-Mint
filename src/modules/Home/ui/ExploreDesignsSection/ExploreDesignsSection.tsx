import styles from './ExploreDesignsSection.module.scss'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import classNames from 'classnames'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import Container from '@/app/layouts/Container'
import { SwiperSlide, Swiper, useSwiper } from 'swiper/react'
import { Navigation, Controller, EffectFade } from 'swiper/modules'
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
import ArrowSelect from '@/ui/Icons/ArrowSelect'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import type SwiperCore from 'swiper'

const slides = [
  {
    title: 'Classic design rounds',
    id: 1,
    subtitle:
      'We look forward to supplying both the investor and collector silver market with superior products that are sure to impress.',
    url: {
      front: '/images/home/front_coin.png',
      back: '/images/home/back_coin.png',
    },
  },
  {
    title: 'Classic design rounds',
    id: 2,
    subtitle:
      'We look forward to supplying both the investor and collector silver market with superior products that are sure to impress.',
    url: {
      front: '/images/home/front_coin.png',
      back: '/images/home/back_coin.png',
    },
  },
  {
    title: 'Classic design rounds',
    id: 3,
    subtitle:
      'We look forward to supplying both the investor and collector silver market with superior products that are sure to impress.',
    url: {
      front: '/images/home/front_coin.png',
      back: '/images/home/back_coin.png',
    },
  },
]

type SwiperButtonNextProps = {
  children?: ReactNode
  setRevertAnimation: Dispatch<SetStateAction<boolean>>
}

type SlideInner = {
  title: string
  subtitle: string
}

const SwiperButtonNext: FC<SwiperButtonNextProps> = ({
  children,
  setRevertAnimation,
}) => {
  const swiper = useSwiper()

  const handleClick = () => {
    setRevertAnimation(true)
    setTimeout(() => {
      swiper.slideNext()
    }, 100)
  }

  return (
    <button
      className={classNames(styles['arrowDesign'], styles['arrowDesign__next'])}
      onClick={handleClick}
    >
      {children}
      <ArrowSelect className={styles['insideArrow']} />
    </button>
  )
}

const SwiperButtonPrev: FC<SwiperButtonNextProps> = ({
  children,
  setRevertAnimation,
}) => {
  const swiper = useSwiper()

  const handleClick = () => {
    setRevertAnimation(false)
    setTimeout(() => {
      swiper.slidePrev()
    }, 100)
  }

  return (
    <button
      className={classNames(styles['arrowDesign'], styles['arrowDesign__prev'])}
      onClick={handleClick}
    >
      {children}
      <ArrowSelect className={styles['insideArrow']} />
    </button>
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
  const [controlledSwiper, setControlledSwiper] = useState<SwiperCore>()
  const [revertAnimation, setRevertAnimation] = useState(true)
  const { width } = useWindowDimensions()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const motionProps = {
    initial: revertAnimation
      ? { rotate: -75, x: 0, opacity: 0.5 }
      : { rotate: 75, x: 140, opacity: 0.5 },
    animate: { rotate: 0, x: 70, opacity: 1 },
    exit: revertAnimation
      ? { rotate: 75, x: 140, opacity: 0 }
      : { rotate: -75, x: 0, opacity: 0 },
    transition: { duration: 1 },
  }

  const motionPropsForBackCoin = {
    initial: revertAnimation
      ? { rotate: -75, x: 0, opacity: 0.5 }
      : { rotate: 75, x: 150, opacity: 0.5 },
    animate: { rotate: 0, x: 75, opacity: 1 },
    exit: revertAnimation
      ? { rotate: 75, x: 150, opacity: 0 }
      : { rotate: -75, x: 0, opacity: 0 },
    transition: { duration: 1, delay: 0.1 },
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
              <div>
                <Swiper
                  modules={[Controller]}
                  onSwiper={setControlledSwiper}
                  slidesPerView={1}
                  allowTouchMove={false}
                  direction={'vertical'}
                  className={styles['sliderText']}
                >
                  {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <SlideInner
                        title={slide.title}
                        subtitle={slide.subtitle}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : null}
          </div>
          <div className={styles['ExploreDesignsSection__content_sliderCoin']}>
            <Swiper
              modules={[Navigation, Controller, EffectFade]}
              className={styles['sliderCoin']}
              speed={1000}
              effect={'fade'}
              allowTouchMove={false}
              loop={true}
              controller={{ control: controlledSwiper }}
              slidesPerView={1}
            >
              {slides.map((slide) => (
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
