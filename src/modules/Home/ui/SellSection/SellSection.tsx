import React, { useEffect, useRef, useState } from 'react'
import Container from '@/app/layouts/Container'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import classNames from 'classnames'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import { useScroll, motion, MotionValue, useTransform } from 'framer-motion'

import styles from './SellSection.module.scss'
import useWindowDimensions from '@/hooks/useWindowDimensions'
const SellSection = () => {
  const ref = useRef(null)
  const useRotateY = (value: MotionValue<number>) => {
    const rotate = useTransform(value, [1, 0], [0, 180])
    const rotateMirror = useTransform(value, [0, 1], [0, 180])
    return { rotate, rotateMirror }
  }
  const [isClient, setIsClient] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref })
  const { rotate, rotateMirror } = useRotateY(scrollYProgress)
  const { width } = useWindowDimensions()
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section ref={ref} className={styles['sellSection']}>
      <Container>
        <div className={styles['sellSection__content']}>
          {isClient && width > 767 ? (
            <div className={styles['sellSection__content_left']}>
              <div className={styles['imageWrapper']}>
                <motion.div
                  className={styles['imageContainer']}
                  style={{ rotateY: rotate, translateY: '-50%' }}
                >
                  <BackgroundImage
                    src="/images/home/front_coin_1.png"
                    className={styles['image']}
                    quality={100}
                    alt="Coin photo"
                  />
                </motion.div>
                <motion.div
                  className={styles['imageContainer']}
                  style={{ rotateY: rotateMirror, translateY: '-50%' }}
                >
                  <BackgroundImage
                    src="/images/home/back_coin_1.png"
                    className={styles['image']}
                    quality={100}
                    alt="Coin photo"
                  />
                </motion.div>
              </div>
            </div>
          ) : null}
          <ul className={styles['sellSection__content_right']}>
            <li className={styles['sectionWrapper']}>
              <div className={styles['sectionContent']}>
                <BackgroundImage
                  src="/images/home/front_coin_1.png"
                  className={styles['image']}
                  quality={100}
                  alt="Coin photo"
                />
                <h6 className={classNames('h6', styles['subtitle'])}>
                  <AnimatedText title>wholesale & distribution</AnimatedText>
                </h6>
                <h2 className={classNames('h3', styles['title'])}>
                  <AnimatedText title>Sell Our Products.</AnimatedText>
                </h2>
                <p className={styles['description']}>
                  <AnimatedText>
                    We work exclusively with precious metal dealers both
                    domestic and abroad to distribute our products. If you are
                    interested in becoming an authorized distributor please fill
                    the contact form.
                  </AnimatedText>
                </p>
                <AnimatedElement delay={0.2}>
                  <ButtonPrimary
                    variant={'noStroked'}
                    className={styles['button']}
                  >
                    Become a Distributor
                  </ButtonPrimary>
                </AnimatedElement>
              </div>
            </li>
            <li className={styles['sectionWrapper']}>
              <div className={styles['sectionContent']}>
                <BackgroundImage
                  src="/images/home/back_coin_1.png"
                  className={styles['image']}
                  quality={100}
                  alt="Coin photo"
                />
                <h6 className={classNames('h6', styles['subtitle'])}>
                  <AnimatedText title>iso 9001:2015</AnimatedText>
                </h6>
                <h2 className={classNames('h3', styles['title'])}>
                  <AnimatedText title>We Are Certified.</AnimatedText>
                </h2>
                <p className={styles['description']}>
                  <AnimatedText>
                    Mason Mint is an ISO 9001:2015 compliant facility which
                    requires us to meet rigorous international standards.
                  </AnimatedText>
                </p>
                <AnimatedElement delay={0.2}>
                  <a href="mm-iso9001-2015.pdf" target="_blank">
                    <ButtonPrimary
                      variant={'noStroked'}
                      className={styles['button']}
                    >
                      View certificate
                    </ButtonPrimary>
                  </a>
                </AnimatedElement>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default SellSection
