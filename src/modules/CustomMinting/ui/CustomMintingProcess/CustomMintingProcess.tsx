import { FC, useRef, useEffect } from 'react'
import classNames from 'classnames'
import dynamic from 'next/dynamic'
import Container from '@/app/layouts/Container'
import { data } from './data'
const AnimatedText = dynamic(() => import('@/ui/AnimatedText/AnimatedText'))
const AbstractLogo = dynamic(() => import('@/ui/AbstractLogo/AbstractLogo'), {
  ssr: false,
})

import styles from './CustomMintingProcess.module.scss'

const CustomMintingProcess: FC<{ className?: string }> = ({ className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = () => {
    const slides = document.querySelectorAll('[data-target="slide"]')
    const wHeight = window.innerHeight
    for (let i = 0; i < slides.length; i++) {
      const y = slides[i].getBoundingClientRect().y
      if (y <= 0) {
        const absY = Math.abs(y as number)
        if (absY < wHeight) {
          const value = Math.min(wHeight, absY)
          const progress = Math.floor((value / wHeight) * 105)

          const currentSmallSlide = document.querySelector(
            `[data-trigger="slide-small"]:nth-child(${i + 2})`
          ) as HTMLElement | null
          const currentBigSlide = document.querySelector(
            `[data-trigger="slide-big"]:nth-child(${i + 2})`
          ) as HTMLElement | null

          if (currentSmallSlide) {
            currentSmallSlide.style.height = `${progress}%`
          }
          if (currentBigSlide) {
            currentBigSlide.style.height = `${progress}%`
          }
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div ref={targetRef} className={classNames(styles['process'], className)}>
      <div className={styles['process__mask']}>
        <AbstractLogo className={styles['process__abstract']} />
      </div>
      <div className={styles['process__body']}>
        <Container>
          <h2 className={classNames(styles['process__title'], 'h2')}>
            <AnimatedText title withBlueDot>
              Our minting process
            </AnimatedText>
          </h2>
          <div className="row">
            <div className="col-md-7">
              <div className={styles['process__overlay']}>
                <div className={styles['process__photos']}>
                  <div
                    className={classNames(
                      styles['process__photos_item'],
                      styles['__1']
                    )}
                  >
                    {data.map((item, index) => (
                      <div
                        key={index}
                        className={styles['process__photos_mask']}
                        data-trigger="slide-small"
                      >
                        <div className={styles['process__photos_mask_item']}>
                          <img src={item.thumbs[0]} alt={item.title} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className={classNames(
                      styles['process__photos_item'],
                      styles['__2']
                    )}
                  >
                    {data.map((item, index) => (
                      <div
                        key={index}
                        className={styles['process__photos_mask']}
                        data-trigger="slide-big"
                      >
                        <div className={styles['process__photos_mask_item']}>
                          <img src={item.thumbs[1]} alt={item.title} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 offset-md-1">
              <div className={styles['process__overlay']}>
                <div
                  className={classNames(styles['process__navigation'], 'h4')}
                >
                  <span className={styles['process__navigation_current']}>
                    01
                  </span>
                  /<span>04</span>
                </div>
                <div className={styles['process__description']}>
                  <p
                    className={classNames(
                      styles['process__description_title'],
                      'h4'
                    )}
                  >
                    Rough Sketch
                  </p>
                  <p
                    className={classNames(styles['process__description_item'])}
                  >
                    First we work with the client to create a concept. From this
                    process an intial sketch of the design is created.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles['process__slides']}>
        {data.map(({}, index) => (
          <div
            key={index}
            data-target="slide"
            className={styles['process__slides_item']}
          />
        ))}
      </div>
    </div>
  )
}

export default CustomMintingProcess
