import { FC } from 'react'
import dynamic from 'next/dynamic'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'
import { BlueDot } from '@/ui/BlueDot'
const AnimatedText = dynamic(() => import('@/ui/AnimatedText/AnimatedText'))

import styles from './HeroInner.module.scss'

type HeroInnerProps = {
  className?: string
  title?: string
  subtitle?: string
  description?: string
  theme?: 'white' | 'gray'
  withBlueDot?: boolean
}

const HeroInner: FC<HeroInnerProps> = ({
  className,
  title,
  subtitle,
  description,
  theme = 'white',
  withBlueDot = true,
}) => {
  return (
    <div className={classNames(styles['hero'], styles[theme], className)}>
      <Container>
        <div className="row">
          <div className="col-md-10">
            <p className={styles['hero__subtitle']}>
              <AnimatedText>{`${subtitle}`}</AnimatedText>
            </p>
            <h1 className={styles['hero__title']}>
              <AnimatedText
                withBlueDot={withBlueDot}
                title
              >{`${title}`}</AnimatedText>
            </h1>
          </div>
          <div className="col-md-6">
            <p className={styles['hero__description']}>
              <AnimatedText>{`${description}`}</AnimatedText>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroInner
