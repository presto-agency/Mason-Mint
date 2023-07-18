import styles from './ExploreDesignsSection.module.scss'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import classNames from 'classnames'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import Container from '@/app/layouts/Container'
import { SwiperSlide, Swiper, useSwiper, useSwiperSlide } from 'swiper/react'
import { Navigation, Controller } from 'swiper/modules'
import 'swiper/css'
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
  children: ReactNode
  setRevertAnimation: Dispatch<SetStateAction<boolean>>
}

const SwiperButtonNext: FC<SwiperButtonNextProps> = ({
  children,
  setRevertAnimation,
}) => {
  const swiper = useSwiper()
  return (
    <button
      className={classNames(styles['arrowDesign'], styles['arrowDesign__next'])}
      onClick={() => {
        swiper.slidePrev()
        setRevertAnimation(true)
      }}
    >
      {children}
    </button>
  )
}

const SwiperButtonPrev: FC<SwiperButtonNextProps> = ({
  children,
  setRevertAnimation,
}) => {
  const swiper = useSwiper()
  return (
    <button
      className={classNames(styles['arrowDesign'], styles['arrowDesign__prev'])}
      onClick={() => {
        swiper.slideNext()
        setRevertAnimation(false)
      }}
    >
      {children}
    </button>
  )
}

export const ExploreDesignsSection = () => {
  const [controlledSwiper, setControlledSwiper] = useState<Swiper | null>(null)
  const [revertAnimation, setRevertAnimation] = useState(false)

  const motionProps = {
    initial: revertAnimation
      ? { rotate: -45, opacity: 0 }
      : { rotate: 45, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: revertAnimation
      ? { rotate: 45, opacity: 0 }
      : { rotate: -45, opacity: 0 },
    transition: { duration: 1 },
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
            <div>
              <Swiper
                modules={[Controller]}
                onSwiper={setControlledSwiper}
                slidesPerView={1}
                allowTouchMove={false}
                direction={'vertical'}
                className={styles['textSwiper']}
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <h4
                      className={classNames('h4', styles['textSwiper__title'])}
                    >
                      {slide.title}
                    </h4>
                    <p className={styles['textSwiper__description']}>
                      {slide.subtitle}
                    </p>
                    <ButtonPrimary variant="noStroked">
                      VIEW CATALOG
                    </ButtonPrimary>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className={styles['ExploreDesignsSection__content_swiper']}>
            <Swiper
              modules={[Navigation, Controller]}
              className={styles['slider']}
              speed={1000}
              loop={true}
              controller={{ control: controlledSwiper }}
              slidesPerView={1}
            >
              {slides.map((slide) => (
                <SwiperSlide className={styles['slider__slide']} key={slide.id}>
                  {({ isActive }) => (
                    <AnimatePresence>
                      {isActive && (
                        <>
                          <motion.div
                            className={styles['slider__slide_containerBack']}
                            {...motionProps}
                          >
                            <BackgroundImage
                              className={styles['coinBack']}
                              src={slide.url.back}
                              alt="coin back"
                            />
                          </motion.div>
                          <motion.div
                            className={styles['slider__slide_containerFront']}
                            {...motionProps}
                          >
                            <BackgroundImage
                              className={styles['coinFront']}
                              src={slide.url.front}
                              alt="coin front"
                            />
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  )}
                </SwiperSlide>
              ))}
              <SwiperButtonNext setRevertAnimation={setRevertAnimation}>
                next
              </SwiperButtonNext>
              <SwiperButtonPrev setRevertAnimation={setRevertAnimation}>
                prev
              </SwiperButtonPrev>
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  )
}
