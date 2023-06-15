import { FC } from 'react'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'
import { BlueDot } from '@/ui/BlueDot'

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
            <p className={styles['hero__subtitle']}>{subtitle}</p>
            <h1 className={styles['hero__title']}>
              {title}
              {withBlueDot && <BlueDot />}
            </h1>
          </div>
          <div className="col-md-6">
            <p className={styles['hero__description']}>{description}</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroInner
