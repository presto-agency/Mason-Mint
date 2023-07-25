import { FC } from 'react'
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
  return (
    <div className={classNames(styles['process'], className)}>
      <AbstractLogo className={styles['process__abstract']} />
      <Container>
        <h2 className={classNames(styles['process__title'], 'h2')}>
          <AnimatedText title withBlueDot>
            Our minting process
          </AnimatedText>
        </h2>
        <div className={styles['process__slide']}></div>
      </Container>
    </div>
  )
}

export default CustomMintingProcess
